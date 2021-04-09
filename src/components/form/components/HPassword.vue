<template>
  <div>
    <a-form-model-item
        :label="element.config.label.name"
        v-bind="formItemLayout"
        :rules="element.rulesConfig.rules"
        :ref="`fieldsName${ids}`"
        layout="vertical"
        :prop="`index${ids}`"
    >
      <a-input-password
          :placeholder="element.config.placeholder"
          :value="value"
          @input="handleInput"
      />
    </a-form-model-item>
  </div>
</template>

<script>
export default {
  name: 'h-input',
  data () {
    return {
      inputContent: '',
      inputValue: '',
      fieldsName: `index${this.ids}`,
      index0: ''
    }
  },
  props: {
    value: {
      type: String,
      default: () => ''
    },
    element: {
      type: Object,
      default: () => {
      }
    },
    ids: {
      // 用于标示验证ID
      type: Number,
      default: () => 0,
      required: true
    }
  },
  computed: {
    formItemLayout () {
      const layout = this.element.config.label.layout
      return layout === 'horizontal'
        ? {
            labelCol: { span: this.element.config.label.width },
            wrapperCol: { span: (24 - this.element.config.label.width) }
          }
        : {
            labelCol: { span: 24 },
            wrapperCol: { span: 24 }
          }
    }
  },
  methods: {
    handleInput (e) {
      this.index0 = e.target.value
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
