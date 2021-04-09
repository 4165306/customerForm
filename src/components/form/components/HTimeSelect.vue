<template>
  <div>
    <a-form-item
        :label="element.config.label.name"
        :required="element.rulesConfig.rules[0].required"
        v-bind="formItemLayout"
        :layout="element.config.label.layout"
    >
      <a-time-picker :placeholder="element.config.placeholder" :open.sync="status.openProp" @change="timeOnChange" />
    </a-form-item>
  </div>
</template>

<script>
export default {
  name: 'HTimeSelect',
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
  data () {
    return {
      status: {
        openProp: false
      }
    }
  },
  methods: {
    timeOnChange (time, tString) {
      this.$emit('input', tString)
    }
  }
}
</script>

<style scoped>

</style>
