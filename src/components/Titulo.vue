<template>
  <h1>{{ texto }}</h1>
</template>

<script>
export default {
  props: { texto: String },
};
</script>

<style>
  h1 {
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px 2px #373345;
  }
</style>