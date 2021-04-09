<template>
  <a-card>
    <a-form :label-col="{ span: 7 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="标题">
        <a-input v-model="el.config.label.name"/>
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
      <div style="text-align: left">
        选项列表
      </div>
      <div class="h-pos-rel h-margin-2 h-padding-2 h-border-radius-5"  v-for="(item, index) in el.config.items" :key="index" style="background: #f2f3f6;">
        <a-icon @click.stop="removeRegx(index)" type="close-circle" class="h-pos-abs" style="top:-10px; right: -10px;font-size:20px; cursor: pointer"  />
        <a-form-item label="选项名" :label-col="{ span: 8 }">
          <a-input v-model="item.value" />
        </a-form-item>
      </div>
      <a-form-item>
        <a-button @click.stop="addItems">添加选项</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'HCheckbox',
  props: {
    bindElement: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data () {
    return {
      el: {},
      rules: [
        {
          required: true,
          message: '',
          trigger: ['blur']
        }
      ],
      items: []
    }
  },
  watch: {
    el: {
      handler (value) {
        this.$emit('onchange', value)
      },
      deep: true
    }
  },
  created () {
    this.el = JSON.parse(JSON.stringify(this.bindElement))
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
