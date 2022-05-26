$("#formulario").submit(function(event) {
    event.preventDefault();
    var nombre, apellidos, fecha, email, contrasenia, dni, telefono, titulacion, edad;

    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    fecha = document.getElementById("fecha").value;
    email = document.getElementById("email").value;
    contrasenia = document.getElementById("contrasenia").value;
    dni = document.getElementById("dni").value;
    telefono = document.getElementById("telefono").value;
    titulacion = document.getElementById("titulacion").value;
    edad = document.getElementById("edad").value;
   
    var datos = [nombre, apellidos, fecha, email, contrasenia, dni, telefono, titulacion, edad];

    document.getElementById("bienvenido_usuario").innerHTML = "Registro correcto " + datos[0] + " " + datos[1];
});

   

