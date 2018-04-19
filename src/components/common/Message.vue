<template>
    <v-snackbar
        :timeout = "timeout"
        :top = true
        :absolute="true"
        color = "red lighten-1"
        v-model = "message"
    >{{message_text}}</v-snackbar>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        name: 'Loader',
        data(){
            return {
                timeout: 5000,
            }
        },
        computed:{
            message: {
                get() { return this.$store.state.common.message; },
                set(value) { this.$store.commit('SET_MESSAGE', value); },
            },
            ...mapGetters({
                message_text: 'message_text',
            })
        },
    }
</script>
