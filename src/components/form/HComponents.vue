<template>
  <div>
    <a-row type="flex">
      <a-col v-for="(item, index) in localJson" :key="index">
        <div class="h-padding-1 h-margin-1" style="background: #f6f7ff; cursor: pointer" @click.stop="handleAddComponent(item)">
          <a-icon :type="item.icon" :style="{cursor: 'hand'}" /><span style="cursor:pointer;">{{item.text}}</span>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { getFields } from '@/apis/api/form'
export default {
  name: 'h-components',
  data () {
    return {
      localJson: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      const _this = this
      getFields().then(resp => {
        console.log('resp', resp)
        _this.localJson = resp.data
      }).catch(err => console.log(err))
    },
    handleAddComponent (item) {
      this.$emit('onAdd', item)
    }
  }
}
</script>

<style scoped>

</style>
