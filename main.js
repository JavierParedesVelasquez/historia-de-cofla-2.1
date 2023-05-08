// Crear una variable
// Esto va ser la entrada, cuando la entrada, cuando el pase pase a ser gratis lo convertiremos en true.
let free = false;

// Creando funcion flecha
// time vendria a ser el parametro de horario porque le vamos a pedir horario
const validarCliente = (time) => {
    // Pedir edad
    let edad = prompt("¿Cual es tu edad?");
    // Vamos hacer una validacion
    if (edad > 18) {
        // Si es mayor de edad, aplicamos un if dentro de un if(otra validacion)
        // como tenemos && si cualquiera de estas condiciones no se cumple no se ejecuta
        // Si el horario es igual o mayor a las 2 de la mañana, y ademas (&&) el horario time es menor(antes) que las 7 y ademas de eso free es false, se cumpliria y mandaria la alerta de podes pagar gratis:
        if (time >= 2 && time < 7 && free == false) {
            alert("Puedes pasar gratis porque eres la primera persona en pasar las 2AM.");
            free = true;
        } else {//de lo contrario pagarias entrada
            alert(`Son las ${time}:00Hs y puedes pasar, pero tienes que pagar entrada.`);
        }
    } else {
        alert("Mira papu, eres menor de edad y por ende no vas a pasar, MAQUINOLA.");
    }
}
// Orden en time de como se va ejecutar
validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);