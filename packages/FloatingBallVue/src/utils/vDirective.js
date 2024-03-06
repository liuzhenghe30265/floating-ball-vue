import Vue from 'vue'

// 创建一个全局的点击事件处理函数
const handleClickOutside = (event, el, binding) => {
    // 检查点击的元素是否在绑定的元素内部
    if (!(el === event.target || el.contains(event.target))) {
        // 如果点击的元素不在绑定的元素内部，则触发绑定的回调函数
        binding.value()
    }
}
Vue.directive('clickOutside', {
    // 指令的绑定函数，在元素插入到 DOM 中时调用
    bind: function (el, binding) {
        // 创建一个点击事件处理函数，并将它保存在元素的属性中
        const handleClick = (event) => handleClickOutside(event, el, binding)
        el.__vueClickOutside__ = handleClick

        // 在 document 上监听点击事件
        document.addEventListener('click', handleClick)
    },
    // 指令的解绑函数，在元素从 DOM 中移除时调用
    unbind(el) {
        // 移除之前保存在元素属性中的点击事件处理函数
        document.removeEventListener('click', el.__vueClickOutside__)
        delete el.__vueClickOutside__
    }
})

Vue.directive('drag', {
    bind: function (el, binding) {
        const odiv = el // 获取当前元素
        odiv.onmousedown = e => {
            // 算出鼠标相对元素的位置
            const disX = e.clientX - odiv.offsetLeft
            const disY = e.clientY - odiv.offsetTop

            document.onmousemove = e => {
                // * 防止拖动结束触发点击事件
                // vnode.context.$emit('dragging', true)
                el.classList.add('dragging')
                // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                const left = e.clientX - disX
                const top = e.clientY - disY

                // 绑定元素位置到positionX和positionY上面
                e.positionX = top
                e.positionY = left

                // 移动当前元素
                odiv.style.left = left + 'px'
                odiv.style.top = top + 'px'
                odiv.style.right = 'auto'
                odiv.style.bottom = 'auto'
                e.stopPropagation()
            }
            document.onmouseup = (e) => {
                setTimeout(() => {
                    el.classList.remove('dragging')
                }, 0)
                // vnode.context.$emit('dragging', false)
                if (binding.value && binding.value.viewer) {
                    // * 限制在窗口内
                    const left = e.clientX - disX
                    const top = e.clientY - disY
                    if (top < 0) {
                        odiv.style.top = odiv.offsetHeight / 2 + 'px'
                    }
                    if (left > window.innerWidth - odiv.offsetWidth / 2) {
                        odiv.style.left = window.innerWidth - odiv.offsetWidth / 2 + 'px'
                    }
                    if (top > window.innerHeight) {
                        odiv.style.top = window.innerHeight - odiv.offsetHeight / 2 + 'px'
                    }
                    if (left < odiv.offsetHeight / 2) {
                        odiv.style.left = odiv.offsetHeight / 2 + 'px'
                    }
                }
                document.onmousemove = null
                document.onmouseup = null
            }
        }
        odiv.ontouchstart = e => {
            const disX = e.touches[0].clientX - odiv.offsetLeft
            const disY = e.touches[0].clientY - odiv.offsetTop
            document.ontouchmove = e => {
                el.classList.add('dragging')
                // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                const left = e.touches[0].clientX - disX
                const top = e.touches[0].clientY - disY

                // 绑定元素位置到positionX和positionY上面
                e.touches[0].positionX = top
                e.touches[0].positionY = left

                // 移动当前元素
                odiv.style.left = left + 'px'
                odiv.style.top = top + 'px'
                odiv.style.right = 'auto'
                odiv.style.bottom = 'auto'
                if (binding.value && binding.value.viewer) {
                    // * 限制在窗口内
                    const left = e.touches[0].clientX - disX
                    const top = e.touches[0].clientY - disY
                    if (top < 0) {
                        odiv.style.top = odiv.offsetHeight / 2 + 'px'
                    }
                    if (left > window.innerWidth - odiv.offsetWidth / 2) {
                        odiv.style.left = window.innerWidth - odiv.offsetWidth / 2 + 'px'
                    }
                    if (top > window.innerHeight) {
                        odiv.style.top = window.innerHeight - odiv.offsetHeight / 2 + 'px'
                    }
                    if (left < odiv.offsetHeight / 2) {
                        odiv.style.left = odiv.offsetHeight / 2 + 'px'
                    }
                }
                e.stopPropagation()
            }
            document.ontouchend = () => {
                setTimeout(() => {
                    el.classList.remove('dragging')
                }, 0)
                document.ontouchend = null
                document.ontouchmove = null
            }
        }
    }
})