<template>




    <!-- @submit.prevent sirve para no actualizar la pagina cuando se enviar el formulario  -->
  <form @submit.prevent="enviarDatos" class="container">
      <!-- v-model.trim se usa para limpiar el campo después de enviar  -->
      <!-- También se usa para limpiar de los espacios en blanco -->
      <Input :tarea="tarea" /> 

      <!-- :disabled="bloquer"  Bloquear o desbloquear el boton cuando haya datos -->
  </form>

  <br><br>
  <div class="container">
    <ListaTarea />
  </div>
  


</template>

<script>
import { computed } from 'vue'

// primero debemos importar el objeto mapActions de vuex
import {mapActions} from 'vuex'

//usando el generador de ids
const shortid = require('shortid')


import Input from '../components/Input.vue'
import ListaTarea from '../components/ListaTarea.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Input, ListaTarea
  },
  
 

  data(){
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        plataforma: '',
        number: 0
      }
    }
  },

  methods: {
    ...mapActions(['setTareas']), //luego lo llamamos 
    enviarDatos(){
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === "") {
        alert("Campo Vacío")
        return //contando el codigo javascript
      }

      // Generando ids aleatorio y no se repite
      this.tarea.id = shortid.generate()
      
      // el envio de datos
      this.setTareas(this.tarea)

      // limpiando los campos
      this.tarea = {
          id: '',
          nombre: '',
          categorias: [],
          plataforma: '',
          number: 0
      }

    }
  }



}
</script>
