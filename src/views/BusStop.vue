<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
	<Header />
	<div class="flex justify-center px-4 sm:px-6">
		<section class="sm:max-w-5xl">
			<div
				class="
					p-2
					flex flex-col
					gap-3
					w-full
					sm:w-[340px]
					border-t-4 border-yellowRegular
				"
			>
				<h1 class="text-2xl text-yellowRegular">站牌搜尋</h1>
				<p class="text-gray-400 text-base">
					指定站牌，查看有哪些公車路線經過
				</p>

				<span class="text-base text-yellowDark">站牌關鍵字</span>
				<input
					class="
						z-10
						w-full
						rounded-lg
						border-2 border-gray-300
						text-gray-500
						placeholder-gray-400
						hover:bg-gray-100
						focus:outline-none
						focus:ring-2
						focus:ring-offset-2
						focus:ring-offset-gray-100
						focus:ring-indigo-500
						transition
						duration-500
						ease-in-out
						h-14
						pl-5
						mb-3
						md:mb-0 md:mr-3
					"
					type="text"
					placeholder="請輸入站牌關鍵字"
				/>
				<div class="flex justify-center">
					<router-link
						to="/busstop"
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
							bg-yellowRegular
							border border-transparent
							rounded-md
							hover:bg-yellowLight hover:text-yellowDark
							focus:outline-none
						"
						>搜尋</router-link
					>
				</div>
			</div>
		</section>
	</div>
</template>
