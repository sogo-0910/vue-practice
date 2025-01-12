<script setup lang="ts">
  import SectionLayout from '@/layouts/SectionLayout.vue'
  import HeadingLevel1 from '@/components/HeadingLevel1.vue'
  import CounterComp from '@/components/CounterComp.vue'
  import TabWidget from '@/components/TabWidget.vue'
  import TextBase from '@/components/TextBase.vue'
  import ToggleWidget from '@/components/ToggleWidget.vue'
</script>

<template>
  <SectionLayout>
    <HeadingLevel1>{{ $route.meta.title }}</HeadingLevel1>
    <TabWidget :tab-list="['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']">
      <template #tabPanel-1>
        <TextBase>content 1<br />text text text text text text text<br />text text</TextBase>
      </template>
      <template #tabPanel-2>
        <TextBase
          >content 2 text text text text text<br />text text text text text text text<br />text text
          text text</TextBase
        >
      </template>
      <template #tabPanel-3>
        <TextBase
          >content 3 text text text<br />text text text text text text text<br />text text text text
          text text</TextBase
        >
      </template>
      <template #tabPanel-4>
        <TextBase>content 4 text</TextBase>
      </template>
    </TabWidget>
    <ToggleWidget title="toggle title">
      <TextBase
        >text text text text text text text<br />text text text text text text text<br />text text
        text text text text text<br />text text text text text text text<br />text text text text
        text text text<br />text text text text text text text</TextBase
      >
    </ToggleWidget>
    <ToggleWidget title="toggle title2">
      <TextBase
        >text text text text text text text<br />text text text text text text text<br />text text
        text text text text text<br />text text text text text text text<br />text text text text
        text text text<br />text text text text text text text</TextBase
      >
    </ToggleWidget>
    <CounterComp />
  </SectionLayout>
</template>
