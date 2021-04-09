<template>
  <a-card>
    <a-form :label-col="{ span: 7 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="标题">
        <a-input v-model="el.config.label.name"/>
      </a-form-item>
      <a-form-item label="提示">
        <a-input v-model="el.config.placeholder"/>
      </a-form-item>
      <a-form-item label="布局">
        <a-radio-group v-model="el.config.label.layout">
          <a-row>
            <a-col :span="12">
              <a-radio-button value="horizontal">
                左边
              </a-radio-button>
            </a-col>
            <a-col :span="12">
              <a-radio-button value="vertical">
                上方
              </a-radio-button>
            </a-col>
          </a-row>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="是否必填">
        <a-switch :default-checked="el.rulesConfig.rules[0].required" @change="onRequiredChange" />
      </a-form-item>
      <div style="text-align: left">
        正则校验
      </div>
      <div class="h-pos-rel h-margin-2 h-padding-2 h-border-radius-5"  v-for="(item, index) in el.rulesConfig.rules.slice(1)" :key="index" style="background: #f2f3f6;">
        <a-icon @click.stop="removeRegx(index)" type="close-circle" class="h-pos-abs" style="top:-10px; right: -10px;font-size:20px; cursor: pointer"  />
        <a-form-item label="表达式" :label-col="{ span: 8 }">
          <a-input v-model="item.pattern" />
        </a-form-item>
        <a-form-item label="错误提示"  :label-col="{ span: 8 }">
          <a-input v-model="item.message" />
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
      el: {}
    }
  },
  watch: {
    el: {
      handler (value) {
        console.log('监听到watch改变', JSON.stringify(value))
        this.$emit('onchange', value)
      },
      deep: true
    }
  },
  created () {
    this.el = JSON.parse(JSON.stringify(this.bindElement))
  },
  methods: {
    onRequiredChange (value) {
      console.log('value', value)
      this.el.rulesConfig.rules[0].required = value
    },
    addRules () {
      this.el.rulesConfig.rules.push({
        pattern: '',
        message: ''
      })
    },
    removeRegx (idx) {
      this.el.rulesConfig.rules.splice(idx, 1)
    },
    getRegxRules () {

    }
  }
}
</script>

<style scoped>

</style>
