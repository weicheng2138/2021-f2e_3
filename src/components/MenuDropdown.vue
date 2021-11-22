<template>
	<div class="w-56 text-right">
		<Menu as="div" class="relative inline-block text-left">
			<div>
				<MenuButton
					class="
						inline-flex
						justify-center
						w-full
						px-4
						py-2
						text-sm
						font-medium
						text-white
						bg-black
						rounded-md
						bg-opacity-20
						hover:bg-opacity-30
						focus:outline-none
						focus-visible:ring-2
						focus-visible:ring-white
						focus-visible:ring-opacity-75
					"
				>
					借 / 還車
					<svg
						class="
							-mr-1
							ml-2
							h-5
							w-5
							transform
							transition
							duration-1000
							ease-out
						"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</MenuButton>
			</div>

			<transition
				enter-active-class="transition duration-100 ease-out"
				enter-from-class="transform scale-95 opacity-0"
				enter-to-class="transform scale-100 opacity-100"
				leave-active-class="transition duration-75 ease-in"
				leave-from-class="transform scale-100 opacity-100"
				leave-to-class="transform scale-95 opacity-0"
			>
				<MenuItems
					class="
						absolute
						right-0
						w-36
						mt-2
						origin-top-right
						bg-white
						divide-y divide-gray-100
						rounded-md
						shadow-lg
						ring-1 ring-black ring-opacity-5
						focus:outline-none
					"
				>
					<div class="px-1 py-1">
						<MenuItem v-slot="{ active }">
							<button
								:class="[
									active
										? 'bg-primary text-white'
										: 'text-gray-900',
									'group flex rounded-md items-center w-full px-2 py-2 text-sm',
								]"
							>
								借 / 還車
							</button>
						</MenuItem>
						<MenuItem v-slot="{ active }">
							<button
								:class="[
									active
										? 'bg-primary text-white'
										: 'text-gray-900',
									'group flex rounded-md items-center w-full px-2 py-2 text-sm',
								]"
							>
								自行車道
							</button>
						</MenuItem>
					</div>
				</MenuItems>
			</transition>
		</Menu>
	</div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
