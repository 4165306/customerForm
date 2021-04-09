<template>
  <div class="h-pos-rel h-padding-top-2 h-padding-right-2 hover-background h-border-radius-5" :style="showBorder ? 'border: 1px dashed;background: #f6f7ff' : ''">
    <div class="h-pos-abs" v-if="showBorder" style="right:50%; top: -10px;z-index: 999" @click.stop="handleDelComponent">
      <a-icon type="delete" theme="filled" :style="{fontSize: '20px', color: 'red', cursor: 'hand'}" />
    </div>
    <div class="h-pos-rel" style="height:auto">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'draggableBox',
  props: {
    showBorder: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    handleDelComponent () {
      // this.$emit('onDelete', '')
      this.$parent.deleteElement()
    }
  }
}
</script>

<style scoped>
  .hover-background:hover {
    background: #f6f7ff;
  }
</style>
