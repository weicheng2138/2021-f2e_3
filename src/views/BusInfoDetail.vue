<script setup>
import { reactive, onMounted, computed } from "vue";
import Header from "@/components/Header.vue";
import BusTabs from "@/components/BusTabs.vue";
import { useStore } from "vuex";

const props = defineProps({
	routeName: String,
});
const STOP_STATUS = {
	NOT_IN_PROCESS: "今日未營運",
	NOT_LAUNCH: "尚未發車",
	LAST_PASSED: "末班已過",
	APPROACHING: "將到站",
};

const store = useStore();
const states = reactive({
	busInfoStops: computed(() => store.state.tdxApi.busInfoStops),
	busInfoStatus: computed(() => store.state.tdxApi.busInfoStatus),
	details: computed(() => store.getters["tdxApi/getStopsAndStatus"]),
});

onMounted(() => {
	if (props.routeName) {
		// console.log(props.routeName);
		store.dispatch("tdxApi/getBusInfoDetail", props.routeName);
		// console.log(store.getters["tdxApi/getBusInfos"]);
	}
});
</script>

<template>
	<Header />
	<router-link
		to="/businfo"
		class="inline-block pl-3 pb-2 text-base text-gray-400"
	>
		<svg
			class="inline-block h-5 w-5 transform transition duration-1000 ease-out rotate-90"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 25 20"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
		回到「公車動態」
	</router-link>
	<BusTabs :routeName="props.routeName" />
</template>
