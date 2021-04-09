<template>
  <div>
    <a-form-item
        :label="element.config.label.name"
        :required="element.rulesConfig.rules[0].required"
        v-bind="formItemLayout"
        :layout="element.config.label.layout"
    >
      <a-checkbox-group :options="checkboxList" @change="onChange" />
    </a-form-item>
  </div>
</template>

<script>
export default {
  name: 'HCheckbox',
  props: {
    value: {
      type: String,
      default: () => ''
    },
    element: {
      type: Object,
      default: () => {
      }
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
    },
    checkboxList () {
      return this.element.config.items.map(item => {
        return item.value
      })
    }
  },
  methods: {
    onChange (e) {
      console.log('e', e)
      this.$emit('input', e.join(','))
    }
  }
}
</script>

<style scoped>

</style>
