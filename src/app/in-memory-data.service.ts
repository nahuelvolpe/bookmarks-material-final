import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Enlace } from './enlace';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pocket = [
       {
    id: 101,
    asunto:'Facebook',
    url:'www.facebook.com',
	  desc:'Red Social para encontrarse y compartir con amigos'
  },
 {
    id: 102,
    asunto:'Twitter',
    url:'www.twitter.com',
	  desc:'Red Social de Microblogging para expresarte en no muchos caracteres'
  },
  {
    id: 103,
    asunto:'Instagram',
    url:'www.instagram.com',
	  desc:'Red Social para compartir fotos con tus amigos'
  },
  {
    id: 104,
    asunto:'Youtube',
    url:'www.youtube.com',
	  desc:'Plataforma para subir, compartir y ver videos en y de todo el mundo'
  },
  {
    id: 105,
    asunto:'Twitch',
    url:'www.twitch.com',
	  desc:'Plataforma para hacer streamings o transmisiones de video en directo, la favorita de los gamers'
  },
  {
    id: 106,
    asunto:'Taringa!',
    url:'www.taringa.com',
	  desc:'Un sitio de ocio, post de todo tipo, memes y una comunidad muy activa'
  },
  {
    id: 107,
    asunto:'9Gag',
    url:'www.9gag.com',
	  desc:'La pagina por defecto de los memes de internet aptos para todo publico'
  },
  {
    id: 108,
    asunto:'4Chan',
    url:'www.4chan.com',
	  desc:'El origen de todos los memes están en este sitio, contenido no apto para todo publico'
  },
  {
    id: 109,
    asunto:'Google',
    url:'www.google.com',
	  desc:'El motor de busqueda en internet mas popular y potente que encontraras'
  },
  {
    id: 110,
    asunto:'Google Maps',
    url:'maps.google.com',
	  desc:'El servicio de mapas más completo de internet, encuentra lugares, averigua como llegar a X lugar, etc'
  },
  {
    id: 111,
    asunto:'Google Photos',
    url:'photos.google.com',
	  desc:'Comparte todas tus fotos, sincronizalas con tu celular android y guarda una copia de seguridad en la nube'
  },
  {
    id: 112,
    asunto:'Google Traductor',
    url:'translate.google.com',
	  desc:'Usa el traductor de google para más de 50 idiomas y no te quedes sin entender nada'
  },
  {
    id: 113,
    asunto:'GMail',
    url:'mail.google.com',
	  desc:'La casilla de correo de Google, envía y recibe correos con esta plataforma'
  },
  {
    id: 114,
    asunto:'Hotmail',
    url:'www.hotmail.com',
	  desc:'La casilla de correo clásica de todos los tiempos, envía y recibe correos con esta plataforma'
  },
  {
    id: 115,
    asunto:'Outlook',
    url:'www.outlook.com',
	  desc:'La casilla de correo de Microsoft, antes Hotmail, ahora renovada y con muchas más funciones, envía y recibe correos con esta plataforma'
  },
  {
    id: 116,
    asunto:'Angular Tutorial',
    url:'www.angular.io/tutorial',
	  desc:'Tutorial y documentación oficial de Angular JS'
  },
  {
    id: 117,
    asunto:'Material Design for Angular',
    url:'www.material.angular.io',
	  desc:'Documentación sobre Material Design para ser aplicado en una aplicación hecha con Angular'
  },
  {
    id: 118,
    asunto:'w3s Angular',
    url:'www.w3schools.com/angular',
	  desc:'Tutorial de Angular JS de w3schools'
  },
  {
    id: 119,
    asunto:'AngularJS Tutorial',
    url:'docs.angularjs.org/tutorial',
	  desc:'Documentación y tutorial acerca de AngularJS'
  },
  {
    id: 120,
    asunto:'React JS',
    url:'reactjs.org',
	  desc:'Sitio oficial de React JS, con tutoriales y documentación para el desarrollo de apps con esta tecnología'
  },
  {
    id: 121,
    asunto:'React Example',
    url:'github.com/facebook/react',
	  desc:'Un repositorio de github con todo lo necesario para poder aprender acerca de React por medio de ejemplos ya hechos'
  },
  {
    id: 122,
    asunto:'Curso React',
    url:'codecademy.com/es/learn/react-101',
	  desc:'Curso de React en CodeCademy'
  },
  {
    id: 123,
    asunto:'Tutorial React',
    url:'buildwithreact.com/tutorial',
	  desc:'Tutorial de React JS'
  },
  {
    id: 124,
    asunto:'VUE JS',
    url:'vuejs.org',
	  desc:'Sitio oficial con documentación sobre desarrollo de aplicaciones en VUE JS'
  },
  {
    id: 125,
    asunto:'Opinión VUE JS',
    url:'carlosazaustre.es/que-es-lo-que-me-gusta-de-vue-js/',
	  desc:'Blog Personal de Carlos Azaustre dando su opinión de VUE JS'
  },
  {
    id: 126,
    asunto:'VUE Example',
    url:'github.com/vuejs/vue',
	  desc:'Repositorio en github con todo lo necesario para poder aprender acerca de VUE JS por medio de ejemplos ya hechos'
  },
  {
    id: 127,
    asunto:'Curso VUE JS',
    url:'wmedia.teachable.com/p/aprende-vue2-y-firebase-paso-a-paso',
	  desc:'Curso de VUE JS en VMedia'
  },
  {
    id: 128,
    asunto:'Curso Programación en C',
    url:'udemy.com/fundamentos-de-programacion-en-c-basico-avanzado/',
	  desc:'Curso de programación en C de basico hasta avanzado'
  },
  {
    id: 129,
    asunto:'Java',
    url:'java.com/es/download/',
	  desc:'Pagina Oficial para descargar Java y poder ejecutar aplicaciones hechas en Java en su ordenador'
  },
  {
    id: 130,
    asunto:'Oracle Java',
    url:'oracle.com/ar/java/',
	  desc:'Sitio oficial de Oracle Java con toda la información sobre la tecnología Java'
  },
  {
    id: 131,
    asunto:'Curso Java',
    url:'w3schools.com/java/java_getstarted.asp',
	  desc:'Curso de Java en w3schools'
  },
  {
    id: 132,
    asunto:'Tutorial JAVA por IBM',
    url:'ibm.com/developerworks/ssa/java/tutorials/j-introtojava1/index.html',
	  desc:'Tutorial de Introducción a Java dictado por IBM'
  },
  {
    id: 133,
    asunto:'Curso de programación con Java',
    url:'educacionit.com/cursos-de-java',
	  desc:'Curso de programación con Java en educacionit'
  },
  {
    id: 134,
    asunto:'Carrera de Programador en Java',
    url:'itmaster.com.ar/carreras/programador-java',
	  desc:'Carrera Corta de Programador en JAVA dictada por ItMasters'
  },
  {
    id: 135,
    asunto:'Tutorial SQL',
    url:'w3schools.com/sql/',
	  desc:'Tutorial de SQL de w3schools'
  },
  {
    id: 136,
    asunto:'Tutorial de MySQL',
    url:'dev.mysql.com/doc/refman/8.0/en/tutorial.html',
	  desc:'Tutorial y documentación oficial de mysql'
  },
  {
    id: 137,
    asunto:'Tutorial de MySQL Oracle',
    url:'mysqltutorial.org',
	  desc:'Sitio web dedicado a enseñar el motor de base de datos mysql'
  },
  {
    id: 138,
    asunto:'MySQL YA',
    url:'tutorialesprogramacionya.com/mysqlya/',
	  desc:'Tutorial de MySQL dentro de tutorialesprogramacionya'
  },
  {
    id: 139,
    asunto:'Tutorial PostgreSQL',
    url:'postgresqltutorial.com',
	  desc:'Tutorial del motor de base de datos postgreSQL' 
  },
  {
    id: 140,
    asunto:'Tutorial PostgreSQL',
    url:'tutorialspoint.com/postgresql/',
	  desc:'Tutorial de PostgreSQL dictado por tutorialspoint'
  },{
    id: 141,
    asunto:'PostgreSQL YA',
    url:'tutorialesprogramacionya.com/postgresqlya/',
	  desc:'Tutorial de PostgreSQL dentro de tutorialesprogramacionya'
  },{
    id: 142,
    asunto:'R Project',
    url:'r-project.org',
	  desc:'Sitio oficial del proyecto R'
  },
  
  {
    id: 143,
    asunto:'R Studio',
    url:'rstudio.com',
	  desc:'Sitio oficial de R Studio, un IDE completo para trabajar con el lenguaje R'
  },
  {
    id: 144,
    asunto:'R Pubs',
    url:'rpubs.com',
	  desc:'Sitio dedicado a la enseñanza del lenguaje R'
  },
  {
    id: 145,
    asunto:'Tutorial R',
    url:'tutorialr.es/es/index.html',
	  desc:'Sitio con Tutoriales del lenguaje R'
  },
  {
    id: 146,
    asunto:'CRAN R',
    url:'cran.r-project.org/doc/contrib/rdebuts_es.pdf',
	  desc:'Documentación oficial de R para principiantes'
  },
  {
    id: 147,
    asunto:'Packet Tracer',
    url:'netacad.com/es/courses/packet-tracer',
	  desc:'Sitio oficial de Cisco Packet Tracer, con link de descarga incluído'
  },
  {
    id: 148,
    asunto:'Guía Básica Packet Tracer',
    url:'slideshare.net/ErickCalderin/guia-bsica-packet-tracer',
	  desc:'Guía basica de cisco packet tracer'
  },
  {
    id: 149,
    asunto:'Manual de uso Packet Tracer 5',
    url:'asei.com.co/files/23_10_2013_03_13_44__upload.pdf',
	  desc:'Manual de uso de Cisco Packet Tracer 5'
  },
  {
    id: 150,
    asunto:'Tutorial Cisco Packet Tracer',
    url:'netacad.com/es/courses/packet-tracer/introduction-packet-tracer',
	  desc:'Tutorial oficial de Cisco Packet Tracer'
  },
  {
    id: 151,
    asunto:'UBA Universidad de Buenos Aires',
    url:'uba.ar',
	  desc:'Sitio oficial de la Universidad de Buenos Aires'
  },
  {
    id: 152,
    asunto:'UNDEF',
    url:'undef.edu.ar',
	  desc:'Sitio oficial de la Universidad de la Defensa Nacional'
  },
  {
    id: 153,
    asunto:'UNC',
    url:'unc.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de Córdoba'
  },
  {
    id: 154,
    asunto:'UNER',
    url:'uner.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de Entre Ríos'
  },
  {
    id: 155,
    asunto:'UNLaM',
    url:'unlam.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de La Matanza'
  },
  {
    id: 156,
    asunto:'UNLP',
    url:'unlp.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de La Plata'
  },
  {
    id: 157,
    asunto:'UNA',
    url:'una.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de las Artes'
  },
  {
    id: 158,
    asunto:'UNLZ',
    url:'unlz.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de Lomas de Zamora'
  },
  {
    id: 159,
    asunto:'UNLu',
    url:'unlu.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de Luján'
  },
  {
    id: 160,
    asunto:'UNMDP',
    url:'mdp.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de Mar del Plata'
  },
  {
    id: 161,
    asunto:'UNM',
    url:'unm.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de Moreno'
  },{
    id: 162,
    asunto:'UNQ',
    url:'unq.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional de Quilmes'
  },
  {
    id: 163,
    asunto:'UNNE',
    url:'unne.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional del Nordeste'
  },
  {
    id: 164,
    asunto:'UNO',
    url:'uno.edu.ar',
	  desc:'Sitio oficial de la Universidad Nacional del Oeste'
  },
  {
    id: 165,
    asunto:'UTN',
    url:'utn.edu.ar',
	  desc:'Sitio oficial de la Universidad Tecnológica Nacional'
  },
    ];

  const commondb = [{
      id:190,
      asunto:'Xakata',
      url:'www.xakata.com',
      desc:'Sitios de noticias sobre tecnología'
  },
  ];
    return {pocket, commondb};
  }
}