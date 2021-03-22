<template>
    <h2>Editar</h2>

    <div class="container">
        <form @submit.prevent="updateTarea(tarea)">
            <Input :tarea="tarea"/>
        </form>
    </div>


</template>

<script>

import {mapActions, mapState} from 'vuex'
import Input from '@/components/Input'


export default {
    components:{
        Input
    },
    computed: {
        ...mapState(['tarea'])
    },
    methods: {
        ...mapActions(['setTarea', 'updateTarea'])
    },
    //funcions que se auto ejecutan cuando se carga la vista
    created() {
        this.setTarea(this.$route.params.id)
    }
}
</script>

