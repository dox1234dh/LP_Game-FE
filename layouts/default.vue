<template>
  <a-layout>
    <a-layout-header class="headerMenu">
      <a-page-header class="demo-page-header" style="border: 1px solid rgb(235, 237, 240)" title="Literature Puzzle"
        sub-title="Made by HNUE team">
        <template #extra>
          <a-button v-if="authenticated" class="bg-[#1677ff]" key="1" type="primary" @click="logout">Đăng xuất</a-button>
        </template>
      </a-page-header>
    </a-layout-header>
    <a-layout-content class="contentStyle">
      <slot />
    </a-layout-content>
    <a-layout-footer class="footerStyle">
      <h1>Copyright © Author dotv5</h1>
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const router = useRouter();

const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>
<style lang="scss" scoped>
.headerMenu {
  background-color: #fff;
  height: auto;
  padding-inline: 0;
}
.contentStyle {
  text-align: center;
  min-height: 90vh;
  color: #fff;
  background-color: #DFF5FF;
  position: relative;
}

.footerStyle {
  text-align: center;
  color: #000;
  @apply px-4 bg-[#EEEEEE];
}

.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style>
