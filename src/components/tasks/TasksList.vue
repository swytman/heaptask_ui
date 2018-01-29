<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <div class="display-1">Дела</div>
      </v-flex>
    </v-layout>


    <v-layout class="hidden-xs-only">
      <v-flex xs12 sm12 lg12>
        <v-card-text style="height: 0px; position: relative; padding: 0">
          <v-btn
              absolute
              dark
              fab
              top
              small
              right
              :to="{ name: 'CreateTask' }"
              color="success"
          >
            <v-icon>add</v-icon>
          </v-btn>
        </v-card-text>
        <v-data-table
            v-bind:headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
          >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left"> <router-link :to="{name: 'EditTask', params: { id: props.item.id }}">{{ props.item.name }}</router-link></td>
            <td class="text-xs-left">{{ props.item.start | formatDate}}</td>
            <td class="text-xs-left">{{ props.item.end | formatDate}}</td>
            <td class="text-xs-left">{{ props.item.description }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>

    <div  class="hidden-sm-and-up">
      <v-btn
          color="green"
          dark
          fab
          fixed
          bottom
          right
          :to="{ name: 'CreateTask' }"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <template v-for="item in items">
        <v-layout >
          <v-flex xs12>
            <v-card>
              <router-link class="items-list_title" :to="{name: 'EditTask', params: { id: item.id }}">
                <v-card-title class="cyan lighten-4">

                    <span>
                      {{ item.name }}
                    </span>

                </v-card-title>
              </router-link>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>{{ item.description || "<Нет описания>" }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content class="align-start">{{ item.start | formatDate}}</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ item.end | formatDate }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </div>
  </v-container>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  import Auth from '../../mixins/auth'

  export default {
    mixins: [Auth],
    data(){
      return {
        headers: [
          {
            text: '#',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          {text: 'Название', value: 'name', align: 'left'},
          {text: 'Начало', value: 'start', align: 'left'},
          {text: 'Окончание', value: 'end', align: 'left'},
          {text: 'Описание', value: 'description', align: 'left'},

        ]
      }
    },

    computed:{
      ...mapGetters({
        items: 'allTasks'
      })
    },
    methods: {
      ...mapActions([
        'getAllTasks'
      ])
    },
    created(){
      console.log('created!')
      this.getAllTasks()
    }
  }
</script>

<style>
  a.items-list_title{
    text-decoration: none;
    color: black;
    font-size: 14px;
  }
  .items-list_title span{
    width: 100%;
    text-align: center !important;
  }

</style>

