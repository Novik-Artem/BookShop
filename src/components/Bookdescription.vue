<template>
   <div class="conteiner">
      <div :class="$style.title">{{ getChosenBook.name }}</div>
      <div :class="$style.bookdes">
         <img :src="getChosenBook.image" alt="" :class="$style.image">
         <div :class="$style.description">
            {{ getChosenBook.bookdes }}
         </div>
      </div>
   </div>  
</template>
<script>
   import{ mapGetters}from "vuex"
   export default {
      computed: mapGetters(["getChosenBook"]),
      props: {
         bookDes: String
      },
      methods: {
      }
   }
</script>
<style lang="scss" module>
   body {
	margin: 0;
	overflow: auto;
   font-family: Avenir, Helvetica, Arial, sans-serif;
   background-color: rgb(235, 238, 216);
}
   .title {
	text-align: center;
	padding: 15px 0 15px 0;
	background-color: #706d51;
	font-size: 25px;
	margin: 0 0 20px 0;
   letter-spacing: 5px;
}
.bookdes {
   display: flex;
   align-items: center;
}
   .image {
   max-width: 400px;
   max-height: 500px;
   margin: 0 0 1rem 1rem;
}
   .description {
      font-size: 20px;
      max-width: 600px;
      min-height: 470px;
      margin: 0 0 0 20px;
      line-height: 33px;
      padding: 5px;
   }
   .basket {
   text-align: center;
   cursor: pointer;
   font-size: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #706d51;
   max-width: 320px;
   margin: 0 0 0 17px;
}
.counter {
   padding: 0 50px;
}
.item {
   font-size: 30px;
}
@media (max-width: 800px) {
	.description {
      font-size: 17px;
	}
   .bookdes {
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
}
@media (max-width: 500px) {
	.image {
      max-width: 300px;
      max-height: 400px;
      margin: 0 0 0.1rem 0;
   }
   .title {
      margin: 0 0 10px 0;
   }
}
</style>