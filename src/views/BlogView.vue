<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import SectionLayout from '@/layouts/SectionLayout.vue'
  import HeadingLevel1 from '@/components/HeadingLevel1.vue'
  import TextBase from '@/components/TextBase.vue'
  import ButtonLayout from '@/components/ButtonLayout.vue'
  import ButtonLayoutItem from '@/components/ButtonLayoutItem.vue'
  import ButtonBase from '@/components/ButtonBase.vue'
  import CounterComp from '@/components/CounterComp.vue'

  const route = useRoute()
  const router = useRouter()

  // onBeforeRouteUpdate((to, from) => { // パラメーターが変更された時に実行する
  //   console.log('onBeforeRouteUpdate')
  // })

  // onBeforeRouteLeave((to, from) => { // ページを離れる前に実行される
  //   return window.confirm('本当にこのページ離れる？')
  // })
</script>

<template>
  <SectionLayout>
    <HeadingLevel1>Blog</HeadingLevel1>
    <TextBase>{{ route.params.id }}</TextBase>
    <ButtonLayout>
      <ButtonLayoutItem>
        <ButtonBase
          type="button"
          :on-click="
            () => router.push({ name: 'blog', params: { id: Number(route.params.id) + 1 } })
          "
        >
          Next Blog
        </ButtonBase>
      </ButtonLayoutItem>
    </ButtonLayout>
    <CounterComp />
  </SectionLayout>
</template>
