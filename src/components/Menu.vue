<template>
      <div :class="$style.list">
         <span :class="$style.item" @click="$router.push('/ItemsInCart')">Товары в корзине</span>
         <span :class="$style.item" @click="$router.push('/Balans')">Баланс</span>
         <span :class="$style.item" @click="$router.push('/User')">Пользователь</span>
         <span :class="$style.item" @click="$router.push('/Author')">Автор</span>
      </div>
</template>

<style lang="scss" module>
   .list {
      background-color: #faef9f;
      display: flex;
      flex-direction: column;
   }
   .item:first-child {
      margin: 20px 0 0 0;
   }
   .item {
      text-decoration: none;
      color: #000;
      font-size: 18px;
      letter-spacing: 2.5px;
      min-width: 200px;
      cursor: pointer;
      text-align: center;
      margin: 20px 0 0 0;
   }
   @media (max-width: 768px) {
      .list {
         display: none;
      }
   }
</style>
