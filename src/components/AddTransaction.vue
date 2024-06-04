<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="control">
      <label for="text">Text</label>
      <input class="input" type="text" placeholder="Text" v-model="text" />
    </div>
    <div class="control">
      <label class="label">Amount</label>
      <input class="input" type="text" placeholder="Amount" v-model="amount" />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import axios from "axios";
const emit = defineEmits(["transactionSubmitted"]);
const text = ref("");
const amount = ref("");
const onSubmit = () => {
  console.log(text.value, amount.value);

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit("transactionSubmitted", transactionData);
  text.value = "";
  amount.value = "";
};
const getID = (id) => {
  axios
    .get(`http://127.0.0.1:80/products/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
/* methods: {
    saveTransaction() {
      this.transaction.id = Math.floor(Math.random() * 1000000);
      axios
        .post("http://127.0.0.1:80/products", {
          id: this.transaction.id,
          text: this.transaction.text,
          amount: this.transaction.amount,
        })
        .then((res) => {
          console.log(res.data);
        });
      (this.transaction.text = ""), (this.transaction.amount = "");
    },
  },
};*/
/*import { ref } from "vue";

const text = ref("");
const aomunt = ref("");

const emit = defineEmits(["transactionSubmitted"]);
const onSubmit = () => {
  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit("transactionSubmitted", transactionData);
};*/
</script>
<style>
label {
  display: inline-block;
  margin: 10px 0;
}

input[type="text"],
input[type="number"] {
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}

.btn {
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 50%;
}
</style>
