<template>
  <audio class="hidden" controls autoplay loop>
    <source src="~/public/BGMusic.wav" type="audio/wav">
  </audio>
  <div
      class="h-full relative bg-[url('/assets/images/background.jpg')] bg-repeat-round bg-opacity-40 z-0"
      @click="handleClickTyping"
  >
    <div class="absolute inset-0 h-full bg-black bg-opacity-60"></div>
    <!-- Main Character z-index 1 -->
    <div class="absolute left-0 bottom-0 z-10">
      <img
          src="/assets/images/femaleCharacter.png"
          class="max-w-[250px] w-full"
          :width="250"
          alt="femaleCharacter"/>
    </div>
    <!-- System Character z-index 2 -->
    <div class="absolute right-0 bottom-0 z-20">
      <img
          src="/assets/images/tourGuide.png"
          class="relative max-w-[200px]"
          :width="160"
          alt="tourGuide"/>
    </div>
    <!-- Dialog z-index 3 -->
    <div
        class="typewriter whitespace-break-spaces break-words text-wrap p-4 text-lg text-left absolute left-0 right-0 top-20 w-4/5 h-1/3 bg-white border rounded mx-auto z-30 text-black overflow-y-auto"
    >
      {{ textTyping }}
    </div>
    <!-- Select Box z-index 4 -->
    <div
        class="absolute text-black left-0 right-0 bottom-0 w-2/5 h-1/3 mx-auto"
    >
      <div v-if="isShowButtonGroup" class="flex flex-col space-y-4 max-h-[250px] overflow-y-auto">
        <!--        List Button  -->
        <a-button v-for="(item, idx) in listBtn"
                  :key="idx"
                  class="bg-[#1677ff]"
                  type="primary"
                  @click="handleEventClick(item)">
          {{ item?.text }}
        </a-button>
      </div>
      <div v-if="isShowImage">
        <!--        Show image -->
        <a-button type="primary" class="bg-[#1677ff] w-full" @click="showModal">Xem chi tiết</a-button>
        <a-modal
            v-model:open="open"
            width="100%"
            height="100%"
            wrap-class-name="full-modal"
            @ok="handleOk"
            :closable="false"
        >
          <template #footer>
            <a-button key="submit" class="bg-[#1677ff]" type="primary" @click="handleOk">Đóng</a-button>
          </template>
          <img v-if="isImgOrVideo === undefined" :src="imageShow" width="100%" alt="imageShow"/>
          <iframe v-else width="100%" height="650px" :src="imageShow">
          </iframe>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {conversation} from "~/utils/conversation";

const route = useRoute();
const router = useRouter();
const conversationData = <any>ref(null);
onMounted(() => {
  const id = Number(route.query.id);
  conversationData.value = conversation.find(item => item.id === id)?.conversation;
  loopConversation();
})
let textTyping = ref('');
let textTemp = ref("")
let i = 0;
let flagStop = ref(false);
let imageShow = ref('')
let listBtn = ref([])
let isShowImage = ref(false);
let isShowButtonGroup = ref(false);
let isImgOrVideo = ref(null);
const emit = defineEmits(['playGame'])

function typeWriter() {
  if (i < textTemp.value.length) {
    textTyping.value += textTemp.value[i];
    i++;
    setTimeout(typeWriter, 100);
  } else {
    i = 0;
    flagStop.value = true;
  }
}

let indexConversation = ref(0);

async function handleTyping(speaker: number) {
  if (speaker === 0) {
    textTyping.value = 'Người chơi: '
  } else {
    textTyping.value = 'Hướng dẫn viên: '
  }
  flagStop.value = false;
  await typeWriter();
}

async function loopConversation() {
  if (indexConversation.value === conversationData.value.length) {
    //  play game emit data
    emit('playGame', true);
    return;
  }
  textTemp.value = conversationData.value[indexConversation.value].text;
  await handleTyping(conversationData.value[indexConversation.value].speaker);
  indexConversation.value += 1;
}


function handleEventClick(item: any) {
  if (item.action === 0) {
    //  emit to play game
    emit('playGame', true);
  } else if (item.action === 1) {
    indexConversation.value = item.pos;
    isShowButtonGroup.value = false;
    loopConversation();
  }
}

function handleClickTyping() {
  // skip text
  // show action next, show button, or show image
  if (!flagStop.value) {
    i = textTemp.value.length;
    if (conversationData.value[indexConversation.value - 1].speaker === 0) {
      textTyping.value = 'Người chơi: '
    } else {
      textTyping.value = 'Hướng dẫn viên: '
    }
    textTyping.value += textTemp.value
  } else {
    // set list button
    switch (conversationData.value[indexConversation.value - 1].actionType) {
      case 0:
        // No action
        loopConversation();
        break;
      case 1:
        // Choose
        listBtn.value = conversationData.value[indexConversation.value - 1].buttons
        isShowButtonGroup.value = true;
        break;
      case 2:
        // Show Image
        imageShow.value = conversationData.value[indexConversation.value - 1].image
        isImgOrVideo.value = conversationData.value[indexConversation.value - 1]?.key;
        isShowImage.value = true
        break;
      default:
        break;
    }
  }
}

const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
const handleOk = () => {
  open.value = false;
  isShowImage.value = false;
  loopConversation();
};
</script>
<style lang="scss">
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }

  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .ant-modal-body {
    flex: 1;
  }
}
</style>