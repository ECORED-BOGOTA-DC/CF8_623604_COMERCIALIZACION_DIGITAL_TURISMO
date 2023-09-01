<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .d-flex.flex-wrap
      .col-lg-6.pe-lg-4.order-2.order-lg-1
        p Hasta ahora se ha dado una mirada al comercio electrónico de experiencias turísticas. Las herramientas tecnológicas aplicadas al sector turismo, cómo generar tráfico y una aproximación al contenido digital. En este componente formativo se enfocará en especial en la arquitectura y el diseño del sitio web que la empresa turística utiliza para comercializar sus experiencias, así como en la analítica web, que son factores clave para poder analizar el comportamiento de los usuarios y desarrollar estrategias de mejora que permitan alcanzar los resultados establecidos para el ecosistema digital.
      img.order-1.order-lg-2.col-lg-6.col-xl-5.mb-4.mb-lg-auto.mx-auto.ms-lg-0(src="@/assets/curso/temas/img-1.svg" style="max-width: 499px")

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
