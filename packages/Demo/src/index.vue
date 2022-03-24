<template>
  <div>
    Demo
  </div>
</template>

<script>
import Emitter from './emitter'

export default {
  name: 'Demo',

  mixins: [Emitter],


  props: {
    value: {
      type: [Number, Array],
      default: 0
    }
  },

  components: {

  },

  data () {
    return {

    };
  },

  watch: {

  },

  methods: {},

  computed: {},

  mounted () { },

  beforeDestroy () {
    // window.removeEventListener('resize', this.resetSize)
  }
};
</script>
