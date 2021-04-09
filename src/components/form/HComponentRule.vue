<template>
  <div class="h-padding-left-1 h-padding-right-1">
    <a-card title="组件配置" :bordered="false" style="width: 100%">
      <component :is="component" @onchange="onChange" :bindElement="element" />
    </a-card>
  </div>

</template>

<script>
export default {
  name: 'HComponentRule',
  props: {
    element: {
      type: Object,
      default: () => {},
      required: true
    },
    idx: {
      type: Number,
      default: () => {},
      required: true
    }
  },
  computed: {
    component () {
      const elName = this.element.name
      return () => import(`./rules/${elName}`)
    },
    props () {
      return this.element
    }
  },
  watch: {
    idx: {
      handler (value) {
        console.log('idx', value)
      }
    }
  },
  methods: {
    onChange (item) {
      this.$emit('onEdit', this.idx, item)
    }
  }
}
</script>

<style scoped>

</style>
