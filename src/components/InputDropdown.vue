<script setup>
import { reactive, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const dropdown = reactive({
	selectedItem: "",
	opened: false,
	panel: [
		"紅",
		"幹線",
		"1",
		"2",
		"3",
		"黃",
		"小",
		"4",
		"5",
		"6",
		"藍",
		"棕",
		"7",
		"8",
		"9",
		"紅",
		"橘",
		"0",
		"backspace",
	],
});

const props = defineProps({
	infoData: String,
});
const emit = defineEmits(["update:infoData"]);

const target = ref(null);
onClickOutside(target, () => (dropdown.opened = false));

const setDropdownSelected = (item) => {
	if (item !== "backspace") {
		dropdown.selectedItem += item;
		emit("update:infoData", dropdown.selectedItem);
	} else {
		dropdown.selectedItem = dropdown.selectedItem.slice(0, -1);
		emit("update:infoData", dropdown.selectedItem);
	}
};

const setDropdownClicked = () => {
	dropdown.opened = !dropdown.opened;
};
</script>

<template>
	<div ref="target" class="transition duration-500 ease-in-out">
		<!-- This example requires Tailwind CSS v2.0+ -->
		<button
			type="button"
			class="
				inline-flex
				justify-between
				items-center
				px-5
				rounded-md
				w-full
				h-14
				border border-gray-300
				shadow-sm
				bg-white
				text-base
				font-medium
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
			"
			id="menu-button"
			aria-expanded="true"
			aria-haspopup="true"
			@mousedown="setDropdownClicked()"
		>
			{{
				dropdown.selectedItem ? dropdown.selectedItem : "請選擇路線名稱"
			}}
			<!-- Heroicon name: solid/chevron-down -->
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
				:class="{ 'rotate-180': dropdown.opened }"
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
		</button>

		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0"
		>
			<div
				v-if="dropdown.opened"
				class="
					grid grid-cols-5
					gap-1
					mt-2
					p-2
					rounded-md
					shadow-lg
					bg-white
					ring-1 ring-black ring-opacity-5
					focus:outline-none
					h-auto
					overflow-hidden
					sm:absolute sm:w-96
				"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
			>
				<button
					v-for="(item, index) in dropdown.panel"
					:key="index"
					@click="setDropdownSelected(item)"
					class="
						p-2
						border-2
						rounded-md
						text-sm
						hover:bg-gray-600 hover:text-white
					"
					:class="{ 'col-span-2': item === '0' }"
				>
					<div v-if="item !== 'backspace'">
						{{ item }}
					</div>
					<svg
						v-else
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 m-auto"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
						/>
					</svg>
				</button>
			</div>
		</transition>
	</div>
</template>
