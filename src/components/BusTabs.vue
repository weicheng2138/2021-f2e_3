<script setup>
import { ref } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const props = defineProps({
    routeName: String,
});

let categories = ref({
    Recent: [
        {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
        },
    ],
    Popular: [
        {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
    ],
})


</script>

<template>
    <div class="w-full max-w-md px-2 py-16 sm:px-0">
        <TabGroup>
            <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                <Tab
                    v-for="category in Object.keys(categories)"
                    as="template"
                    :key="category"
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
                    >{{ category }}</button>
                </Tab>
            </TabList>

            <TabPanels class="mt-2">
                <TabPanel
                    v-for="(posts, idx) in Object.values(categories)"
                    :key="idx"
                    :class="[
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    ]"
                >
                    <ul>
                        <li
                            v-for="post in posts"
                            key="post.id"
                            class="relative p-3 rounded-md hover:bg-coolGray-100"
                        >
                            <h3 class="text-sm font-medium leading-5">{{ post.title }}</h3>

                            <ul
                                class="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500"
                            >
                                <li>{{ post.date }}</li>
                            </ul>/>
                        </li>
                    </ul>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>