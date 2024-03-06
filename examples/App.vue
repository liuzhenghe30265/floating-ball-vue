<template>
  <div id="app">
    <FloatingBallVue class="floating_ball">
    </FloatingBallVue>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
#app {
  padding: 0 50px;
  margin: 100px auto;
  .floating_ball {
    right: 200px;
    top: 200px;
  }
}
</style>
