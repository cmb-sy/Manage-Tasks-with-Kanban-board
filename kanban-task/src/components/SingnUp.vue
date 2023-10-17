<!-- <template>
  <div>
    <h1>SIGN UP</h1>
    <div>
      <h3>E-mail</h3>
      <input type="text" placeholder="E-mail" v-model="email" />
    </div>
    <div>
      <h3>Password</h3>
      <input type="password" placeholder="Password" v-model="password" />
    </div>
    <button @click="createUserAccount">SIGN UP!!</button>
  </div>
</template>

<script setup>
import firebase from "../firebase.js";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const createUserAccount = () => {
  // ユーザーアカウントを作成するロジックをここに追加
  const user = {
    email: email.value,
    password: password.value,
  };
  firebase.createUser(user); // 仮の createUser 関数でFirebaseアカウントの作成を試みる

  // ここでAPI呼び出しや他のロジックを実行できます
};
</script> -->
