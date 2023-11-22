<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Arquitectura web
    
    .container-100.d-flex.flex-wrap.mb-5.pt-5(style="background: linear-gradient(180deg, rgba(233,246,252,1) 0%, rgba(255,255,255,1) 100%);")
      .col-lg-6.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #D6ECFA")
          p.mb-0 Hace referencia a la forma en la cual se establece la jerarquía de la información, la estructura y las categorías que conforman el sitio de Internet de la empresa turística. Una adecuada arquitectura mejora el funcionamiento del sitio, los usuarios y clientes potenciales tienen una buena experiencia en la navegación y el sitio es más fácil de rastrear para ayudar en el posicionamiento orgánico en los buscadores.
        p A continuación, se presenta una serie de aspectos que se deben tener en cuenta en la arquitectura web de comercialización de experiencias turísticas:

      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 559px" data-aos="fade-left" alt='Imagen decorativa')
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-1.svg' style="max-width: 132px; margin-top: -65px" alt='Imagen decorativa')
          h4.p-4.text-center.w-100 Lenguaje e idioma
          p.mb-4.text-center.px-4 Definir el lenguaje y el idioma del sitio de internet.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-2.svg' style="max-width: 132px; margin-top: -65px" alt='Imagen decorativa')
          h4.p-4.text-center.w-100 Secciones principales
          p.mb-4.text-center.px-4 Definir las secciones principales del sitio web.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-3.svg' style="max-width: 132px; margin-top: -65px" alt='Imagen decorativa')
          h4.p-4.text-center.w-100 Categorías y subcategorías
          p.mb-4.text-center.px-4 Establecer las categorías y subcategorías interiores.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-4.svg' style="max-width: 132px; margin-top: -65px" alt='Imagen decorativa')
          h4.p-4.text-center.w-100 Páginas principales
          p.mb-4.text-center.px-4 Definir las páginas principales y más destacadas.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-5.svg' style="max-width: 132px; margin-top: -65px" alt='Imagen decorativa')
          h4.p-4.text-center.w-100 Rutas de acceso
          p.mb-4.text-center.px-4 Identifican las rutas de acceso de los usuarios y clientes potenciales.
      
      div(style="overflow: hidden; padding-top: 60px; padding-bottom: .4rem")
        .tarjeta.mt-auto.d-flex.flex-wrap(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-slyder.png')})`}"
          style="background-repeat: no-repeat; background-position: left;"
        )
          img.mx-auto(src='@/assets/curso/temas/tema1/slyF-6.svg' style="max-width: 132px; margin-top: -65px" alt='Imagen decorativa')
          h4.p-4.text-center.w-100 Contenido del sitio
          p.mb-4.text-center.px-4 Establecer el contenido del sitio y cada sección.
    
    .tarjeta.color-primario.p-3.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Arquitectura web
              p Con el fin de tener mayor conocimiento sobre la forma de organizar bien los contenidos en una página web se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=VSXdCHSFHXM&t=30s" target="_blank" data-aos="fade-left")
                span.pe-4 Ver 
                i.fas.fa-link

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Página web
    
    p.mb-5(data-aos="fade-right") Básicamente son documentos a los que se puede acceder desde un navegador con acceso a Internet, estos documentos contienen información en diferentes formatos como, por ejemplo, audio, video y texto.

    PasosA.color-acento-contenido.mb-5.col-lg-10.col-xl-8.mx-auto(tipo="n")
      .row
        .col-md.pe-md-4.order-2.order-md-1(data-aos="fade-right")
          h3 En 1992
          p Aparecen las primeras páginas web. Estas páginas eran estáticas y se basaban en colores e imágenes.
        img.px-0.mx-auto.mb-4.my-md-auto.order-1.order-md-2(src='@/assets/curso/temas/tema1/img-3.svg' style="max-width: 125px" alt='Imagen decorativa' data-aos="fade-left")
      
      .row
        img.px-0.mx-auto.mb-4.my-md-auto(src='@/assets/curso/temas/tema1/img-4.svg' style="max-width: 125px" alt='Imagen decorativa' data-aos="fade-right")
        .col-md.ps-md-4(data-aos="fade-left")
          h3 En 1997
          p Con la aparición del programa Flash, las paginas comienzan a ser desarrolladas con animaciones; pero eran muy lentas para cargar y con pocas visitas.
      
      .row
        .col-md.pe-md-4.order-2.order-md-1(data-aos="fade-right")
          h3 En 2002
          p Aparecen los primeros blogs y algunas redes sociales. Se incorporan herramientas para la creación de páginas web para mejorar la usabilidad.
        img.px-0.mx-auto.mb-4.my-md-auto.order-1.order-md-2(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 125px" alt='Imagen decorativa' data-aos="fade-left")

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Tipos de páginas web
    
    p.mb-5(data-aos="fade-right") Existen diferentes tipos de página web y a su vez estos tipos se pueden clasificar según su construcción, la tecnología utilizada y la función que cumple; se invita a revisar el siguiente recurso para conocer en detalle estas clasificaciones: 

    TabsC.color-primario.mb-5(data-aos="fade-left")
      .py-3.py-md-4(titulo="De acuerdo con su <br>construcción")
        p.mb-5 Dentro de esta categoría se pueden destacar los siguientes dos tipos:
        img.d-none.d-md-flex.mx-auto(src='@/assets/curso/temas/tema1/img-6.svg' style="max-width: 820px" alt='Imagen decorativa')
        img.d-flex.d-md-none.mx-auto(src='@/assets/curso/temas/tema1/img-6_1.svg' style="max-width: 250px" alt='Imagen decorativa')
      
      .py-3.py-md-4(titulo="De acuerdo con la <br>tecnología utilizada")
        p.mb-5 Dentro de esta categoría se pueden destacar los siguientes tres tipos:
        img.d-none.d-md-flex.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' alt='Imagen decorativa')
        img.d-flex.d-md-none.mx-auto(src='@/assets/curso/temas/tema1/img-7_1.svg' style="max-width: 250px" alt='Imagen decorativa')
      
      .py-3.py-md-4(titulo="De acuerdo con la <br>función que cumple")
        p.mb-5 Dentro de esta categoría se pueden destacar los siguientes cuatro elementos:
        img.d-none.d-md-flex.mx-auto(src='@/assets/curso/temas/tema1/img-8.svg' alt='Imagen decorativa')
        img.d-flex.d-md-none.mx-auto(src='@/assets/curso/temas/tema1/img-8_1.svg' style="max-width: 250px" alt='Imagen decorativa')

    p.mb-5(data-aos="fade-right") Teniendo en cuenta esta clasificación se debe definir una estrategia de acuerdo con los objetivos de la empresa y escoger los tipos de páginas web que le permitan comercializar las experiencias turísticas.

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Tipos de sitios web
              p Con el fin de tener mayor conocimiento sobre los tipos de sitios web se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=nYCRkhAaTJU" target="_blank" data-aos="fade-left")
                span.pe-4 Ver 
                i.fas.fa-link

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Desarrollo web
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema1/img-9.svg' alt='Imagen que muestra los logos de los sistemas de gestión de contenido como son Drupal, Joomla y WordPress.' data-aos="fade-right")
      .col-lg-6.ps-lg-4(data-aos="fade-left")
        p.mb-5 Para cualquier empresa turística es fundamental tener un sitio web con un excelente desempeño en donde pueda mostrar su información y se pueda interactuar con los usuarios. Por esto es necesario conocer sobre desarrollo web.
        .cajon.color-primario.p-4.mb-4(style="background-color: #FFF7E5")
          p.mb-0 El desarrollo web se refiere a la construcción, creación y mantenimiento de sitios web. Incluye aspectos como el diseño web, la publicación web, la programación web y la base de datos gestión Techlib.
    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema1/img-10.jpg' alt='Imagen decorativa' data-aos="fade-right")
      .col-lg-6.ps-lg-4(data-aos="fade-left")
        p La mayoría de las grandes empresas turísticas tienen un equipo de desarrollo web dedicado a diseñar y mantener su sitio web; sin embargo, en los últimos años organizaciones más pequeñas, emprendedores e incluso personas naturales del sector están utilizando sistemas de gestión de contenido como WordPress, Drupal y Joomla, para crear y editar sus propios sitios web utilizando un sitio web interfaz.
        p En este sentido surge la inquietud sobre cómo iniciar a desarrollar una página web Pues bien, se invita a ver el siguiente video, en el que encontrará algunos <em>tips</em> importantes:

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Cómo empezar en desarrollo web
              p Con el fin de tener mayor conocimiento sobre ¿cómo iniciar a desarrollar una página web?, se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=s_lUd8mhPpQ" target="_blank" data-aos="fade-left")
                span Ingresar  
                i.fas.fa-link

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Creación de la página web

    p.mb-5(data-aos="fade-right") Para la creación de la página web de la empresa turística es importante definir el plan de trabajo y evaluar las diferentes opciones disponibles para poder elegir la más conveniente. Revise los aspectos más importantes que se deben tener en cuenta:

    .tarjeta.p-4.mb-5(style="background-color: #EAEAEA")
      PasosB.color-secundario(data-aos="fade-left")
        .px-4.pt-lg-5.row(titulo="Paso 1")
          .col-lg-6.mb-4.mb-lg-0
            h3 Definir la idea de la página
            p La empresa debe definir cuál es el propósito principal y la funcionalidad de la página, estos son algunos de los tipos de sitios más utilizados para la comercialización de experiencias turísticas:

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-11.svg' style="max-width: 525px" alt='Imagen decorativa')
        
        .px-4.pt-lg-5.row(titulo="Paso 2")
          .col-lg-6.mb-4.mb-lg-0
            h3 Registrar el nombre del dominio
            p Antes de crear la página web de la empresa turística es necesario pensar en un nombre atractivo.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-12.svg' style="max-width: 324px" alt='Imagen decorativa')
        
        .px-4.pt-lg-5.row(titulo="Paso 3")
          .col-lg-6.mb-4.mb-lg-0
            h3 Elegir un servidor (<em>hosting</em>) web
            p La empresa debe elegir un proveedor de servidor (<em>hosting</em> que se ajuste a las necesidades de la página web de comercialización de experiencias turísticas).

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-13.svg' style="max-width: 505px" alt='Imagen decorativa')
        
        .px-4.pt-lg-5.row(titulo="Paso 4")
          .col-lg-6.mb-4.mb-lg-0
            h3 Elegir la plataforma para crear la página
            p La elección de la plataforma para crear la página web depende del objetivo que tenga la empresa turística. Estas son algunas de las opciones disponibles.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-14.svg' style="max-width: 563px" alt='Imagen decorativa')

        .px-4.pt-lg-5.row(titulo="Paso 5")
          .col-lg-6.mb-4.mb-lg-0
            h3 Publicar, monitorear y mejorar 
            p La empresa turística debe tener información sobre el rendimiento de su página web, para esto es necesario recopilar estadísticas que le permitan analizar y tomar decisiones para mejorar continuamente. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img-15.svg' style="max-width: 505px" alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-right") Dentro de los sistemas de gestión de contenidos más conocidos está el Wordpress, a continuación, encontrará el paso a paso para la creación de una página web:

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Cómo crear una página web en WordPress gratis
              p Con el fin de tener mayor conocimiento sobre ¿Cómo crear una página web en Wordpress? Lo invitamos a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=4UF3xVuWBu0" target="_blank" data-aos="fade-left")
                span Ingresar   
                i.fas.fa-link

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Estructura de la página web
    
    p.mb-5(data-aos="fade-right") Una vez la empresa turística decide montar una página web es importante que conozca cuáles son los elementos básicos de una estructura web.  Se invita a ver en el siguiente recurso los elementos que hacen parte de la estructura de la página web (Marketing, 2017):

    ImagenInfografica.color-acento-botones.mb-5.col-xl-8.col-lg-10.mx-auto(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-16.svg' alt='Imagen que muestra puntos de estructura de una página web, los cuales se describen en la parte inferior.')

      .tarjeta.p-3(x="63.2%" y="20%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Cabecera <em style="font-weight: normal;">(Header)</em>
        p Esta es la sección que se encuentra al inicio de la página, por este motivo debe ser atractiva. Contiene el logotipo o nombre de la página web y una imagen principal (<em>banner</em>) o un <em>slider</em> con varias fotografías que pasan automáticamente.

      .tarjeta.p-3(x="31.2%" y="42.3%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Contenido <em style="font-weight: normal;">(Body)</em>
        p El contenido es todo el texto, imágenes, productos y/o servicios, etc. que se encuentra entre la cabecera y el pie de página. Toda esta información es la que va hacer que Google comprenda qué servicios ofrece la web de la empresa turística y la posicione en su buscador.  
      
      .tarjeta.p-3(x="9.3%" y="19.2%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Menú
        p Es una barra que se encuentra en la parte superior de la web (en la cabecera), en donde aparecen los principales apartados que tiene la página de la empresa turística (quienes somos, servicios, contacto, productos y/o servicios y blogs). Este apartado suele estar anclado en la parte superior de la web y no varía en ninguna de las secciones internas para que el usuario pueda verlo en todo momento. 
      
      .tarjeta.p-3(x="69.3%" y="57.2%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Barras laterales <em style="font-weight: normal;">(Sidebar)</em>
        p Las barras laterales se utilizan para mostrar información importante que debe estar a la vista del usuario, como por ejemplo, un formulario de registro, las últimas ofertas o una imagen que enlace a alguna de las experiencias turísticas que se venda en la web, entre otras. 
      
      .tarjeta.p-3(x="48.2%" y="90.3%" numero="+" style="background-color: #FFF7E3")
        .h5.mb-2 Pie de página <em style="font-weight: normal;">(Footer)</em>
        p El pie de página es la parte inferior de la página web, en esta zona se aprovecha para poner secciones de la web que tengan menos interés para los usuarios (aviso legal, política de <em>cookies</em>, etc.), datos de contacto de la empresa turística y las redes sociales. 

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Diseño adaptable (<em>responsive</em>)
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema1/img-17.jpg' alt='Imagen decorativa' data-aos="fade-right")
      .col-lg-6.ps-lg-4(data-aos="fade-left")
        p El diseño adaptable o <em>responsive</em> es utilizado en los sitios web para adaptar los contenidos de diversos formatos a los dispositivos que utilice el usuario (computadores, tabletas, teléfonos inteligentes), esto genera un mayor alcance de la marca y mejora la experiencia de los usuarios al visitar el sitio web de la empresa turística.
        p Cada día más personas utilizan sus teléfonos móviles para acceder a Internet, en ocasiones reemplazando a los PC. Es por este motivo que la empresa debe tener un sitio web adaptable (<em>responsive</em>) para comercializar sus experiencias turísticas, esto le genera más clientes potenciales y una ventaja sobre las empresas del sector que no lo tienen. Entre muchas bondades que tiene el desarrollo web con diseño adaptable se reconocen las siguientes:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 1.
      span Bondades del desarrollo web con diseño adaptable
    img.mb-5(src="@/assets/curso/temas/tema1/img-18.svg" data-aos="fade-left" alt='Figura que menciona las bondades del desarrollo web con diseño sostenible, las cuales se describen parte inferior.')

    p.mb-5(data-aos="fade-right") A continuación, se presentan algunos aspectos que se deben tener en cuenta para el diseño de un sitio web adaptable para la comercialización de experiencias turísticas:

    .col-lg-10.col-xl-6.mx-auto
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 2.
        span Comercialización de experiencias turísticas
      img.mb-5(src="@/assets/curso/temas/tema1/img-19.svg" data-aos="fade-left" alt='Figura que menciona los aspectos para la comercialización de experiencias turísticas, los cuales se detallan en la parte inferior.')

    p.mb-5 Desea conocer cómo desarrollar una página web con diseño adaptable, se invita a explorar el siguiente recurso:

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Manual de <em>responsive web design</em>
              p Con el fin de tener mayor conocimiento del tema puede revisar el manual, ingresando al enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://desarrolloweb.com/manuales/responsive-web-design.html" target="_blank" data-aos="fade-left")
                span Ingresar   
                i.fas.fa-link

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") La maqueta del sitio web (<em>mockup</em>)
    
    .d-flex.flex-wrap.mb-5.pt-5
      .col-lg-6.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #D6ECFA")
          p.mb-0 En la etapa de maquetación de un sitio web, la empresa turística debe estructurar, organizar y distribuir de manera gráfica los espacios y elementos que tendrá (menús, imágenes, botones, etc.) para tener una vista previa del sitio.
        p Durante esta etapa se definen, entre otros aspectos, los colores, las tipografías y el estilo para que el sitio cumpla con las necesidades de la empresa. Algunas de las ventajas de realizar una maqueta son:
      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-20.jpg" style="max-width: 559px" data-aos="fade-left" alt='Imagen decorativa')
    
    .col-lg-10.col-xl-8.mx-auto
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 3.
        span Ventajas de la maqueta
      img.mb-5(src="@/assets/curso/temas/tema1/img-21.svg" data-aos="fade-left" alt='Figura que menciona las ventajas de la maqueta y se describen parte inferior.')

    p.mb-5(data-aos="fade-right") Estimado aprendiz desea saber cómo desarrollar una página web en Adobe XD, lo invitamos a ver el paso a paso en el siguiente video:

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Como diseñar una página web - Adobe XD | paso a paso
              p Con el fin de tener mayor conocimiento sobre cómo crear una página web en Wordpress, lo invitamos a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ZopuGotHk7k" target="_blank" data-aos="fade-left")
                span Ingresar   
                i.fas.fa-link
    
    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Maquetado <em>responsive</em> con CSS Grid 
              p Con el fin de tener mayor conocimiento sobre el <b>maquetado <em>responsive</em> con CSS Grid | Diseño adaptativo</b> se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=T4t00Hd3qZc" target="_blank" data-aos="fade-left")
                span Ingresar   
                i.fas.fa-link
    
    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Contenido de la página web
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema1/img-22.jpg' alt='Imagen decorativa' data-aos="fade-right")
      .col-lg-6.ps-lg-4(data-aos="fade-rleft")
        p Hace referencia a las publicaciones de texto, auditivas o visuales que se realizan en el sitio web de la empresa turística. La página de Internet para la comercialización de las experiencias turísticas puede ser el primer punto de contacto entre la empresa y los clientes potenciales, por eso es importante mantener actualizado el contenido que se publica. 
        .cajon.color-primario.p-4.mb-4(style="background-color: #FFF7E5")
          p.mb-0 El contenido es importante para generar tráfico de su sitio de Internet. Por eso es clave crear contenido en diferentes formatos, que sea atractivo y esté organizado.
    
    p.mb-5(data-aos="fade-right") En este sentido se invita a revisar el siguiente recurso, en el que encontrará los tipos de contenido web más utilizados: 

    SlyderF.mb-5(columnas="col-lg-6" data-aos="fade-left")
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
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Seis tipos de contenidos que se hacen más virales en Internet
              p Estimado aprendiz, ¿le gustaría saber cuáles son los seis tipos de contenidos que se hacen más virales en Internet?, en el siguiente enlace encontrará información al respecto.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=7JYAeCyWSLo" target="_blank" data-aos="fade-right")
                span.pe-4 Ver   
                i.fas.fa-link

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Usabilidad
    
    .container-100.d-flex.flex-wrap.align-items-center.py-4.mb-5(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema1/img-28.svg" style="max-width: 85px" alt="Imagen decorativa" data-aos="fade-right")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") Hace referencia a la facilidad que tienen los usuarios de la página web de la empresa turística para ingresar y navegar de manera sencilla, segura e intuitiva. Se invita a ver este recurso, en el que encontrará algunos aspectos que debe considerar la empresa en el momento de diseñar y desarrollar un sitio web para la comercialización de experiencias turísticas, según Inboundcycle.

    p.mb-5(data-aos="fade-right") Se puede distinguir tres tipos de usabilidad de las páginas web:

    .d-flex.flex-wrap.mb-5
      AcordionA.col-lg-8.pe-lg-4(tipo="b" clase-tarjeta="tarjeta tarjeta--azul-edit" data-aos="fade-left")
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
            img.order-1.order-xl-2.col-xl-4.mx-auto.ms-xl-0.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema1/img-30.svg" style="max-width: 233px" alt="Imagen decorativa")
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
            img.order-1.order-xl-2.col-xl-4.mx-auto.ms-xl-0.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema1/img-31.svg" style="max-width: 233px" alt="Imagen decorativa")
        .row(titulo="Recomendaciones")
          .d-flex.flex-wrap
            .order-2.order-xl-1.col-xl-7
              ul.lista-ul
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Colocar menús de navegación en todas las páginas.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  p.mb-0 No abusar de las ventanas emergentes (<em>pop-ups</em>).
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
            img.order-1.order-xl-2.col-xl-5.mx-auto.ms-xl-0.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema1/img-32.svg" style="max-width: 302px" alt="Imagen decorativa")
      img.col-lg-4.mb-auto.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img-29.jpg" style="max-width: 400px" alt="Imagen decorativa")

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Usabilidad
              p Con el fin de tener mayor conocimiento sobre la usabilidad, se invita a ver el siguiente video: <br><b>Usabilidad web ¿Qué es y qué aporta al usuario? | MasterClass.</b>
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Y7nLeu4cY38" target="_blank" data-aos="fade-right")
                span.pe-4 Ver   
                i.fas.fa-link

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Accesibilidad
    
    .mb-5.pt-5
      div(style="background-color: #FFB338; border-top-right-radius: 60px")
        .d-flex.flex-wrap.align-items-center.col-xl-11.mx-auto.p-4.p-lg-0
          .col-lg.ps-lg-4.pe-lg-5.mb-0.order-2.order-lg-1(data-aos="fade-right")
            p Busca facilitar el acceso universal a Internet. Es por esto que en el momento de diseñar y programar el sitio web la empresa turística debe adaptarlo sin importar las limitaciones físicas, intelectuales o sensoriales de los usuarios.
            p.mb-0 La WAI (Web Accessibility Initiative) desde 1999 emite directrices estandarizadas y reconocidas a nivel internacional para crear contenidos y páginas más accesibles que se agrupan en los siguientes aspectos:
          img.mb-4.mb-lg-auto.mx-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-33.png" style="max-width: 336px; margin-top: -5%" alt="Imagen decorativa" data-aos="fade-left")
    

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-6.col-11.mb-4.mb-xl-0(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-34.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-center(style="min-height: 43px") Accesibilidad del contenido web (WCAG)
            p.mb-0 Pautas para crear contenidos accesibles y compatibles con todo tipo de tecnologías de apoyo, dispositivos, navegadores y lenguajes de programación. Contemplan el uso de letras de gran tamaño, diseños adaptativos, textos predictivos, asistentes a la navegación, etc.

      .col-xl-4.col-md-6.col-11.mb-4.mb-xl-0(data-aos="flip-up")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-35.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-center(style="min-height: 43px") Accesibilidad de las herramientas de autor (ATAG)
            p.mb-0 Normas que atañen al desarrollo de los programas y aplicaciones que se utilizan para crear, gestionar y publicar los contenidos digitales. Estas herramientas abarcan los procesadores de textos, los gestores de bases de datos, los programas de edición de vídeo, etc.

      .col-xl-4.col-md-6.col-11.mb-4.mb-xl-0(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-36.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-center(style="min-height: 43px") Accesibilidad de los agentes de usuario (UAAG)
            p.mb-0 Pautas destinadas al desarrollo de los programas necesarios para interactuar con el contenido web, como los navegadores, los reproductores multimedia, los lectores de pantalla, etc.

    p.mb-5(data-aos="fade-right") La WAI clasifica también las páginas web según la accesibilidad de los contenidos, estableciendo los siguientes niveles (Iberdrola, s.f.):

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 4.
      span Clasificación de páginas web accesibles
    img.mb-5.d-none.d-md-flex(src="@/assets/curso/temas/tema1/img-37.svg" data-aos="fade-left" alt='Figura que menciona la clasificación de las páginas accesibles, las cuales se describen en la parte inferior de la imagen.')
    img.mx-auto.mb-5.d-flex.d-md-none(src="@/assets/curso/temas/tema1/img-37_1.svg" style="max-width: 300px" data-aos="fade-left" alt='Figura que menciona la clasificación de las páginas accesibles, las cuales se describen en la parte inferior de la imagen. ')

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3  ¿Qué es la accesibilidad web?
              p Con el fin de tener mayor conocimiento sobre la accesibilidad web, se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=gQIKQO41pME" target="_blank" data-aos="fade-right")
                span.pe-4 Ver   
                i.fas.fa-link

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Posicionamiento web

    .container-100.d-flex.flex-wrap.align-items-center.py-4.mb-5(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema1/img-38.svg" style="max-width: 85px" alt="Imagen decorativa" data-aos="fade-right")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") Tener un buen posicionamiento web ofrece una ventaja cuando de aumentar las ventas en línea se trata, es por esto que las empresas turísticas desarrollan estrategias para atraer a los usuarios cualificados por medio del tráfico orgánico, lo que se conoce como SEO (Search Engine Optimization u optimización de motores de búsqueda). Se invita a ver el siguiente recurso sobre las estrategias SEO:

    figure.col-xl-10.mx-auto.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/N91a6cGFdxk?si=rJkKl2tG7kK2gR0B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3  Buscadores
              p Con el fin de tener mayor conocimiento sobre buscadores, se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=99G6_y2TZPo" target="_blank" data-aos="fade-left")
                span.pe-4 Ver   
                i.fas.fa-link
    p.mb-5(data-aos="fade-right") A continuación, se presentan algunos consejos para mejorar el posicionamiento del sitio de web de comercialización de experiencias turísticas en Google (Capella, 2020):

    .tarjeta.px-5.py-3.mb-5(style="background-color: #FFF7E3")
      SlyderA(tipo="b" data-aos="fade-left")
        .row.justify-content-start.align-items-start.py-5
          .col-lg-5.mb-4.mb-lg-0.pt-4.pt-0.position-relative
              h4.mb-4 Optimizar la página web de la empresa turística
              ul.lista-ul
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Publicar imágenes y videos de poco peso.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Evitar duplicidades.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Introducir el sitemap.xml y el archivo robots.txt.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  p.mb-0 Asegurar que sea <em>responsive</em> y cuenten con AMP (Accelerated Mobile Pages).
              p.mb-0 Estas son algunas herramientas que se pueden utilizar para identificar cuáles son los aspectos que la empresa turística que debe mejorar en el sitio web: 
                br
                br
                |PageSpeed, Insights y GTMetrix.

          .col-6.col-lg-6.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-39.svg' style="max-width: 544px" alt='Imagen decorativa')
      
        .row.justify-content-start.align-items-start.py-5
          .col-lg-6.mb-4.mb-lg-0.pt-4.pt-0.position-relative
              h4.mb-4 Escribir sobre lo que buscan los usuarios en el buscador
              P La empresa turística debe definir una estrategia de contenido y uno de los aspectos a tener en cuenta es escribir sobre lo que escriben o buscan los usuarios en Google.
              P Algunas herramientas que se pueden utilizar para identificar lo que los usuarios están escribiendo son:
              img(src='@/assets/curso/temas/tema1/img-40.svg' style="max-width: 450px" alt='Figura que muestra imágenes de logos de Google, Ubersuggest, Keyword tool, SE  Rankiing, Key Word, Answer The Public.')

          .col-6.col-lg-6.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-41.svg' style="max-width: 406px" alt='Imagen decorativa')
        
        .row.justify-content-start.align-items-start.py-5
          .col-lg-6.mb-4.mb-lg-0.pt-4.pt-0.position-relative
              h4.mb-4 Crear contenido de valor
              P La empresa turística debe tener en cuenta el contenido que publica en su sitio web para que cuando el buscador de Google haga el rastreo, pueda identificar de qué se trata el contenido relevante para los usuarios. Este contenido debe ser:
              img(src='@/assets/curso/temas/tema1/img-42.svg' style="max-width: 565px" alt='Figura que menciona lo que se debe tener en cuenta en el contenido de valor, lo cual es que sea: interesante, original, aporte aprendizaje, aporte valor a los usuarios, relacionado con lo que los usuarios buscan.')
              P Adicionalmente, la empresa debe estar informada sobre las actualizaciones de los algoritmos del buscador de Google, para poder identificar los ajustes que se deben realizar en su estrategia de contenidos.

          .col-6.col-lg-6.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-43.svg' style="max-width: 503px" alt='Imagen decorativa')

        .row.justify-content-start.align-items-start.py-5
          .col-lg-5.mb-4.mb-lg-0.pt-4.pt-0.position-relative
              h4.mb-4 Incluir recursos gráficos en el sitio web
              P Es importante que la empresa turística incluya recursos gráficos en su sitio web, ya que permiten mostrar mejor el tipo de experiencias que se comercializan, crean una experiencia de usuario positiva y Google valora las páginas que utilizan este tipo de recursos.
              ul.lista-ul
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Video.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Imágenes.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Infografías.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  p.mb-0 Gráficos.

          .col-6.col-lg-6.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-44.svg' style="max-width: 524px" alt='Imagen decorativa')
        
        .row.justify-content-start.align-items-start.py-5
          .col-lg-5.mb-4.mb-lg-0.pt-4.pt-0.position-relative
              h4.mb-4 Incentivar a los usuarios a interactuar en el sitio web
              P La empresa turística podría incentivar a que los usuarios interactúen con el sitio web por medio de comentarios o resolviendo dudas sobre el contenido publicado. Estos son algunas estrategias que pueden ayudar:
              ul.lista-ul
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Incluir sección de opiniones o comentarios.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  p Publicar blogs con contenido fácil de compartir (redes sociales, correo electrónico, WhatsApp).
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  | Incluir botones CTA para descargar contenido, suscribirse, más información, etc.
                li.d-flex.mb-0
                  .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
                  p.mb-0 Tener sección de preguntas frecuentes e invitar a los usuarios a realizar más preguntas.

          .col-6.col-lg-6.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-45.svg' style="max-width: 544px" alt='Imagen decorativa')
        
        .row.justify-content-start.align-items-start.py-5
          .col-lg-5.mb-4.mb-lg-0.pt-4.pt-0.position-relative
              h4.mb-4 Utilizar <em>links</em> gratuitos que lleven tráfico a la página web de la empresa turística
              P Es conveniente que la empresa turística inicialmente incluya enlaces en redes sociales por medio de los comentarios en sitios web externos que lleven tráfico hacia el propio sitio web. Esto permite que Google valore ese tráfico como un punto extra a la hora de posicionar la página web.

          .col-6.col-lg-6.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-46.svg' style="max-width: 520px" alt='Imagen decorativa')
        
        .row.justify-content-start.align-items-start.py-5
          .col-lg-6.mb-4.mb-lg-0.pt-4.pt-0.position-relative
              h4.mb-4 Indexar lo que se quiera posicionar
              P La empresa turística debe definir el contenido que no quiere posicionar y colocarlo en los buscadores en no indexan, para evitar que el robot de Google pierda el tiempo en secciones de la página que no son de su interés, como por ejemplo, las páginas de contacto o política de privacidad.

          .col-6.col-lg-6.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-47.svg' style="max-width: 344px" alt='Imagen decorativa')
        
        .row.justify-content-start.align-items-start.py-5
          .col-lg-6.mb-4.mb-lg-0.pt-4.pt-0.position-relative
              h5.mb-4 Fidelizar usuarios y conseguir tráfico recurrente
              P Fidelizar a usuarios, conseguir suscriptores y haga que vuelvan una y otra vez a su web. De este modo conseguirá visitas recurrentes y este factor "<em>branding</em>" es una de las cosas más premiadas por los buscadores hoy en día.

          .col-6.col-lg-6.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-59.svg' style="max-width: 344px" alt='Imagen decorativa')

    p.mb-5(data-aos="fade-right") Estimado aprendiz, para profundizar sobre la aplicación de SEO en una estrategia de <em>marketing online</em> puede revisar el siguiente material:

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3  Cómo posicionar en turismo | SEO en turismo
              p Con el fin de tener mayor conocimiento sobre cómo posicionar en turismo | SEO en turismo, se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=UPySDhEI0rU" target="_blank" data-aos="fade-left")
                span.pe-4 Ver   
                i.fas.fa-link

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2. Alojamiento (<em>hosting</em>) y dominio web 

    .container-titulo.mb-5
      img(src="@/assets/curso/temas/tema1/img-48.svg" style="max-width: 78px; width: 78px" alt="Imagen decorativa" data-aos="fade-right")
      h3 El <em>hosting</em> (alojamiento)
    
    p.mb-5(data-aos="fade-right") Se refiere al servicio que permite que el sitio web de la empresa turística siempre esté en línea o disponible, adicionalmente en este servicio se puede alojar otro tipo de información, como por ejemplo, aplicaciones, correos electrónicos, bases de datos, etc. Existen tres tipos de <em>hosting</em>, se invita a revisar el siguiente recurso para conocerlos:

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-xl-4.col-md-6.px-md-2.mb-3
        .tarjeta.p-4(style="background-color: #FFF4D9")
          img.mb-2(src="@/assets/curso/temas/tema1/img-49.svg" style="width: 149px;" alt="Imagen decorativa" data-aos="fade-right")
          h3.mb-4(data-aos="fade-right") <em>Hosting</em> compartido
          p.mb-0(data-aos="fade-left") El cliente comparte el servicio y el <em>hardware</em> con otros clientes. Son servicios muy económicos porque se compensa costo con volumen de clientes por servidor. No es un servicio fácilmente escalable.
      
      .col-xl-4.col-md-6.px-md-2.mb-3
        .tarjeta.p-4(style="background-color: #FFF4D9")
          img.mb-2(src="@/assets/curso/temas/tema1/img-50.svg" style="width: 149px;" alt="Imagen decorativa" data-aos="flip-up")
          h3.mb-4(data-aos="fade-right") <em>Cloud hosting</em> 
          p.mb-0(data-aos="fade-left") Es la nueva tecnología que  reemplaza el modelo tradicional de <em>hosting</em>. Tiene asignación dedicada de <em>hardware</em> por lo cual el cliente no se afecta por malos vecinos. Es una tecnología que permite escalabilidad.
      
      .col-xl-4.col-md-6.px-md-2.mb-3
        .tarjeta.p-4(style="background-color: #FFF4D9")
          img.mb-2(src="@/assets/curso/temas/tema1/img-51.svg" style="width: 149px;" alt="Imagen decorativa" data-aos="fade-left")
          h3.mb-4(data-aos="fade-right") <em>Hosting</em> dedicado
          p.mb-0(data-aos="fade-left") El cliente no comparte el servicio, ni los recursos de <em>hardware</em> con nadie más. Recomendado cuando al cliente le preocupa la seguridad y cuando requiere un mejor nivel de servicio. Permite escalabilidad.

    .container-titulo.mb-5
      img(src="@/assets/curso/temas/tema1/img-48.svg" style="max-width: 78px; width: 78px" alt="Imagen decorativa" data-aos="fade-right")
      h3 El dominio web
    
    .container-100.d-flex.flex-wrap.align-items-center.py-4.mb-5(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema1/img-53.svg" style="max-width: 85px" alt="Imagen decorativa" data-aos="fade-right")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") Es la dirección del sitio web. Un navegador necesita un nombre de dominio para dirigirse a la página web y funciona como un atajo para llegar al servidor que aloja la información del sitio web de la empresa turística. Un dominio de Internet se forma a partir de dos elementos principales, el nombre del sitio web, por ejemplo, Despegar y la extensión del dominio .com.
    
    .tarjeta.color-primario.p-3.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3  ¿Qué es un dominio y un <em>hosting</em>?
              p Con el fin de tener mayor conocimiento sobre qué es un dominio y un <em>hosting</em>, se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=W2Yrj0h52D4" target="_blank" data-aos="fade-left")
                span.pe-4 Ver   
                i.fas.fa-link

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3. Certificados de seguridad
    
    .d-flex.flex-wrap.mb-5
      .col-lg-6.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p Cuando el sitio web de la empresa turística cuenta con un certificado de seguridad web está generando confianza y credibilidad en sus usuarios. Contar con estos certificados es importante sobre todo las redes sociales, las tiendas <em>online</em> o cuando se piden datos bancarios para hacer compras en línea.
        .cajon.color-primario.p-4.mb-4(style="background-color: #FFF7E5")
          p.mb-0 Los certificados brindan seguridad en la conexión entre los dispositivos y el servidor que aloja el sitio web de la empresa turística. El SSL (Secure Sockets Layer o capa de puertos seguros) es una forma de cifrar la información desde el navegador del dispositivo hasta que es recibida por el servidor.

      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-54.jpg" style="max-width: 610px" data-aos="fade-left" alt='Imagen decorativa')

    p.mb-5(data-aos="fade-right") En este sentido, es importante señalar que según Cabrera (2017), existen 3 tipos de SSL:

    .col-12.col-lg-9.mx-xl-auto.col-xl-8.position-relative.d-flex.flex-wrap.mb-5
      .avatar
        figure
          img(src="@/assets/curso/temas/tema1/img-58.svg", alt="Imagen decorativa" data-aos="fade-left").img250
      .crd.crd--avatarHorizontal.py-4(data-aos="fade-right")
        .decorador-right(style="background-color: #50A3F3")
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/tema1/img-55.svg" alt="Imagen decorativa").img100
          .col.pe-4
            h5 Certificados con validación de dominio 
            p En este SSL la autoridad certificadora revisa la propiedad del dominio del solicitante y no revisa la identidad de la empresa.
      .crd.crd--avatarHorizontal.py-4(data-aos="fade-right")
        .decorador-right(style="background-color: #FFB338")
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/tema1/img-56.svg" alt="Imagen decorativa").img100
          .col.pe-4
            h5 Certificados con validación de empresa 
            p En este tipo de SSL es necesario validar la propiedad del dominio y presentar documentos legales de la empresa. El usuario final puede ver la información de la empresa dando clic en el candado de la barra de navegación.
      .crd.crd--avatarHorizontal.py-4(data-aos="fade-right")
        .decorador-right(style="background-color: #B1DE19")
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/tema1/img-57.svg" alt="Imagen decorativa").img100
          .col.pe-4
            h5 Certificados con validación de empresa ampliada
            p Con este SSL se aumenta el grado de confianza del usuario, para obtener un SS de este tipo es necesario validar de forma más profunda los datos de la empresa.

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt='Imagen decorativa')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Cómo funciona un certificado de seguridad SSL TLS
              p Con el fin de tener mayor conocimiento sobre qué es y cómo funciona un certificado de seguridad SSL TLS, se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=tHhFQaurGAg" target="_blank" data-aos="fade-left")
                span.pe-4 Ver   
                i.fas.fa-link
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

<style lang="sass">
.crd--avatarHorizontal
  position: relative
  padding-right: 12rem
  & > *
    position: relative
  p
    margin-bottom: 0
  &::before
    position: absolute
    content: ''
    top: 3%
    right: 0
    width: calc( 100% - 90px)
    height: 94%
    background-color: #F2F2F2
  .decorador-right
    position: absolute
    top: 3%
    right: 0
    width: 33px
    height: 94%
  @media (max-width: 1000px)
    padding-right: 2rem
.avatar
  right: -10rem
</style>
