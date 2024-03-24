<template>
  <div class="h-screen bg-gradient-to-r from-purple-500 to-pink-500">
    <div
      class="flex w-full h-full justify-center items-center flex-col space-y-5"
    >
      <span class="text-3xl text-white"
        >Chào mừng đến với chương trình thử nghiệm ứng dụng văn học vào trò
        chơi</span
      >
      <a-card title="Đăng nhập" style="width: 40%">
        <template #extra>
          <div class="space-x-1">
            <span>Không có tài khoản?</span>
            <nuxt-link class="text-[#1677ff]" to="/register">Đăng ký</nuxt-link>
          </div>
        </template>
        <div class="flex flex-col space-y-2 p-1">
          <a-form
            :model="user"
            name="login"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              label="Tài khoản"
              name="account"
              :rules="[{ required: true, message: 'Xin hãy nhập tài khoản!' }]"
            >
              <a-input v-model:value="user.account" />
            </a-form-item>

            <a-form-item
              label="Mật khẩu"
              name="password"
              :rules="[{ required: true, message: 'Xin hãy nhập mật khẩu!' }]"
            >
              <a-input-password v-model:value="user.password" />
            </a-form-item>

            <a-form-item>
              <a-button
                class="w-full bg-[#1677ff]"
                type="primary"
                html-type="submit"
                >Đăng nhập</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </a-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
definePageMeta({
  layout: "login",
});
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

interface UserPayloadInterface {
  account: string;
  password: string;
}

const user = reactive<UserPayloadInterface>({
  account: "",
  password: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
  login();
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const router = useRouter();

const login = async () => {
  await authenticateUser(user); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push("/");
  }
};
</script>
