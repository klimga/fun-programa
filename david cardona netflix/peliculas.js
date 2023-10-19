const movies = [
    {
        name: "Avatar: El sentido del agua",
        description: "Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.",
        rating: 7.6,
        clasification: "13+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
            card: "https://www.themoviedb.org/t/p/original/ckeTumMS4G31UQ9NNkmtW2QhfMF.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Barbie",
        description: "Barbie vive en Barbieland donde todo es ideal y lleno de música y color. Un buen día decide conocer el mundo real. Cuando el CEO de Mattel se entere, tratará de evitarlo a toda costa y devolver a Barbie a una caja.",
        rating: 7.1,
        clasification: "13+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg",
            card: "https://www.themoviedb.org/t/p/original/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg",
        },
        section: "Recommended",
    },
    {
        name: "El Gato con Botas: El último deseo",
        description: "El Gato con Botas se embarca en un viaje épico para encontrar al mítico Último Deseo y recuperar sus nueve vidas.",
        rating: 7.8,
        clasification: "7+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg",
            card: "https://www.themoviedb.org/t/p/original/b5Jb7GoQaqIXy4VEdnQa0UrQZI.jpg",
        },
        section: "Recommended",
    },
    {
        name: "El viaje de Chihiro",
        description: "Durante el traslado de su familia a los suburbios, una niña de 10 años de edad deambula por un mundo gobernado por dioses, brujas y espíritus, y donde los humanos se convierten en bestias.",
        rating: 8.6,
        clasification: "4+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/zSWkLXXj26IQ3pFDH1rnXDQZxAu.jpg",
            card: "https://www.themoviedb.org/t/p/original/vlsi5iZcfDChKNGNvRp7Zp3SULH.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Neon Genesis Evangelion",
        description: "un futuro distópico en el que la humanidad ha sido abatida por un escenario apocalíptico donde monstruos gigantescos llamados “ángeles” parecen buscar la destrucción de la vida en la tierra",
        rating: 8.5,
        clasification: "16+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/qtmlwuXj0VyJnCjnrvdpDjo15vI.jpg",
            card: "https://www.themoviedb.org/t/p/original/y2ah9t0navXyIvoHg1uIbIHO3tt.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Juego de tronos",
        description: "en un mundo ficticio con elementos fantásticos, como dragones y poderes, pero también otros muy reales como son las luchas de poder, los enfrentamientos políticos, las traiciones y la continua guerra por el trono que gobierna los siete reinos de Poniente ",
        rating: 9.2,
        clasification: "18+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
            card: "https://www.themoviedb.org/t/p/original/z9gCSwIObDOD2BEtmUwfasar3xs.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Guardianes de la Galaxia: Volumen 3",
        description: "La querida banda de los Guardianes se instala en Knowhere. Pero sus vidas no tardan en verse alteradas por los ecos del turbulento pasado de Rocket. Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo en una peligrosa misión para salvar la vida de Rocket, una misión que, si no se completa con éxito, podría muy posiblemente conducir al final de los Guardianes tal y como los conocemos.",
        rating: 7.9,
        clasification: "13+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
            card: "https://www.themoviedb.org/t/p/original/6GkKzdNosVAL7UGgwTtCHSxLQ67.jpg",
        },
        section: "Recommended",
    },
    {
        name: "jurassic park ",
        description: "El multimillonario John Hammond hace realidad su sueño de clonar dinosaurios del Jurásico y crear con ellos un parque temático en una isla. Antes de abrir el parque al público general, Hammond invita a una pareja de científicos y a un matemático para que comprueben la viabilidad del proyecto. Sin embargo, el sistema de seguridad falla y los dinosaurios se escapan.",
        rating: 8.2,
        clasification: "13+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/8mFbNmYcMFYCiJPBs3jYTfIOxne.jpg",
            card: "https://www.themoviedb.org/t/p/original/1r8TWaAExHbFRzyqT3Vcbq1XZQb.jpg",
        },
        section: "Trend",
    },
    {
        name: "SPY x FAMILY",
        description: "Deluded boss Michael tries to channel the dissatisfaction of his employees at the Dunder Mifflin paper company through continual foibles and mishaps. Watch all you want. Best Comedy Series at the 2006 Emmys, the series transformed Steve Carell and Ed Helms into icons of the genre...",
        rating: 7.2,
        clasification: "7+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/zNugnnR5KEmq9EzLcl0Me1UmHYk.jpg",
            card: "https://www.themoviedb.org/t/p/original/zcH6eMaO8HNEnWXkU7eOzlRz1C6.jpg",
        },
        section: "Trend",
    },
    {
        name: "the big bang theory",
        description: "Leonard y Sheldon son dos cerebros privilegiados que comparten piso. Aunque los dos, doctores en Física, son capaces de calcular las probabilidades de existencia de otros mundos, no saben cómo relacionarse con los demás, especialmente con las chicas. Penny, una vecina recién llegada, es el polo opuesto a los dos amigos, de modo que su llegada altera la tranquila vida sentimental de Leonard y el desorden obsesivo-compulsivo de Sheldon.",
        rating: 6.9,
        clasification: "14+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/rwYvhVv0vwbulMwxOfEsuAr1JrT.jpg",
            card: "https://www.themoviedb.org/t/p/original/bPNFHJkCIE7mkYUeIknSQZI46yP.jpg",
        },
        section: "Trend",
    },
    {
        name: "Rick y Morty",
        description: "Comedia animada que narra las aventuras de un científico loco Rick Sánchez, que regresa después de 20 años para vivir con su hija, su marido y sus hijos Morty y Summer.",
        rating: 7.8,
        clasification: "14+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/8aCek7W6BovH7M4enWjqrGptvQ8.jpg",
            card: "https://www.themoviedb.org/t/p/original/5Yiep9EwcQgLolg013ETBVqHxuD.jpg",
        },
        section: "Trend",
    },
    {
        name: "John Wick 4 ",
        description: "John Wick descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.",
        rating: 7.8,
        clasification: "16+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/kBBMF7GWYXzdRSk5w4xwip7yk3U.jpg",
            card: "https://www.themoviedb.org/t/p/original/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg",
        },
        section: "Trend",
    },
    {
        name: "It: Capítulo 2",
        description: "Mike se ha quedado en Derry y ha seguido investigando el origen de Eso para estar preparados cuando volviera a aparecer. Él es el encargado de reunir al grupo de nuevo en la ciudad, donde se enfrentan a sus peores miedos y secretos.",
        rating: 6.9,
        clasification: "16+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
            card: "https://www.themoviedb.org/t/p/original/9oERKIVyTWpHNum3STVsAGD4ojz.jpg",
        },
        section: "Trend",
    },
    {
        name: "Baki Hanma",
        description: "Para mejorar sus destrezas y superar a su poderoso padre, Baki entra en la prisión estatal de Arizona y se enfrenta al famoso recluso conocido como Sr Desencadenado.",
        rating: 8.2,
        clasification: "13+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/wHEZQxLSHRDzpNQbD5ZITYg6lE3.jpg",
            card: "https://www.themoviedb.org/t/p/original/x145FSI9xJ6UbkxfabUsY2SFbu3.jpg",
        },
        section: "Trend",
    },
 
   
];