export default class Doctor{

  constructor(
    {nombre, especialidad, telefono, cedula}
    )
  {
      this._nombre=nombre
      this._especialidad=especialidad
      this._telefono=telefono
      this._cedula=cedula
  }

  getPerfil()
  {
      return (`${this._cedula}, ${this._especialidad}, ${this._nombre.getNombreCompleto()}, ${this._telefono}`)
  }

  getApellidoPaterno(){
      return this._nombre.getApellidoPaterno()
  }

  _esIgualA(doc){
      if(doc._getCedula() == this._cedula){ return true}
      else {return false}
  }

  _getCedula(){
      return this._cedula
  }
}