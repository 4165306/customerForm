<template>
  <div>
    <a-form-model :form="form">
<!--      <HInput :element="element" :ids="0" v-model="formData[`index0`]" />-->
      <a-form-model-item
          :label="element.config.label.name"
          :label-col="{span: element.config.label.width}"
          :wrapper-col="{span: 24 - element.config.label.width}"
          :rules="element.rulesConfig.rules"
          :ref="`fieldsName0`"
          :prop="`index0`"
      >
        <a-input
            :placeholder="element.config.placeholder"
            v-model="form[`index0`]"
            @blur="$refs[`fieldsName0`].onFieldBlur()"
        />
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
const element = {
  name: 'HInput',
  field: 'field100',
  icon: 'edit',
  text: '单行文本框',
  config: {
    label: {
      name: '单行输入框',
      align: 'right',
      width: 4
    },
    placeholder: '请输入内容',
    layout: 'right',
    type: 'input'
  },
  rulesConfig: {
    rules: [{
      required: true,
      message: '请填写此内容',
      trigger: 'blur'
    }]
  }
}
export default {
  data () {
    return {
      form: {},
      element
    }
  }
}
</script>

<style scoped>

</style>
