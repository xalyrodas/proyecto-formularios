let root = document.querySelector("#root");


/* comentario */
let div_formulario = document.createElement("div");
div_formulario.className = "div-formulario";

/* lista de elementos */
 let formulario = [
    {nombre:"login",link:"componentes/loging/loging.html"},
    {nombre:"formulario De Contacto",link:"componentes/formularioDeContacto/contacto.html"},
    {nombre:"formulario De Registro",link:"componentes/formularioDeRegistro/registro.html"},
    {nombre:"formulario De Búsqueda",link:"componentes/formularioDeBusqueda/busqueda.html"},
    {nombre:"formulario De Pedido Compras",link:"componentes/formularioDePeriodoDeCompras/compras.html"},
    {nombre:"formulario De Comentarios Reseñas",link:"componentes/formularioDeComentarioReseñas/reseña.html"},

    ];
/* for each */ // es una funcio
    formulario.forEach(itemLista =>{ 

    let div_item = document.createElement("a")
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;
    
// agrego al nodo root, el elemento div_formulario

div_formulario.appendChild(div_item);
 });

 root.appendChild(div_formulario);