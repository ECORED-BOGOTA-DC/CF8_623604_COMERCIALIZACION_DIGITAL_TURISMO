<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Analítica web
    
    .col-xl-10.d-flex.flex-wrap.mx-auto.align-items-center.py-4.mb-5.px-4(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema2/img-1.svg" style="max-width: 85px" alt="Imagen decorativa" data-aos="fade-right")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") Mediante la analítica web se realiza el análisis de los datos cualitativos y cuantitativos del sitio web de la empresa turística, adicionalmente busca medir y entender cómo se comportan los usuarios para mejorar la experiencia en línea y optimizar el sitio web.
    
    .tarjeta.color-primario.p-3.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 ¿Qué es la analítica web?
              p Con el fin de tener mayor conocimiento sobre la analítica web, se invita a ver el siguiente video:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=1pCDpRCmtxY" target="_blank" data-aos="fade-left")
                span.pe-4 Ver   
                i.fas.fa-link
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1. Los datos de la analítica web 2.0
    
    p.mb-5(data-aos="fade-right") Para realizar el análisis de la información, lo primero que debe hacer la empresa turística es determinar qué tipo de información es la más relevante, esta puede variar de acuerdo con las necesidades y objetivos definidos en las estrategias de mercadeo. A continuación, se muestran las fuentes de datos de la estrategia de analítica web 2.0.

    .col-lg-10.col-xl-6.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 5.
        span El paradigma actualizado de la analítica web 2.0
      img.mb-5(src="@/assets/curso/temas/tema2/img-2.svg" data-aos="fade-left" alt="actualizado de la analítica web 2.0, con la siguiente información: Insights Voz del cliente Experimentación y testing *Análisis de múltiples resultados Clickstream")
      figcaption Nota. Tomado de Avinash (2010).

    .container-100.d-flex.flex-wrap.align-items-center.py-4.mb-5(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema1/img-28.svg" style="max-width: 85px" alt="Imagen decorativa" data-aos="fade-right")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") La analítica web utiliza herramientas especializadas para extraer, organizar y analizar la información. Por lo general, estas herramientas de análisis insertan un fragmento de JavaScript en el código para etiquetar los sitios web, también pueden usar <em>cookies</em>. Esto permite que la herramienta recopile la información sobre lo que ocurre en el sitio web de la empresa turística por medio de la dirección IP, los datos son divididos en categorías y presentados en cuadros de mando personalizables:
    
    .container-100.d-flex.flex-wrap.mb-3.pt-5(style="background: linear-gradient(180deg, rgba(233,246,252,1) 0%, rgba(255,255,255,1) 100%);")
      .col-lg-6.pe-lg-2.order-2.order-lg-1.d-flex
        .p-4.px-lg-5.w-100(style="background-color :#F6F6F6")
          ul.lista-ul
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Datos de la audiencia.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Número de visitantes únicos.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Número de visitas.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Porcentaje de visitantes nuevos vs. recurrentes.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Países de procedencia.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Dispositivo en el que navegan.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Datos del comportamiento de la audiencia.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Página de salida.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Tasa de rebote.
      img.ps-lg-2.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-3.jpg" style="max-width: 610px" alt="Imagen decorativa" data-aos="fade-left")
    .d-flex.flex-wrap.mb-5
      img.pe-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-4.jpg" style="max-width: 610px" alt="Imagen decorativa" data-aos="fade-right")
      .col-lg-6.ps-lg-2.d-flex
        .p-4.px-lg-5.w-100(style="background-color :#F6F6F6")
          ul.lista-ul
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Páginas visitadas con frecuencia.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Tiempo medio por visita.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Número de páginas por visita.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Datos de campaña.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Campañas que han generado más tráfico.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Qué páginas son las que menos funcionan.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Detalle de datos de la campaña, <em>email marketing</em> o redes sociales.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Qué búsqueda de palabras clave han dado como resultado una visita.

    p.mb-5(data-aos="fade-right") De acuerdo con Bello, estos son algunos de los beneficios que la analítica web le ofrece a la empresa turística:

    .d-flex.flex-wrap.align-items-center.mb-3.pt-5
      .col-lg-6.pe-lg-2.order-2.order-lg-1
        .p-4.px-lg-5.w-100(style="background-color :#F6F6F6")
          ul.lista-ul
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Monitorear y conocer a los visitantes.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Optimizar el sitio web de experiencias turísticas.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              p.mb-0 Definir estrategias de <em>marketing</em> digital y ventas.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Predecir tendencias futuras.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Realizar análisis de la competencia.
      img.ps-lg-2.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 610px" data-aos="fade-right" alt="Imagen decorativa")

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Secuencia de clic (<em>clickstream</em>)
    
    p(data-aos="fade-right") Una solución para analítica web de secuencia de clic le permite a la empresa turística recopilar, almacenar, procesar y analizar los datos de los clics. Adicionalmente, le permite medir las páginas, las campañas y el comportamiento del sitio en línea.

    p.mb-5(data-aos="fade-right") Antes de iniciar el análisis de secuencia de clics (<em>clickstream</em>), la empresa turística debe tener definidos los siguientes aspectos: 

    .col-lg-10.col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 6.
        span Aspectos para la secuencia de clic
      img.mb-5(src="@/assets/curso/temas/tema2/img-6.svg" alt="Figura que menciona los siguientes aspectos para secuencia clic: 1. Las métricas que le permitan valorar cuantitativamente las estadísticas de los eventos y las tendencias del sitio web de experiencias turísticas.  2. Los indicadores clave de rendimiento (KPI) que le ayuden a comprender cuál es el desempeño, con respecto a los objetivos propuestos." data-aos="fade-left")

    p.mb-5 Las siguientes son algunas de las métricas que la empresa turística debería tener en cuenta:

    .col-lg-10.col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 7.
        span Métricas para las páginas web de empresas turísticas 
      img.mb-5(src="@/assets/curso/temas/tema2/img-7.svg" alt="Figura que menciona las métricas para las páginas web de empresas turísticas,  las cuales son: Visitas Visitantes únicos Tiempo en la página Tiempo en el sitio Tasa de rebote Tasa de salida Tasa de conversión Compromiso (engagement)" data-aos="fade-left")
    
    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Análisis de múltiples resultados
    
    .d-flex.flex-wrap.mb-5.pt-5
      .col-lg-6.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4(style="background-color: #FFECCD")
          p.mb-0 La empresa turística debe saber utilizar los datos que le entregan las diferentes herramientas de analítica web para orientarlos a medir los resultados e identificando la relación del comportamiento de los usuarios con la rentabilidad de la empresa, para esto podría apoyarse en herramientas de secuencia de clic, un sistema de planificación de recursos empresariales (ERP), encuestas, Technorati, entre otras.
        p El análisis del sitio web de comercialización de experiencias turísticas se debería enfocar en los siguientes resultados:

      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 559px" data-aos="fade-left" alt="Imagen decorativa")

    .col-lg-8.col-xl-6.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 8.
        span Resultados de análisis
      img.mb-5(src="@/assets/curso/temas/tema2/img-8.svg" alt="Figura que menciona los siguientes resultados de análisis:  1. Incremento de ingresos. 2. Reducción de costos. 3. Mejora de la satisfacción y fidelidad del cliente" data-aos="fade-left")

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Experimentación y <em>testing</em>

    .container-100.d-flex.flex-wrap.align-items-center.py-4.mb-5(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema1/img-28.svg" style="max-width: 85px" alt="Imagen decorativa" data-aos="fade-right")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") La empresa turística debería probar si la estrategia que diseñó para el sitio web funciona, por medio de la utilización de herramientas de experimentación y <em>testing</em> que le permita ejecutar pruebas en tiempo real con varias alternativas y, permitir que los usuarios seleccionen la que consideren mejor. Algunas de las herramientas de experimentación y <em>testing</em> son:
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 9.
      span Herramientas de experimentación y <em>testing</em>
    img.mb-5(src="@/assets/curso/temas/tema2/img-9.svg" alt="Figura que menciona cuatro herramientas de experimentación y testing, las cuales on: 1. Google Website Optimizer 2. Test&Target de Omniture 3. Optimost de Autonomy 4. SiteSpect" data-aos="fade-left")

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Voz del cliente (VOC)
    
    .container-100.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-10.svg')})`}"
      style="background-repeat: no-repeat; background-position: left; background-position: bottom"
    )
      .d-flex.flex-wrap.mb-5
        img.col-lg-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-11.png" style="max-width: 441px" alt="Imagen decorativa" data-aos="fade-right")
        .col-lg-8.ps-4(data-aos="fade-left")
          p Para la empresa de turismo es importante conocer la voz del cliente, la información que no registran las herramientas de análisis, por ejemplo, lo que los usuarios estaban buscando en el sitio web, pero que no encontraron. Por este motivo, la empresa podría implementar otro tipo de estrategias que le permita obtener respuestas directas de los usuarios respecto al sitio en línea de comercialización de experiencias turísticas:
          .titulo-sexto.color-acento-contenido
            h5 Figura 10.
            span Estrategias para VOC
          img.mb-5(src="@/assets/curso/temas/tema2/img-12.svg" alt="Figura que menciona las siguientes estrategias pata VOC: Encuestas Pruebas de usabilidad de laboratorio Pruebas de usabilidad remotas Técnicas de cardsorting")
      .d-flex.mb-5(data-aos="flip-up")
        h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Inteligencia competitiva
      
      p.mb-5(data-aos="fade-right") La empresa turística puede utilizar las herramientas de analítica web y los datos de la inteligencia competitiva para conocer cuál es el rendimiento de su sitio y el de su competencia, esto le permite compararse e identificar oportunidades de mejora para ajustar sus estrategias. Con los datos de la inteligencia competitiva podría identificar, entre otros aspectos

      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 11.
        span Datos de la inteligencia competitiva
      .col-xl-10.mx-auto.mb-5
        img(src="@/assets/curso/temas/tema2/img-13.svg" alt="Figura que menciona los siguientes datos de la inteligencia competitiva: Rendimiento de los sitios web. Tiempos de permanencia. Visitas repetidas. Páginas visitadas. Crecimiento." data-aos="fade-left")
      
    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Multiplicidad
    
    p.mb-5(data-aos="fade-right") En la analítica web existen múltiples circunstancias, herramientas y tipo de fuentes de información, es por esto que la empresa turística puede aprovechar este concepto para recopilar la información de diferentes fuentes. A continuación, se presentan las herramientas que le pueden ayudar a la empresa a obtener información en cada uno de los elementos de la analítica web. Los datos de cada herramienta proporcionan perspectivas que, en conjunto, le brindan la información necesaria para establecer las estrategias del sitio web.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 12.
      span Circunstancias, herramientas y tipo de fuentes de información
    .col-lg-9.col-xl-8.position-relative.d-flex.flex-wrap.mb-5
      .avatar
        figure
          img(src="@/assets/curso/temas/tema2/img-14.svg" style="max-width: 430px" alt="Figura que menciona las circunstancias, herramientas y tipo de fuentes de información, las cuales se describen en la parte inferior." data-aos="fade-left")
      .crd.crd--avatarHorizontal.w-100.crd--first.py-4.ps-4(style="background-color: #FFB338" data-aos="fade-right")
        .row.align-items-center
          .col.pe-4
            h5 Secuencia de clic (<em>clickstream</em>):
            p Omniture, Google Analytics, Netinsight de Unica, Webtrends, Web analytics, Lyris HQ, Coremetrics.
      .crd.crd--avatarHorizontal.py-4.ps-4.w-100(style="background-color: #F9D9A2" data-aos="fade-right")
        .row.align-items-center
          .col.pe-4
            h5 Resultados múltiples
            p Omniture, Google Analytics, Netinsight de Unica, Webtrends, Web analytics, Lyris HQ, Coremetrics. Adicionalmente iPerceptions (para medir el porcentaje de finalización de tareas), FeedBurner (para hacer un seguimiento de los suscriptores) y herramientas para medir las redes sociales. 
      .crd.crd--avatarHorizontal.py-4.ps-4.w-100(style="background-color: #FFECBE" data-aos="fade-right")
        .row.align-items-center
          .col.pe-4
            h5 Experimentación y <em>testing</em>
            p Google Website Optimizer, Test&Target de Omniture, SiteSpect, Optimost.
      .crd.crd--avatarHorizontal.py-4.ps-4.w-100(style="background-color: #F6F6F6" data-aos="fade-right")
        .row.align-items-center
          .col.pe-4
            h5 Voz del cliente
            p iPerceptions, CRM Metrix, Ethnio, Foresee y opciones de autoservicio como Lab Usability.
      .crd.crd--avatarHorizontal.w-100.crd--last.py-4.ps-4(style="background-color: #DEE4F0" data-aos="fade-right")
        .row.align-items-center
          .col.pe-4
            h5 Inteligencia competitiva
            p Google Ad Planner, Insights for Search, Compete, Hitwise, Technorati.
        
    p.mb-5(data-aos="fade-right") La empresa turística puede implementar estos elementos de analítica web de acuerdo con las necesidades, el tamaño y el nivel de sofisticación. A continuación, se muestran las áreas mínimas que deberían implementarse:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 13.
      span Áreas mínimas de implementación de analítica
    .col-xl-9.mx-auto.mb-5
      img(src="@/assets/curso/temas/tema2/img-15.svg" alt="Indica  texto  Áreas mínimas de implementación de analítica y se especifica en la parte inferior" data-aos="fade-left")

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Análisis <em>logs</em>
    
    .d-flex.flex-wrap.mb-4
      img.pe-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-16.jpg" style="max-width: 610px" alt="Imagen decorativa" data-aos="fade-right")
      .col-lg-6.ps-lg-2(data-aos="fade-left")
        p El análisis log es un método que se utiliza para ver cómo los robots (<em>bots</em>) de los motores de búsqueda realizan el rastreo de la página web de comercialización de experiencias turísticas y le permite a la empresa identificar oportunidades de mejora en la estrategia de SEO.
        p Los <em>logs</em> son ficheros que registran la información sobre la actividad que ha recibido el servidor en el que está alojada la página web de la empresa turística, por ejemplo, la IP desde la que se trata de acceder, a qué parte de la web trataron de acceder, el código de respuesta que les envió el servidor, etc.
        p A continuación, se presentan algunos de los aspectos de SEO que puede identificar la empresa turística cuando realiza el análisis de <em>logs</em>:
    
    .d-flex.flex-wrap.mb-5
      .col-lg-6.pe-lg-2.order-2.order-lg-1.d-flex(data-aos="fade-right")
        .p-4.px-lg-5.w-100(style="background-color :#F6F6F6")
          ul.lista-ul
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Visualizar las URL que rastrean los motores de búsquedas y las que son rastreables.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Saber los códigos de respuesta que emite el servidor ante cada una de las URL.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | La frecuencia de rastreo de los robots (<em>bots</em>) por la web y cuáles son las URL que más se rastrean.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D" data-aos="fade-right")
              | Las URL de tipo “parche” o URL que no se quiere que se indexen; pero que se necesita que estén visibles en la web debido a que ofrecen algún tipo de servicio al usuario.
      img.ps-lg-2.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-17.svg" style="max-width: 513px" alt="Imagen decorativa" data-aos="fade-left")

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") <em>Site-centric</em> y <em>User-centric</em>
    
    .container-titulo.mb-5
      img(src="@/assets/curso/temas/tema2/img-18.svg" style="max-width: 78px; width: 78px" alt="Imagen decorativa" data-aos="fade-right")
      h3 Site-centric
    
    .d-flex.flex-wrap.pb-5.mb-5(style="border-bottom: 2px dashed #707070")
      img.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-19.jpg" style="max-width: 610px" alt="Imagen decorativa" data-aos="fade-right")
      .col-lg-6.ps-lg-4(data-aos="fade-left")
        p Es un sistema de medición centrado en la audiencia del sitio web de comercialización de experiencias turísticas. Con esta información la empresa puede conocer el número de visitas, las páginas vistadas, el usuario y su comportamiento en la página web. Estos datos son importantes para la empresa turística para generar estrategias digitales porque entre más se conoce el comportamiento de los visitantes del sitio web se puede crear contenido más atractivo para atraer más usuarios.
    .d-flex.flex-wrap.mb-5
      .col-lg-6.pe-lg-2.order-2.order-lg-1(data-aos="fade-right")
        .container-titulo.mb-4
          img(src="@/assets/curso/temas/tema2/img-20.svg" style="max-width: 78px; width: 78px; bottom: -.9rem" alt="Imagen decorativa" data-aos="fade-right")
          h3 User-centric
        p este sistema de medición se centra en el usuario sobre una muestra real, por lo general de datos sociodemográficos. La empresa encargada de hacer la medición realiza entrevistas para definir el perfil del usuario del sitio web de comercialización de experiencias turísticas. Posteriormente, instala un <em>software</em> en el dispositivo de los usuarios de la muestra y cada vez que el usuario accede a su dispositivo introduce una clave de acceso y la información llega a una base de datos en donde se clasifica. La empresa turística los puede utilizar para conocer el perfil de los usuarios a los que dirige la estrategia de contenido digital.
      img.ps-lg-2.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-21.jpg" style="max-width: 610px" alt="Imagen decorativa" data-aos="fade-left")

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") <em>Cookies</em>
    
    .container-100.d-flex.flex-wrap.align-items-center.py-4.mb-5(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema1/img-28.svg" style="max-width: 85px" alt="Imagen decorativa" data-aos="fade-right")
      p.col-md.mb-0.ps-md-4(data-aos="fade-left") Las <em>Cookies</em> son archivos de datos creados y enviados por el sitio web de comercialización de experiencias turísticas y que se almacenan en el navegador del usuario. Con esto, el sitio web puede consultar la actividad previa del navegador y detectar las páginas visitadas por el usuario.
    p.mb-5(data-aos="fade-right") A continuación, se presentan las principales funciones para las que la empresa turística puede aprovechar <em>Cookies</em>:

    .container-100.d-flex.flex-wrap.mb-3.pt-5(style="background: linear-gradient(180deg, rgba(233,246,252,1) 0%, rgba(255,255,255,1) 100%);")
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 14.
        span Uso de cookies en empresas turísticas
      .col-xl-8.mx-auto.mb-5
        img(src="@/assets/curso/temas/tema2/img-22.svg" alt="Figura que menciona los principales usos de cookies en la empresa turística y se describen en la parte inferior." data-aos="fade-left")

    p.mb-5(data-aos="fade-right") La empresa turística podría utilizar <em>cookies</em> de terceros en las campañas para realizar un seguimiento de los usuarios a través de múltiples sitios donde ha colocado imágenes publicitarias o web <em>bugs</em>. De esta forma, dirige su publicidad según las preferencias del usuario. Las <em>cookies</em> se pueden clasificar en dos tipos:
    
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 15.
      span Clasificación de las <em>cookies</em>
    .col-xl-8.mx-auto.mb-5
      img.d-flex.d-md-none.mx-auto(src="@/assets/curso/temas/tema2/img-23_1.svg" style="max-width: 400px" alt="Figura que menciona la clasificación de las cookies y se describen en la parte inferior." data-aos="fade-left")
      img.d-none.d-md-flex(src="@/assets/curso/temas/tema2/img-23.svg" alt="Figura que menciona la clasificación de las cookies y se describen en la parte inferior." data-aos="fade-left")

    p.mb-5(data-aos="fade-right") La empresa turística puede utilizar <em>cookies</em> en sus campañas de mercadeo digital. Google Analytics proporciona las herramientas para medir cómo interactúan los usuarios con el contenido del sitio web y con la configuración de <em>cookies</em>, puede hacer seguimiento a los usuarios en varios subdominios sin realizar ninguna configuración adicional.

    .mb-5.pt-5
      div(style="background-color: #FFB338; border-top-right-radius: 60px")
        .d-flex.flex-wrap.align-items-center.col-xl-11.mx-auto.p-4.p-lg-0
          .col-lg.ps-lg-4.pe-lg-5.mb-0.order-2.order-lg-1(data-aos="fade-right")
            p Adicionalmente, puede utilizar el <em>remarketing</em> o <em>retargeting</em> para enviar nuevamente información de mercadeo para una persona que demostró interés en el sitio web. Las <em>cookies</em> recopilan información sobre los usuarios y hacen que reciba información sobre el sitio web de comercialización de experiencias turísticas mediante <em>cookies</em> de terceros. Estos son algunas de las ventajas de utilizar <em>cookies</em> en las estrategias de mercadeo digital (Content, 2019):
          img.mb-4.mb-lg-auto.mx-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-24.png" style="max-width: 336px; margin-top: -5%" alt="Imagen decorativa" data-aos="fade-left")

    .container-100.d-flex.flex-wrap.mb-5.pt-5(style="background: linear-gradient(0deg, rgba(233,246,252,1) 0%, rgba(255,255,255,1) 100%);")
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 16.
        span Ventajas de utilizar <em>cookies</em> en las estrategias de mercadeo digital
      .col-xl-10.mx-auto.mb-5
        img(src="@/assets/curso/temas/tema2/img-25.svg" alt="Figura que muestra 8 ventajas de utilizar cookies en las estrategias de mercadeo digital y cada una se describe  en la parte inferior." data-aos="fade-left")

    .d-flex.mb-5(data-aos="flip-up")
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Herramientas de analítica web
    p.mb-5(data-aos="fade-right") Permiten analizar tendencias y comportamientos recurrentes en el tiempo en un sitio web, datos que permiten tomar decisiones para, en este caso, realizar acciones que permitan posicionar una marca, a continuación, se presentan algunas de las herramientas de analítica web y lo que la empresa turística podría hacer con cada una de ellas (Bello, s.f.):

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Tabla de herramientas analítica web
              p Con el fin de tener mayor conocimiento se invita a descargar documento word llamado 2.1.10. Tabla herramientas de analítica web.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/OKEst_2.1.10_tabla_herramientas_de_analitica_web.docx')" target="_blank" data-aos="fade-right")
                span.pe-4 Ver   
                i.fas.fa-link
    
    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 Libro analítica web 2.0
              p Con el fin de tener mayor conocimiento se invita a descargar libro Analítica Web 2.0 Avinash Kaushik
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Analitica_Web_2.0_Avinash_Kaushik.pdf')" target="_blank" data-aos="fade-right")
                span.pe-4 Ver   
                i.fas.fa-link
    
    .tarjeta.color-primario.p-3.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="flip-up")
              h3 7 herramientas de analítica web
              p Con el fin de tener mayor conocimiento sobre las 7 herramientas de analítica web que debe usar en su sitio web, se invita a ver el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=s4p0CSECFOk" target="_blank" data-aos="fade-right")
                span.pe-4 Ver   
                i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema2',
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
  padding-right: 8rem
  & > *
    position: relative
  p
    margin-bottom: 0
  &::before
    display: none
  .decorador-right
    position: absolute
    top: 3%
    right: 0
    width: 33px
    height: 94%
  @media (max-width: 1000px)
    padding-right: 2rem
.crd--first
  border-top-left-radius: 30px
  border-top-right-radius: 30px
.crd--last
  border-bottom-left-radius: 30px
  border-bottom-right-radius: 30px
.avatar
  right: -40%
</style>
