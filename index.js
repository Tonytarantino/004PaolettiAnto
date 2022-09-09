//-->cursos disponibles
const cursos = [
  { nombre: "Microbit", dificultad: " (Dificultad: Fácil)" },
  { nombre: "Videojuegos", dificultad: " (Dificultad: Media)" },
  { nombre: "Arduino", dificultad: " (Dificultad: Dificil)" },
];
let cursoSeleccionado = [];
//--> pregunta si el usuario/a esta interesado en inscribise
let seleccion = prompt(
  "Hola. ¿Deseas inscribirte a alguno de nuestros cursos?"
);

//-->Mientras la respuesta sea diferente
while (seleccion != "si" && seleccion != "no") {
  alert(
    "Por favor, ingresa -si- si quieres incribirte. Ingresa -no- si no quieres inscribirte y continuar."
  );
  seleccion = prompt("Hola. ¿Deseas inscribirte a alguno de nuestros cursos?");
}
//--> si la respuesta es si...
if ((seleccion = "si")) {
  alert("Estos son los cursos que tenemos para ofrecerte:");
  //>recorrer cursos
  let todosLosCursos = cursos.map(
    (cursos) => cursos.nombre + "" + cursos.dificultad
  );
  alert(todosLosCursos.join(" | "));
} else if (seleccion != "no") {
  //si dice que no
  alert(
    "Gracias por visitarnos. Encontrá más información en nuestro sitio www.****.com.ar"
  );
}

//-->mientras la rta sea diferente a no, selecciona un caso.
while (seleccion != "no") {
  /*  let curso = prompt(
    "Selecciona el curso que deseas realizar colocando su número correspondiente (recordá que podes inscribirte en un solo curso por cuatrimestre) 01 = Microbit  |  02 = Videojuegos  |  03 = Arduino"
  ); */
  let preguntaCurso = prompt(
    "Selecciona el curso que deseas realizar colocando su número correspondiente (recordá que podes inscribirte en un solo curso por cuatrimestre) 01 = Microbit  |  02 = Videojuegos  |  03 = Arduino"
  );
  switch (preguntaCurso) {
    case "01":
      alert("felicitaciones! elegiste Microbit");
      console.log(respuesta);
      break;
    case "02":
      alert("felicitaciones elegiste Videojuegos");
      break;
    case "03":
      alert("felicitaciones elegiste Arduino");
      break;
    default:
      alert("selecciona nuevamente");
      break;
  }

  /*   cursoSeleccionado.push(cursos.nombre);
  console.log(cursoSeleccionado); */

  //-->mientras la rta sea diferente a no, selecciona un caso.
  /*   if ((curso === "1", curso === "2", curso === "3")) {
  
    switch (curso) {
      case "1":
        alert("Felicitaciones! Elegiste el crsuo de Microbit")
        break;
      case "2":
        alert("Felicitaciones! Elegiste el crsuo de Videojuegos")
        break;
      case "3":
        alert("Felicitaciones! Elegiste el crsuo de Arduino")
        break;
      default:
        break;
    } */
  /* let mensaje; */
}/*  else {
    alert("No tienes un curso seleccionado.");
  } */

  //--> construccion de personas/estudiantes

