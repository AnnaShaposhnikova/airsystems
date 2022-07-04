<template>
    <NuxtLink to="/">
        <img src="/img/logo222.png" :height="height">
    </NuxtLink>

</template>

<script>
export default {
    name: "Logo",
    props: {
        height: Number,
    },
}
</script>

<style scoped>

</style>
