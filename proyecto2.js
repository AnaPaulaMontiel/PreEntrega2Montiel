class vecino {
    constructor (nombre, cumpleanios, precio, descripcion, especie, personalidad, oferta){
        this.nombre = nombre;
        this.cumpleanios = cumpleanios;
        this.precio = precio;
        this.descripcion = descripcion;
        this.especie = especie;
        this.personalidad = personalidad;
        this.oferta = oferta;
    }
}

let primerVecino = new vecino ("Apolo", "4 de Julio", 200, "Es un águila calva de cuerpo gris, cabeza blanca y pies y pico de color amarillo. ", "Águila ", "Gruñón ", true)
let segundoVecino = new vecino ("Amelia", "19 de noviembre", 50, "Es un águila de color rojo rodeada de plumas blancas, su cuerpo es de color negro, gris y blanco.", "Águila", "Presumida", true)
let tercerVecino = new vecino ("Munchi", "29 de septiembre", 700, "Es una ardilla blanca con un fleco entrecortado de color bronce.", "Ardilla", "Esnob", true)
let cuartoVecino = new vecino ("Belinda", "8 de junio", 30, "Es una ardilla rosa con una raya purpura en la cabeza rodeada de blanco.", "Ardilla", "Alegre", true)
let quintoVecino = new vecino ("Jereza", "16 de junio", 120, "Es un caballo de color negro con una crin de color gris oscuro.", "Caballo", "Gruñón", false)
let sextoVecino = new vecino ("Clotilde", "9 de febrero", 20, "Es ua yegua de color purpura claro con una melena de color amarillo.", "Caballo", "Presumida", false)
let septimoVecino = new vecino ("Poncho", "2 de enero", 70, "Es un osito azul marino.", "Oso", "Atlético", false)
let octavoVecino = new vecino ("Dulce", "15 de junio", 190, "Es una osita de color marron con un hocico y patas de color beige.", "Oso", "Normal", false)
let novenoVecino = new vecino ("Lope", "5 de abril", 250, "Tiene el pelaje de color naranja con un hocico de color blanco.", "Ciervo", "Perezosa", false)
let decimoVecino = new vecino ("Bambina", "4 de enero", 350, "Es color blanco con el pelo de color lila.", "Ciervo", "Presumida", false)
let decimoprimerVecino = new vecino ("Ernesto", "24 de julio", 40, "Es de pelaje color marron y un mechon de pelo naranja.", "Conejo", "Esnob", false)
let decimosegundoVecino = new vecino ("Cocoloca", "1 de marzo", 400, "Es marron claro, no tiene ni ojos ni boca y posee una cabeza aparentemente hueca.", "Conejo", "Normal", false)
let decimotercerVecino = new vecino ("Narciso", "1 de octubre", 1200, "Tiene un pelaje de color gris con un mechon de pelo rubio en la frente.", "Gato", "Esnob", true)
let decimocuartoVecino = new vecino ( "Patri", "22 de septiembre", 1000, "Tiene un pelaje dorado, es egipcia", "Gato", "Presumida.", true)
let decimoquintoVecino = new vecino ( "Wolfi", "25 de noviembre", 400, "Es azul marino oscuro con un hocico amarillo cremoso.", "Lobo", "Gruñón", false)
let decimosextoVecino = new vecino ("Lupita", "14 de diciembre", 300, "Es color rosa claro con sombra de ojos azul cielo.", "Lobo", "Presumida", false)

const arrayVecinos = [
    primerVecino, 
    segundoVecino, 
    tercerVecino, 
    cuartoVecino, 
    quintoVecino, 
    sextoVecino, 
    septimoVecino, 
    octavoVecino,
    novenoVecino, 
    decimoVecino, 
    decimoprimerVecino, 
    decimosegundoVecino, 
    decimotercerVecino, 
    decimocuartoVecino, 
    decimoquintoVecino, 
    decimosextoVecino
]

let ordenar=(array)=>{
    let x = array.slice()

    x.sort((a,b)=>{
        if(a.nombre > b.nombre){
            return -1
        }else if(a.nombre < b.nombre){
            return 1
        }else{
            return 0
        }
    })
    return x
}
let ordenarVecinos = ordenar(arrayVecinos)
console.log(ordenarVecinos)

let buscarOferta=(boolean)=>{
    let vecinosConOferta = boolean.filter(vecinito => vecinito.oferta == true)

    let verificar = confirm("Desea ver los precios de sus vecinos en oferta?")

    for(let i in vecinosConOferta){
        let precios = vecinosConOferta[i].precio

        let p1 = precios * (30/100)
        let p2 = precios - p1

        vecinosConOferta[i] = vecinosConOferta[i].nombre + " Nuevo precio: " + p2
    }

    if(verificar == true){
        console.log(vecinosConOferta)
    }else{

        let nombresMascotas = boolean.map(nombres=>nombres.nombre).join(", ")

        let busqueda = prompt(`Qué vecino desea buscar? Tenemos a: ${nombresMascotas}`)
        let buscar = boolean.find(mascotita => mascotita.nombre == busqueda)
 
        for(let i in buscar){
            alert(i + ": " + buscar[i])
        }
    }
    
}
buscarOferta(arrayVecinos)