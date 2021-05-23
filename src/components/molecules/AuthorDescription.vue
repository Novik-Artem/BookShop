<template>
  <div :class="$style.authorDescription">
		<div :class="$style.image">
			<img :src="authorImage" alt="">
		</div>
    <div :class="$style.text">{{authorDescription}}</div>
  </div>
</template>

<script>
export default {
  props: {
    authorDescription: String,
		authorImage: String
  },
};
</script>

<style lang="scss" module>
.authorDescription{
	max-width: 1200px;
	padding: 50px 15px 0 15px;
	margin: 0 auto 50px auto;
	display: flex;
	.image{
		width: 200px;
		height: 240px;
		border-radius: 16px;
		overflow: hidden;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.text{
		padding: 0 15px;
		flex: 1 1 66.666%;
		font-size: 16px;
		line-height: 20px;
	}
}
</style>