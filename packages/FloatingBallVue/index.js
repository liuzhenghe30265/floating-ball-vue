import FloatingBallVue from './src/index'

FloatingBallVue.install = function (Vue) {
  Vue.component(FloatingBallVue.name, FloatingBallVue)
}
export default FloatingBallVue
