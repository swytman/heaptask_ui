<template>
  <div>
    <v-text-field
        label="Название"
        v-model="item.name"
        :rules="nameRules"
        required
    ></v-text-field>
    <v-dialog
        ref="start_dialog"
        persistent
        v-model="modalStart"
        lazy
        full-width
        width="290px"
    >
      <v-text-field
          slot="activator"
          label="Начало"
          v-model="formattedDateStart"
          append-icon="event"
          readonly
      ></v-text-field>
      <v-date-picker
          v-model="item.start"
          scrollable actions
          first-day-of-week="1"
          locale="ru-RU"
      >
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="$refs.start_dialog.save(item.start)">OK</v-btn>
      </v-date-picker>
    </v-dialog>
    <v-dialog
        ref = "end_dialog"
        first-day-of-week="1"
        locale="ru-RU"
        persistent
        v-model="modalEnd"
        lazy
        full-width
        width="290px"
    >
      <v-text-field
          slot="activator"
          label="Конец"
          :value="formattedDateEnd"
          append-icon="event"
          readonly
      ></v-text-field>
      <v-date-picker
        v-model="item.end"
        scrollable actions
        first-day-of-week="1"
        locale="ru-RU"
      >
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="$refs.end_dialog.save(item.end)">OK</v-btn>
      </v-date-picker>
    </v-dialog>
    <v-text-field
        label="Описание"
        v-model = "item.description"
        multi-line
    ></v-text-field>
    <v-btn
        dark
        fab
        fixed
        bottom
        left
        :to="{ name: 'TasksList' }"
    >
      <v-icon>chevron_left</v-icon>
    </v-btn>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {formatDate} from '../../utils/index'
  export default{
    name: 'FormFields',
    data(){
      return {
        valid: true,
        modalStart: false,
        modalEnd: false,
        nameRules: [
          v => !!v || 'Обязательное поле'
        ],
      }
    },

    computed:{
      ...mapGetters({
        item: 'task'
      }),
      formattedDateStart: {
        set(value){
            this.item.start = value;
        },
        get(){
          return formatDate(this.item.start);
        }
      },
      formattedDateEnd: {

        set(value){
          this.item.end = value;
        },
        get(){
            return formatDate(this.item.end);
        }
      }
    },

    methods: {
      formatDate(value){
        return formatDate(value)
      }
    }
  }
</script>
