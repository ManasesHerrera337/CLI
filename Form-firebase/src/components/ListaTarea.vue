<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Plataforma</th>
      <th scope="col">Número</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="item in tareas" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.nombre}}</td>
      <td>
          <ul>
              <li v-for="i in item.categorias" :key="i.id" >{{i}}</li>
          </ul> 
        </td>
      <td>{{item.plataforma}}</td>
      <td>{{item.number}}</td>
      <td>
          <button @click="deleteTareas(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
          <router-link :to="{
            name: 'Editar', // Este en el name de la ruta que configuras en el router
            params: {
              id: item.id
            }
          }" class="btn btn-info ml-5 btn-sm">
            Editar
          </router-link>
      </td>
    </tr>
   
   
  </tbody>
</table>
</template>

<script>
import {mapActions, mapState} from 'vuex'



export default {
    computed:{
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTareas'])
    }
}
</script>

