<script setup>
import { ref, reactive, computed } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useStore } from "vuex";


const props = defineProps({
    routeName: String,
});
const store = useStore();
const states = reactive({
    details: computed(() => store.getters["tdxApi/getStopsAndStatus"]),
});


</script>

<template>
    <div class="w-full max-w-md px-2 py-16 sm:px-0">
        <TabGroup :defaultIndex="0">
            <TabList class="flex border-b-4 border-redLight">
                <Tab
                    v-for="direction in Object.keys(states.details.routeStatus)"
                    as="template"
                    :key="direction"
                    v-slot="{ selected }"
                >
                    <button
                        :class="[
                            'w-full py-2.5 text-sm leading-5 font-medium text-gray-400 rounded-t-lg ',
                            'focus:outline-none focus:bg-redLight focus:text-redRegular',
                            selected
                                ? ' bg-redLight text-redRegular'
                                : 'text-gray-400  hover:bg-gray-200  hover:text-white',
                        ]"
                    >{{ direction == 0 ? "去程" : "返程" }}</button>
                </Tab>
            </TabList>

            <TabPanels class="mt-2">
                <TabPanel
                    v-for="(details, idx) in Object.values(states.details.routeStatus)"
                    :key="idx"
                    :class="[
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    ]"
                >
                    <div v-if="props.routeName" class="flex flex-col justify-center px-4">
                        <section class="w-full sm:max-w-5xl md:flex md:gap-8">
                            <div>
                                <header class="flex justify-between">
                                    <h1 class="text-2xl text-redRegular">{{ props.routeName }}</h1>
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </header>
                                <div class="flex flex-col items-start">
                                    <button
                                        v-for="(detail, index) in details"
                                        :key="index"
                                        class="p-4 text-base rounded-lg text-gray-500 w-full flex justify-between items-center hover:bg-greenLight"
                                    >
                                        <h1
                                            class="inline-block font-bold"
                                        >{{ detail.StopName.Zh_tw }}</h1>
                                        <div class="relative flex items-center">
                                            <h2
                                                v-if="!states.details.busAvalibility"
                                                class="text-gray-400"
                                            >尚未發車</h2>
                                            <div v-else>
                                                <h2
                                                    v-if="detail.containsSequenceId"
                                                    :class="{ 'text-redRegular': detail.containsSequenceId }"
                                                >將到站</h2>
                                                <h2 v-else>未到站</h2>
                                            </div>

                                            <svg
                                                v-if="detail.containsSequenceId"
                                                height="40"
                                                width="40"
                                            >
                                                <circle
                                                    cx="20"
                                                    cy="20"
                                                    r="8"
                                                    stroke="#FA728B"
                                                    stroke-width="2"
                                                    fill="transparent"
                                                />
                                                <circle
                                                    cx="20"
                                                    cy="20"
                                                    r="2"
                                                    stroke="#FA728B"
                                                    stroke-width="2"
                                                    fill="#FA728B"
                                                />
                                            </svg>
                                            <svg
                                                v-if="detail.containsSequenceId"
                                                height="40"
                                                width="40"
                                                class="absolute right-0 inline-flex animate-ping"
                                            >
                                                <circle
                                                    cx="20"
                                                    cy="20"
                                                    r="8"
                                                    stroke="#FA728B"
                                                    stroke-width="2"
                                                    fill="transparent"
                                                />
                                                <circle
                                                    cx="20"
                                                    cy="20"
                                                    r="2"
                                                    stroke="#FA728B"
                                                    stroke-width="2"
                                                    fill="#FA728B"
                                                />
                                            </svg>
                                            <svg v-else height="40" width="40">
                                                <circle
                                                    cx="20"
                                                    cy="20"
                                                    r="6"
                                                    stroke="gray"
                                                    stroke-width="2"
                                                    fill="transparent"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div></div>
                        </section>
                    </div>
                    <div v-if="!props.routeName" class="flex justify-center px-4">
                        <h1 class="inline-block my-12">沒有路線資料唷</h1>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>
