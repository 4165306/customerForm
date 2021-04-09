<template>
  <div>
    <a-form-item
        :label="element.config.label.name"
        :required="element.rulesConfig.rules[0].required"
        v-bind="formItemLayout"
        :layout="element.config.label.layout"
    >
      <a-date-picker
          :inputReadOnly="true"
          :placeholder="element.config.placeholder"
          @change="onChange"
          valueFormat="YYYY-MM-DD"
      />
    </a-form-item>
  </div>
</template>

<script>
export default {
  name: 'HDateSelect',
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
    }
  },
  methods: {
    onChange (e) {
      this.$emit('input', e)
    }
  }
}
</script>

<style scoped>

</style>
