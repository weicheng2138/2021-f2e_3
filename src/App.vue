<script setup>
import { ref } from "vue";
import Landing from "./components/Landing.vue";

let counter = ref(0);
let landing = ref(true);

setInterval(() => {
	counter.value++;
}, 1000);

setTimeout(() => {
	landing.value = false;
}, 2000);
</script>

<template>
	<Landing v-if="landing" />
	<div v-else>
		<header class="bg-white shadow" v-if="$route.meta.title">
			<div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<h1
					@click="counter = 0"
					class="text-3xl font-bold leading-tight text-gray-900"
				>
					{{ $route.meta.title }} / {{ counter }}
				</h1>
			</div>
		</header>
		<main>
			<router-view />
		</main>
	</div>
</template>
