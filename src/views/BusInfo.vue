<script setup>
import InputDropdown from "@/components/InputDropdown.vue";
import Header from "@/components/Header.vue";
const props = defineProps({
	inputData: String,
});
</script>

<template>
	<Header />
	<div class="flex justify-center">
		<section class="flex flex-col gap-7 sm:flex-row sm:max-w-5xl">
			<div
				class="
					p-2
					flex flex-col
					gap-3
					justify-start
					sm:w-[340px]
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
	</div>
</template>
