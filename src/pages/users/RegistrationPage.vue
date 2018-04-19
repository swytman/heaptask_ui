<template>
  <v-form v-model="valid" ref="form">
    <v-layout justify-center align-center>
      <v-flex xs10 sm8 md6 lg4>
        <v-card flat ref="form">
          <v-card-title class="login__title mt-4">
            <span class="title mb-0">Регистрация</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
                name="email"
                v-model="form.email"
                label="Email"
                :rules="emailRules"
                @keyup="validateFrom"
                required
            ></v-text-field>
            <v-text-field
                name="password"
                v-model="form.password"
                :rules="passwordRules"
                @keyup="validateFrom"
                label="Пароль"
                type="password"
                required
            ></v-text-field>
            <v-text-field
                name="password_confirmation"
                v-model="form.password_confirmation"
                label="Пароль еще раз"
                type="password"
                @keyup="validateFrom"
                :rules="passwordRules"
                required
            ></v-text-field>
          </v-card-text>
          <div class="text-xs-center">
            <v-btn
                @click="createAccount"
                color="success"
                :disabled="!valid"
            >
              Создать аккаунт
            </v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data(){
      return {
        valid: false,
        form: {
          email: '',
          password: '',
          password_confirmation: '',
        },
        emailRules: [
          v => {
            return !!v || 'Обязательное поле'
          },
          v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Неверный формат email'
        ],
        passwordRules:[
          v => {
            return v.length > 3 || 'Не меньше 4 символов'
          },
          v => {
            return this.form.password==this.form.password_confirmation || 'Пароли не совпадают'
          }
        ]
      }
    },

    computed:{

    },
    methods: {
      ...mapActions([
        'create',
      ]),
      validateFrom(){
        this.$refs.form.validate()
      },
      async createAccount(){
        let result = await this.create({user: this.form});
        if (result) this.$router.push({name: 'TasksList'});
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