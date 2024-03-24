<template>
  <a-card title="Đăng ký tài khoản" style="width: 40%">
    <template #extra>
      <div class="space-x-1">
        <span>Đã có tài khoản?</span>
        <nuxt-link class="text-[#1677ff]" to="/login">Đăng nhập</nuxt-link>
      </div>
    </template>
    <div>
      <a-form class="space-y-10" :model="user" name="login" autocomplete="off" @finish="onFinish"
        :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }" @finishFailed="onFinishFailed">
        <a-form-item label="Họ và tên" name="name" :rules="[{ required: true, message: 'Xin hãy nhập họ và tên!' }]">
          <a-input v-model:value="user.name" />
        </a-form-item>
        <a-form-item label="Tài khoản" name="account" :rules="[{ required: true, message: 'Xin hãy nhập tài khoản!' }]">
          <a-input v-model:value="user.account" />
        </a-form-item>
        <a-form-item label="Giới tính" name="gender" :rules="[{ required: true, message: 'Xin hãy chọn giới tính!' }]">
          <a-select v-model:value="user.gender" placeholder="Xin hãy chọn giới tính">
            <a-select-option :value="0">Nam</a-select-option>
            <a-select-option :value="1">Nữ</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Mật khẩu" name="password" :rules="[{ required: true, message: 'Xin hãy nhập mật khẩu!' }]">
          <a-input-password v-model:value="user.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 6, span: 12 }">
          <a-button class="w-full bg-[#1677ff]" type="primary" html-type="submit" :loading="loadingRegister">Đăng ký</a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-card>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth"; // import the auth store we just created
import { message } from 'ant-design-vue';
definePageMeta({
  layout: "login",
});
const { registerUser } = useAuthStore(); // use authenticateUser action from  auth store

interface UserRegisterPayLoadInterface {
  name: string;
  gender: number;
  account: string;
  password: string;
}

const user = reactive<UserRegisterPayLoadInterface>({
  name: "",
  gender: 0,
  account: "",
  password: "",
});

const loadingRegister = ref(false);

const onFinish = async (values: any) => {
  loadingRegister.value = true;
  await register();
  loadingRegister.value = false;
};

const onFinishFailed = (errorInfo: any) => {
};


const router = useRouter();

const register = async () => {
  const isSuccess = await registerUser(user); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (isSuccess) {
    message.success("Đăng ký thành công");
    setTimeout(() => {
      router.push("/login");
    }, 2000)
  } else {
    message.error("Đăng ký không thành công");
  }
};
</script>
