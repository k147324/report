<template>
  <h4>Your Balance</h4>
  <h1 id="Balance">${{ total }}</h1>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>
<style>
h4 {
  margin: 0;
}
h1 {
  margin: 0;
  flex: auto;
}
</style>
