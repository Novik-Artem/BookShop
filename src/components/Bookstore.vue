<template>
	<div :class="[$style.conteiner, getIsBurgerOpen ? $style.aOpen : '']">
		<header :class="$style.header">
			<div :class="$style.title">Remarque's books</div>
			<div :class="[$style.openBurger, getIsBurgerOpen ? $style.isOpen : '']" @click="onOpen"><span></span></div>
		</header>
		<Burger v-if="getIsBurgerOpen"/>
		<div :class="$style.content">
			<Menu  />
			<div :class="$style.books">
				<Book v-for="book in getRemarkBooks" :key="book.id" :bookName="book.name" :bookPrice="book.price" :id="book.id" :bookImage="book.image" :bookDes="book.des" :isAddToBasket="book.isAddToBasket"/>
			</div>
		</div>
	</div>
</template>
<script>
import Book from "./Book";
import Menu from "./Menu";
import Burger from "./Burger";
import { mapGetters , mapMutations } from "vuex";
export default {
name: "App",
computed: mapGetters(["getRemarkBooks", "getIsBurgerOpen"]),
components: {
	Book,
	Menu,
	Burger
},
methods: {
	...mapMutations(["openBurger"]),
	onOpen() {
		this.openBurger()
	}
}
}
</script>
<style lang="scss" module>
.openBurger{
	display: none;
	position: absolute;
	top: 22px;
	right: 10px;
	width: 30px;
	height: 19px;
	cursor: pointer;
}
@media (max-width: 768px) {
      .openBurger {
         display: block;
      }
		.title {
			font-size: 20px;
			letter-spacing: 4px;
		}
}
.openBurger:before,
.openBurger:after{
content:'';
background-color:black;
position: absolute;
width: 100%;
height: 2px;
right: 0;
transition: all 0.3s ease 0s;
}
.openBurger:before{
top: 0;
}
.openBurger:after{
bottom: 0;
}
.openBurger span{
background-color: black;
position: absolute;
width: 100%;
height: 2px;
right: 0;
top: 9px;
transition: all 0.3s ease 0s;
}
.isOpen:before{
	transform: rotate(45deg);
	top: 9px;
}
.isOpen:after{
	transform: rotate(-45deg);
	top: 9px;
}
.openBurger.isOpen span{
	transform: scale(0);
}
body {
	margin: 0;
	overflow: auto;
	/*overflow: hidden;  ?*/
	background-color: #f0e8d2;
}
.header{
	text-align: center;
	padding: 15px 0 15px 0;
	background-color: #706d51;
	position: fixed;
	width: 100%;
	z-index: 2;
}
.content {
	display: flex;
	padding: 60px 0 0 0;
}
.conteiner{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	height: 100vh;
}
.conteiner.aOpen {
	overflow: hidden;
}
.title {
	font-size: 25px;
	letter-spacing: 5px;
}
.books {
	display: flex;
	flex-wrap: wrap;
	justify-content:center;
}
@media (max-width: 768px) {
      .books {
         display: block;
			width: 100%;
      }
}
@media (max-width: 410px) {
      .title {
			letter-spacing: normal;
      }
}
</style>

