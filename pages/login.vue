<template>
  <a-card title="Đăng nhập" style="width: 40%">
    <template #extra>
      <div class="space-x-1">
        <span>Không có tài khoản?</span>
        <nuxt-link class="text-[#1677ff]" to="/register">Đăng ký</nuxt-link>
      </div>
    </template>
    <div>
      <a-form class="space-y-10" :model="user" name="login" autocomplete="off" @finish="onFinish"
        :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }" @finishFailed="onFinishFailed">
        <a-form-item label="Tài khoản" name="account" :rules="[{ required: true, message: 'Xin hãy nhập tài khoản!' }]">
          <a-input v-model:value="user.account" />
        </a-form-item>

        <a-form-item label="Mật khẩu" name="password" :rules="[{ required: true, message: 'Xin hãy nhập mật khẩu!' }]">
          <a-input-password v-model:value="user.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 6, span: 12 }">
          <a-button class="w-full bg-[#1677ff]" type="primary" html-type="submit" :loading="loadingLogin">Đăng nhập</a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-card>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useRouter } from "vue-router";
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
import { message } from 'ant-design-vue';
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

const loadingLogin = ref(false);

const onFinish = async (values: any) => {
  loadingLogin.value = true;
  await login();
  loadingLogin.value = false;
};

const onFinishFailed = (errorInfo: any) => {
};

const router = useRouter();

const login = async () => {
  await authenticateUser(user); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated.value) {
    message.success('Đăng nhập thành công')
    setTimeout(() => {
      router.push("/");
    }, 2000)
  } else {
    message.error("Có lỗi xảy ra");
  }
};
</script>
