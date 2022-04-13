<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="password">Hasło</label>
      <input type="password" id="password" v-model="password" /><br />
      <button>Zaloguj się</button>
    </div>
  </form>
</template>
