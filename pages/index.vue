<template>
  <div class="h-auto content-center space-y-6 py-10">
    <div class="text-black text-2xl">Lựa chọn phân vùng muốn tìm hiểu</div>
    <a-button class="bg-[#1677ff]" type="primary" size="large" :disabled="btnBack" @click="backLayer">Quay
      lại</a-button>
    <div class="flex justify-center items-center">
      <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 3xl:grid-cols-5 gap-10">
        <!-- tree map list with level -->
        <a-card v-for="(item, key) in currentList" :key="key" hoverable style="width: 350px">
          <template #cover>
            <img :alt="key + 'image'" :src="item.image" style="min-height: 250px;" />
          </template>
          <template #actions>
            <!-- <div class="px-2">
              <a-progress :percent="item.percent" />
            </div> -->
            <div v-if="item.id" class="flex space-x-1 justify-center items-center h-8">
              <span>Trạng thái: </span>
              <a-tag :color="arrayStatus[item.status]?.color">{{ arrayStatus[item.status]?.title }}</a-tag>
            </div>
            <a-button v-if="item.id" @click="playGame(item.id)">Tìm hiểu</a-button>
            <a-button v-else @click="detailBlock(item.key)">Xem chi tiết</a-button>
          </template>
          <a-card-meta :title="item.title" :description="item.subTitle">
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import StackClass from "../utils/stack";
import { ref, watch } from 'vue'
// status
const arrayStatus = <any>ref({
  success: {
    color: 'success',
    title: 'Pass'
  },
  default: {
    color: 'default',
    title: 'Todo'
  },
  error: {
    color: 'error',
    title: 'Fail'
  },
})

let currentList = <any>ref([])

let idChapter = <string | null><unknown>ref(null);
let idStage = new StackClass<string>(5);
let idLayer = ref(0);
onMounted(() => {
  currentList.value = arrayChapter;
  idChapter = 'chapter_1';
  idLayer.value = 1
})

function playGame(id: number) {
  console.log(id, "===id");
}

function detailBlock(key: string) {
  console.log(key + '', "===Detail");
  idStage.push(key);
  switch (idLayer.value) {
    case 1:
      idLayer.value = 2
      currentList.value = (arrayAuthor as any)[key];
      break;
    case 2:
      idLayer.value = 3
      currentList.value = (arrayWork as any)[key];
      break;
    default:
      idLayer.value = 1
      currentList.value = arrayChapter;
      break;
  }
}

let btnBack = computed<boolean>(() => {
  if (idLayer.value > 1) {
    return false
  }
  return true
})
function backLayer() {

  switch (idLayer.value) {
    case 3:
      idStage.pop();
      idLayer.value = 2
      currentList.value = (arrayAuthor as any)[idStage.peek() + ''];
      break;
    case 2:
      idStage.pop();
      idLayer.value = 1
      currentList.value = arrayChapter;
      break;
    default:
      idLayer.value = 1
      currentList.value = arrayChapter;
      break;
  }
}
</script>
