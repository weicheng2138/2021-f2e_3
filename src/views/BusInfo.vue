<script setup>
import { ref, reactive, onMounted, computed } from 'vue';

import InputDropdown from "@/components/InputDropdown.vue";
import Header from "@/components/Header.vue";
import { useStore } from "vuex";

const props = defineProps({
	inputData: String,
});
const input = ref('')

const store = useStore();
const states = reactive({
	busInfos: computed(() => store.state.tdxApi.busInfos),
});

const onClickSearch = () => {
	store.dispatch('tdxApi/getBusInfo', input.value)
}

onMounted(() => {
	if (props.inputData) {
		store.dispatch('tdxApi/getBusInfo', props.inputData)
	}

});
</script>

<template>
	<Header />
	<div class="flex justify-center px-4">
		<section class="w-full sm:max-w-5xl md:flex md:gap-8">
			<div class="p-2 flex flex-col gap-3 justify-start md:w-[340px] border-t-4 border-greenRegular">
				<h1 class="text-2xl text-greenRegular">公車動態</h1>
				<p class="text-gray-400 text-base">指定公車路線，查看公車途經站牌及動態</p>

				<span class="text-base text-greenDark">路線名稱 或 關鍵字</span>
				<InputDropdown v-model:infoData="input" />
				<div class="flex justify-center">
					<button
						:disabled="store.state.tdxApi.isLoading"
						:class="{ 'cursor-not-allowed': store.state.tdxApi.isLoading }"
						@click="onClickSearch()"
						class="inline-flex items-center justify-center w-3/5 py-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-greenRegular border border-transparent rounded-md hover:bg-greenLight hover:text-greenDark focus:outline-none"
					>
						<span v-if="!store.state.tdxApi.isLoading">搜尋</span>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mx-auto animate-spin"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div
				v-if="states.busInfos.length === 0"
				class="p-2 flex flex-col gap-3 justify-start md:w-full border-t-4 border-blueRegular"
			>
				<h1 class="text-2xl text-blueRegular">搜尋結果</h1>
				<p class="text-gray-400 text-base">總共有 000 筆結果</p>
				<div class="md:h-[480px] p-10 flex gap-8 justify-center items-center bg-blueLight">
					<img
						src="@/assets/images/clock.png"
						alt="clock"
						class="h-32 md:h-2/5 md:transform md:translate-y-20"
					/>
					<img src="@/assets/images/bus-stop.png" alt="bus-stop" class="w-1/3" />
					<div class="flex flex-col items-center gap-6">
						<h1 class="text-blueRegular text-sm">這裡現在沒有公車</h1>
						<h1 class="text-blueRegular text-sm">可以搜尋公車在哪裡</h1>
					</div>
				</div>
			</div>
			<div
				v-else
				class="p-2 flex flex-col gap-3 justify-start md:w-full border-t-4 border-blueRegular"
			>
				<h1
					class="text-2xl text-blueRegular"
				>搜尋：「{{ input ? input : (inputData ? inputData : "台北市全部公車") }}」</h1>
				<section class="flex flex-wrap sm:justify-around mb-14">
					<button
						v-for="busInfo in states.busInfos"
						:key="busInfo.RouteUID"
						class="w-[210px] p-4 m-1 flex flex-col items-start rounded-lg hover:bg-blueLight"
					>
						<h4 class="text-gray-500">{{ busInfo.RouteName.Zh_tw }}</h4>
						<p
							class="text-gray-400"
						>{{ busInfo.DepartureStopNameZh }} - {{ busInfo.DestinationStopNameZh }}</p>
					</button>
				</section>
			</div>
		</section>
	</div>
</template>
