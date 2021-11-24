<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const path = computed(() => route.path);

const menuOpened = ref(false);
const onOpen = () => {
	menuOpened.value = !menuOpened.value;
};
</script>
<template>
	<header class="bg-white" v-if="$route.meta.title">
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
			<router-link to="/" class="z-50 inline-block">
				<img src="@/assets/images/logo-header.svg" alt="logo-header" />
			</router-link>
			<button @click="onOpen()" class="z-50">
				<svg
					v-if="menuOpened"
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
				<svg
					v-else
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
			<div
				v-if="menuOpened"
				class="
					z-40
					absolute
					inset-0
					backdrop-filter backdrop-blur-lg
					flex flex-col
					justify-center
					items-center
					gap-8
				"
			>
				<router-link
					v-if="path !== '/businfo'"
					to="/businfo"
					class="inline-block font-bold text-gray-600"
				>
					公車動態
				</router-link>
				<router-link
					v-if="path !== '/busstop'"
					to="/busstop"
					class="inline-block font-bold text-gray-600"
				>
					站牌搜尋
				</router-link>
				<!-- <router-link
					to="/"
					class="z-50 inline-block"
					:disabled="true"
					:event="true ? 'click' : ''"
				>
					
				</router-link> -->
				<p class="text-gray-400">路線規劃 (即將推出)</p>
			</div>
		</div>
	</header>
</template>
