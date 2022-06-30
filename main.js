// lista de productos

const gaseosas = [{
        nombre: "COCA-COLA",
        precio: 200
    },
    {
        id: 2,
        nombre: "FANTA",
        precio: 150
    },
    {
        nombre: "SPRITE",
        precio: 180
    },
    {
        nombre: "7UP",
        precio: 130
    },
]

const aguasSab = [{
        nombre: "AGUA POMELO",
        precio: 200
    },
    {
        nombre: "AGUA NARANJA",
        precio: 150
    },
    {
        nombre: "AGUA MANZANA",
        precio: 180
    },
    {
        nombre: "AGUA PERA",
        precio: 130
    },
]

// concatenacion de las listas en una sola

let allProductos = gaseosas.concat(aguasSab)

// mapeo de las listas con los nombres de los productos

let listaProductos = allProductos.map((opcion) => opcion.nombre);
let listaGaseosas = gaseosas.map((opcion) => opcion.nombre);
let listaAguas = aguasSab.map((opcion) => opcion.nombre);

//Menu seleccion de tipo de producto

function selTipoProd() {
    let seleccionTipoProducto = 0

    do {
        seleccionTipoProducto = prompt(`seleccione el tipo de producto deseado: \n-Gaseosas\n-Aguas Saborizadas\n-Todos `)

        if (seleccionTipoProducto.toLowerCase() == "gaseosas") {
            return seleccionProducto(listaGaseosas, gaseosas)
        } else if (seleccionTipoProducto.toLowerCase() == "aguas") {
            return seleccionProducto(listaAguas, aguasSab)
        } else if (seleccionTipoProducto.toLowerCase() == "todos") {
            return seleccionProducto(listaProductos, allProductos)
        } else {
            alert("usted no selecciono ningun tipo de producto")
        }

    } while (seleccionTipoProducto != "gaseosas" != "aguas" != "todos")
}

//Menu seleccion de producto
let precio = 0

function seleccionProducto(lista, productos) {

    let seleccionProducto = 0
    let productoSeleccionado = {}

    do {
        seleccionProducto = prompt(`seleccione el producto deseado : \n-${lista.join("\n-")}`)
        productoSeleccionado = productos.find((elemento) => elemento.nombre == seleccionProducto.toUpperCase())

        if (productoSeleccionado == undefined) {
            alert("Seleccione un producto de la lista (Para seleccionarlo ingrese el nombre)")
        }

    } while (productoSeleccionado == undefined)

    alert(`Usted eligio: ${productoSeleccionado.nombre}\ncon el valor de: $${productoSeleccionado.precio}`)
    return precio = productoSeleccionado.precio
}


// seleccion de cantidad de cuotas


function valorcuota(producto, cantidadcuotas) {
    return parseInt(producto / cantidadcuotas)
}

function seleccionCuotas(precio) {

    let seleccionCuotas = 0

    do {

        seleccionCuotas = parseInt(prompt("seleccione cantidad de cuotas:\n1. Un pago sin interes\n2. Tres pagos sin interes\n3. Seis pagos sin interes"))

        switch (seleccionCuotas) {
            case 1:
                alert(`Usted selecciono un pago sin interes\n valor de la cuota es : $${valorcuota(precio, 1)}`)
                break

            case 2:
                alert(`Usted selecciono tres pagos sin interes\n valor de la cuota es : $${valorcuota(precio, 3)}`)
                break

            case 3:
                alert(`Usted selecciono seis pagos sin interes\n valor de la cuota es : $${valorcuota(precio, 6)}`)
                break

            default:
                alert("Usted no selecciono un valor de cuotas valido")
                break

        }

    } while (seleccionCuotas < 1 || seleccionCuotas > 3 || isNaN(seleccionCuotas))

}

// confirmacion de compra 

function confirmar() {

    let confirmacion = prompt("Confirma la compra ? Si/No")

    if (confirmacion.toLowerCase() == "si") {
        alert("Muchas gracias por su compra !")
    } else {
        alert("Gracias por su visita !")
    }
}

// funcion para dar orden a las otras funciones

function principal() {
    alert("bienvenido a TuTienda !")

    selTipoProd()

    seleccionCuotas(precio)

    confirmar()
}

//iniciador de las funciones

principal()