<template>
  <NuxtLink :to="localePath('/')">
    <img src="/img/logo333.png" :height="height" alt="Airsystems logo"/>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    height: String,
  },
};
</script>

<style scoped></style>
