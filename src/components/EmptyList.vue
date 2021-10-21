<template>
    <div class="container-empty-list">
       <h2 class="container-empty-list__title">Uh-oh!</h2>
       <p class="container-empty-list__text mt-1">You look lost on your journey!</p> 
       <button class="button bkg-primary mt-3" @click="backHome"> Go back home</button>
    </div>
</template>
<script>
export default {
    methods: {
        backHome(){
            this.$router.push('/')
        }
    }
}
</script>