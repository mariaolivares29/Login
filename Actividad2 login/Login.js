let usuario = "mariaoli"
let contrasena = "12345"
let resultado_usua
let resultado_contra

let validacion_user = prompt("Ingrese su usuario")

do {

    if (validacion_user !== usuario) {
        validacion_user = prompt("Usuario incorrecto, intente nuevamente")

    } else {

        resultado_usua = validacion_user
        let validacion_contra = prompt("Ingrese su contraseña")

        do {

            if(validacion_contra !== contrasena){
                validacion_contra = prompt("Contraseña incorrecta, intente nuevamente")

            }else {
                resultado_contra = validacion_contra
            }

        } while (resultado_contra !== validacion_contra)

    }
} while (resultado_usua !== validacion_user)

alert("Bienvenido al sistema")