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
	</div>
</template>
