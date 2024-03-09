# 悬浮工具球（仿 iphone 辅助触控） 

- 兼容移动端 touch 事件
- 点击元素以外位置收起
- 解决鼠标抬起触发元素的点击事件问题

![](https://p.ipic.vip/48hdp4.gif)

[Demo](https://liuzhenghe30265.github.io/floating-ball-vue/)

[Github](https://github.com/liuzhenghe30265/floating-ball-vue.git)

```vue
<template>
  <div
    ref="FloatingBal"
    class="floating_ball"
    :class="[dragging, isClick]"
    :style="dragStatus ? computedStyle : ''"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="onButtonDown"
    @touchstart="onButtonDown"
    @focus="handleMouseEnter"
    @blur="handleMouseLeave"
  >
    <div
      class="floating_ball_inner"
      :class="[{ large }]"
      @click="handleBallClick"
      v-click-outside="handleClickOutside"
    >
      <div
        class="fbi_ring"
        v-show="!large"
      >
      </div>
      <div
        class="fbi_nav"
        v-show="large"
      >
        <div
          v-for="(item, index) of 9"
          class="fn_item"
          :key="index"
        >
          {{ index + 1 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 创建一个全局的点击事件处理函数
const handleClickOutside = (event, el, binding) => {
  // 检查点击的元素是否在绑定的元素内部
  if (!(el === event.target || el.contains(event.target))) {
    // 如果点击的元素不在绑定的元素内部，则触发绑定的回调函数
    binding.value()
  }
}
export default {
  name: 'FloatingBallVue',

  directives: {
    clickOutside: {
      bind: function (el, binding) {
        // 创建一个点击事件处理函数，并将它保存在元素的属性中
        const handleClick = event => handleClickOutside(event, el, binding)
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
    }
  },

  components: {},

  props: {
    name: {
      type: String,
      default: ''
    },
    obj: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      large: false,
      newPosition: {
        left: 0,
        top: 0
      },
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      disX: 0,
      disY: 0,
      grid: false,
      dragStatus: false,
      isClick: false,
      dragging: false,
      hovering: false
    }
  },

  computed: {
    computedStyle() {
      return {
        left: this.newPosition.left + 'px',
        top: this.newPosition.top + 'px',
        right: 'auto',
        bottom: 'auto'
      }
    }
  },

  watch: {},

  mounted() {
    window.addEventListener(
      'touchmove',
      function (event) {
        event.preventDefault()
      },
      { passive: false }
    )
  },

  methods: {
    handleClickOutside() {
      this.large = false
    },
    handleBallClick() {
      if (this.dragging && this.isClick) {
        this.large = !this.large
      }
    },
    setPosition() {
      this.newPosition.left = this.currentX - this.disX
      this.newPosition.top = this.currentY - this.disY
    },
    onDragging(event) {
      if (event.type === 'touchmove') {
        event.clientY = event.touches[0].clientY
        event.clientX = event.touches[0].clientX
      }
      this.currentY = event.clientY
      this.currentX = event.clientX
      const disX = this.currentX - this.startX
      const disY = this.currentY - this.startY
      if (Math.abs(disX) < 5 && Math.abs(disY) < 5) {
        // 未移动
      } else {
        this.dragStatus = true
        if (this.dragging) {
          this.isClick = false
          this.setPosition()
        }
      }
    },
    onDragEnd() {
      if (this.dragging) {
        /*
         * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
         * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
         */
        setTimeout(() => {
          this.dragging = false
          if (!this.isClick) {
            this.setPosition()
          }
        }, 0)
        window.removeEventListener('mousemove', this.onDragging)
        window.removeEventListener('touchmove', this.onDragging)
        window.removeEventListener('mouseup', this.onDragEnd)
        window.removeEventListener('touchend', this.onDragEnd)
        window.removeEventListener('contextmenu', this.onDragEnd)
      }
    },
    onDragStart(event) {
      this.dragging = true
      this.isClick = true
      if (event.type === 'touchstart') {
        event.clientY = event.touches[0].clientY
        event.clientX = event.touches[0].clientX
      }
      this.startY = event.clientY
      this.startX = event.clientX
      this.disX = this.startX - this.$refs.FloatingBal.offsetLeft
      this.disY = this.startY - this.$refs.FloatingBal.offsetTop
    },
    onButtonDown(event) {
      if (event.type === 'touchstart') {
        event.stopPropagation()
      } else {
        event.stopPropagation()
        event.preventDefault()
      }
      this.onDragStart(event)
      window.addEventListener('mousemove', this.onDragging)
      window.addEventListener('touchmove', this.onDragging)
      window.addEventListener('mouseup', this.onDragEnd)
      window.addEventListener('touchend', this.onDragEnd)
      window.addEventListener('contextmenu', this.onDragEnd)
    },
    handleMouseLeave() {
      this.hovering = false
    },
    handleMouseEnter() {
      this.hovering = true
    }
  }
}
</script>

<style lang='scss' scoped>
.floating_ball {
  position: absolute;
  z-index: 9;
  top: 160px;
  right: 80px;
  cursor: pointer;
  transform: translateX(-50%) translateY(-50%);
  .floating_ball_inner {
    width: 80px;
    height: 80px;
    transition: all 0.2s;
    border-radius: 12px;
    background-color: rgba($color: #333333, $alpha: 0.4);
    .fbi_ring {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      height: 60%;
      transform: translateX(-50%) translateY(-50%);
      border-radius: 50%;
      background-color: rgba($color: #ffffff, $alpha: 0.3);
      &::before,
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
      }
      &::before {
        width: 80%;
        height: 80%;
        background-color: rgba($color: #ffffff, $alpha: 0.4);
      }
      &::after {
        width: 60%;
        height: 60%;
        background-color: rgba($color: #ffffff, $alpha: 0.5);
      }
    }
    .fbi_nav {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      .fn_item {
        display: flex;
        align-items: center;
        flex-flow: column;
        justify-content: center;
        width: 33.3%;
        height: 33.3%;
      }
    }
    &.large {
      width: 240px;
      height: 240px;
    }
  }
}
</style>
```