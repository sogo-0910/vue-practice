<script setup lang="ts">
  import HeadingLevel1 from '@/components/HeadingLevel1.vue'
  import SectionLayout from '@/layouts/SectionLayout.vue'
  import ButtonLayout from '@/components/ButtonLayout.vue'
  import ButtonLayoutItem from '@/components/ButtonLayoutItem.vue'
  import ButtonBase from '@/components/ButtonBase.vue'
</script>

<template>
  <SectionLayout>
    <HeadingLevel1>Profile: @{{ $route.params.id }}</HeadingLevel1>
    <ButtonLayout tag="ul">
      <ButtonLayoutItem tag="li">
        <ButtonBase type="router-link" :to="{ name: 'posts', params: { id: 'name' } }">
          Posts
        </ButtonBase>
      </ButtonLayoutItem>
      <ButtonLayoutItem tag="li">
        <ButtonBase type="router-link" :to="{ name: 'likes', params: { id: 'name' } }">
          Likes
        </ButtonBase>
      </ButtonLayoutItem>
    </ButtonLayout>
    <RouterView />
  </SectionLayout>
</template>
