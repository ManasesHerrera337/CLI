import { createStore } from 'vuex'

// tengo que importar le router para poder redirigir el sistema deespues de actualizar los datos
import router from '../router'


export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      plataforma: '',
      number: 0
    }

  },
  mutations: { // funciones que ejecutan la logica 
    set(state, payload){
      state.tareas.push(payload)
      // localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      // actualizando tambien la data en el navegador
      // localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },

    tarea(state, payload){
      //validando para prevenir que el usuario acceda a la pagina editar sin haber datos en el objeto
      if (!state.tareas.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      // find() sirve para buscar un elemento especifico dentro de un objeto o array
      // Buscando y guardando un elemento por su id
      state.tarea = state.tareas.find(item => item.id === payload)
    },

    // Actualizando los datos
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      
      // redirigiendo a la pagina principal, para esto tengo que haber importado el router arriba
      // localStorage.setItem('tareas', JSON.stringify(state.tareas))
      router.push('/')
    },


 
    cargar(state, payload){
      state.tareas = payload
    }



  },
  actions: { //llamadas a las las funiones que ejecutan 


    //enviando los datos a Firebase
    async setTareas({commit}, tarea){
      try{
        const rest = await fetch(`https://form-firebase-e9f08-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea) // convirtiendo los datos a formato json para enviar a firebase
        })

        

      }catch(error){
        console.log(error)
      }
      
      
      
      commit('set', tarea)
    },

    // Trayendo la data de firebase
    async cargarFirebase({commit}){
      try{


        const rest = await fetch('https://form-firebase-e9f08-default-rtdb.firebaseio.com/tareas.json')
        const dataDB = await rest.json() // siempre hay que usar await cuando se espera respuesta
        
        const arrayTareas = []

        for (let id in dataDB) {
          arrayTareas.push(dataDB[id])
        }

        commit('cargar', arrayTareas)
          

      }catch(error){
        console.log(error)
      }
    },



    deleteTareas({commit}, id){
      commit('eliminar', id)
    },

    setTarea({commit}, id){
      commit('tarea', id)
    },
    
    updateTarea({ commit }, tarea){
      commit('update', tarea)
    },

    // cargarLocalStorage({commit}){
    //   //validando que tengas tareas guardadas
    //   if (localStorage.getItem('tareas')) {
    //     const tareas = JSON.parse(localStorage.getItem('tareas'))
    //     commit('cargar', tareas) 
    //     return
    //   }


    //   //CREANDO LA BASE DE DATOS EN EL NAVEGADOR
    //   localStorage.setItem('tareas', JSON.stringify([]))

    // }
    
  },
  modules: {
  }
})
