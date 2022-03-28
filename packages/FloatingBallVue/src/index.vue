<template>
  <div>
    <div
      id="drag-container"
      class="drag-container"
      :class="{dragging: dragging && !isClick}"
      :style="dragStyle"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @mousedown="onButtonDown"
      @touchstart="onButtonDown" />
  </div>
</template>

<script>
export default {
  name: 'FloatingBallVue',

  components: {

  },

  props: {
    value: {
      type: [Number, Array],
      default: 0
    }
  },

  data () {
    return {
      hovering: false,
      dragging: false,
      isClick: false,
      startX: 0,
      startY: 0,
      clientX: 0,
      diffX: 0,
      diffY: 0,
      currentX: 0,
      currentY: 0,
      newLeft: 10,
      newtop: 10
    }
  },

  computed: {
    dragStyle () {
      return [{ left: this.newLeft + 'px' }, { top: this.newtop + 'px' }]
    }
  },

  watch: {

  },

  mounted () {
  },

  beforeDestroy () {
    // window.removeEventListener('resize', this.resetSize)
  },

  methods: {
    onDragEnd () {
      if (this.dragging) {
        setTimeout(() => {
          this.dragging = false
        }, 0)
        window.removeEventListener('mousemove', this.onDragging)
        window.removeEventListener('touchmove', this.onDragging)
        window.removeEventListener('mouseup', this.onDragEnd)
        window.removeEventListener('touchend', this.onDragEnd)
        window.removeEventListener('contextmenu', this.onDragEnd)
      }
    },
    onDragging (event) {
      if (this.dragging) {
        this.isClick = false
        if (event.type === 'touchmove') {
          event.clientY = event.touches[0].clientY
          event.clientX = event.touches[0].clientX
        }
        this.currentX = event.clientX
        this.currentY = event.clientY
        this.newLeft = this.currentX - this.diffX
        this.newtop = this.currentY - this.diffY
      }
    },
    onDragStart (event) {
      this.startX = 0
      this.startY = 0
      this.dragging = true
      this.isClick = true
      if (event.type === 'touchstart') {
        event.clientY = event.touches[0].clientY
        event.clientX = event.touches[0].clientX
      }
      this.startX = event.clientX
      this.startY = event.clientY
      this.diffX = this.startX - this.newLeft
      this.diffY = this.startY - this.newtop
    },
    onButtonDown (event) {
      // event.preventDefault()
      this.onDragStart(event)
      window.addEventListener('mousemove', this.onDragging)
      window.addEventListener('touchmove', this.onDragging)
      window.addEventListener('mouseup', this.onDragEnd)
      window.addEventListener('touchend', this.onDragEnd)
      window.addEventListener('contextmenu', this.onDragEnd)
    },
    handleMouseEnter () {
      this.hovering = true
    },
    handleMouseLeave () {
      this.hovering = false
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  user-select: none;
  border: 1px solid;
  &.dragging {
    pointer-events: none;
  }
}
</style>
