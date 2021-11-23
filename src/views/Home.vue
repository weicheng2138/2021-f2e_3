<script setup></script>

<template>
	<div class="bg-gray-50 flex flex-col items-center gap-5 p-4">
		<img src="@/assets/images/logo.svg" alt="app-logo" class="w-24 mt-14" />
		<img
			src="@/assets/images/logo-letters.svg"
			alt="logo-title"
			class="w-40"
		/>
		<div
			class="
				flex flex-col
				gap-2
				justify-start
				w-full
				border-t-4 border-greenRegular
			"
		>
			<h1 class="text-2xl text-greenRegular">站牌搜尋</h1>
			<p class="text-gray-400 text-base">
				指定站牌，查看有哪些公車路線經過
			</p>

			<span class="text-base text-greenDark">路線名稱 或 關鍵字</span>
			<input
				class="
					z-10
					w-full
					rounded-lg
					text-gray-400
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
				placeholder="路線名稱"
			/>
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
						hover:bg-yellowLight hover:text-greenDark
						focus:outline-none
					"
					>搜尋</router-link
				>
			</div>
		</div>
		<div class="flex flex-col gap-2 w-full border-t-4 border-yellowRegular">
			<h1 class="text-2xl text-yellowRegular">站牌搜尋</h1>
			<p class="text-gray-400 text-base">
				指定站牌，查看有哪些公車路線經過
			</p>

			<span class="text-base text-yellowDark">路線名稱 或 關鍵字</span>
			<input
				class="
					z-10
					w-full
					rounded-lg
					text-gray-400
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
				placeholder="路線名稱"
			/>
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
	</div>
</template>
