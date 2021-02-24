<template>
  <div class="container w-50 p-4">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Dejanos tu mail:"
        label-for="input-1"

      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Ingresá un mail"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Dejanos tu nombre"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Consulta:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.consulta"
          placeholder="Dejanos tu consulta:"
          required
        ></b-form-input>
      </b-form-group>
    
      <b-button type="reset"  variant="secondary" class="m-2">Cancel</b-button>
      <b-button v-b-modal.modal-1 variant="warning" class="m-2"> Enviar</b-button>
    
    </b-form>
    <LAModal/>
    
  </div>
</template>

<script>
import LAModal from '../components/luzAdentroModalConfirmacion.vue'
  export default {
    components: {LAModal},
    data() {
      return {
        form: {
          email: '',
          name: '',
          consulta: '',

        },
        
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.consulta = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>