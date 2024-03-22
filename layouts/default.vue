<template>
  <div class="mainContent">
    <a-layout>
      <a-layout-header class="headerStyle"
        ><ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li v-if="!authenticated" class="loginBtn" style="float: right">
            <nuxt-link to="/login">Login</nuxt-link>
          </li>
          <li v-if="!authenticated" class="registerBtn" style="float: right">
            <nuxt-link to="/register">Register</nuxt-link>
          </li>
          <li v-if="authenticated" class="loginBtn" style="float: right">
            <nuxt-link @click="logout">Logout</nuxt-link>
          </li>
        </ul></a-layout-header
      >
      <a-layout-content class="contentStyle"><slot /></a-layout-content>
      <a-layout-footer class="footerStyle"><h1>Footer</h1></a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
import type { CSSProperties } from "vue";

const router = useRouter();

const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>
<style lang="scss" scoped>
.headerStyle {
  text-align: "center";
  color: "#fff";
  height: 15vh;
  padding-inline: 50;
  line-height: "64px";
  background-color: "#7dbcea";
}

.contentStyle {
  text-align: "center";
  min-height: 70vh;
  line-height: "120px";
  color: "#fff";
  background-color: "#108ee9";
}

.footerStyle {
  text-align: "center";
  color: "#fff";
  height: 15vh;
  background-color: "#7dbcea";
}
</style>
