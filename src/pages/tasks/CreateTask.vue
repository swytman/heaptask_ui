<template>
  <v-container grid-list-md text-xs-center>
    <router-link :to="{ name: 'TasksList' }">Return to Items</router-link>
    <v-form v-model="valid" ref="form" lazy-validation  v-if="item">
      <form-fields></form-fields>
    </v-form>
    <v-btn
        color="success"
        dark
        fab
        fixed
        bottom
        right
        @click="createItem"
        :disabled="!valid"
    >
      <v-icon>check</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  import {formatDate} from '../../utils/index'
  import FormFields from './FormFields.vue'
  import { mapActions, mapGetters} from 'vuex'

  export default{
    components: {FormFields},
    data(){
      return {
        valid: true,
        task_template: {
          name: '',
          description: '',
          start: null,
          end: null
        }

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

      async createItem(){
        await this.createTask(this.item)
        this.$router.push({ name: 'TasksList' })
      },
      ...mapActions([
        'createTask'
      ]),
    },

    created: function () {
      this.$store.commit("RECEIVE_TASK", {task: this.task_template})
    },

  }
</script>
