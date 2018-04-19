<template>
  <v-app id="heaptask-ui">
    <v-navigation-drawer
        fixed
        clipped
        app
        v-model="drawer"
    >
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" :to="{ name: item.route }">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      dark
      color="grey darken-3"
      clipped-left
      fixed
      app
    >
      <v-toolbar-title class="white--text">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        Heaptask
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        :to = "{ name: 'LoginPage' }"

        icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <message></message>
      <loader v-if="loading"></loader>
      <router-view>

        <v-container fluid></v-container>
      </router-view>
    </v-content>
  </v-app>
</template>
<script>
    import Loader from '../components/common/Loader.vue'
    import Message from '../components/common/Message.vue'
    import { mapGetters } from 'vuex'
    export default{
      components: {Loader, Message},
      data: () => ({
        drawer: false,
        items: [
          { title: 'Дела', route: 'TasksList', icon: 'business_center' }
        ]
      }),
      computed:{
        ...mapGetters({
            loading: 'loading'
        })
      },
    }
</script>
