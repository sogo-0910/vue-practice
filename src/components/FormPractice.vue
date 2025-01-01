<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const inputModel: Ref<string> = ref('')
  const textareaModel: Ref<string> = ref('')
  const checkboxModel: Ref<boolean[]> = ref([])
  const radioModel: Ref<string> = ref('radio1')
  const selectModel: Ref<string> = ref('')

  import CustomInput from './CustomInput.vue'
  const customInputText: Ref<string> = ref('text')
  const customInputTitle: Ref<string> = ref('title')
</script>

<template>
  <div>
    <h2>Form Practice</h2>

    <div class="box">
      <label>
        <span class="title">Input</span>
        <input v-model.lazy.number="inputModel" type="text" />
      </label>
      <div>text:{{ typeof inputModel }}</div>
    </div>

    <div class="box">
      <label>
        <span class="title">TextArea</span>
        <textarea id="textarea" v-model.trim="textareaModel" name="textarea"></textarea>
      </label>
      <div style="white-space: pre">text:{{ textareaModel }}</div>
    </div>

    <div class="box">
      <h3 class="title">Checkbox</h3>
      <label class="row"
        ><input v-model="checkboxModel" value="item1" type="checkbox" />item1</label
      >
      <label class="row"
        ><input v-model="checkboxModel" value="item2" type="checkbox" />item2</label
      >
      <label class="row"
        ><input v-model="checkboxModel" value="item3" type="checkbox" />item3</label
      >
      <div>text:{{ checkboxModel }}</div>
    </div>

    <div class="box">
      <h3 class="title">Radio</h3>
      <label class="row"><input v-model="radioModel" value="radio1" type="radio" />radio1</label>
      <label class="row"><input v-model="radioModel" value="radio2" type="radio" />radio2</label>
      <div>text:{{ radioModel }}</div>
    </div>

    <div class="box">
      <h3 class="title">Select</h3>
      <select v-model="selectModel" name="select">
        <option value="" disabled>select</option>
        <option v-for="option in ['A', 'B', 'C']" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <div>text:{{ selectModel }}</div>
    </div>

    <div class="box">
      <CustomInput
        v-model:input-title="customInputTitle"
        v-model:input-text.uppercase="customInputText"
      />
      <div>Parent text:{{ customInputText }}</div>
      <div>Parent title:{{ customInputTitle }}</div>
    </div>
  </div>
</template>

<style scoped>
  .box {
    border: 2px solid gray;
    border-radius: 16px;
    padding: 24px;
    margin-top: 40px;

    label {
      display: flex;
      flex-direction: column;
      gap: 8px;

      &.row {
        flex-direction: row;
      }
    }

    .title {
      font-weight: bold;
    }
  }
</style>
