<template>
<div class="error-wrapper">
   <div class="error-404">
    
    <h1 v-if="error.statusCode === 404">Page is not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">На головну</NuxtLink>
  </div>
</div>
 
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
