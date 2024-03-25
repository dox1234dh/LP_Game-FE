<template>
  <div class="h-svh">
    <ConversationScreen/>
  </div>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { apiListQuestion, apiSavePlayLog } from "../api/api";
import { ExceptionMap } from "ant-design-vue/es/result";
const route = useRoute();
const router = useRouter();
let id = ref(0);
let data = reactive({});

interface listQuestion {
  id: Number;
}

async function getQuestion(id: listQuestion) {
  const res = await apiListQuestion(id);
  if (res === null) {
    throw ExceptionMap[500];
  } else {
    return res;
  }
}

onMounted(async () => {
  id.value = Number(route.query.id);
  if (id.value > 0) {
    const object = <listQuestion>{ id: id.value };
    try {
      data = <any>await getQuestion(object);
    } catch (error) {
      message.error("Có lỗi xảy ra");
      router.push("/");
    }
  }
});
</script>
