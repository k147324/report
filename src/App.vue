<template>
  <Header />
  <div class="container">
    <AddTransaction @transactionSubmitted="handleTransactionSumbmitted" />
    <Balance :total="+total" />
    <IncomeExpense :income="+income" :expense="+expense" />
    <TransactionList
      :transactions="transactions"
      @transactionDeleted="handleTransactionDelete"
    />
   
  </div>
  <div></div>
</template>

<script setup>
//:income="income" :expense="expense,:total="+total""
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
let transactions = ref([]);
onMounted(() => {
  axios
    .get("http://44.195.182.83:3000/products")
    .then((response) => {
      transactions.value = response.data;
      console.log(transactions);
    })
    .catch((error) => {
      console.log(error);
    });
});
const expense = computed(() => {
  return Number(transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0));
});
const income = computed(() => {
  return Number(transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0));
});

const handleTransactionSumbmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });
  axios
    .post("http://44.195.182.83:3000/products", {
      id: transactions.value.at(-1).id,
      text: transactions.value.at(-1).text,
      amount: transactions.value.at(-1).amount,
    })
    .then((res) => {
      console.log(res.data);
    });
};
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};
const handleTransactionDelete = async (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
  const url = `http://44.195.182.83:3000/products/${id}`;
  console.log(url);
  axios
    .delete(url)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
const getID = (id) => {
  axios
    .get(`http://44.195.182.83:3000/products/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
/*const handleDeleted = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
};*/

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});
</script>

<style>
.container {
  margin: 30px auto;
  width: 400px;
}
</style>
