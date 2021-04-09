<template>
  <div>
    <a-form-item
        :label="element.config.label.name"
        :required="element.rulesConfig.rules[0].required"
        v-bind="formItemLayout"
        :layout="element.config.label.layout"
    >
      <a-radio-group @change="onChange">
        <a-radio :value="radio.value" v-for="(radio, index) in element.config.items" :key="index">
          {{ radio.value }}
        </a-radio>
      </a-radio-group>
    </a-form-item>
  </div>
</template>

<script>
export default {
  name: 'HRadio',
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
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  methods: {
    onChange (e) {
      console.log('e', e)
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
