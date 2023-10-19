const movies = [
    {
        name: "Peaky Blinders",
        description: "1919. Inglaterra. Thomas Shelby lidera una conocida banda de Birmingham que avanza con ferocidad por el bajo mundo....",
        rating: 4.8,
        clasification: "15+",
        image: {
            banner: "https://img.asmedia.epimg.net/resizer/w8luGMKsqKZt14q5eNKikqE3adA=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MIBE3RUHAFGNTNGXFFB3PSJVD4.jpg",
            card: "https://www.ecartelera.com/carteles-series/200/271/004_p.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Sense 8",
        description: "Sense8' se centra en ocho personajes que a pesar de vivir separados y cada uno en una ciudad diferente, experimentan una misma visión que los conecta entre ellos mentalmente...",
        rating: 4.0,
        clasification: "18+",
        image: {
            banner: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXQS6u_A3HfmhfL6w2twu4B86N0AlTJuLkzqhRkAjFPaJBPB5bRRh_8AJ2kI1G7hZXOQLfsbBu7bY7env7eVgoWBROZCPTitgFfo.jpg?r=eef",
            card: "https://www.ecartelera.com/carteles-series/000/67/002_p.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Scott Pilgrim da el salto",
        description: "'Scott Pilgrim da el salto' es una adaptación en forma de serie de animación para Netflix del cómic de Bryan Lee O'Malley, que fue llevado al cine en 2010 con una película de acción real dirigida por Edgar Wright....",
        rating: 5.0,
        clasification: "10+",
        image: {
            banner: "https://i.blogs.es/fd6da8/scott-pilgrim/1366_521.jpeg",
            card: "https://www.ecartelera.com/carteles-series/2000/2065/001_p.jpg",
        },
        section: "Recommended",
    },
    {
        name: "One Piece",
        description: "El manga más vendido de la historia de Japón tiene ahora su versión de carne y hueso. El universo creado por Eiichiro Oda...",
        rating: 4.5,
        clasification: "12+",
        image: {
            banner: "https://www.mundodeportivo.com/alfabeta/hero/2023/10/live-action-de-one-piece-netflix.1696550955.3441.jpg?width=1200",
            card: "https://www.ecartelera.com/carteles-series/2000/2051/001_p.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Bronca",
        description: "Danny Cho (Yeun) es un contratista fracasado y resentido que se ve enfrentado de repente con Amy Lau (Wong), una empresaria hecha a sí misma que lleva una vida muy peculiar....",
        rating: 4.2,
        clasification: "15+",
        image: {
            banner: "https://popcon.com.ar/wp-content/uploads/2023/04/beef.jpg",
            card: "https://www.ecartelera.com/carteles-series/2000/2028/001_p.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Cobra Kai",
        description: "Cobra Kai' retoma la historia de 'Karate Kid' casi treinta y cinco años después pero mostrándonos toda la historia desde el punto de vista contrario: el del sensei Johnny Lawrence. Arruinado y sin un dólar..",
        rating: 4.0,
        clasification: "12+",
        image: {
            banner: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/01/cobra-kai.jpeg?fit=2000%2C1333&quality=50&strip=all&ssl=1",
            card: "https://www.ecartelera.com/carteles-series/1200/1222/001_p.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Alice in Borderland",
        description: "Un aficionado a los videojuegos y sus dos amigos se ven atrapados en una versión paralela de Tokio, donde deben competir en sádicos juegos para sobrevivir....",
        rating: 4.5,
        clasification: "15+",
        image: {
            banner: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/12/alice-borderland-2163533.jpeg?tf=3840x",
            card: "https://www.ecartelera.com/carteles-series/1900/1989/001_p.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Black Summer",
        description: "n los primeros y confusos días de un apocalipsis zombi, completos desconocidos deben aliarse para hacerse fuertes y regresar con sus seres ...",
        rating: 4.2,
        clasification: "15+",
        image: {
            banner: "https://media.gq.com.mx/photos/60a6894c79463395540d3839/16:9/w_2992,h_1683,c_limit/SUMMER.jpg",
            card: "https://www.ecartelera.com/carteles-series/1300/1330/001_p.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Home Before Dark",
        description: "Home Before Dark es una serie de drama y misterio que sigue los pasos de Hilde Lysiak (Brooklynn Prince), una joven que se muda de Brooklyn a la pequeña ciudad...",
        rating: 4.5,
        clasification: "13+",
        image: {
            banner: "https://www.apple.com/es/tv-pr/shows-and-films/h/home-before-dark/images/show-home-graphic-header/4x1/Apple_TV_Home_Before_Dark_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1634173895597",
            card: "https://www.ecartelera.com/carteles-series/1300/1368/001_p.jpg",
        },
        section: "Recommended",
    },
    {
        name: "The Society",
        description: "Un grupo de jóvenes se va de campamento con el instituto y a su vuelta se encuentra con que todos los adultos que les rodeaban se han desvanecido....",
        rating: 4.1,
        clasification: "15+",
        image: {
            banner: "https://cache.cosmopolitan.fr/data/photo/w1200_h630_c17/1h3/the-society-netflix-season-2.jpg",
            card: "https://www.ecartelera.com/carteles-series/1300/1388/001_p.jpg",
        },
        section: "Recommended",
    },
   
    {
        name: "Sex Education",
        description: "Un adolescente virgen y socialmente torpe que vive con su madre Jean (Gillian Anderson, 'The Crown', 'La caza'), una terapeuta sexual cuya ocupación ha convertido a su hijo...",
        rating: 4.6,
        clasification: "16+",
        image: {
            banner: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXA5rAP1iZG1T-MuBP3o6hDhlzN_VDQrs40tEjtppisay-AJUpoqt_rJMMnKDK499tUg51oyYFh0uzZMQIr8hXqcOtO-0o8VNr_1.jpg?r=946",
            card: "https://www.ecartelera.com/carteles-series/1200/1227/010_p.jpg",
        },
        section: "Trend",
    },
    {
        name: "Insatiable",
        description: "una adolescente acosada en el instituto durante años que ha sido ignorada, subestimada e incordiada debido a su sobrepeso. Cuando por fin regresa al instituto en el que tanto sufrió, Patty volverá...",
        rating: 4.2,
        clasification: "16+",
        image: {
            banner: "https://m.media-amazon.com/images/M/MV5BYWQ1MWE1N2EtYTRhNy00N2MyLWFjN2UtZDQ5NjQ1MDc4MmM2XkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg",
            card: "https://www.ecartelera.com/carteles-series/1100/1118/002_p.jpg",
        },
        section: "Trend",
    },
    {
        name: "Atípico",
        description: "'Atípico' narra la historia de Sam (Keir Gilchrist), un joven con autismo que al cumplir los 18 años anuncia que quiere empezar a tener citas. Su padre Doug...",
        rating: 4.8,
        clasification: "10+",
        image: {
            banner: "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/PFIALXP3Y5FUFF56ZJLH2YCBOA.jpg",
            card: "https://www.ecartelera.com/carteles-series/700/770/003_p.jpg",
        },
        section: "Trend",
    },
    {
        name: "Santa Clarita Diet",
        description: " Ambientada en Santa Clarita, una pequeña ciudad de las afueras de Los Angeles, nos traslada a las desventuras de Joel y Sheila, un matrimonio donde ambos trabajan como agentes inmobiliarios...",
        rating: 4.6,
        clasification: "16+",
        image: {
            banner: "https://i.blogs.es/672431/santa-clarita-diet/1366_2000.jpg",
            card: "https://www.ecartelera.com/carteles-series/600/628/003_p.jpg",
        },
        section: "Trend",
    },
    
    {
        name: "Colgados en Filadelfia",
        description: "Colgados en Filadelfia', comedia negra creada por el también protagonista de la serie Rob McElhenney y Glenn Howerton, sigue a una pandilla de amigos, cada cual más peculiar, en la que todos destacan por su egocentrismo y la búsqueda...",
        rating: 4.1,
        clasification: "13+",
        image: {
            banner: "https://m.media-amazon.com/images/M/MV5BMGYxNjQ1NDktODcwNS00YzE3LWE1ZGUtMmI4Mjc2YzMyYzdlXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg",
            card: "https://www.ecartelera.com/carteles-series/400/473/011_p.jpg",
        },
        section: "Trend",
    },
    {
        name: "Madres forzosas",
        description: " retoma las pericias y desventuras de la famosa familia Tanner iniciadas en los años 80 con 'Padres Forzosos'. Años después y ya bastante crecidita, la hija de Danny Tanner, D.J...",
        rating: 4.2,
        clasification: "10+",
        image: {
            banner: "https://pics.filmaffinity.com/Madres_forzosas_Serie_de_TV-255173439-large.jpg",
            card: "https://www.ecartelera.com/carteles-series/000/43/003_p.jpg",
        },
        section: "Trend",
    },
    {
        name: "BoJack Horseman",
        description: "'BoJack Horseman', serie de animación para adultos, narra la historia del caballo más famoso de los noventa, BoJack Horseman...",
        rating: 4.5,
        clasification: "15+",
        image: {
            banner: "https://variety.com/wp-content/uploads/2016/07/bojack-horseman-season-3-netflix.jpg",
            card: "https://www.ecartelera.com/carteles-series/200/223/006_p.jpg",
        },
        section: "Trend",
    },
    {
        name: "Seinfeld",
        description: "erry Seinfeld se interpreta a sí mismo en una de las comedias más importantes de la historia de la televisión. Narra su vida como cómico monologuista...",
        rating: 4.5,
        clasification: "12+",
        image: {
            banner: "https://media.revistagq.com/photos/5d8029bdd4b0250008272ebf/16:9/w_2560%2Cc_limit/Seinfeld.jpg",
            card: "https://www.ecartelera.com/carteles-series/700/755/010_p.jpg",
        },
        section: "Trend",
    },
    {
        name: "Arrested Development",
        description: "Michael Bluth es un hombre que pertenece a una familia capitalista, materialista y que le gusta vivir al máximo sin mirar el dinero que se gastan. A Michael no le gusta...",
        rating: 4.5,
        clasification: "13+",
        image: {
            banner: "https://s3.amazonaws.com/heights-photos/wp-content/uploads/2019/03/03130426/Arrested-Development-online.jpg",
            card: "https://www.ecartelera.com/carteles-series/500/503/026_p.jpg",
        },
        section: "Trend",
    },
    {
        name: "La chica invisible",
        description: "Jenna Hamilton (Ashley Rickards) es una adolescente que parece invisible en su instituto. Es lo diametralmente opuesto a popular...",
        rating: 2.8,
        clasification: "10+",
        image: {
            banner: "https://pics.filmaffinity.com/La_chica_invisible_Awkward_Serie_de_TV-107405091-large.jpg",
            card: "https://www.ecartelera.com/carteles-series/800/847/001_p.jpg",
        },
        section: "Trend",
    },
    
];