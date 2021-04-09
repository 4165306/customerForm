<template>
  <div class="home">
    <a-row type="flex" justify="center" class="h-padding-top-5">
      <a-button type="dashed" class="h-margin-left-10">编辑</a-button>
      <a-button type="dashed" class="h-margin-left-10">预览</a-button>
      <a-button type="dashed" class="h-margin-left-10">发布</a-button>
      <a-button type="dashed" class="h-margin-left-10">统计</a-button>
    </a-row>
    <a-row type="flex" class="h-padding-top-5 full-height">
      <a-col :span="6" class="component-border">
        <div class="h-padding-left-5 h-padding-right-5">
          <a-card title="组件库" :bordered="false" style="width: 100%">
            <h-components @onAdd="onAddElement" />
          </a-card>
        </div>
      </a-col>
      <a-col :span="12" class="component-border h-padding-top-5">
        <a-form-model
            ref="ruleForm"
            :model="formData"
            :colon="true"
        >
          <vuedraggable>
            <h-renderer
                v-for="(item, index) in elJson"
                :key="index"
                :element="item"
                :ids="index"
                :show-box="index === current"
                v-model="formData[`index${index}`]"
                @click.native="handleRendererClick(index)"
                @on-delete="handleDeleteComponent(index)"
            />
          </vuedraggable>
        </a-form-model>
        {{elJson}}
        <div>
          {{formData}}
        </div>
      </a-col>
      <a-col :span="6" class="hideScroll" style="border-top: 1px solid; height:100%; overflow: scroll;">
        <h-component-rule :idx="current" :element="ruleElement[current]" @onEdit="onRuleEdit" v-if="ruleElement.length > 0" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HRenderer from '@/components/form/HRenderer'
import Vuedraggable from 'vuedraggable'
import HComponents from '@/components/form/HComponents'
import HComponentRule from '@/components/form/HComponentRule'
export default {
  components: { HComponentRule, HComponents, HRenderer, Vuedraggable },
  data () {
    return {
      fieldJson: [],
      formData: {},
      elJson: [],
      value: '',
      current: 0,
      ruleElement: []
    }
  },
  created () {
    this.ruleElement = JSON.parse(JSON.stringify(this.elJson))
  },
  methods: {
    check () {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success')
        }
      })
    },
    handleRendererClick (index) {
      if (this.current === index) {
        return
      }
      this.current = index
      this.ruleElement[index] = JSON.parse(JSON.stringify(this.elJson[index]))
    },
    handleDeleteComponent (index) {
      this.elJson.splice(index, 1)
    },
    onAddElement (item) {
      this.elJson.push(item)
      this.ruleElement.push(item)
    },
    onRuleEdit (idx, data) {
      console.log('edit', idx, data)
      this.$set(this.elJson, idx, data)
    }
  }
}
</script>

<style>
  .component-border{
    border-top: 1px solid;
    border-right: 1px solid;
    height: 100%;
  }
  #app,.home {
    height: 100%;

  }
</style>
