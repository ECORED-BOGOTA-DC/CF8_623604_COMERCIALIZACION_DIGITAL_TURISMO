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
