# questionweb

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Detail description
1. #### 组件开发方式
    - 新增组件
    ```vue
   /**
    * 新增组件大部分只需要按照自己规则设置，无需遵循原有规则
    * 只需要自己的渲染组件按照自己设定的规则即可
    * 新增组件目录存放于@/components/form/components
    * 新增组件的规则存放于 @/components/form/rules
    * 新增组件/组件规则 需要名字一样
    * 在Json数组中，需要指定一个name属性用来标示是哪个组件
    * 下边举例生成一个普通的手机号码验证组件
   **/
   // 组件代码 此代码同时兼容组件渲染
    <template>
      <div>
        <a-form-item
            :label="element.config.label.name"
            :label-col="{span: element.config.label.width}"
            :wrapper-col="{span: 24 - element.config.label.width}"
            :required="element.rules[0].required"
        >
          <!-- 组件内部所有的值，均使用 $emit('input', value)的方式 -->
          <!-- 方便父组件submit提交信息 -->
          <a-row>
            <a-col :span="18">
              <a-input :placeholder="element.config.placeholder" />
            </a-col>
            <a-col :span="6">
              <a-button size="small" type="primary" @click.stop="getPhoneCode">获取验证码</a-button>
            </a-col>
          <a-row>
        </a-form-item>
      </div>
    </template>
    
    <script>
    export default {
      name: 'h-input',
      data () {
        return {}
      },
      props: {
         // 组件的属性 例如 element.name <=> 组件名字
        element: {
          type: Object,
          default: () => {
          }
        }
      },
      methods: {
         getPhoneCode() {
            // 实现验证码逻辑
         },
         valid() {
            // 实现验证码校验逻辑 如果校验成功，调用$emit('input')方法
            if (true) this.$emit('input',true) 
         }
      }
    }
    </script>
   
   // 验证规则代码
   
   <template>
      <a-card>
        <a-form :label-col="{ span: 7 }" :wrapper-col="{ span: 16 }">
          <a-form-item label="标题">
            <a-input v-model="el.config.label.name"/>
          </a-form-item>
          <a-form-item label="提示">
            <a-input v-model="el.config.placeholder"/>
          </a-form-item>
          <a-form-item label="是否必填">
            <a-switch :default-checked="el.rules[0].required" @change="onRequiredChange" />
          </a-form-item>
          <div style="text-align: left">
            正则校验
          </div>
          <div class="h-pos-rel h-margin-2 h-padding-2 h-border-radius-5"  v-for="(item, index) in regx" :key="index" style="background: #f2f3f6;">
              <a-icon @click.stop="removeRegx(index)" type="close-circle" class="h-pos-abs" style="top:-10px; right: -10px;font-size:20px; cursor: pointer"  />
            <a-form-item label="表达式" :label-col="{ span: 8 }">
              <a-input v-model="item.regx" />
            </a-form-item>
            <a-form-item label="错误提示"  :label-col="{ span: 8 }">
              <a-input v-model="item.error" />
            </a-form-item>
          </div>
          <a-form-item>
            <a-button @click.stop="addRules">添加规则</a-button>
          </a-form-item>
        </a-form>
      </a-card>
      </template>
      
      <script>
      export default {
        name: 'HInput',
        props: {
          bindElement: {
            type: Object,
            default: () => {},
            required: true
          }
        },
        data () {
          return {
            el: {},
            rules: [
              {
                required: true,
                message: '',
                trigger: ['blur']
              }
            ],
            regx: []
          }
        },
        watch: {
          el: {
            handler (value) {
              this.$emit('onchange', value)
            },
            deep: true
          }
        },
        created () {
          this.el = JSON.parse(JSON.stringify(this.bindElement))
        },
        methods: {
          onBoldChange (value) {
            this.el.config.label.bold = value
          },
          onRequiredChange (value) {
            console.log('value', value)
            this.el.rules[0].required = value
          },
          addRules () {
            this.regx.push({
              regx: '',
              error: ''
            })
          },
          removeRegx (idx) {
            this.regx.splice(idx, 1)
          }
        }
      }
      </script>
    ```

