<template>
      <div :class="$style.list">
         <span :class="$style.item" @click="$router.push('/ItemsInCart')">Товары в корзине</span>
         <span :class="$style.item" @click="$router.push('/Balans')">Баланс</span>
         <span :class="$style.item" @click="$router.push('/User')">Пользователь</span>
         <span :class="$style.item" @click="$router.push('/Author')">Автор</span>
      </div>
</template>
<script>
   import { mapGetters } from "vuex";
   export default {
      computed: mapGetters(["getIsBurgerOpen"]),
   }
</script>
<style lang="scss" module>
   
      .list {
         display: none;
      }
      .item {
         text-decoration: none;
         color: #000;
         margin: 0 10px 13px 5px;
         padding: 20px 0 0 0;
         font-size: 18px;
         letter-spacing: 2.5px;
         min-width: 200px;
         cursor: pointer;
      }
      @media (max-width: 768px) {
      .list {
         background-color: #faef9f;
         display: flex;
         flex-direction: column;
         position: fixed;
         top: 0;
         left: 0;
         width: 100vw;
         height:100vh;
         text-align: center;
         transition: all 0.5s ease 0s;
         padding: 70px 0 0 0;
      }
   }
</style>