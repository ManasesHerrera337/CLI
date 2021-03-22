<template>
    <input 
    type="text" 
    class="form-control my-2" 
    v-model.trim="tarea.nombre" 
    placeholder="Ingresa tu Nombre"
    >
    
    
    <hr> 

    <div class="form-check form-check-inline">
    <input v-model="tarea.categorias" id="chechk1" class="form-check-input" type="checkbox"  value="JavaScript">
    <label class="form-check-label" for="chechk1">JavaScript</label>
    </div>
    <div class="form-check form-check-inline">
    <input v-model="tarea.categorias" id="chechk2" class="form-check-input" type="checkbox" value="Python">
    <label class="form-check-label" for="chechk2">Python</label>
    </div>

    <hr>

    <div class="form-check form-check-inline">
    <input v-model="tarea.plataforma" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="POO">
    <label class="form-check-label" for="inlineRadio1">POO</label>
    </div>
    <div class="form-check form-check-inline">
    <input v-model="tarea.plataforma" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="NO POO">
    <label class="form-check-label" for="inlineRadio2">NO POO</label>
    </div>

    <div class="mt-2"> <!-- trasnformadon el string en numero v-model.number -->
    <input type="number" v-model.number="tarea.number" class="form-control">
    </div>

    <br>
    <button 
        type="submit" 
        class="btn btn-info btn-block mt-2"
        :disabled="bloquer" 
    >Enviar</button>
    
</template>

<script>


export default {
    props:{
        tarea: Object
    },
    
    computed: {
      bloquer(){
        return this.tarea.nombre.trim() === "" ? true : false
      }
  }
}
</script>
