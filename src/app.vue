<script setup>
  const count = ref(0);
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button @click="count++">increment</button>
    {{count}}    
  </div>
</template>
