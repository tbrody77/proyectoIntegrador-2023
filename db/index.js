const data = { 
    productos: [
    {
        id: "1", nombre: "Air Force 1",categoria: "novedades", imagen: "/../public/images/airforce1.jpeg" ,
        descripcion: "Nike",fechaCarga: "03/04/2023",
        alt:"Zapatilla",comentario: "Muy comodas"
    },
    {
        id: "2", nombre: "Forum Bad Bunny",descripcion: "Adidas",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Hermosas",categoria: "novedades", imagen:"/../public/images/BBforum.jpeg",
    },
    {
        id: "3", nombre: "Jordan 1 Mocha",descripcion: "Nike",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Tremendas",categoria: "novedades", imagen:"/../public/images/JordanMocha.jpeg",
        
    },
    {
        id: "4", nombre: "220",descripcion: "NewBalance",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Combinan muy bien",categoria: "novedades", imagen:"/../public/images/newBalance2002.jpeg",
    },
    {   id: "5", nombre: "Dunk Low Panda",descripcion: "Nike",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Muy quemadas",categoria: "mas comentados", imagen:"/../public/images/panda.jpeg",
        },
    {    id: "6", nombre: "Yeezy 350 Desert Sage",descripcion: "Adidas",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Son reflectivas",categoria: "mas comentados", imagen:"/../public/images/JordanMocha.jpeg",
        
    },
    {
        id: "7", nombre: "All Star",descripcion: "Converse",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Que facheras que son", categoria: "mas comentados", imagen:"/../public/images/allStar.jpeg",
        
    },

    {   id: "8", nombre: "Air Max 97" , descripcion: "Nike",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Muy turras",categoria: "mas comentados", imagen:"/../public/images/airmax97.jpeg",
        
    },
    {   id: "9", nombre:"Yeezy Slides",descripcion: "Adidas",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Es como pisar nubes",categoria: "mas comentados", imagen:"/../public/images/slides.jpeg",
        
    },
    {   id: "10", nombre: "Old Skool",descripcion: "Vans",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Tremendas",categoria: "novedades", imagen:"/../public/images/vans.jpeg",
    }
],
comentarios: [
    {nombreUsuario: "Tom",textoComentario: "Tremendo Producto", imagenPerfil: "/default-image.png"},
    {nombreUsuario: "Martín",textoComentario: "Historicas",imagenPerfil: "/default-image.png"},
    {nombreUsuario: "Martina", textoComentario: "Excelente calidad!",   imagenPerfil: "/default-image.png"},
    {nombreUsuario: "Sebastián",textoComentario: "Horribles", imagenPerfil: "/default-image.png"},
    {nombreUsuario: "Sofía",textoComentario: "Me las compro si o si!", imagenPerfil: "/default-image.png"},
    {nombreUsuario: "Dante",textoComentario: "No me gustan nada jajajaja", imagenPerfil: "/default-image.png"},
    {nombreUsuario: "Candela",textoComentario: "Las quiero", imagenPerfil: "/default-image.png"},
    {nombreUsuario: "Eitán",textoComentario: "Las necesito", imagenPerfil: "/default-image.png"},
    {nombreUsuario: "Gonzalo",textoComentario: "Combinan con todo", imagenPerfil: "/default-image.png"},
    {nombreUsuario: "Nico",textoComentario: "Dame mil", imagenPerfil: "/default-image.png"},
],
}
users: [
    {
    email: 'tfontana@udesa.edu.ar',
    username: 'Tofo',
    foto: 'https://via.placeholder.com/101x99',
    password: '1234',
    fecha: '2003-06-01',
    dni: '44642281',
    posteos: 4,
    seguidores: 50,
    seguidos: 40
    },

    {
        username: 'Tad',
        email: 'talvarezdemalde@udesa.edu.ar',
        password: 'Messi',
        fecha: '2002-04-11',
        dni: '94131379',
        posteos: 8,
        seguidores: 100,
        seguidos: 50 
    },

    {
        username: 'Tom',
        email: 'tbrody@udesa.edu.ar',
        password: 'Tom123',
        fecha: '2002-12-7',
        dni: '44289671',
        posteos: 8,
        seguidores: 200,
        seguidos: 10 
    },

    {
        username: 'MessiL',
        email: 'lmessi@udesa.edu.ar',
        password: 'LaScaloneta',
        fecha: '1987-04-11',
        dni: '37890012',
        posteos: 4,
        seguidores: 10000,
        seguidos: 3 
    },

    {
        username: 'laAraña',
        email: 'jalvarez@udesa.edu.ar',
        password: 'JuliCrack',
        fecha: '1987-04-11',
        dni: '44642281',
        posteos: 8,
        seguidores: 10000,
        seguidos: 50     
    },
]
module.exports = data



