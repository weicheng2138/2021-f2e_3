<script setup>
import InputDropdown from "@/components/InputDropdown.vue";
import Header from "@/components/Header.vue";
const props = defineProps({
	inputData: String,
});
</script>

<template>
	<Header />
	<div class="flex justify-center px-4 sm:px-6">
		<section class="w-full sm:max-w-5xl md:flex md:gap-8">
			<div
				class="
					p-2
					flex flex-col
					gap-3
					justify-start
					md:w-[340px]
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

			<div
				class="
					p-2
					flex flex-col
					gap-3
					flex-grow
					justify-start
					border-t-4 border-blueRegular
				"
			>
				<h1 class="text-2xl text-blueRegular">搜尋結果</h1>
				<p class="text-gray-400 text-base">總共有 000 筆結果</p>
				<div
					class="
						md:h-[480px]
						p-10
						flex
						gap-8
						justify-center
						items-center
						bg-blueLight
					"
				>
					<img
						src="@/assets/images/clock.png"
						alt="clock"
						class="h-32 md:h-1/3"
					/>
					<img
						src="@/assets/images/bus-stop.png"
						alt="bus-stop"
						class="w-1/3"
					/>
					<div class="flex flex-col items-center gap-6">
						<h1 class="text-blueRegular text-sm">
							這裡現在沒有公車
						</h1>
						<h1 class="text-blueRegular text-sm">
							可以搜尋公車在哪裡
						</h1>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
