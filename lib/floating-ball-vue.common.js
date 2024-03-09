module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "7e68":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "dae1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76c04909_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7e68");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76c04909_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76c04909_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34576254-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/FloatingBallVue/src/index.vue?vue&type=template&id=76c04909&scoped=true
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"FloatingBal",staticClass:"floating_ball",class:[_vm.dragging, _vm.isClick],style:(_vm.dragStatus ? _vm.computedStyle : ''),on:{"mouseenter":_vm.handleMouseEnter,"mouseleave":_vm.handleMouseLeave,"mousedown":_vm.onButtonDown,"touchstart":_vm.onButtonDown,"focus":_vm.handleMouseEnter,"blur":_vm.handleMouseLeave}},[_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.handleClickOutside),expression:"handleClickOutside"}],staticClass:"floating_ball_inner",class:[{ large: _vm.large }],on:{"click":_vm.handleBallClick}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.large),expression:"!large"}],staticClass:"fbi_ring"}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.large),expression:"large"}],staticClass:"fbi_nav"},_vm._l((9),function(item,index){return _c('div',{key:index,staticClass:"fn_item"},[_vm._v(" "+_vm._s(index + 1)+" ")])}),0)])])
}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/FloatingBallVue/src/index.vue?vue&type=template&id=76c04909&scoped=true

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./packages/FloatingBallVue/src/utils/vDirective.js


// 创建一个全局的点击事件处理函数
const handleClickOutside = (event, el, binding) => {
  // 检查点击的元素是否在绑定的元素内部
  if (!(el === event.target || el.contains(event.target))) {
    // 如果点击的元素不在绑定的元素内部，则触发绑定的回调函数
    binding.value();
  }
};
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('clickOutside', {
  // 指令的绑定函数，在元素插入到 DOM 中时调用
  bind: function (el, binding) {
    // 创建一个点击事件处理函数，并将它保存在元素的属性中
    const handleClick = event => handleClickOutside(event, el, binding);
    el.__vueClickOutside__ = handleClick;

    // 在 document 上监听点击事件
    document.addEventListener('click', handleClick);
  },
  // 指令的解绑函数，在元素从 DOM 中移除时调用
  unbind(el) {
    // 移除之前保存在元素属性中的点击事件处理函数
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/FloatingBallVue/src/index.vue?vue&type=script&lang=js

/* harmony default export */ var srcvue_type_script_lang_js = ({
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
        return {};
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
    };
  },
  computed: {
    computedStyle() {
      return {
        left: this.newPosition.left + 'px',
        top: this.newPosition.top + 'px',
        right: 'auto',
        bottom: 'auto'
      };
    }
  },
  watch: {},
  mounted() {
    window.addEventListener('touchmove', function (event) {
      event.preventDefault();
    }, {
      passive: false
    });
  },
  methods: {
    handleClickOutside() {
      this.large = false;
    },
    handleBallClick() {
      if (this.dragging && this.isClick) {
        this.large = !this.large;
      }
    },
    setPosition() {
      this.newPosition.left = this.currentX - this.disX;
      this.newPosition.top = this.currentY - this.disY;
    },
    onDragging(event) {
      if (event.type === 'touchmove') {
        event.clientY = event.touches[0].clientY;
        event.clientX = event.touches[0].clientX;
      }
      this.currentY = event.clientY;
      this.currentX = event.clientX;
      const disX = this.currentX - this.startX;
      const disY = this.currentY - this.startY;
      if (Math.abs(disX) < 5 && Math.abs(disY) < 5) {
        // 未移动
      } else {
        this.dragStatus = true;
        if (this.dragging) {
          this.isClick = false;
          this.setPosition();
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
          this.dragging = false;
          if (!this.isClick) {
            this.setPosition();
          }
        }, 0);
        window.removeEventListener('mousemove', this.onDragging);
        window.removeEventListener('touchmove', this.onDragging);
        window.removeEventListener('mouseup', this.onDragEnd);
        window.removeEventListener('touchend', this.onDragEnd);
        window.removeEventListener('contextmenu', this.onDragEnd);
      }
    },
    onDragStart(event) {
      this.dragging = true;
      this.isClick = true;
      if (event.type === 'touchstart') {
        event.clientY = event.touches[0].clientY;
        event.clientX = event.touches[0].clientX;
      }
      this.startY = event.clientY;
      this.startX = event.clientX;
      this.disX = this.startX - this.$refs.FloatingBal.offsetLeft;
      this.disY = this.startY - this.$refs.FloatingBal.offsetTop;
    },
    onButtonDown(event) {
      if (event.type === 'touchstart') {
        event.stopPropagation();
      } else {
        event.stopPropagation();
        event.preventDefault();
      }
      this.onDragStart(event);
      window.addEventListener('mousemove', this.onDragging);
      window.addEventListener('touchmove', this.onDragging);
      window.addEventListener('mouseup', this.onDragEnd);
      window.addEventListener('touchend', this.onDragEnd);
      window.addEventListener('contextmenu', this.onDragEnd);
    },
    handleMouseLeave() {
      this.hovering = false;
    },
    handleMouseEnter() {
      this.hovering = true;
    }
  }
});
// CONCATENATED MODULE: ./packages/FloatingBallVue/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var FloatingBallVue_srcvue_type_script_lang_js = (srcvue_type_script_lang_js); 
// EXTERNAL MODULE: ./packages/FloatingBallVue/src/index.vue?vue&type=style&index=0&id=76c04909&prod&lang=scss&scoped=true
var srcvue_type_style_index_0_id_76c04909_prod_lang_scss_scoped_true = __webpack_require__("dae1");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/FloatingBallVue/src/index.vue






/* normalize component */

var component = normalizeComponent(
  FloatingBallVue_srcvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "76c04909",
  null
  
)

/* harmony default export */ var FloatingBallVue_src = (component.exports);
// CONCATENATED MODULE: ./packages/FloatingBallVue/index.js

FloatingBallVue_src.install = function (Vue) {
  Vue.component(FloatingBallVue_src.name, FloatingBallVue_src);
};
/* harmony default export */ var FloatingBallVue = (FloatingBallVue_src);
// CONCATENATED MODULE: ./packages/index.js

const components = [FloatingBallVue];
const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var packages_0 = ({
  install,
  FloatingBallVue: FloatingBallVue
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=floating-ball-vue.common.js.map