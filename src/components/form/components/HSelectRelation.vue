<template>
  <div>
    <a-form-item
        :label="element.config.label.name"
        :label-col="{span: element.config.label.width}"
        :wrapper-col="{span: 24 - element.config.label.width}"
        :required="element.rulesConfig.rules[0].required"
    >
      <a-cascader
          :options="element.config.items"
          :placeholder="element.config.placeholder"
          @change="handleChange"
          :field-names="{ label: 'title', value: 'title', children: 'children' }"
      />
    </a-form-item>
  </div>
</template>

<script>
export default {
  name: 'HSelect',
  data () {
    return {

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
    }
  },
  methods: {
    handleChange (value) {
      console.log('value', value)
      this.$emit('input', value.join(','))
    }
  }
}
</script>

<style scoped>

</style>
