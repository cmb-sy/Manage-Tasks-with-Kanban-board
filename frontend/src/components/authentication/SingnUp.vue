<script setup></script>

<template>
  <h1>サインアップページ</h1>
  <form>
    <div class="ml-3 mt-4 w-50">
      <div class="mt-4">
        <p style="font-size: 20px">ユーザー名</p>
        <input type="text" class="form-control" />

        <div class="mt-4">
          <p style="font-size: 20px">メールアドレス</p>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
          />
          <div class="mt-4">
            <p style="font-size: 20px">パスワード</p>
            <input type="password" class="form-control" />
            <div class="mt-4">
              <button
                type="submit"
                class="btn btn-primary"
                style="font-size: 20px"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
