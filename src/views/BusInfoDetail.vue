<script setup>
import { reactive, onMounted, computed } from 'vue';
import Header from "@/components/Header.vue";
import { useStore } from "vuex";

const props = defineProps({
    routeName: String,
});

const store = useStore();
const states = reactive({
    busInfoDetails: computed(() => store.state.tdxApi.busInfoDetails),
});

onMounted(() => {
    if (props.routeName) {
        // console.log(props.routeName);
        store.dispatch('tdxApi/getBusInfoDetail', props.routeName)
    }

});
</script>

<template>
    <Header />
    <router-link to="/businfo" class="inline-block pl-3 pb-2 text-base text-gray-400">
        <svg
            class="inline-block h-5 w-5 transform transition duration-1000 ease-out rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
            />
        </svg>
        回到「公車動態」
    </router-link>
    <div class="flex flex-col justify-center px-4">
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
                        v-for="(detail, index) in states.busInfoDetails.Stops"
                        :key="index"
                        class="p-4 font-bold text-base rounded-lg text-gray-500 w-full flex justify-between items-center hover:bg-greenLight"
                    >
                        <h1 class="inline-block">{{ detail.StopName.Zh_tw }}</h1>
                        <div class="flex items-center">
                            <h2>狀態</h2>
                            <svg v-if="index === 2" height="40" width="40">
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="10"
                                    stroke="#FA728B"
                                    stroke-width="2"
                                    fill="transparent"
                                />
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="4"
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
</template>
