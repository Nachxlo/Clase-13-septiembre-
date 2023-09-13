let cuerpo = document.querySelector("#cuerpo")
let contenedorTareas = document.querySelector(".tareas")
let boton = document.querySelector("button.agregar")
let botonBorrar = document.querySelector("button.borrar")
let comenzarDesde = 3
let tareas = []
//console.log("mira lo que hay", cuerpo); 

botonBorrar.addEventListener("click", function (evento) {
    evento.preventDefault()
    borrar("clave-bti")
    contenedorTareas.innerHTML = ""
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
})


cuerpo.addEventListener("click", function (evento) {
    console.log("hiciste click en", evento);
    if (
        evento.target.tagName == "INPUT" &&
        evento.target.type == "checkbox") {
        console.log("el id del input es", evento.target.id);
        let id = evento.target.id
        document.querySelector("label[for=" + id + "]").remove()
        document.querySelector("." + id).remove()
        evento.target.remove()
        guardarTodo()
        if (contenedorTareas.children.length == 0){
            const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
        }
    }
})

boton.addEventListener("click", function (evento) {
    let texto = document.querySelector("#texto")
    console.log("mira el texto que estaba en el input", texto.value);
    if (texto.value == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          }) 
           return
    }
    let contenedor = document.createElement("div")
    contenedor.className = `tarea${comenzarDesde}`
    let tarea = ` <input type="checkbox" id="tarea${comenzarDesde}">
    <label for="tarea${comenzarDesde}">${texto.value}</label>
</div>`
    cuerpo.innerHTML += tarea
    comenzarDesde = comenzarDesde + 1
    tareas.push({
        "id": `tarea${texto.value}`,
        "tarea": `${texto.value}`
    })
    contenedorTareas.appendChild(contenedor)
    guardar("clave-bti ", JSON.stringify(tareas))

}

) 
console.log(
recuperar("clave-bti")
);

let tareasArealizar = recuperar("clave-bti")
console.log("tareas a analizar", tareasArealizar);
if (tareasArealizar != null) {
let tareasJson = JSON.parse(tareasArealizar)
console.log(tareasJson);
tareasJson.map(
    function (tarea) {
    let contenedor = document.createElement("div")
    contenedor.className = `tarea${tarea.id}`
    let texto = ` <input type="checkbox" id="tarea${tarea.id}">
    <label for="tarea${tarea.id}">${tarea.tarea}</label>`
    contenedor.innerHTML = texto
    contenedorTareas.appendChild(contenedor)
    })
    }
    console.log("que tiene el contenedor tareas?", contenedorTareas.children);
    function guardarTodo(){
        const nuevasTareas = []
    for (const clave of contenedorTareas.children) {
        console.log("clave", clave.className);
        console.log("texto", clave.children[1].textContent);
        nuevasTareas.push({
            "id": `${clave.className}`,
            "tarea": `${clave.children[1].textContent}`
    })}
    guardar("clave-bti ", JSON.stringify(tareas))
    }
