<template>
  <div>
    <div class="title">
      <h2>Register</h2>
    </div>
    <div class="container form">
      <label for="name"><b>Name</b></label>
      <input
        v-model="user.name"
        type="text"
        class="input"
        placeholder="Enter Name"
        name="name"
        required
      />
      <label for="uname"><b>Account</b></label>
      <input
        v-model="user.account"
        type="text"
        class="input"
        placeholder="Enter Account"
        name="uname"
        required
      />
      <label for="gender"><b>Gender</b></label>
      <select v-model="user.gender" name="gender" id="gender">
        <option value="0">Male</option>
        <option value="1">Female</option>
      </select>
      <label for="psw"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="input"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button @click.prevent="register" class="button">Register</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth"; // import the auth store we just created

const { registerUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  name: "dotv",
  gender: 0,
  account: "dotv5",
  password: "123456aA@",
});
const router = useRouter();

const register = async () => {
  await registerUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push("/");
  }
};
</script>
