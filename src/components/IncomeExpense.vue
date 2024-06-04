<template>
  <div class="Income-Expense-Container">
    <div id="Income" class="Income">Income:{{ income }}</div>
    <div id="Expense" class="Expense">Expense:{{ expense }}</div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});

/*props.transactions.amount.forEach((e) => {
  var total = 0;
  total += e > 0 ? e : 0;
  Income = total;
});*/
</script>
<style>
.Income-Expense-Container {
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.Income {
  text-align: center;
  color: green;
}
.Expense {
  text-align: center;
  color: red;
}
</style>
