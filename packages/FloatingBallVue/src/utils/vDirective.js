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
