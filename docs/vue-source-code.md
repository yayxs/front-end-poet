## 文件目录

### .flowconfig

```
[ignore]
.*/node_modules/.*
.*/test/.*
.*/scripts/.*
.*/examples/.*
.*/benchmarks/.*

[include]

[libs]
flow

[options]
unsafe.enable_getters_and_setters=true
module.name_mapper='^compiler/\(.*\)$' -> '<PROJECT_ROOT>/src/compiler/\1'
module.name_mapper='^core/\(.*\)$' -> '<PROJECT_ROOT>/src/core/\1'
module.name_mapper='^shared/\(.*\)$' -> '<PROJECT_ROOT>/src/shared/\1'
module.name_mapper='^web/\(.*\)$' -> '<PROJECT_ROOT>/src/platforms/web/\1'
module.name_mapper='^weex/\(.*\)$' -> '<PROJECT_ROOT>/src/platforms/weex/\1'
module.name_mapper='^server/\(.*\)$' -> '<PROJECT_ROOT>/src/server/\1'
module.name_mapper='^entries/\(.*\)$' -> '<PROJECT_ROOT>/src/entries/\1'
module.name_mapper='^sfc/\(.*\)$' -> '<PROJECT_ROOT>/src/sfc/\1'
suppress_comment= \\(.\\|\n\\)*\\$flow-disable-line

```

### flow

#### vnode.js

自定义一些类型

```js
declare type VNodeChildren = Array<?VNode | string | VNodeChildren> | string;

declare type VNodeComponentOptions = {
  Ctor: Class<Component>;
  propsData: ?Object;
  listeners: ?Object;
  children: ?Array<VNode>;
  tag?: string;
};

declare type MountedComponentVNode = {
  context: Component;
  componentOptions: VNodeComponentOptions;
  componentInstance: Component;
  parent: VNode;
  data: VNodeData;
};

// interface for vnodes in update modules
declare type VNodeWithData = {
  tag: string;
  data: VNodeData;
  children: ?Array<VNode>;
  text: void;
  elm: any;
  ns: string | void;
  context: Component;
  key: string | number | void;
  parent?: VNodeWithData;
  componentOptions?: VNodeComponentOptions;
  componentInstance?: Component;
  isRootInsert: boolean;
};

declare interface VNodeData {
  key?: string | number;
  slot?: string;
  ref?: string;
  is?: string;
  pre?: boolean;
  tag?: string;
  staticClass?: string;
  class?: any;
  staticStyle?: { [key: string]: any };
  style?: string | Array<Object> | Object;
  normalizedStyle?: Object;
  props?: { [key: string]: any };
  attrs?: { [key: string]: string };
  domProps?: { [key: string]: any };
  hook?: { [key: string]: Function };
  on?: ?{ [key: string]: Function | Array<Function> };
  nativeOn?: { [key: string]: Function | Array<Function> };
  transition?: Object;
  show?: boolean; // marker for v-show
  inlineTemplate?: {
    render: Function;
    staticRenderFns: Array<Function>;
  };
  directives?: Array<VNodeDirective>;
  keepAlive?: boolean;
  scopedSlots?: { [key: string]: Function };
  model?: {
    value: any;
    callback: Function;
  };
};

declare type VNodeDirective = {
  name: string;
  rawName: string;
  value?: any;
  oldValue?: any;
  arg?: string;
  oldArg?: string;
  modifiers?: ASTModifiers;
  def?: Object;
};

declare type ScopedSlotsData = Array<{ key: string, fn: Function } | ScopedSlotsData>;

```

## QA

> Q: 在data中写的数据，在**生命周期**或者*methods* 中是怎么可以直接通过`this `  ？？？
>
> ```vue
>  data() {
>     return {
>       message:'hello world'
>     }
>   },
>   mounted() {
>     console.log(this.message) // this.message 怎么直接访问到的
>   },
> ```

【回答】：

- state.js

```js
if (opts.data) {
    initData(vm) // 初始化data
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
```

```js
let data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {}

```

主要是进行代理

```js
 if (!(key in vm)) {
      proxy(vm, `_props`, key)
    }
```

```js
export function proxy (target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
```



>Q: 为什么在书写  props 和 data 的时候  对象的key 不能是一样的？？？
>
>```vue
>props: {
>    message: ""
>  },
>  data() {
>    return {
>      message: "hello world"
>    };
>  },
>```
>
>

【回答】：主要是两者都是绑定在vm上的

>Q: vue 实例挂载的时候，做了些什么
>
>```vue
>new Vue({
>  render: h => h(App),
>}).$mount('#app')
>```

【回答】：总体来说，不管开发者是怎么的写法，都是搞成`render()` 

```js
 if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template)
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              `Template element not found or is empty: ${options.template}`,
              this
            )
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this)
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile')
      }

      const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end')
        measure(`vue ${this._name} compile`, 'compile', 'compile end')
      }
    }
  }
  return mount.call(this, el, hydrating)
}
```

