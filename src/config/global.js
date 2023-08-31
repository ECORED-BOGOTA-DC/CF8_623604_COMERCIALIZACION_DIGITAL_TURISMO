export default {
  global: {
    componenteFormativo: 'Bases de arquitectura y analítica web',
    descripcionCurso:
      'La estructura del sitio web de comercialización de experiencias turísticas es un aspecto fundamental que debe tener en cuenta la empresa para posicionar la página y mejorar la experiencia de los usuarios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-8.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Arquitectura web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Página web',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Alojamiento (<em>hosting</em>) y dominio web',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Certificados de seguridad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Analítica web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Los datos de la analítica web 2.0',
            hash: 't_2_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia:
        'Avinash, K. (2010). <em>Analítica web 2.0. El arte de analizar resultados y la ciencia de centrarse en el cliente.</em> Gestión 2000.',
      tipo: 'Libro',
      descarga: '/downloads/Analitica_Web_2.0_Avinash_Kaushik.pdf',
    },
    {
      tema: '',
      referencia:
        'Romero, D. (s.f.). <em>Cómo aplicar SEO en tu estrategia de marketing online.</em> Editorial actualizada',
      tipo: 'Libro',
      descarga:
        '/downloads/Libro_Como_aplicar_el_SEO_en_tu_estrategia_de_marketing_online.pdf',
    },
    {
      tema: '',
      referencia:
        'Publisuites. (2020). <em>Arquitectura web: cómo organizar bien los contenidos de tu web</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VSXdCHSFHXM&t=30s',
    },
    {
      tema: '',
      referencia:
        'UAM Costa Rica. (2019). <em>Tipos de sitios web</em> [video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nYCRkhAaTJU',
    },
    {
      tema:
        'Fazt. (2018), <em>Cómo empezar en desarrollo web</em> [video]. YouTube.',
      referencia: '',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=s_lUd8mhPpQ',
    },
    {
      tema: '',
      referencia:
        'Programación fácil, SEO y marketing. (2018). <em>Cómo crear una página web en WordPress gratis 2021 (paso a paso)</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4UF3xVuWBu0',
    },
    {
      tema: '',
      referencia:
        'SaintDoVals. (2019). <em>Cómo diseñar una página web - Adobe XD | paso a paso</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZopuGotHk7k',
    },
    {
      tema: '',
      referencia:
        'Yoelvis Mulen {code}. (2020). <em>Maquetado responsive con CSS Grid | Diseño adaptativo</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=T4t00Hd3qZc',
    },
    {
      tema: '',
      referencia:
        'Instituto de Marketing Ágil. (2017). <em>Seis tipos de contenidos que se hacen más virales en Internet</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7JYAeCyWSLo',
    },
    {
      tema: '',
      referencia:
        'INESEM Business School. (2017). <em>Usabilidad web: ¿qué es y qué aporta al usuario? | MasterClass</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Y7nLeu4cY38',
    },
    {
      tema: '',
      referencia:
        'Educar Portal. (2019). <em>Microaprendizaje ¿Qué es la accesibilidad web?</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gQIKQO41pME',
    },
    {
      tema: '',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2011). <em>Buscadores</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=99G6_y2TZPo',
    },
    {
      tema: '',
      referencia:
        'Juanjo Amengual. (2019). <em>¿Cómo posicionar en turismo SEO en turismo?</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UPySDhEI0rU',
    },
    {
      tema: '',
      referencia:
        'Página de inicio. (2011). <em>¿Qué es un dominio y un hosting? ¡Explicado para principiantes!</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=W2Yrj0h52D4',
    },
    {
      tema: '',
      referencia:
        'Neothek. (2018). <em>Qué y cómo funciona un certificado de seguridad SSL TLS</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tHhFQaurGAg',
    },
    {
      tema: '',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>¿Qué es la analítica web?</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1pCDpRCmtxY',
    },
    {
      tema: '',
      referencia:
        'Robles, F. (2020). <em>7 herramientas de analítica web que debes usar en tu sitio web 2020</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=s4p0CSECFOk&t=14s',
    },
  ],
  glosario: [
    {
      termino: '<em>Hosting</em>',
      significado:
        'es un servicio en línea que permite publicar un sitio o aplicación web en Internet. Cuando se realiza el registro en un servicio de <em>hosting</em>, lo que se hace es alquilar un espacio en un servidor en el que se pueden almacenar todos los archivos y datos necesarios para que el sitio web funcione correctamente.',
    },
    {
      termino: 'Indexar',
      significado:
        'la indexación es el proceso por el cual Google anexa una página web a su índice para mostrarla en los resultados de una búsqueda. Luego de estructurar, escribir y cargar contenidos, finalmente su sitio web está listo para recibir a los innumerables usuarios que navegan en Internet.',
    },
    {
      termino: '<em>Remarketing</em>',
      significado:
        'es un sistema que permite crear anuncios adaptados o personalizados para los usuarios que previamente visitaron una página web.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bello, E. (s.f.). <em>Qué es la analítica web, para qué sirve y principales herramientas</em>. IEBS Business School.',
      link:
        'https://www.iebschool.com/blog/herramientas-analisis-web-analitica-usabilidad/',
    },
    {
      referencia:
        'Cabrera, M. (2017). <em>¿Qué es un certificado de seguridad y de qué tipos hay?</em> Nube digital mx.',
      link:
        'https://www.nubedigital.mx/flexo/post/que-es-un-certificado-de-seguridad-y-de-que-tipos-hay',
    },
    {
      referencia:
        'Capella, M. (2020). <em<Posicionamiento web o SEO: cómo posicionar tu página web en Google en 9 pasos</em>. Inboundcycle.',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/como-posicionar-mi-web-5-pasos-para-ser-top-1-en-google',
    },
    {
      referencia:
        'Coppola, M. (s.f.). <em>Diseño responsive: qué es, cómo funciona y cómo implementarlo</em>. Hubspot.',
      link: 'https://blog.hubspot.es/marketing/diseno-responsive',
    },
    {
      referencia:
        'Hostinger tutoriales. (2021). <em>Cómo crear una página web paso a paso - Guía completa</em>. Hostinger tutoriales.',
      link: 'https://www.hostinger.co/tutoriales/como-crear-una-pagina-web/',
    },
    {
      referencia:
        'Iberdrola. (s.f.), <em>¿Qué es la accesibilidad web? El gran reto para conseguir un Internet para todos</em>. Iberdrola.',
      link: 'https://www.iberdrola.com/innovacion/que-es-accesibilidad-web',
    },
    {
      referencia:
        'Kaushik, A. (2010). <em>Analítica web 2.0 El arte de analizar resultados y la ciencia de centrarse en el cliente</em>. Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Martínez, L. (2021). <em>¿Qué es el desarrollo web? Guía para detectar el desarrollador web que vive en ti</em>. Crehana.',
      link:
        'https://www.crehana.com/co/blog/desarrollo-web/que-es-desarrollo-web/',
    },
    {
      referencia:
        'Rock content. (2019). <em>¿Qué son las cookies y para qué sirven en Internet?</em> Rock content.',
      link: 'https://rockcontent.com/es/blog/que-son-las-cookies/',
    },
    {
      referencia:
        'Ser o no ser marketing online. (2017). <em>¿Qué estructura debe de tener una página web?</em> Ser o no ser marketing online.',
      link:
        'https://www.snsmarketing.es/blog/que-estructura-debe-de-tener-una-pagina-web/',
    },
    {
      referencia: 'TechLib. (s.f.). <em>Desarrollo web</em>. TechLib.',
      link: 'https://techlib.net/definition/web_development.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eddy Cárdenas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio, Industria y Turismo',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Julia Isabel Roberto',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
