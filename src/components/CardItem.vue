<script setup lang="ts">
  const { isButton, name, emoji, isCentering } = defineProps({
    isButton: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    isCentering: {
      type: Boolean,
      default: false,
    },
  })
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
    background-color: var(--COLOR-BACKGROUND-ORANGE);
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
