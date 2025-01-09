<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import SectionLayout from '@/layout/SectionLayout.vue'
  import HeadingLevel1 from './../components/HeadingLevel1.vue'
  import TextBase from '@/components/TextBase.vue'
  import ButtonLayout from '@/components/ButtonLayout.vue'
  import ButtonLayoutItem from '@/components/ButtonLayoutItem.vue'
  import ButtonBase from '@/components/ButtonBase.vue'

  const route = useRoute()
  const router = useRouter()
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
  </SectionLayout>
</template>
