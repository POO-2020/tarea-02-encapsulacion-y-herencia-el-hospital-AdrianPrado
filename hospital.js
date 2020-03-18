export default class Hospital{

  constructor(
    {nombre, direccion}
    )
  {
      this._nombre = nombre
      this._direccion = direccion
      this._doctores = new Array()
      this._citas = new Array()
  }

  registrarDoctor(doctor){
      let registrar = this.buscarDoctor(doctor)
      if(registrar == null){this._doctores.push(doctor);
          return true}
      else
      {return false}
  }

  buscarDoctor(doctor){
          let buscar = this._doctores.find(doc => doc._esIgualA(doctor))
          if(buscar == undefined){return null}
          else {return buscar}
  }

  eliminarDoctor(doctor){
      let eliminar =  this.buscarDoctor(doctor)
      if(eliminar == null) return false
      else {
      let i = this._doctores.indexOf(eliminar)
      this._doctores.splice(i,1)
      return true
      }
  }
  modificarDoctor(doctor, nuevoDoctor){
      let modificar =  this.buscarDoctor(doctor)
      if(modificar == null) return false
      else {
      let i = this._doctores.indexOf(modificar)
      this._doctores[i] = nuevoDoctor
      return true
      }
  }

  listarDoctores(){
      this._doctores.forEach( (doct, i) => {
          console.log(`(${i+1}) ${doct.getPerfil()}`)
      })
  }

  registrarCita(cita){
      let registrar = this.buscarCita(cita)
    
      if(registrar == null){this._citas.push(cita);
          return true}
      else
      {return false}
  }

  buscarCita(cita){
          let buscar = this._citas.find(cit => cit._esIgualA(cita))
          if(buscar == undefined){return null}
          else {return buscar}
  }

  eliminarCita(cita){
      let eliminar =  this.buscarCita(cita)
      if(eliminar == null) return false
      else {
      let i = this._citas.indexOf(eliminar)
      this._citas.splice(i,1)
      return true
      }
  }
  modificarCita(cita, nuevaCita){
      let modificar =  this.buscarCita(cita)
      if(modificar == null) return false
      else {
      let i = this._citas.indexOf(modificar)
      this._citas[i] = nuevaCita
      return true
      }
  }

  listarCitas(){
      this._citas.forEach( (cita, i) => {
          console.log(`(${i+1}) ${cita.getCita()}`)
      })
  }
}