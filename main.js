import Nombre from "./nombre.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Cita from "./cita.js"
import Tiempo from "./tiempo.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./paciente-asegurado.js"

class Main{
    constructor(){
        this.n1 = new Nombre("Adrian", "Mendez", "Prado")
        this.n2 = new Nombre("Juan", "Perez", "Gomez")
        this.tiempo = new Tiempo(6,59,"pm")

        let nP = {
            nombre: this.n1,
            fechaNacimiento: new Fecha(new Date(1,1,2001)),
            telefono: "3121115653"
        }
        let nPA = {
            nombre: new Nombre("David", "Loredo", "Ramirez"),
            fechaNacimiento: new Fecha(new Date(12,3,2000)),
            telefono: "3121234567",
            numeroPoliza: 1578,
            fechaFinVigencia: new Fecha(new Date(31,12,2030)),
            compañia: "Segure Server"
        }
        let nD = {
            nombre: this.n2,
            especialidad: "Neurologia",
            telefono: "3120987654",
            cedula: "0808080808"
        }
        let nH = {
            nombre: "GoW Hospital",
            direccion: "Av. Jacinto #3"
        }
        this.hospital = new Hospital(nH)
        this.paciente = new Paciente(nP)
        this.doctor = new Doctor(nD)
        this.pacienteAsegurado = new PacienteAsegurado(nPA)

        let nC = {
            fecha: new Fecha(new Date(15,4,2020)),
            hora: this.tiempo,
            doctor: this.doctor,
            paciente: this.paciente
        }
        this.cita = new Cita(nC)
    }

    probarNombre(){
        console.log(this.n1.getNombreCompleto())
        console.log(this.n1.getApellidoNombre())
        console.log(this.n1.getIniciales())
    }

    probarDoctor(){
        console.log(this.doctor.getPerfil())
    }

    probarPaciente(){
        console.log(this.paciente.getPerfil())
        //testPaciente Asegurado
        console.log(this.pacienteAsegurado.getPerfil())
    }
    probarCita(){
        console.log(this.cita.getCita())
    }

    probarHospital(){
        //prueba1
        console.log(this.hospital.buscarDoctor(this.doctor))
        console.log(this.hospital.buscarCita(this.cita))
        console.log(this.hospital.eliminarDoctor(this.doctor))
        console.log(this.hospital.eliminarCita(this.cita))

        this.hospital.registrarDoctor(this.doctor)
        this.hospital.registrarCita(this.cita)

        //prueba2
        console.log(this.hospital.buscarDoctor(this.doctor))
        console.log(this.hospital.buscarCita(this.cita))
        console.log(this.hospital.eliminarDoctor(this.doctor))
        console.log(this.hospital.eliminarCita(this.cita))

        this.hospital.listarDoctores()
        this.hospital.listarCitas()

        //prueba3
        console.log(this.hospital.registrarDoctor(this.doctor))
        console.log(this.hospital.registrarCita(this.cita))
        console.log(this.hospital.registrarDoctor(this.doctor))
        console.log(this.hospital.registrarCita(this.cita))

        console.log(this.hospital.modificarDoctor(this.doctor, this.doctor))
        console.log(this.hospital.modificarCita(this.cita, this.cita))
        this.hospital.listarDoctores()
        this.hospital.listarCitas()
    }
}
let a = new Main()
a.probarNombre()
a.probarDoctor()
a.probarPaciente()
a.probarCita()
a.probarHospital()