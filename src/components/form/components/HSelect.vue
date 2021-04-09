<template>
  <div>
    <a-form-item
        :label="element.config.label.name"
        :label-col="{span: element.config.label.width}"
        :wrapper-col="{span: 24 - element.config.label.width}"
        :required="element.rulesConfig.rules[0].required"
    >
      <a-select
          :mode="element.config.isMultiple ? 'multiple': ''"
          :placeholder="element.config.placeholder"
          style="width: 100%"
          @change="handleChange"
      >
        <a-select-option v-for="(item, idx) in element.config.items" :key="idx" :value="item.value">
          {{ item.value }}
        </a-select-option>
      </a-select>
    </a-form-item>
  </div>
</template>

<script>
export default {
  name: 'HSelect',
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
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
