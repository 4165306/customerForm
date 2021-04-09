<template>
  <div>
    <a-card>
      <a-form :label-col="{ span: 7 }" :wrapper-col="{ span: 16 }">
        <a-form-item label="标题">
          <a-input v-model="el.config.label.name"/>
        </a-form-item>
        <a-form-item label="提示">
          <a-input v-model="el.config.placeholder"/>
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
        <a-form-item label="是否必选">
          <a-switch :default-checked="el.rulesConfig.rules[0].required" @change="onRequiredChange" />
        </a-form-item>
        <div style="text-align: left">
          选项列表(<span style="font-size:12px; color: #303133">节点右键单击可以新增子节点</span>)
        </div>
        <div>
          <a-tree
              :treeData="items"
              @select="onSelect"
              @rightClick="onRightClick"
          />
          <v-contextmenu ref="contextmenu">
            <v-contextmenu-item @click="() => {model.AddItemVisible = true;menus.isRoot = false }">新增子节点</v-contextmenu-item>
            <v-contextmenu-item>删除节点</v-contextmenu-item>
          </v-contextmenu>
        </div>
        <div>
          <div>
            <a-button @click="() => {model.AddItemVisible = true; menus.isRoot = true}">新增父节点</a-button>
          </div>
          <div>
            {{menus.nodeItem}}
          </div>
        </div>
        <div class="right">
          <div v-html="menus.answer"></div>
        </div>
        <a-form-item>
        </a-form-item>
      </a-form>
    </a-card>
    <a-modal
        title="Title"
        :visible="model.AddItemVisible"
        @ok="addItems"
        @cancel="model.AddItemVisible = false"
    >
      <a-input v-model="nodeName" placeholder="请输入选项名称" />
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'HInput',
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
      items: [
      ],
      menus: {
        style: null,
        show: false,
        nodeId: 0,
        nodeItem: null,
        answer: '',
        isRoot: false
      },
      model: {
        AddItemVisible: false
      },
      nodeName: '',
      findMenuObj: null
    }
  },
  watch: {
    el: {
      handler (value) {
        this.$emit('onchange', value)
      },
      deep: true
    },
    items: {
      handler (value) {
        this.el.config.items = value
      },
      deep: true
    }
  },
  created () {
    this.el = JSON.parse(JSON.stringify(this.bindElement))
  },
  methods: {
    onSelect (selectedKeys, info) {
      this.nodeId = selectedKeys[0]
    },
    onRightClick ({ event, node }) {
      const answer = node._props.dataRef.anwer
      if (answer) {
        this.$refs.contextmenu.hide()
        this.answer = answer
        return
      }
      this.menus.nodeItem = {
        key: node._props.eventKey,
        title: node._props.title,
        parentId: node._props.dataRef.parentId || null
      }
      const x = this.getAbsLeft(event.currentTarget) + 20
      // 因为我放在页面上的box有滚动条，所以需要减掉该盒子的scrollTop
      const y = this.getAbsTop(event.currentTarget)
      const position = {
        top: y,
        left: x
      }
      this.$refs.contextmenu.show(position)
    },
    onBoldChange (value) {
      this.el.config.label.bold = value
    },
    onRequiredChange (value) {
      console.log('value', value)
      this.el.rules[0].required = value
    },
    onIsRemoteChange () {
      this.el.config.isRemote = true
    },
    addItems () {
      const addData = {
        title: this.nodeName,
        key: (new Date()).getTime(),
        children: []
      }
      console.log('isRoot', this.menus.isRoot)
      if (this.menus.isRoot) {
        this.items.push(addData)
      } else {
        this.addNodes(this.items, addData, this.menus.nodeItem.key)
      }
      this.model.AddItemVisible = false
    },
    addNodes (nodeData, addData, key) {
      nodeData.forEach(item => {
        if (item.key === key) {
          if (typeof item.children === 'undefined') {
            item.children = []
          }
          item.children.push(addData)
        } else {
          if (typeof item.children !== 'undefined') {
            this.addNodes(item.children, addData, key)
          }
        }
      })
    },
    delItems () {

    },
    getAbsLeft (obj) {
      let l = obj.offsetLeft
      while (obj.offsetParent != null) {
        obj = obj.offsetParent
        l += obj.offsetLeft
      }
      return l
    },
    getAbsTop (obj) {
      let top = obj.offsetTop
      while (obj.offsetParent != null) {
        obj = obj.offsetParent
        top += obj.offsetTop
      }
      return top
    }
  }
}
</script>

<style scoped>
.menu-item{
  margin-left: 10px;
}
</style>
