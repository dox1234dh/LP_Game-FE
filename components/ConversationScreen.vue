<template>
  <div
    class="h-full relative bg-[url('/assets/images/background.jpg')] bg-repeat-round bg-opacity-40 z-0"
  >
    <div class="absolute inset-0 h-full bg-black bg-opacity-60"></div>
    <!-- Main Charactor z-index 1 -->
    <div class="absolute left-0 bottom-0 z-10">
      <img
        src="/assets/images/femaleCharacter.png"
        class="max-w-[250px] w-full"
        width="250"
      />
    </div>
    <!-- System Charactor z-index 2 -->
    <div class="absolute right-0 bottom-0 z-20">
      <img
        src="/assets/images/tourGuide.png"
        class="relative max-w-[200px]"
        width="160"
      />
    </div>
    <!-- Dialog z-index 3 -->
    <div
      class="p-4 text-lg text-left absolute left-0 right-0 top-20 w-4/5 h-1/3 bg-white border rounded mx-auto z-30 text-black overscroll-y-auto"
    >
      {{ textTyping }}
    </div>
    <!-- Select Box z-index 4 -->
    <div
      class="absolute left-0 right-0 bottom-0 w-2/5 h-1/3 bg-white border rounded mx-auto"
    >
      123123
    </div>
  </div>
</template>

<script lang="ts" setup>
const SPEED_TYPING = 100;
let data: String = "";
let textTyping: String = ref("123123");
let i: number = 0;
const props = defineProps({
  conversationData: { type: object, required: true },
});
</script>
