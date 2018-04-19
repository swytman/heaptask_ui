<template>
  <v-layout justify-center align-center>
    <v-flex xs10 sm8 md6 lg4>
      <v-card flat ref="form">
        <v-card-title class="login__title mt-4">
          <span class="title mb-0">Войдите</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
              name="email"
              v-model="form.email"
              label="Email"
              :rules="emailRules"
              counter
          ></v-text-field>
          <v-text-field
              name="password"
              v-model="form.password"
              label="Пароль"
              type="password"
          ></v-text-field>
        </v-card-text>
        <div class="text-xs-center">
          <v-btn
              @click="login"
              color="success"
          >
            Войти
          </v-btn>
          <v-btn
              :to="{ name: 'RegistrationPage' }"
          >
            Регистрация
          </v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data(){
      return {
        form: {
          email: '',
          password: ''
        },
        emailRules: [
          v => {
            return !!v || 'E-mail is required'
          },
          v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    },

    computed:{

    },
    methods: {
      ...mapActions([
        'authenticate',
      ]),
      async login(){
        let result = await this.authenticate(this.form);
        if (result){
          this.$router.push({name: 'TasksList'});
        }
      },
    },
    created(){

    }
  }
</script>

<style>
  .login__title{
    background-color: #ffcc80;
  }
</style>