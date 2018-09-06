<template>
	<svg class="icon" aria-hidden="true">
			<use :xlink:href="`#icon-${logo}`"></use>
	</svg>
</template>
<style lang="scss" scoped>
.icon {
  /* 通过设置 font-size 来改变图标大小 */
  width: 1em; height: 1em;
  /* 图标和文字相邻时，垂直对齐 */
  vertical-align: -0.1em;
  /* 通过设置 color 来改变 SVG 的颜色/fill */
  fill: currentColor;
  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
      normalize.css 中也包含这行 */
  overflow: hidden;
}
</style>

<script>
	export default {
		name: 'symbolIcon',
		props: {
			logo: String
		}
	}
</script>
