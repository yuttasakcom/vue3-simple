<template>
  <main>
    counter: {{ counter.count }}
    <HelloWorld
    msg="Welcome to Your Vue.js + TypeScript App"
    @increment="increment"
    @decrement="decrement"
    />

    Number of post: {{countPosts}}<br />
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.id }}.{{ post.title }}
      </li>
    </ul>
  </main>
</template>


<script setup lang="ts">
import { storeToRefs } from 'pinia'
import HelloWorld from '@/components/HelloWorld.vue'

// global state
import {useCounterStore} from "@/stores/counter"
import { usePostStore } from "@/stores/posts"

const counter = useCounterStore()
const increment = (i:number) => counter.increment(i)
const decrement = (i:number) => counter.decrement(i)
// const counter = reactive({ count: 0 })
// const increment = (i:number) => counter.count += i
// const decrement = (i:number) => counter.count -= i

const { posts, countPosts } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()
fetchPosts()

</script>
