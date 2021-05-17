<template>
    <figure class="card-img">
        <img :src="src" class="card-img-top img-fluid ">
    </figure>
</template>

<script>
export default {
    props: {
        src: String,
    }
}
</script>
