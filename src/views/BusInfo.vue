<script setup>
import InputDropdown from "@/components/InputDropdown.vue";
const props = defineProps({
	inputData: String,
});
</script>

<template>
	<header class="bg-white shadow" v-if="$route.meta.title">
		<div
			class="
				flex
				justify-between
				px-4
				py-6
				mx-auto
				max-w-7xl
				sm:px-6
				lg:px-8
			"
		>
			<router-link to="/" class="inline-block">
				<img src="@/assets/images/logo-header.svg" alt="logo-header" />
			</router-link>
		</div>
	</header>
	<section class="flex flex-col gap-7 sm:flex-row sm:max-w-5xl">
		<div
			class="
				p-2
				flex flex-col
				gap-3
				justify-start
				w-full
				border-t-4 border-greenRegular
			"
		>
			<h1 class="text-2xl text-greenRegular">公車動態</h1>
			<p class="text-gray-400 text-base">
				指定公車路線，查看公車途經站牌及動態
			</p>

			<span class="text-base text-greenDark">路線名稱 或 關鍵字</span>
			<InputDropdown v-model:infoData="inputData" />
			<div class="flex justify-center">
				<router-link
					to="/businfo"
					class="
						inline-flex
						items-center
						justify-center
						w-3/5
						py-4
						text-base
						font-medium
						leading-6
						text-white
						transition
						duration-150
						ease-in-out
						bg-greenRegular
						border border-transparent
						rounded-md
						hover:bg-greenLight hover:text-greenDark
						focus:outline-none
					"
					>搜尋</router-link
				>
			</div>
		</div>
	</section>
</template>
