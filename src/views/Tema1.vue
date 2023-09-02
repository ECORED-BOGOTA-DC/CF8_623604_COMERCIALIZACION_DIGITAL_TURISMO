<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Arquitectura web
    
    .container-100.d-flex.flex-wrap.mb-5.pt-5(style="background: linear-gradient(180deg, rgba(233,246,252,1) 0%, rgba(255,255,255,1) 100%);")
      .col-lg-6.pe-lg-4.order-2.order-lg-1
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #D6ECFA")
          p.mb-0 Hace referencia a la forma en la cual se establece la jerarquía de la información, la estructura y las categorías que conforman el sitio de Internet de la empresa turística. Una adecuada arquitectura mejora el funcionamiento del sitio, los usuarios y clientes potenciales tienen una buena experiencia en la navegación y el sitio es más fácil de rastrear para ayudar en el posicionamiento orgánico en los buscadores.
        p A continuación, se presenta una serie de aspectos que se deben tener en cuenta en la arquitectura web de comercialización de experiencias turísticas:

      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 559px")
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-1.svg' style="max-width: 132px; margin-top: -65px" alt='imagen decorativa')
          h4.p-4.text-center.w-100 Lenguaje e idioma
          p.mb-4.text-center.px-4 Definir el lenguaje y el idioma del sitio de internet.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-2.svg' style="max-width: 132px; margin-top: -65px" alt='imagen decorativa')
          h4.p-4.text-center.w-100 Secciones principales
          p.mb-4.text-center.px-4 Definir las secciones principales del sitio web.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-3.svg' style="max-width: 132px; margin-top: -65px" alt='imagen decorativa')
          h4.p-4.text-center.w-100 Categorías y subcategorías
          p.mb-4.text-center.px-4 Establecer las categorías y subcategorías interiores.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-4.svg' style="max-width: 132px; margin-top: -65px" alt='imagen decorativa')
          h4.p-4.text-center.w-100 Páginas principales
          p.mb-4.text-center.px-4 Definir las páginas principales y más destacadas.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-5.svg' style="max-width: 132px; margin-top: -65px" alt='imagen decorativa')
          h4.p-4.text-center.w-100 Rutas de acceso
          p.mb-4.text-center.px-4 Identifican las rutas de acceso de los usuarios y clientes potenciales.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-6.svg' style="max-width: 132px; margin-top: -65px" alt='imagen decorativa')
          h4.p-4.text-center.w-100 Contenido del sitio
          p.mb-4.text-center.px-4 Establecer el contenido del sitio y cada sección.
    
    .tarjeta.color-primario.p-3.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Arquitectura web
              p Con el fin de tener mayor conocimiento sobre la forma de organizar bien los contenidos en una página web se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=VSXdCHSFHXM&t=30s" target="_blank")
                span.pe-4 ver 
                i.fas.fa-link

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1. Página web
    
    p.mb-5 Básicamente son documentos a los que se puede acceder desde un navegador con acceso a Internet, estos documentos contienen información en diferentes formatos como, por ejemplo, audio, video y texto.

    PasosA.color-acento-contenido.mb-5.col-lg-10.col-xl-8.mx-auto(tipo="n")
      .row
        .col-md.pe-md-4.order-2.order-md-1
          h3 En 1992
          p aparecen las primeras páginas web. Estas páginas eran estáticas y se basaban en colores e imágenes.
        img.px-0.mx-auto.mb-4.my-md-auto.order-1.order-md-2(src='@/assets/curso/temas/tema1/img-3.svg' style="max-width: 125px" alt='imagen decorativa')
      
      .row
        img.px-0.mx-auto.mb-4.my-md-auto(src='@/assets/curso/temas/tema1/img-4.svg' style="max-width: 125px" alt='imagen decorativa')
        .col-md.ps-md-4
          h3 En 1997
          p con la aparición del programa <em>Flash</em>, las paginas comienzan a ser desarrolladas con animaciones; pero eran muy lentas para cargar y con pocas visitas.
      
      .row
        .col-md.pe-md-4.order-2.order-md-1
          h3 En 2002
          p aparecen los primeros <em>blog</em> y algunas redes sociales. Se incorporan herramientas para la creación de páginas web para mejorar la usabilidad.
        img.px-0.mx-auto.mb-4.my-md-auto.order-1.order-md-2(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 125px" alt='imagen decorativa')

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Tipos de páginas web
    
    p.mb-5 Existen diferentes tipos de página web y a su vez estos tipos se pueden clasificar según su construcción, la tecnología utilizada y la función que cumple; se invita a revisar el siguiente recurso para conocer en detalle estas clasificaciones: 

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="De acuerdo con su <br>construcción")
        p.mb-5 Dentro de esta categoría se pueden destacar los siguientes dos tipos:
        img.d-none.d-md-flex.mx-auto(src='@/assets/curso/temas/tema1/img-6.svg' style="max-width: 820px" alt='Imagen decorativa')
        img.d-flex.d-md-none.mx-auto(src='@/assets/curso/temas/tema1/img-6_1.svg' style="max-width: 250px" alt='Imagen decorativa')
      
      .py-3.py-md-4(titulo="De acuerdo con su <br>construcción")
        p.mb-5 Dentro de esta categoría se pueden destacar los siguientes tres tipos:
        img.d-none.d-md-flex.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' alt='Imagen decorativa')
        img.d-flex.d-md-none.mx-auto(src='@/assets/curso/temas/tema1/img-7_1.svg' style="max-width: 250px" alt='Imagen decorativa')
      
      .py-3.py-md-4(titulo="De acuerdo con su <br>construcción")
        p.mb-5 Dentro de esta categoría se pueden destacar los siguientes cuatro elementos:
        img.d-none.d-md-flex.mx-auto(src='@/assets/curso/temas/tema1/img-8.svg' alt='Imagen decorativa')
        img.d-flex.d-md-none.mx-auto(src='@/assets/curso/temas/tema1/img-8_1.svg' style="max-width: 250px" alt='Imagen decorativa')

    p.mb-5 Teniendo en cuenta esta clasificación se debe definir una estrategia de acuerdo con los objetivos de la empresa y escoger los tipos de páginas web que le permitan comercializar las experiencias turísticas.

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Tipos de sitios web
              p Con el fin de tener mayor conocimiento sobre los tipos de sitios web se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=nYCRkhAaTJU" target="_blank")
                span.pe-4 ver 
                i.fas.fa-link

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Desarrollo web
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema1/img-9.svg' alt='Imagen decorativa')
      .col-lg-6.ps-lg-4
        p.mb-5 Para cualquier empresa turística es fundamental tener un sitio web con un excelente desempeño en donde pueda mostrar su información y se pueda interactuar con los usuarios. Por esto es necesario conocer sobre desarrollo web.
        .cajon.color-primario.p-4.mb-4(style="background-color: #FFF7E5")
          p.mb-0 El desarrollo web se refiere a la construcción, creación y mantenimiento de sitios web. Incluye aspectos como el diseño web, la publicación web, la programación web y la base de datos gestión (Techlib, s.f.)
    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema1/img-10.jpg' alt='Imagen decorativa')
      .col-lg-6.ps-lg-4
        p La mayoría de las grandes empresas turísticas tienen un equipo de desarrollo web dedicado a diseñar y mantener su sitio web; sin embargo, en los últimos años organizaciones más pequeñas, emprendedores e incluso personas naturales del sector están utilizando sistemas de gestión de contenido como WordPress, Drupal y Joomla, para crear y editar sus propios sitios web utilizando un sitio web interfaz.
        p En este sentido surge la inquietud sobre ¿cómo iniciar a desarrollar una página web? Pues bien, se invita a ver el siguiente video, en el que encontrará algunos tips importantes:

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Cómo empezar en desarrollo web
              p Con el fin de tener mayor conocimiento sobre ¿cómo iniciar a desarrollar una página web?, se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=s_lUd8mhPpQ" target="_blank")
                span Ingresar  
                i.fas.fa-link

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Creación de la página web

    p.mb-5 Para la creación de la página web de la empresa turística es importante definir el plan de trabajo y evaluar las diferentes opciones disponibles para poder elegir la más conveniente. Revise los aspectos más importantes que se deben tener en cuenta:

    .tarjeta.p-4.mb-5(style="background-color: #EAEAEA")
      PasosB.color-secundario
        .px-4.pt-lg-5.row(titulo="Paso 1")
          .col-lg-6.mb-4.mb-lg-0
            h3 Definir la idea de la página
            p La empresa debe definir cuál es el propósito principal y la funcionalidad de la página, estos son algunos de los tipos de sitios más utilizados para la comercialización de experiencias turísticas:

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-11.svg' style="max-width: 525px" alt='imagen decorativa')
        
        .px-4.pt-lg-5.row(titulo="Paso 2")
          .col-lg-6.mb-4.mb-lg-0
            h3 Registrar el nombre del dominio
            p Antes de crear la página web de la empresa turística es necesario pensar en un nombre atractivo.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-12.svg' style="max-width: 324px" alt='imagen decorativa')
        
        .px-4.pt-lg-5.row(titulo="Paso 3")
          .col-lg-6.mb-4.mb-lg-0
            h3 Elegir un servidor (<em>hosting</em>) web
            p La empresa debe elegir un proveedor de servidor (<em>hosting</em> que se ajuste a las necesidades de la página web de comercialización de experiencias turísticas).

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-13.svg' style="max-width: 505px" alt='imagen decorativa')
        
        .px-4.pt-lg-5.row(titulo="Paso 4")
          .col-lg-6.mb-4.mb-lg-0
            h3 Elegir la plataforma para crear la página
            p La elección de la plataforma para crear la página web depende del objetivo que tenga la empresa turística. Estas son algunas de las opciones disponibles.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-14.svg' style="max-width: 563px" alt='imagen decorativa')

        .px-4.pt-lg-5.row(titulo="Paso 5")
          .col-lg-6.mb-4.mb-lg-0
            h3 Publicar, monitorear y mejorar 
            p La empresa turística debe tener información sobre el rendimiento de su página web, para esto es necesario recopilar estadísticas que le permitan analizar y tomar decisiones para mejorar continuamente. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-15.svg' style="max-width: 505px" alt='imagen decorativa')
    
    p.mb-5 Dentro de los sistemas de gestión de contenidos más conocidos está el Wordpress, a continuación, encontrará el paso a paso para la creación de una página web:

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Cómo crear una página web en WordPress gratis
              p Con el fin de tener mayor conocimiento sobre ¿Cómo crear una página web en Wordpress? se invitamos a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=4UF3xVuWBu0" target="_blank")
                span Ingresar   
                i.fas.fa-link

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Estructura de la página web
    
    p.mb-5 Una vez la empresa turística decide montar una página web es importante que conozca cuáles son los elementos básicos de una estructura web.  Se invita a ver en el siguiente recurso los elementos que hacen parte de la estructura de la página web (<em>Marketing</em>, 2017):

    ImagenInfografica.color-acento-botones.mb-5.col-xl-8.col-lg-10.mx-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-16.svg' alt='imagen infografica decorativa')

      .tarjeta.p-3(x="63.2%" y="20%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Cabecera <em style="font-weight: normal;">(Header)</em>
        p Esta es la sección que se encuentra al inicio de la página, por este motivo debe ser atractiva. Contiene el logotipo o nombre de la página web y una imagen principal (<em>banner</em>) o un slider con varias fotografías que pasan automáticamente.

      .tarjeta.p-3(x="31.2%" y="42.3%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Contenido <em style="font-weight: normal;">(Body)</em>
        p El contenido es todo el texto, imágenes, productos y/o servicios, etc. que se encuentra entre la cabecera y el pie de página. Toda esta información es la que va hacer que Google comprenda qué servicios ofrece la web de la empresa turística y la posicione en su buscador.  
      
      .tarjeta.p-3(x="9.3%" y="19.2%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Menú
        p Es una barra que se encuentra en la parte superior de la web (en la cabecera), en donde aparecen los principales apartados que tiene la página de la empresa turística (quienes somos, servicios, contacto, productos y/o servicios y blog). Este apartado suele estar anclado en la parte superior de la web y no varía en ninguna de las secciones internas para que el usuario pueda verlo en todo momento. 
      
      .tarjeta.p-3(x="69.3%" y="57.2%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Barras laterales <em style="font-weight: normal;">(Sidebar)</em>
        p Las barras laterales se utilizan para mostrar información importante que debe estar a la vista del usuario, como por ejemplo, un formulario de registro, las últimas ofertas o una imagen que enlace a alguna de las experiencias turísticas que se venda en la web, entre otras. 
      
      .tarjeta.p-3(x="48.2%" y="90.3%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Pie de página <em style="font-weight: normal;">(Footer)</em>
        p El pie de página es la parte inferior de la página web, en esta zona se aprovecha para poner secciones de la web que tengan menos interés para los usuarios (aviso legal, política de cookies, etc.), datos de contacto de la empresa turística y las redes sociales. 

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Diseño adaptable (responsive)
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema1/img-17.jpg' alt='Imagen decorativa')
      .col-lg-6.ps-lg-4
        p El diseño adaptable o responsive es utilizado en los sitios web para adaptar los contenidos de diversos formatos a los dispositivos que utilice el usuario (computadores, tabletas, teléfonos inteligentes), esto genera un mayor alcance de la marca y mejora la experiencia de los usuarios al visitar el sitio web de la empresa turística.
        p Cada día más personas utilizan sus teléfonos móviles para acceder a Internet, en ocasiones reemplazando a los PC. Es por este motivo que la empresa debe tener un sitio web adaptable (responsive) para comercializar sus experiencias turísticas, esto le genera más clientes potenciales y una ventaja sobre las empresas del sector que no lo tienen. Entre muchas bondades que tiene el desarrollo web con diseño adaptable se reconocen las siguientes:

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Bondades del desarrollo web con diseño adaptable
    img.mb-5(src="@/assets/curso/temas/tema1/img-18.svg")

    p.mb-5 A continuación, se presentan algunos aspectos que se deben tener en cuenta para el diseño de un sitio web adaptable para la comercialización de experiencias turísticas:

    .col-lg-10.col-xl-6.mx-auto
      .titulo-sexto.color-acento-contenido
        h5 Figura 2.
        span Comercialización de experiencias turísticas
      img.mb-5(src="@/assets/curso/temas/tema1/img-19.svg")

    p.mb-5 Desea conocer cómo desarrollar una página web con diseño adaptable, se invita a explorar el siguiente recurso:

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Manual de responsive web design
              p Con el fin de tener mayor conocimiento del tema puede revisar el manual, ingresando al link.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://desarrolloweb.com/manuales/responsive-web-design.html" target="_blank")
                span Ingresar   
                i.fas.fa-link

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") La maqueta del sitio web (<em>mockup</em>)
    
    .d-flex.flex-wrap.mb-5.pt-5
      .col-lg-6.pe-lg-4.order-2.order-lg-1
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #D6ECFA")
          p.mb-0 En la etapa de maquetación de un sitio web, la empresa turística debe estructurar, organizar y distribuir de manera gráfica los espacios y elementos que tendrá (menús, imágenes, botones, etc.) para tener una vista previa del sitio.
        p Durante esta etapa se definen, entre otros aspectos, los colores, las tipografías y el estilo para que el sitio cumpla con las necesidades de la empresa. Algunas de las ventajas de realizar una maqueta son:
      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-20.jpg" style="max-width: 559px")
    
    .col-lg-10.col-xl-8.mx-auto
      .titulo-sexto.color-acento-contenido
        h5 Figura 3.
        span Ventajas de la maqueta
      img.mb-5(src="@/assets/curso/temas/tema1/img-21.svg")

    p.mb-5 Estimado aprendiz desea saber cómo desarrollar una página web en Adobe XD, se invitamos a ver el paso a paso en el siguiente video:

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Como diseñar una página web - Adobe XD | paso a paso
              p Con el fin de tener mayor conocimiento sobre como crear una página web en Adobe XD se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ZopuGotHk7k" target="_blank")
                span Ingresar   
                i.fas.fa-link
    
    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Maquetado responsive con CSS Grid 
              p Con el fin de tener mayor conocimiento sobre el <b>maquetado responsive con CSS Grid | Diseño adaptativo</b> se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=T4t00Hd3qZc" target="_blank")
                span Ingresar   
                i.fas.fa-link
    
    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Contenido de la página web
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema1/img-22.jpg' alt='Imagen decorativa')
      .col-lg-6.ps-lg-4
        p Se hace referencia a las publicaciones de texto, auditivas o visuales que se realizan en el sitio web de la empresa turística. La página de Internet para la comercialización de las experiencias turísticas puede ser el primer punto de contacto entre la empresa y los clientes potenciales, por eso es importante mantener actualizado el contenido que se publica. 
        .cajon.color-primario.p-4.mb-4(style="background-color: #FFF7E5")
          p.mb-0 El contenido es importante para generar tráfico de su sitio de Internet. Por eso es clave crear contenido en diferentes formatos, que sea atractivo y esté organizado.
    
    p.mb-5 En este sentido se invita a revisar el siguiente recurso, en el que encontrará los tipos de contenido web más utilizados: 

    SlyderF.mb-5(columnas="col-lg-6")
      .tarjeta(style="overflow: hidden; background-color: #FFF4D9")
        img(src='@/assets/curso/temas/tema1/img-23.jpg' alt='Imagen decorativa')
        .p-4
          h3 Texto
          p.mb-0 Se puede publicar en la página web de la empresa turística como bloques de texto o dentro de imágenes.
      
      .tarjeta(style="overflow: hidden; background-color: #FFF4D9")
        img(src='@/assets/curso/temas/tema1/img-24.jpg' alt='Imagen decorativa')
        .p-4
          h3 Animaciones
          p.mb-0 Se pueden agregar con la ayuda de Flash, Ajax, imágenes GIF y otras herramientas de animación.
      
      .tarjeta(style="overflow: hidden; background-color: #FFF4D9")
        img(src='@/assets/curso/temas/tema1/img-25.jpg' alt='Imagen decorativa')
        .p-4
          h3 Imágenes
          p.mb-0 Es el contenido más utilizado en los sitios web de experiencias turísticas. Se pueden encontrar imágenes prediseñadas, fotos o dibujos.
      
      .tarjeta(style="overflow: hidden; background-color: #FFF4D9")
        img(src='@/assets/curso/temas/tema1/img-26.jpg' alt='Imagen decorativa')
        .p-4
          h3 Audio
          p.mb-0 De acuerdo con la estrategia de la empresa turística se puede incluir contenido en archivos de audio en el sitio web.
      
      .tarjeta(style="overflow: hidden; background-color: #FFF4D9")
        img(src='@/assets/curso/temas/tema1/img-27.jpg' alt='Imagen decorativa')
        .p-4
          h3 Video
          p.mb-0 Es el contenido más utilizado en los sitios web de las empresas turísticas. Al publicar este tipo de contenido se debe asegurar que se pueda visualizar en diferentes navegadores.
    
    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Seis tipos de contenidos que se hacen más virales en Internet
              p Estimado aprendiz, le gustaría saber cuáles son los seis tipos de contenidos que se hacen más virales en Internet, pues bien, se invita a ver el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=7JYAeCyWSLo" target="_blank")
                span.pe-4 Ver   
                i.fas.fa-link

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Usabilidad
    
    .container-100.d-flex.flex-wrap.align-items-center.py-4.mb-5(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema1/img-28.svg" style="max-width: 85px" alt="imagen decorativa")
      p.col-md.mb-0.ps-md-4 Hace referencia a la facilidad que tienen los usuarios de la página web de la empresa turística para ingresar y navegar de manera sencilla, segura e intuitiva. Se invita a ver este recurso, en el que encontrará algunos aspectos que debe considerar la empresa en el momento de diseñar y desarrollar un sitio web para la comercialización de experiencias turísticas, según (Inboundcycle, s.f.).

    p.mb-5 Se puede distinguir tres tipos de usabilidad de las páginas web:

    .d-flex.flex-wrap.mb-5
      AcordionA.col-lg-8.pe-lg-4(tipo="b" clase-tarjeta="tarjeta tarjeta--azul-edit")
        .row(titulo="Beneficios")
          .d-flex.flex-wrap
            .order-2.order-xl-1.col-xl-7
              ul.lista-ul
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Mejora la experiencia y satisfacción de los usuarios.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Mejora la comunicación con el usuario.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Aumenta el tráfico.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Aumenta la duración de las visitas.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Disminuye el porcentaje de rebote.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Fideliza a los usuarios.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Aumenta las ventas por medio del sitio web.
            img.order-1.order-xl-2.col-xl-4.mx-auto.ms-xl-0.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema1/img-30.svg" style="max-width: 233px" alt="imagen decorativa")
        .row(titulo="Optimizar la usabilidad")
          .d-flex.flex-wrap
            .order-2.order-xl-1.col-xl-7
              ul.lista-ul
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Estructurar y organizar los contenidos.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | El diseño es sencillo, en donde los contenidos se muestran separados y con una clasificación lógica.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | El menú debe ser accesible y visible.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Los títulos deben ser claros y estratégicamente ubicados.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | La interacción debe ser fácil e intuitiva.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Simplificar y sintetizar la información.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Adaptar el sitio web a todos los dispositivos.
            img.order-1.order-xl-2.col-xl-4.mx-auto.ms-xl-0.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema1/img-31.svg" style="max-width: 233px" alt="imagen decorativa")
        .row(titulo="Recomendaciones")
          .d-flex.flex-wrap
            .order-2.order-xl-1.col-xl-7
              ul.lista-ul
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Colocar menús de navegación en todas las páginas.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | No abusar de las ventanas emergentes (<em>pop-ups</em>).
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Añadir un mapa del sitio web para guiar al usuario y a los rastreadores de Google.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | No abusar de las animaciones u otros elementos que puedan distraer al usuario.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Mantener un diseño coherente en toda la web y en sus distintos enlaces.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Revisar y adaptar la versión móvil de todas las páginas de la web.
            img.order-1.order-xl-2.col-xl-5.mx-auto.ms-xl-0.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema1/img-32.svg" style="max-width: 302px" alt="imagen decorativa")
      img.col-lg-4.mb-auto.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img-29.jpg" style="max-width: 400px" alt="imagen decorativa")

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Usabilidad
              p Con el fin de tener mayor conocimiento sobre la usabilidad, se invita a ver el siguiente video: <br><b>Usabilidad web ¿Qué es y qué aporta al usuario? | Masterclass.</b>
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Y7nLeu4cY38" target="_blank")
                span.pe-4 Ver   
                i.fas.fa-link

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Accesibilidad
    
    .mb-5.pt-5
      div(style="background-color: #FFB338; border-top-right-radius: 60px")
        .d-flex.flex-wrap.align-items-center.col-xl-11.mx-auto.p-4.p-lg-0
          .col-lg.ps-lg-4.pe-lg-5.mb-0.order-2.order-lg-1
            p Busca facilitar el acceso universal a Internet. Es por esto que en el momento de diseñar y programar el sitio web la empresa turística debe adaptarlo sin importar las limitaciones físicas, intelectuales o sensoriales de los usuarios.
            p.mb-0 La WAI (<em>Web Accessibility Initiative</em>) desde 1999 emite directrices estandarizadas y reconocidas a nivel internacional para crear contenidos y páginas más accesibles que se agrupan en los siguientes aspectos:
          img.mb-4.mb-lg-auto.mx-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-33.png" style="max-width: 336px; margin-top: -5%" alt="imagen decorativa")
        


</template>

<script>
import SlyderF from '@/components/SlyderF.vue'
export default {
  name: 'Tema1',
  components: { SlyderF },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
