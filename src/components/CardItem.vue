<script setup lang="ts">
  interface Props {
    isButton?: boolean
    name: string
    emoji: string
    isCentering?: boolean
  }

  const { isButton, name, emoji, isCentering } = defineProps<Props>()
</script>

<template>
  <component
    :is="isButton ? 'button' : 'div'"
    :type="isButton ? 'button' : undefined"
    class="cardItem"
    :class="{ 'cardItem--center': isCentering }"
  >
    <div class="name">
      <em>{{ name }}</em>
    </div>
    <div class="emoji">{{ emoji }}</div>
  </component>
</template>

<style scoped>
  .cardItem {
    width: 100%;
    border-radius: 8px;
    background-color: var(--COLOR-BACKGROUND-LIGHT);
    border: 2px solid var(--COLOR-PRIMARY);
    padding: 40px 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    box-shadow: var(--BOX-SHADOW);
  }

  .cardItem--center {
    @media (min-width: 768px) {
      max-width: 400px;
    }
  }

  .name {
    font-size: 2rem;
  }

  .emoji {
    font-size: 3rem;
  }
</style>
