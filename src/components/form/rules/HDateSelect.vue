<template>
<div>
  <a-form :label-col="{ span: 7 }" :wrapper-col="{ span: 16 }">
    <a-form-item label="标题">
      <a-input v-model="el.config.label.name"/>
    </a-form-item>
    <a-form-item label="提示">
      <a-input v-model="el.config.placeholder"/>
    </a-form-item>
    <a-form-item label="是否必选">
      <a-switch :default-checked="el.rulesConfig.rules[0].required" @change="onRequiredChange" />
    </a-form-item>
    <a-form-item label="布局">
      <a-radio-group v-model="el.config.label.layout">
        <a-row>
          <a-col :span="12">
            <a-radio-button value="horizontal">
              左边
            </a-radio-button>
          </a-col>
          <a-col :span="12">
            <a-radio-button value="vertical">
              上方
            </a-radio-button>
          </a-col>
        </a-row>
      </a-radio-group>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
export default {
  name: 'HDateSelect',
  data () {
    return {
      el: {},
      rules: [
        {
          required: true,
          message: '',
          trigger: ['blur']
        }
      ]
    }
  },
  props: {
    bindElement: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  created () {
    this.el = JSON.parse(JSON.stringify(this.bindElement))
  },
  watch: {
    el: {
      handler (value) {
        this.$emit('onchange', value)
      },
      deep: true
    }
  },
  methods: {
    onBoldChange (value) {
      this.el.config.label.bold = value
    },
    onMultipleChange (value) {
      this.el.config.isMultiple = value
    },
    onRequiredChange (value) {
      this.el.rulesConfig.rules[0].required = value
    },
    onIsRemoteChange () {
      this.el.config.isRemote = true
    },
    addItems () {
      this.el.config.items.push({
        value: ''
      })
    },
    removeRegx (idx) {
      this.el.config.items.splice(idx, 1)
    }
  }
}
</script>

<style scoped>

</style>
