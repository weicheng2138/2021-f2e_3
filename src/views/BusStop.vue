<script setup></script>

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
</template>
