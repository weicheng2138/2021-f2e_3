<script setup>
import { ref } from "vue";
import Landing from "./components/Landing.vue";
import MenuDropdown from "./components/MenuDropdown.vue";

let counter = ref(0);
let landing = ref(true);
let active = ref(true);

setInterval(() => {
	counter.value++;
}, 1000);

setTimeout(() => {
	landing.value = false;
}, 1000);
</script>

<template>
	<Landing v-if="landing" />
	<div v-else>
		<main>
			<router-view />
		</main>
		<footer class="md:fixed md:bottom-0 bg-gray-300 flex justify-center items-center h-14 w-full p-2">
			<p class="text-gray-400 text-xs sm:text-xs">
				全台公車動態時刻查詢應用服務 The F2E 3rd | Design By Winnie Tsao
				© 2021
			</p>
		</footer>
	</div>
</template>
