<template>
  <v-app>
    <v-content>
      <router-view>
        <v-container fluid></v-container>
      </router-view>
    </v-content>
  </v-app>
</template>
<script>
    export default{
      created(){
        console.log(123);
      }
    }
</script>
