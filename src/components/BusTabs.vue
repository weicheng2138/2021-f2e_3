<script setup>
import { reactive, computed } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useStore } from "vuex";

const store = useStore();
const states = reactive({
    details: computed(() => store.getters["tdxApi/getStopsAndStatus"]),
});


</script>

<template>
    <div class="w-full max-w-md px-2 py-16 sm:px-0">
        <TabGroup>
            <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                <Tab
                    v-for="detail in Object.keys(states.details)"
                    as="template"
                    :key="detail"
                    v-slot="{ selected }"
                >
                    <button
                        :class="[
                            'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                            selected
                                ? 'bg-white shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                        ]"
                    >{{ detail == 0 ? "順向" : "逆向" }}</button>
                </Tab>
            </TabList>

            <TabPanels class="mt-2">
                <TabPanel
                    v-for="(directions, idx) in Object.values(states.details)"
                    :key="idx"
                    :class="[
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    ]"
                >
                    <!-- {{ directions }} -->
                    <div v-for="direction in directions">
                        <h1>{{ direction.StopName.Zh_tw }}</h1>
                        <h1>{{ direction.containsSequenceId }}</h1>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>
