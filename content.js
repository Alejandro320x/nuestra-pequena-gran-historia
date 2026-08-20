/*
  ========================================
  EDITA ÚNICAMENTE ESTE ARCHIVO
  ========================================
  1. Escribe tus textos entre comillas.
  2. Guarda tus fotos en: assets/fotos/
  3. En "foto", escribe la ruta, por ejemplo:
     foto: 'assets/fotos/nuestra-primera-cita.jpg'
  4. Para agregar un recuerdo, copia un bloque completo entre { }.
*/

const SITE = {
  pestana: 'Nuestra pequeña gran historia',
  etiqueta: ' Nuestra pequeña gran historia',
  titulo: 'Los momentos que<br><em>nos hicieron nosotros.</em>',
  introduccion: 'Tienes aroma a nostalgia de algo que nunca podrá regresar.',
  tituloLinea: 'Línea de tiempo',
  introduccionLinea: 'Toca un recuerdo de nosotros, ojalá te gusten:3',
  despedida: 'Dime que quieres ir conmigo a todas partes.'
};

const RECUERDOS = [
  {
    fecha: '20 ABR · 2025', titulo: 'El comienzo de nosotros', resumen: 'No sabíamos lo que nos esperaba...',
    // Sustituye esta dirección por: 'assets/fotos/primera-conversacion.jpg'
    foto: 'assets/fotos/Abril3.jpeg',
    fotos: [
    'assets/fotos/Abril.jpeg',
    'assets/fotos/Abril2.jpeg',
    'assets/fotos/Abril4.jpeg',
    'assets/fotos/Abril5.jpeg',
    'assets/fotos/Abril6.jpeg'],
   
    descripcion: 'Siempre recordaré que tenía mucho miedo de que me gustaras, actualmente agradezco a la vida por haber tomado la decisión correcta.',
    frase: '"Cuando tu me miras, se detiene el tiempo"'
  },
  {
    fecha: '20 MAYO · 2025', titulo: 'Nuestro primer mes juntos', resumen: 'Conociendo una parte del otro',
    foto: 'assets/fotos/May.jpeg',
    fotos: [
    'assets/fotos/May1.jpeg',
    'assets/fotos/May2.jpeg',
    'assets/fotos/May3.jpeg',
    'assets/fotos/May4.jpeg',
    'assets/fotos/May5.jpeg'],
   
    descripcion: 'Por primera vez le presenté a alguien a mi mamá, desde ese momento supe que esto iba enserio, y no me equivocaba',
    frase: '“El plan no salió como esperábamos. Salió mucho mejor.”'
  },

  {
    fecha: '20 JUN · 2025', titulo: 'Las cosas eran como una montaña rusa', resumen: 'Amar y odio... o tal vez solo amor.',
    foto: 'assets/fotos/Jun.jpeg',
    fotos: [
    'assets/fotos/Jun1.jpeg',
    'assets/fotos/Jun2.jpeg',
    'assets/fotos/Jun3.jpeg',
    'assets/fotos/Jun4.jpeg',
    'assets/fotos/Jun5.jpeg'],
   
    descripcion: 'En este punto comenzaba a perder la fé en nosotros, las cosas iban de mal en peor, aunque me bastaba el poder verte y abrazarte...',
    frase: 'Gracias por aguantarme cuando no debías hacerlo.'
  },
  {
    fecha: '20 JUL · 2025', titulo: 'La decaída', resumen: 'Perdí la fé en nosotros, pero no en ti.',
    foto: 'assets/fotos/Jul.jpeg',
    fotos: [
    'assets/fotos/Jul1.jpeg',
    'assets/fotos/Jul2.jpeg',
    'assets/fotos/Jul3.jpeg',
    'assets/fotos/Jul4.jpeg',
    'assets/fotos/Jul5.jpeg'],
   
    descripcion: 'Perdí la fé en nosotros, pero no en ti. Te desee lo mejor en tu vida sin saber si yo formaría parte de ti.',
    frase: '"Si uno no se preocupa por si mismo, nadie lo hará por ti"'
  },
  {
    fecha: '20 AGO · 2025', titulo: 'Ese viaje improvisado', resumen: 'Viaje inesperado, primera bonita experiencia',
    foto: 'assets/fotos/Aug.jpeg',
    fotos: [
    'assets/fotos/Aug1.jpeg',
    'assets/fotos/Aug2.jpeg',
    'assets/fotos/Aug3.jpeg',
    'assets/fotos/Aug4.jpeg',
    'assets/fotos/Aug5.jpeg'],
   
    descripcion: 'En este momento sentí como nuestra relación renació de entre las cenizas, como un ave fénix, para tener una segunda oportunidad de hacer las cosas bien.',
    frase: '“El apoyo es lo que hace que todo sea posible.”'
  },
  {
    fecha: '20 SEP · 2025', titulo: 'Nuestro primer concierto', resumen: 'No le gustaba Duko y ya lo ama. PD: De nada:3',
    foto: 'assets/fotos/Sep.jpeg',
    fotos: [
    'assets/fotos/Sep1.jpeg',
    'assets/fotos/Sep2.jpeg',
    'assets/fotos/Sep3.jpeg',
    'assets/fotos/Sep4.jpeg',
    'assets/fotos/Sep5.jpeg'],
   
    descripcion: 'Una casualidad nos llevó a un concierto, en este momento vivimos uno de los recuerdos mas apreciados para mi.',
    frase: '“Muchas gracias por esta bonita experiencia.”'
  },

  {
    fecha: '20 OCT · 2025', titulo: 'Nos comenzamos a adentrar mas y compartir mas tiempo de ambos.', resumen: 'Nos dimos mucho tiempo para conocernos mas.',
    foto: 'assets/fotos/Oct.jpeg',
    fotos: [
    'assets/fotos/Oct1.jpeg',
    'assets/fotos/Oct2.jpeg',
    'assets/fotos/Oct3.jpeg',
    'assets/fotos/Oct4.jpeg',
    'assets/fotos/Oct5.jpeg'],
   
    descripcion: 'En este mes comenzamos la hermosa serie The Walking Dead, para mi fue importante porque me abrí a mostrarte aún mas de mi, con lujo de detalle.',
    frase: '“Somos los que sobrevivimos”'
  },
  {
    fecha: '20 NOV · 2025', titulo: 'El tiempo se nos iba como agua entre las manos', resumen: 'Cada día se nos hacía mucho más corto estando juntos',
    foto: 'assets/fotos/Nov.jpeg',
    fotos: [
    'assets/fotos/Nov1.jpeg',
    'assets/fotos/Nov2.jpeg',
    'assets/fotos/Nov3.jpeg',
    'assets/fotos/Nov4.jpeg',
    'assets/fotos/Nov5.jpeg'],
   
    descripcion: 'Ahora nuestro tiempo libre siempre se aprovechó para estar juntos, amandonos, disfrutando simplemente de nosotros mismos.',
    frase: 'Nos prometimos algo en este mes, pronto se cumplirá'
  },
  {
    fecha: '20 DIC · 2025', titulo: 'LA PRIMERA NAVIDAD PARA MIIII', resumen: 'Gracias por incluirme en tu familia.',
    foto: 'assets/fotos/Dic.jpeg',
    fotos: [
    'assets/fotos/Dic1.jpeg',
    'assets/fotos/Dic2.jpeg',
    'assets/fotos/Dic3.jpeg',
    'assets/fotos/Dic4.jpeg',
    'assets/fotos/Dic5.jpeg'],
   
    descripcion: 'Por primera vez en mi vida pasé una navidad con la familia, por primera vez estuve en un intercambio, por primera vez me sentí parte de algo importante.',
    frase: 'Gracias por siempre hacerme sentir aceptado'
  },
  {
    fecha: '20 ENE · 2026', titulo: 'Un nuevo año, pero para nosotros solo era el comienzo de todo', resumen: 'Mi linda y bella dama probó los makis por primera vez',
    foto: 'assets/fotos/Ene.jpeg',
    fotos: [
    'assets/fotos/Ene1.jpeg',
    'assets/fotos/Ene2.jpeg',
    'assets/fotos/Ene3.jpeg',
    'assets/fotos/Ene4.jpeg',
    'assets/fotos/Ene5.jpeg'],
   
    descripcion: 'Bailamos, lloramos, nos enojamos, pero a pesar de todo siempre estuvimos juntos, porque de eso de trata una relación, de apoyarse a pesar de las circunstancias.',
    frase: 'Aquí nació una de mis fotos favoritas, y una de las que veo siempre al voltear a ver mi escritorio<3'
  },
  {
    fecha: '20 FEB · 2026', titulo: 'EL AMOR EL AMOR', resumen: 'En el mes del amor nos dimos regalos y sinceramente el mío fue bellisimo:3',
    foto: 'assets/fotos/Feb.jpeg',
    fotos: [
    'assets/fotos/Feb1.jpeg',
    'assets/fotos/Feb2.jpeg',
    'assets/fotos/Feb3.jpeg',
    'assets/fotos/Feb4.jpeg',
    'assets/fotos/Feb5.jpeg'],
   
    descripcion: 'Nos dimos regalos sorpresa,cartitas y mas que nada, la esperanza en que si tenemos un futuro juntos.',
    frase: '"Siempre podemos elegir, pero eso siempre hay que elegir hacer lo correcto."'
  },
  {
    fecha: '20 MAR · 2026', titulo: 'Durante este mes nos enfermamos', resumen: 'Me cuidó, la cuidé, y reposamos mucho',
    foto: 'assets/fotos/Mar.jpeg',
    fotos: [
    'assets/fotos/Mar1.jpeg',
    'assets/fotos/Mar2.jpeg',
    'assets/fotos/Mar3.jpeg',
    'assets/fotos/Mar4.jpeg',
    'assets/fotos/Mar5.jpeg'],
   
    descripcion: 'Mi bella Jaqueline se quedó a cuidarme cuando me enfermé, siempre voy a apreciar que me elija sobre todo lo demás',
    frase: 'El amor que tu me das yo no lo merezco, por eso aprenderé a cuidarlo de la mejor manera.'
  },
  {
    fecha: '20 ABR · 2026', titulo: 'Nuestro primer aniversario', resumen: 'Cumplimos un año juntos, con mucho esfuerzo.',
    foto: 'assets/fotos/Abr.jpeg',
    fotos: [
    'assets/fotos/Abr1.jpeg',
    'assets/fotos/Abr2.jpeg',
    'assets/fotos/Abr3.jpeg',
    'assets/fotos/Abr4.jpeg',
    'assets/fotos/Abr5.jpeg'],
   
    descripcion: 'Le agregué unos cuantos perfumes a mi dama para su colección, siempre me has demostrado tu amor de una forma muy intensa, mi gran pedazo de alma, te amo demasiado.',
    frase: '“No se que haría sin tu amor, tal vez sería un loco si no fuera por ti”'
  },
  {
    fecha: '20 MAY · 2026', titulo: 'Nos damos una cartita cada mes por respeto a nuestro amor', resumen: 'Fuimos a ver al Buki:3',
    foto: 'assets/fotos/Mayo.jpeg',
    fotos: [
    'assets/fotos/Mayo1.jpeg',
    'assets/fotos/Mayo2.jpeg',
    'assets/fotos/Mayo3.jpeg',
    'assets/fotos/Mayo4.jpeg',
    'assets/fotos/Mayo5.jpeg'],
   
    descripcion: 'Sinceramente, jamás voy a entender como es que te salen tantas palabras del corazón, te mereces el mundo entero Paletita<3',
    frase: 'Te llevaré conmigo hasta la inmensidad'
  },
  {
    fecha: '20 JUN · 2026', titulo: 'La actualidad de nuestro amor', resumen: 'Ahora formamos parte de nuestras familias.',
    foto: 'assets/fotos/Junio.jpeg',
    fotos: [
    'assets/fotos/Junio1.jpeg',
    'assets/fotos/Junio2.jpeg',
    'assets/fotos/Junio3.jpeg',
    'assets/fotos/Junio4.jpeg',
    'assets/fotos/Junio5.jpeg'],
   
    descripcion: 'Es la primera vez que doy un paso tan importante, ahora su familia es mi familia, y la mía es su familia, y eso me motiva a buscar un futuro junto a mi Jaqueline<3',
    frase: 'La comodidad que me das, quiero que continue durante toda mi vida.'
  },
  {
    fecha: '20 JUL · 2026', titulo: 'La belleza del amor', resumen: 'Peleas, amor, risas, llantos, pero mas amor.',
    foto: 'assets/fotos/Julio.jpeg',
    fotos: [
    'assets/fotos/Julio1.jpeg',
    'assets/fotos/Julio2.jpeg',
    'assets/fotos/Julio3.jpeg',
    'assets/fotos/Julio4.jpeg',
    'assets/fotos/Julio5.jpeg'],
   
    descripcion: 'Ahora esoty en mi momento de mas confianza contigo, jamás pensé que podría llegar a sentirme de esta manera con alguien, la vida me está dando un premio al tenerte conmigo, quiero que jamás se acabe.',
    frase: 'Perimteme ser tuyo para siempre, y que su seas mía.'
  }

];
