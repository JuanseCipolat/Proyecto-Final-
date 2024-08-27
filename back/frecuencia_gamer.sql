-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 23-08-2024 a las 13:38:14
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `frecuencia_gamer`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `contenido`, `fecha`, `imagen`) VALUES
(2, 'World of Warcraft: Ya está disponible el acceso anticipado de The War Within', 'Atención jugadores de World of Warcraft, ya está disponible el acceso anticipado de The War Within.\r\n\r\nLos jugadores que compraron la versión física de la Collector''s Edition o la Epic Edition digital ya pueden comenzar su viaje para subir de nivel cuatro días antes del lanzamiento mundial, el 26 de agosto. En la primera parte del nuevo arco argumental que abarca varias expansiones, La saga del alma del mundo, los jugadores podrán descubrir el siguiente contenido:\r\n\r\nNuevo continente: Khaz Algar\r\n\r\n- Cerca de las costas occidentales de Pandaria, se encuentra la isla de Khaz Algar. Allí está Dornogal que, ubicada sobre la superficie, opera como nueva ciudad principal. Comienza a explorar lo que yace por debajo en la forja alimentada por lava de Las Minas Resonantes, la exuberante Cristalia y el pináculo de la sociedad nerubiana, Azj-Kahet.\r\n\r\nNueva característica de clase: Talentos de héroe\r\n\r\n- Un nuevo nivel de personalización para las especializaciones de clase. Estos talentos están diseñados a partir de arquetipos bien conocidos del universo de Warcraft, como forestal oscuro, el clarividente y otros.\r\n\r\nNueva característica de contenido de mundo: Abismos\r\n\r\n- Nuevas aventuras de tamaño reducido integradas con el mundo a la perfección, que se adaptan para incursiones de 1 a 5 jugadores y ofrecen una progresión significativa (con una nueva senda de recompensas en la Gran bóveda).\r\n\r\nNueva funcionalidad: Tropas\r\n\r\n- Los jugadores verán cambios en sus cuentas que transformarán el modo en que controlan a sus personajes con un banco de tropa, más logros y reputaciones que se comparten en toda la cuenta, una nueva pantalla de selección de personaje, ¡y más!\r\n\r\nFuncionalidad mejorada: Cielonáutica\r\n\r\n- Originalmente llamada dracoequitación en Dragonflight, la cielonáutica aumenta la cantidad de monturas que se pueden usar en este sistema, y seguiremos agregando otras a medida que continúe el desarrollo de la expansión.\r\n\r\n- El sistema de vuelo anterior ahora se llama vuelo estable.\r\n\r\n¿Listos para luchar por Azeroth?', '2024-08-23 11:37:49', 'https://res.cloudinary.com/dewpwxj8m/image/upload/v1724413069/b68gavf9tcvojejrikbe.jpg'),
(3, 'Dune: Awakening revela su lanzamiento anticipado para 2025', 'Dune: Awakening estuvo presente en la Opening Night Live de gamescom 2024 donde se mostró gameplay y se revelaron algunas novedades.\r\n\r\nPara empezar se reveló que el MMO de supervivencia de mundo abierto saldrá a la venta en 2025 y que su lanzamiento en consolas está previsto para más adelante, y durante la presentación se mostró un gameplay exclusivo de 5 minutos que por primera ocasión muestra el progreso de un jugador desde la búsqueda de comida y la supervivencia hasta la movilización de todo un gremio a la búsqueda de mercancías.\r\n\r\nDe esta manera, Dune: Awakening desafiará los jugadores a:\r\n\r\nSOBREVIVIR al abrasador desierto y a los colosales gusanos de arena aprendiendo las costumbres de los Fremen.\r\n\r\nAMPLIAR tu influencia mediante el combate, el intercambio de mercancías, la construcción y mejora de bases, la fabricación de vehículos y el comercio. Desarrolla tu personaje recorriendo el camino del Mentat, el Soldado, el Planetólogo, el Maestro de Espadas o la Bene Gesserit.\r\n\r\nCONTROLAR la mercancía y aferrarte al poder mientras las intrigas gremiales y la guerra hacen estragos. Únete a un gremio y alíate con la Casa Harkonnen o Atreides, y lucha por la preciada especia en dinámicas batallas gremio contra gremio en las que intervienen diversos vehículos, tecnología y combatientes especializados.\r\n\r\nDune: Awakening estará mostrándose en gamescom donde los asistentes podrán ver una presentación de 30 minutos, misma que será retransmitida en directo por varios creadores de contenido durante lospróximos días.\r\n\r\nFinalmente se reveló que el próximo 29 de agosto se llevará a cabo el tercer Dune: Awakening Direct que mostrará más gameplay y novedades.', '2024-08-23 11:39:26', 'https://res.cloudinary.com/dewpwxj8m/image/upload/v1724413166/xrqquprvg6490dhdcdmk.jpg'),
(4, 'Indiana Jones y el Gran Círculo busca ofrecer una verdadera aventura al estilo Indy', 'Indiana Jones y el Gran Círculo es uno de los juegos más esperados del año, y es que está respaldado por la importante franquicia protagonizada por Harrison Ford.\r\n\r\nSe trata de un juego de acción y aventuras desarrollado por MachineGames y publicado por Bethesda Softworks que contará una narrativa original basada en la serie de películas de Indiana Jones, ambientada entre los acontecimientos de "En Busca del Arca Perdida" y "La Última Cruzada".\r\nRecientemente tuvimos la oportunidad de asistir a un evento digital donde Jerk Gustafsson (Game Director) y Axel Torvenius (Creative Director) del equipo de desarrollo nos mostraron las nuevas mecánicas del juego, además de una sesión de preguntas y respuestas que nos dejó más detalles del título.\r\n\r\nPara empezar destaca que el objetivo del equipo es hacer un juego que se sienta como una verdadera aventura de Indiana Jones, señalando que analizaron el tono de ciertas películas de la saga para capturar su tono y reflejar la comedia y toda la vibra en muchas formas, incluyendo las escenas cinemáticas, los diálogos y por supuesto en el gameplay, como por ejemplo en los ataques finales.\r\n\r\nLos desarrolladores destacan que El Gran Círculo es su juego más grande hasta ahora, luciendo una gran autenticidad y combinando secciones abiertas con algunas más lineales para cambiar el ritmo del juego, donde las abiertas ofrecerán más opciones de exploración, buscando ofrecer un buen balance entre la acción y la resolución de acertijos. Sobre la duración del juego, igualmente dicen que es el de mayor duración que han creado, aunque dependerá del estilo de juego de cada quien, pero que si deciden jugar todas las actividades y misiones, tardarán un buen rato.\r\n\r\nMencionaron que fue un gran paso hacer la transición de Wolfenstein a Indiana Jones, pero que fue muy refrescante para el equipo ya que ha sido una experiencia divertida. Sobre esto, comentaron que su pasado hizo que fuera una elección obvia optar por hacer el juego con vista en primera persona, ya que consideran que es parte de su ADN, y además sienten que esta perspectiva realmente te hace sentir en las botas de Indiana Jones y ver a través de sus ojos, aunque indican que en ciertos momentos se hacen cambios de cámara.\r\n\r\nTambién aceptaron cierta influencia de Riddick, ya que recordaron que fue su primer juego con un personaje fuerte, centrado en la historia con contenido maduro, aunque en esta ocasión fue diferente ya que Indy es un personaje icónico, y sabían de las grandes expectativas del público.\r\n\r\nHablando de esto, hablaron de cómo fue el trabajo de Troy Baker como la voz de Indiana Jones, asegurando que quedaron muy felices con su trabajo y que incluso la primera vez que lo escucharon, pensaban que se trataba de la voz de Harrison Ford de referencia, indicando que nadie más lo hubiera hecho mejor.\r\n\r\nSobre lo que vimos del juego, Indy y su compañera Gina estuvieron en diversas situaciones que incluían resolución de puzzles, combate y momentos de alta tensión como una habitación que se destruye y se llena de arena movediza de donde debían escapar.\r\n\r\nPara la exploración se pueden usar disfraces para ingresar a ciertas áreas en forma sigilosa, y la cámara de Gina es una herramienta muy útil ya que revela detalles históricos y pistas importantes, lo que sirve para ir llenando el diario de Indy que es una especie de guía.\r\n\r\nPor cierto, el equipo estudió fotografías para ver como lucirían los templos y en base a esto los crearon, y mencionan como ciertos acertijos son tan ingeniosos que te harán sentir el mejor arquélogo del mundo.\r\n\r\nEn cuanto al combate, es posible combinar el látigo, el revólver o cualquier otro objeto al alcance para atacar, y también es posible defenderse teniendo especial atención en el timing.\r\n\r\nEn resumen, lo que se mostró realmente pinta como una aventura de Indiana Jones, con especial atención al látigo que es sin duda la herramienta más importante del juego, solo detrás de la mente de Indy. Habrá que estar atentos al lanzamiento de este título que por ahora luce interesante y que parece será imperdible para los fans de Indy.\r\n\r\nIndiana Jones y el Gran Círculo ya tiene fecha de lanzamiento\r\nEn el marco de gamescom 2024 esta tarde, se reveló que Indiana Jones y el Gran Círculo se pondrá disponible en Xbox Series X|S, PC y Game Pass el 9 de diciembre, y en PlayStation 5 en 2025.', '2024-08-23 11:41:42', 'https://res.cloudinary.com/dewpwxj8m/image/upload/v1724413302/rguzeuiwjjl3tphlioam.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `stock` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retro`
--

CREATE TABLE IF NOT EXISTS `retro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews`
--

CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `puntuacion` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `reviews`
--

INSERT INTO `reviews` (`id`, `titulo`, `contenido`, `puntuacion`, `fecha`, `imagen`) VALUES
(2, 'Análisis F1 Manager 24: Estrategia, gestión y Fórmula 1 en un juego que te robara decenas de horas (PC, Xbox Series X/S, PS5, PS4, Xbox One, Switch)', 'La Fórmula 1 ha recuperado mucha popularidad en España gracias a la llegada hace algunos años de Carlos Sainz a Ferrari (tras un paso prometedor por McLaren) y con el retorno de Fernando Alonso al que se sumo una primera temporada esperanzadora en Astor Martin tras abandonar Alpine.\r\nEsto hace también que el interés por los videojuegos de F1 se haya disparado en nuestro país y, además de la entrega anual de simcade de Codemasters, desde el año pasado tenemos un videojuego de gestión del Gran Circo, el F1 Manager que con su entrega de este año, F1 Manager 24, busca corregir errores y mejorar su fórmula para que los amantes de la estrategia y de este deporte tengan un título disfrutable con el que pasar horas y horas.\r\nF1 Manager 24 nos va a dar la oportunidad de disfrutar de tres modos de juego distintos.\r\n\r\nEl primero es el más tradicional, ponernos a manos de una escudería que ya existe y gestionarla para cumplir sus objetivos o, si tenemos la suficiente pericia, superarlos.\r\n\r\nEl segundo modo de juego nos permite crear una escudería totalmente personalizada o incluso elegir entre varios arquetipos de nuevas escuderías que representarán un desafío aún mayor y que nos parecen una experiencia interesante.\r\nPor último, también tendremos la posibilidad de repetir grandes premios que se han celebrado durante esta temporada e incluso carreras específicas emblemáticas con objetivos especiales, algo que le da bastante sabor y más horas a F1 Manager 24.\r\n\r\nConclusiones\r\nFrontier apuesta un año más por intentar ofrecer un buen juego de gestión y estrategia ambientado en la Fórmula 1 y poco a poco se va acercando a ofrecer una entrega perfecta en su equilibrio entre complejidad y accesibilidad para que todos los perfiles de jugador aficionados a la F1 puedan disfrutar de la experiencia.\r\n\r\nEsta entrega llega en un mejor estado que la del año pasado y trae algunas novedades interesantes, aunque aún tienen que profundizar en algunas mecánicas y también afinar mucho más ciertos bugs para ofrecer un gran juego. Si siguen por este camino... lo acabarán consiguiendo.', 0, '2024-08-23 11:46:52', 'https://res.cloudinary.com/dewpwxj8m/image/upload/v1724413611/ataj4muvm0yvm8rlzd91.jpg'),
(3, 'Análisis Black Myth: Wukong: Portento gráfico, mitología china y una carrera contra jefes muy divertida (PC, PS5, Xbox Series X/S)', 'Black Myth: Wukong ha ido poco a poco creciendo en popularidad sobre todo entre los jugadores de PC gracias a su apartado técnico que lucía espectacular en los tráileres que se han ido publicando y a una fórmula que al principio podía recordar a la de la emblemática saga Dark Souls.\r\nCon el juego a la vuelta de la esquina, en Vandal ya hemos podido disfrutar del mismo para traeros ahora este análisis en el que os contaremos las virtudes del juego de Game Science y os responderemos a la pregunta que muchos se han hecho con el mismo. ¿Es o no es un juego estilo Dark Souls?\r\nA nivel narrativo Black Myth Wukong está basado en la mitología china y, más concretamente, en "Viaje al Oeste" uno de los primeros tomos de Las Aventuras del Rey Mono, una obra clásica de la literatura china que el estudio, originario del país asiático, ha querido adaptar al mundo de los videojuegos.\r\n\r\nPor lo tanto, tomaremos el control de "Predestinado" o el "Elegido", un mono que deberá emprender un peligroso viaje hacia el Oeste para descubrir lo que hay de verdad en una leyenda del pasado de su región, mientras se enfrenta a todo tipo de amenazas peligrosas y vamos vislumbrando todo tipo de cinemáticas espectaculares.\r\nLa narrativa del juego es entretenida. Quizás hay algunos fallos en cómo se cuentan ciertas cosas pero, desde luego, es una experiencia cinematográfica que apuesta además por varios estilos artísticos para contar la historia y si bien no debéis esperar algo demasiado sesudo, acompaña perfectamente al resto del juego, genera cierta curiosidad y cuenta con algunos personajes bastante divertidos (sobre todo los que cantan).\r\n\r\nConclusiones\r\nBlack Myth: Wukong es un videojuego de lo más interesante. No esperéis una gran revolución más allá de su espectacular acabado gráfico, pero en lo jugable es un título que se mantiene bastante sólido durante toda la partida, buenas posibilidades a la hora de combatir y personalizar a nuestro particular primate y una experiencia bastante divertida que nunca se hace pesada y que es una muy buena alternativa si estáis buscando un juego que vaya al grano, a enfrentarnos de jefe a jefe en una carrera trepidante.\r\n\r\nTiene sus fallos y no es perfecto pero para ser la primera obra completa de Game Science el resultado es muy bueno y, desde luego, estamos asistiendo al nacimiento de un estudio que en el futuro puede dar mucho de lo que hablar a medida que vayan cogiendo experiencia en el sector.\r\n\r\nBlack Myth: Wukong no será un Dark Souls pero sí que es una experiencia muy recomendable para los amantes del rol, de la saga de From Software y por aquellos que busquen visualmente un juego de verdadera nueva generación.', 0, '2024-08-23 11:48:39', 'https://res.cloudinary.com/dewpwxj8m/image/upload/v1724413718/dkstgucwr0jzprddxbn9.jpg'),
(4, 'Análisis Dungeons of Hinterberg, crítica al turismo descontrolado aderezada con acción, mazmorras y simulación social (Xbox Series X/S, PC)', 'De todas las mezclas de géneros y temáticas que hemos visto hasta el momento, Dungeons of Hinterberg es, probablemente, una de las más originales. Mitad juego de acción y exploración de mazmorras, mitad simulador social, y envuelto en una explícita pero a la vez suave crítica al turismo, este proyecto de Microbird Games es uno de los títulos más curiosos que hemos jugado recientemente.\r\nDungeons of Hinterberg es una interesante combinación de juego de acción y exploración de mazmorras (sin llegar a ser un dungeon crawler puro y duro) y de simulador social, con las mecánicas típicas de esta parte de títulos como la saga Persona o Stardew Valley. Es una aproximación muy «tranquila» al género, por lo que ni el combate ni las interacciones van a ser particularmente exigentes, y está destinado, precisamente, a ese público que prefiere «disfrutar» de una experiencia sin demasiadas complicaciones.\r\nLa aventura comienza cuando nuestra protagonista, Luisa, llega a Hinterberg, un pueblecito situado en los Alpes donde la principal atracción turística es la magia. Resulta que en esta zona, la magia pulula libremente, y aunque tiene partes positivas, como que las personas pueden aprender a usarla, también tiene otras negativas, como los monstruos y las cuevas que han aparecido. Los turistas, como nuestra protagonista, viajan hasta aquí para intentar completar las 25 cuevas, buscando esa emoción propia del cambio de rutina y de, aparentemente, arriesgar sus vidas.\r\nObviamente, el combate y las mazmorras juegan un importantísimo papel en Dungeons of Hinterberg. El combate es muy sencillito pero bien diseñado y, sobre todo, en los niveles más altos, nos obliga a jugar con cabeza y a hacer uso de nuestras habilidades. Hay una razonable variedad de enemigos (aunque nos gustaría que hubiera más y que nos obligara a tener que realizar más estrategias), pero cumple su cometido con creces.\r\nUnos días de descanso mágico\r\nDungeons of Hinterberg es un juego que nos ha sorprendido muchísimo, tanto en su propuesta como en su ejecución. Las mazmorras brillan con luz propia, mientras que sus demás apartados pueden ser más o menos irregulares, pero saben trabajar en armonía para que cuando aparecen los créditos en pantalla nos quedemos más que satisfechos. Se podrían mejorar los controles, los diálogos y el rendimiento para que nos quedara un juego redondo, pero incluso con estos problemillas, creemos que es una aventura muy bien planteada que os recomendamos a poco que os llame la atención su idea.', 0, '2024-08-23 11:50:30', 'https://res.cloudinary.com/dewpwxj8m/image/upload/v1724413829/ngmcvuxfl7gp10gcn04k.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(3, 'miapenelope', 'cipolat');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
