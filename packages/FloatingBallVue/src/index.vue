<template>
  <div>
    FloatingBallVue
  </div>
</template>

<script>
export default {
  name: 'FloatingBallVue',

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
    return {}
  },

  computed: {},

  watch: {
    // obj: {
    //   handler(val, oldVal) {},
    //   deep: false,
    //   immediate: false
    // }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang='scss' scoped>
</style>