<template>
  <v-container grid-list-md text-xs-center>
    <v-form v-model="valid" ref="form" lazy-validation  v-if="item">
      <form-fields></form-fields>
    </v-form>
    <v-btn
        color="red"
        dark
        fab
        fixed
        bottom
        @click="deleteItem"
    >
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn
        color="success"
        dark
        fab
        fixed
        bottom
        right
        @click="updateItem"
    >
      <v-icon>check</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  import {formatDate} from '../../utils'
  import FormFields from './FormFields.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default{
    components: {FormFields},
    data(){
      return {
        valid: true,

      }
    },

    computed:{
      ...mapGetters({
        item: 'task'
      })
    },


    methods: {
      formatDate(value){
        return formatDate(value)
      },

      deleteItem(){
        this.deleteTask(this.$route.params.id)
        this.$router.push({ name: 'TasksList' })
      },
      updateItem(){
        this.updateTask(this.item)
        this.$router.push({ name: 'TasksList' })
      },
      ...mapActions([
        'getTask',
        'updateTask',
        'deleteTask'
      ]),
    },

    created: function () {
      this.getTask(this.$route.params.id);
    },

  }
</script>
