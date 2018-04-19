<template>
    <div class="loader">
        <v-progress-circular indeterminate :size="70" :width="7" color=""></v-progress-circular>
    </div>
</template>

<script>
    export default{
        name: 'Loader',
    }
</script>

<style>
    .loader{
        position: fixed;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: #33333333;
    }
    .progress-circular{
        top: 50px;
    }

</style>
