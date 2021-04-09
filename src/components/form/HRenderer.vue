<template>
  <div>
    <draggable-box :showBorder="showBox">
      <component :is="component" :element="props" :ids="ids" v-model="inputValue" @onDelete="deleteElement" />
    </draggable-box>
  </div>
</template>

<script>
import draggableBox from '@/components/draggableBox/draggableBox'
export default {
  watch: {
    inputValue: {
      handler (val) {
        this.$emit('input', val)
      }
    }
  },
  components: { draggableBox },
  name: 'h-renderer',
  props: {
    element: {
      type: Object,
      required: true,
      default: () => {}
    },
    showBox: {
      type: Boolean,
      required: true,
      default: () => false
    },
    ids: {
      type: Number,
      required: true,
      default: () => 0
    },
    value: {
      type: String,
      required: true,
      default: () => ''
    }
  },
  data () {
    return {
      status: {
        showBoxBorder: false
      },
      inputValue: ''
    }
  },
  computed: {
    component () {
      const elName = this.element.name
      return () => import(`./components/${elName}`)
    },
    props () {
      return this.element
    }
  },
  methods: {
    handleInput (value) {
      console.log('childInput', value)
      this.$emit('input', value)
    },
    deleteElement () {
      this.$emit('on-delete')
    }
  }
}
</script>

<style scoped>
</style>
