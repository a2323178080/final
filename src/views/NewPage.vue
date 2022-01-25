<template>
  <div class="row">
    <div class="col-4">
      選單幹幹幹這頁是NewPage
    </div>

    <div class="col-8">
      <router-view></router-view>
      <router-link to="/NewPage/a">連結到a</router-link>
    </div>
  </div>
</template>



