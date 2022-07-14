<template>
    <NuxtLink to="/">
        <img src="/img/logo333.png" :height="height"/>
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
