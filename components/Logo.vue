<template>
    <NuxtLink to="/">
        <img src="/img/logo444.png" :height="height">
    </NuxtLink>
</template>

<script>
export default {
    name: "Logo",
    props: {
        height: String,
    },
}
</script>

<style scoped>

</style>
