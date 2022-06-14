function listarProductos() {
    console.table(productos)
} 

function agregarProducto() {
    debugger
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:")
    let precio = parseInt(prompt("Ingresa el precio:"))
        productos.push(new Producto(id, nombre, precio))
}


function listarProductos() {

    productos.forEach( (producto)=> { 
        console.log(producto.nombre)
    });
}

function buscarProducto() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        debugger
        let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar)) //texto parcial
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado) //mostrar el resultado en pantalla
        }
}
      
function filtrarProductos() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
}

function existeProducto() {
    let aBuscar = prompt("Ingrese el código del producto a buscar:")
    debugger
    let resultado = productos.some((producto)=> producto.id === parseInt(aBuscar))
        if (resultado) {
            console.log("El producto existe.")
        } else {
            console.error("No se encontró el producto.")
        }
}

function proyectarIncremento(porc) {
    let proyeccion = productos.map((producto)=> {
            return {
                id: producto.id,
                nombre: producto.nombre,
                importe: producto.importe,
                proyeccion: (producto.importe * porc).toFixed(2)
            }
    })
    console.table(proyeccion)
}

function calcularCarrito() {
    console.clear()
    debugger
    let total = carrito.reduce((acc, producto)=> acc + producto.importe, 0)
        console.log("TOTAL DEL CARRITO:", total)
}


function creoID() {
    return parseInt(Math.random() * 10000)
}

obj = {
    id: 1,
    nombre: "HOLA"
}


//FUNCION QUE SE USA PARA LLENAR AUTOMÁTICAMENTE EL ARRAY DE OBJETOS A USAR
function generadorAutomatico() {
    productos.push(new Producto(1234, "PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 3080 TI VENTUS 3X OC 12GB GDDR6 LHR", 245999))
    productos.push(new Producto(2345, "PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 3090 VENTUS 3X OC 24GB GDDR6", 299999))
    productos.push(new Producto(3456, "PLACA DE VIDEO PALIT NVIDIA GEFORCE GTX 1660 6GB DUAL", 79999))
    productos.push(new Producto(4567, "PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 3080 GAMINGPRO 10GB GDDR6X LHR", 169999))
    productos.push(new Producto(5678, "MICROPROCESADOR CPU INTEL CORE I9 12900 ALDERLAKE 16/24 LGA1700", 94999))
    productos.push(new Producto(6789, "MICROPROCESADOR AMD RYZEN 9 5900X 12/24 4.8GHZ S/G S/C ZEN3", 67990))
    productos.push(new Producto(7890, "MEMORIA RAM KINGSTON FURY BEAST DDR4 16GB 2666MHZ", 10990))
    productos.push(new Producto(8900, "MEMORIA RAM KINGSTON FURY BEAST DDR4 16GB 3600MHZ RGB", 15699))
    productos.push(new Producto(8977, "MOTHERBOARD GIGABYTE B660 AORUS MASTER DDR4 S1700", 48499))
    productos.push(new Producto(8999, "MOTHERBOARD ASUS ROG STRIX Z590-E GAMING WIFI S1200", 52999))

}
generadorAutomatico()

function generarCarrito() {
    carrito.push(new Producto(1234, "ASUS RTX 3090", 29950))
    carrito.push(new Producto(2345, "MICROPROCESADOR CPU INTEL CORE I9 12900 ALDERLAKE 16/24 LGA1700", 249900))
    carrito.push(new Producto(3456, "MEMORIA RAM KINGSTON FURY BEAST DDR4 16GB 3600MHZ RGB", 199949))
}
generarCarrito()