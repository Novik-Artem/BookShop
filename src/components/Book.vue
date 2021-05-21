<template>
   <div :class="$style.book" >
      <img :src="bookImage" alt="" :class="$style.image">
      <div :class="$style.info">
         <div :class="$style.name">{{ bookName }}</div>
         <div :class="$style.price">{{ bookPrice }}руб</div>
         <div :class="$style.buttons">
            <div :class="$style.description" @click="BookDes(), $router.push('/Bookdescription')">Открыть описание</div>
            <div :class="$style.add" v-if="!isAddToBasket" @click="Add">Добавить в корзину</div>
            <div :class="$style.yesAdd" v-else>Добавлено</div>
         </div>
      </div>
   </div>
</template>
<script>
   import { mapMutations } from "vuex";
   export default {
      components: {
      },      
      props: {
         bookPrice: Number,
         id: Number,
         bookImage: String,
         bookDes: String,
         bookName: String,
         isAddToBasket: Boolean
      },
      methods: {
         ...mapMutations(["openDes", "addCounter", "addToBasket"]),
         BookDes() {
            this.openDes(this.id)
         },
         Add() {
            this.addToBasket(this.id)
         }
      }
   }
</script>
<style lang="scss" module>
   .book {
   /*display: flex;
   flex-direction: column;*/
   margin: 20px 40px 0 40px;
   padding: 4.3px;
   border: 2px solid #706d51;
   border-radius: 8px;
}
.yesAdd {
   text-align: center;
   margin: 0  0 10px 0;
   padding: 3px;
   border: #706d51 solid 2px;
   background-color:#706d51;
   color: #000;
   border-radius: 5px;
}
.name {
   text-align: center;
   font-size: 20px;
   margin: 0 0 0.5rem 0;
   max-width: 200px;
}
.image {
   /*max-width: 200px;*/
   max-width: 200px;
   max-height: 300px;
   margin: 0 0 0.5rem 0;
}
.price {
   text-align: center;
   font-size: 20px;
   margin: 0 0 0.5rem 0;
}
.buttons {
   display: flex;
   flex-direction: column;
}
.description {
   cursor: pointer;
   margin: 0 0 0.5rem 0;
   text-align: center;
}
.add {
   text-align: center;
   margin: 0  0 10px 0;
   cursor: pointer;
   padding: 3px;
   border: #a59a48 solid 2px;
   border-radius: 5px;
}
@media (max-width: 1370px) {
	.book {
      margin: 20px 30px 0 30px;
	}
}
@media (max-width: 1275px) {
	.book {
      margin: 20px 20px 0 20px;
	}
}
@media (max-width: 1195px) {
	.book {
      margin: 20px 10px 0 10px;
	}
}
@media (max-width: 882px) {
	.book {
      margin: 20px 30px 0 30px;
      padding:5px;
	}
}
@media (max-width: 768px) {
   .book {
      display: flex;
      margin: 10px 10px 0 10px;
   }
   .image {
      max-width: 50%;
      max-height: 100%;
      display: block;
      margin: 0 15px 0 0;
   }
   .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 0 20px 0;
   }
   .name {
      margin: 0 0 20px 0;
      font-size: 25px;
   
   }
   .price {
      margin: 0 0 20px 0;
      font-size: 25px;
   }
   .buttons {
      display: flex;
      flex-direction: column;
   }
   .description {
      margin: 0 0 20px 0;
      font-size: 25px;
   }
   .add {
      font-size: 25px;
   }
}
@media (max-width: 550px) {
   .image {
      margin: 0 7.5px 0 0;
   }
   .name {
      margin: 0 0 10px 0;
      font-size: 17px;
   
   }
   .price {
      margin: 0 0 10px 0;
      font-size: 17px;
   }
   .buttons {
      display: flex;
      flex-direction: column;
   }
   .description {
      margin: 0 0 10px 0;
      font-size: 17px;
   }
   .add {
      font-size: 17px;
   }
}
@media (max-width: 360px) {
	.add {
      font-size: 13.8px;
	}
   .description {
      font-size: 14.5px;
   }
}
</style>