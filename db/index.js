const data = { 
    productos: [
    {
        id: "1", nombre: "Air Force 1",categoria: "novedades", imagen: "/../public/images/airforce1.jpeg" ,
        descripcion: "El fulgor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles",fechaCarga: "03/04/2023",
        alt:"Zapatilla",comentario: "Muy comodas"
    },
    {
        id: "2", nombre: "Forum Bad Bunny",descripcion: "La pieza, según el comunicado, es una “invitación a las nuevas generaciones para que rompan el molde y redefinan su propio estilo y se diseñaron para fomentar la expresión individual.",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Hermosas",categoria: "novedades", imagen:"/../public/images/BBforum.jpeg",
    },
    {
        id: "3", nombre: "Jordan 1 Mocha",descripcion: "Las Air Jordan 1 vuelven en un colorway perfecto para este invierno: “Dark Mocha”. Este AJ, que nos recuerda a las Air Jordan 1 de Travis Scott de 2019, tiene una combinación de cuero suave color crema espumoso y una gamuza aterciopelada color mocha en la parte superior.",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Tremendas",categoria: "novedades", imagen:"/../public/images/JordanMocha.jpeg",
        
    },
    {
        id: "4", nombre: "2002 R",descripcion: "Las 2002R de New Balance son una combinación entre comodidad, rendimiento y estilo para disfrutar de la máxima comodidad durante tu día a día.",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Combinan muy bien",categoria: "novedades", imagen:"/../public/images/newBalance2002.jpeg",
    },
    {   id: "5", nombre: "Dunk Low Panda",descripcion: "Las Nike Dunk Low son unas zapatillas casual que se inspiran en modelos deportivos pero que destacan por su comodidad. Su diseño se basa en la clásica deportiva de baloncesto que Nike lanzó en 1985.",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Muy quemadas",categoria: "mas comentados", imagen:"/../public/images/panda.jpeg",
        },
    {    id: "6", nombre: "Yeezy 350 Desert Sage",descripcion: "Las Yeezy tienen ciertas características que las han convertido en el zapato estrella: tienen la estructura de un mocasín para máximo comfort, tejido traspirable en la parte superior y ante en la parte interior, con suelas de goma para aumentar la flexibilidad y ligereza.",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Son reflectivas",categoria: "mas comentados", imagen:"/../public/images/yeezynuevas.jpeg",
        
    },
    {
        id: "7", nombre: "All Star",descripcion: "Y es que la marca representa mucho más que unas zapatillas: Converse se ha convertido en sinónimo de juventud, ambiente relajado, creatividad y espíritu rebelde.",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Que facheras que son", categoria: "mas comentados", imagen:"/../public/images/allStar.jpeg",
        
    },

    {   id: "8", nombre: "Air Max 97" , descripcion: "En el año 97, con las Air Max establecidas como la línea de Nike más destacable, la presión no era poca para conseguir un lanzamiento exitoso de otra silueta auténtica. Con muchos de sus diseñadores ocupados, Nike decidió probar suerte con Christian Tresser. Este diseñador, que previamente había trabajado con Nike diseñando botas de fútbol, también diseñaría las Spiridon, una prima hermana de las 97.",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Muy turras",categoria: "mas comentados", imagen:"/../public/images/airmax97.jpeg",
        
    },
    {   id: "9", nombre:"Yeezy Slides",descripcion: "Las Yeezy Slides, también conocidas como las chanclas Yeezy o las chanclas de Kanye West, son un calzado de lo más deseado. No en vano, suelen ocupar las primeras posiciones en el Lyst Index, el índice que mide las búsquedas de productos de lujo.",
        fechaCarga:"03/04/2023",alt: "Zapatilla",
        comentario: "Es como pisar nubes",categoria: "mas comentados", imagen:"/../public/images/slides.jpeg",
        
    },
    {   id: "10", nombre: "Old Skool",descripcion: "Las Vans Old Skool son zapatillas únicas y muy personalizables, así que son la opción perfecta para ocasiones informales y más arregladas. El diseño monocromo clásico es una de las opciones más versátiles, basta con combinarlo con unos vaqueros, unos chinos o una falda para conseguir un conjunto cómodo y con estilo.",
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



