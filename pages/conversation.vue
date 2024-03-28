<template>
  <div class="h-svh relative">
    <div class="absolute flex py-1 pl-1 z-30">
      <a-button class="bg-white" type="default" @click="()=>router.back()">Quay lại</a-button>
    </div>
    <conversation-screen v-if="typeShow === -1" @play-game="switchToGame"/>
    <catch-fish-game :data="data" v-if="typeShow === 1" @callback="savePlayLog"/>
    <!--    <fruit-ninja-game v-if="typeShow === 2"/>-->
  </div>
</template>

<script lang="ts" setup>
import {message} from "ant-design-vue";
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {apiListQuestion, apiSavePlayLog} from "~/api/api";
import {ExceptionMap} from "ant-design-vue/es/result";
import ConversationScreen from "../components/ConversationScreen.vue"
import CatchFishGame from "../components/CatchFishGame.vue"
import FruitNinjaGame from "../components/FruitNinjaGame.vue";
import {useAuthStore} from "~/store/auth";

const route = useRoute();
const router = useRouter();
let id = ref(0);
let data = reactive({});
let typeShow = ref(-1)
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
interface listQuestion {
  id: Number;
}

async function getQuestion(id: listQuestion) {
  const res = await apiListQuestion(id);
  if (res == 401) {
    logUserOut()
    await router.replace("/login")
  }
  else if (res === null) {
    throw ExceptionMap[500];
  } else {
    return res;
  }
}

onMounted(async () => {
  // stage id
  id.value = Number(route.query.id);
  if (id.value > 0) {
    const object = <listQuestion>{id: id.value};
    try {
      data = <any>await getQuestion(object);
    } catch (error) {
      message.error("Có lỗi xảy ra");
      await router.push("/");
    }
  }
});

function switchToGame(flag: boolean) {
  const typeGame = <number>((<Array<any>>data)[0].typeQuestion.id);
  // data = list question
  typeShow.value = 1;
  switch (typeGame) {
    case 1:
      // Tác giả
      break;
    case 2:
      // Tác phẩm
      break;
    case 3:
      // Bối cảnh
      break;
  }
}

async function savePlayLog({score, status} : any) {
  try {
    data = <any> await apiSavePlayLog({
      score: Number(score),
      status: Number(status),
      stage: Number(id.value)
    });
  } catch (error) {
    message.error("Có lỗi xảy ra");
  }
  if (data == 401) {
    logUserOut()
    await router.replace("/login")
  }
  else await router.replace('/');
}
</script>
