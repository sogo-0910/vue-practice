<script setup lang="ts">
  import { ref } from 'vue'

  interface Props {
    tabList: Array<string>
  }

  const { tabList } = defineProps<Props>()
  const activeTab = ref(1)
  const selectTab = (index: number) => {
    activeTab.value = index
  }
</script>

<template>
  <div class="tab">
    <ul class="tab__list" role="tablist">
      <li v-for="(tab, index) in tabList" :key="index" class="tab__listItem" role="presentation">
        <button
          :id="`tab-${index + 1}`"
          type="button"
          class="tab__link"
          role="tab"
          :aria-controls="`panel-${index + 1}`"
          :aria-selected="activeTab === index + 1"
          @click="selectTab(index + 1)"
        >
          {{ tab }}
        </button>
      </li>
    </ul>

    <div class="tab__container">
      <template v-for="index in tabList.length" :key="`panel-${index}`">
        <div
          v-show="index === activeTab"
          :id="`panel-${index}`"
          class="tab_panel"
          role="tabpanel"
          :aria-labelledby="`tab-${index}`"
        >
          <slot :name="`tabPanel-${index}`" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tab {
    margin-top: 64px;

    &__list {
      display: flex;
      list-style: none;
      justify-content: center;
      padding: 0;
      margin: 0;
      gap: 8px;
    }

    &__link {
      height: 100%;
      padding: 12px 24px;
      background: var(--COLOR-BACKGROUND-LIGHT);
      border: 2px solid var(--COLOR-PRIMARY);
      border-radius: 8px;
      font-size: 1.8rem;
      transition:
        color var(--TRANSITION),
        background-color var(--TRANSITION);

      &[aria-selected='false'] {
        @include mixin.media(hover) {
          &:hover {
            color: var(--COLOR-PRIMARY);
          }
        }
      }
      &[aria-selected='true'] {
        background-color: var(--COLOR-PRIMARY);
        color: var(--COLOR-BACKGROUND-LIGHT);
      }
    }

    &__container {
      margin-top: 40px;
    }
  }
</style>
