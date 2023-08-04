<template>
  <div>{{ props.msg }}</div>

  <div>
    <button @click="decrementEmit(3)">-</button>&nbsp;<button @click="incrementEmit(5)">+</button>
  </div>
  
</template>

<script setup lang="ts">
const props = defineProps<{ msg: string }>()
const emit = defineEmits(["increment", "decrement"])
const incrementEmit = (i:number) => emit("increment", i)
const decrementEmit = (i:number) => emit("decrement", i)
</script>

<style scoped>
button {
  background-color: #41b883;
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  transition: background-color 0.3s;
  margin: 10px;
}
</style>