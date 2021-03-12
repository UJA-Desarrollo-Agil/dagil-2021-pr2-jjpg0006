// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Habitación</h1>\
        <center> <img src='media/games/tutorial/hotel.jpg'></center>\
        <p>Juan José, Juan José, Juan José... escucho mi nombre repetidamente, me doy cuenta de que esas voces vienen de mamá, me llama como si tuviera algo\
        importante que hacer, sin embargo miro el móvil (con el que siempre tengo la hora a mano) y la alarma está puesta para las nueve, una más tarde de la hora actual. </p>\
        <p>Tengo que tomar ahora una decisión: levantarme o bien esperar a que suene la alarma</p>\
        <p class='transient'><a href='pasillo' class='once'> - Despertarme </a></p>\
        <p class='transient'><a href='habitaciondos' class='once'> - Seguir durmiendo hasta que suene la alarma </a></p>"
    ),


    habitaciondos: new undum.SimpleSituation(
        "<h1>Seguir durmiendo</h1>\
    <center><img src='media/games/tutorial/despertador.jpg'></center>\
    <p> Bip... bip..., la alarma vuelve a sonar, por lo que puedo levantarme o seguir durmiendo:</p>\
    <p class='transient'><a href='pasillo' class='once'> -Despertarme ahora </a></p>\
    <p class='transient'><a href='finalone' class='once'> -Seguir durmiendo </a></p>\
    ",

        {

            enter: function (character, system, action) {
                system.setCharacterText("<p>Decido quedarme una hora más durmiendo, por lo que pasa una hora. Son las 9 de la mañana</p>");
                character.minutosiniciales=character.minutosiniciales-60;
            }

        },

    ),



    pasillo: new undum.SimpleSituation(
        "<h1>En el pasillo</h1>\
    <img src='media/games/tutorial/pasillo.jpg' class='float_right'>\
    <p> Tras despertarme y vestirme me dirijo al pasillo y andando recuerdo que el Real Madrid jugará mañana la final de la Championship League, recuerdo que me encargaron\
        comprar el billete de avión en el aeropuerto, la entrada en un la peña del Madrid y comprar la equipación del Madrid para apoyar al equipo en la tienda.</p>\
    <p> Me impaciento  mucho ya que recuerdo que cierran a las 14:30 y además tengo que estar en casa a esa hora para la hora de la comida por lo que calculo el tiempo que queda, aunque todavía es temprano, pero no se si salir ya e irme a comprar lo que necesitas o bien ir al comerdor y comer</p>\
    <p class='transient'><a href='comedor' class='once'> -Ir al comedor </a></p>\
    <p class='transient'><a href='calleuno' class='once'> -Salir a la calle </a></p>",

    {

        enter: function (character, system, action) {
            system.setCharacterText("<p>Hago calculo de la cantidad de tiempo que tengo hasta que abran las tiendas.</p>");
            system.setQuality("hora",character.minutosiniciales);
        }

    },
    ),

    comedor: new undum.SimpleSituation(
        "<h1>En el comedor</h1>\
    <img src='media/games/tutorial/comedor.jpg' class='float_right' width='245' height='206'>\
    <p>Me encuentro solo en la casa mientras tomo mis tostada con tomate y jamón con zumo de naranaja como de costumbre mientras juego con el móvil perdiendo una hora, vo el dinero que necesito y las llaves en la encimera antes de salir de casa por lo que\
    me alegro de haber ido a desayunar y no salir con prisa cuando estaba en el pasillo, cuando acabo me dirijo a la encimera y <a href='./bolsillo' class='once'>cojo el dinero y las llaves.</a></p>\
    ",



        {
            actions: {
                bolsillo: function (character, system, action) {
                    system.setCharacterText("<p>A partir dispongo de 50 euros y las llaves</p>");
                    system.setQuality("dinero", 80);
                    system.setQuality("llaves", 1);
                    system.write("<p>Tengo todo para salir y comprar lo que necesito, pero no se si echar un vistazo por si falta algo en mi habitación ya que al levantarme estaba adormido. </p>\
                <p class='transient'><a href='habitacionbuscar' class='once'> -Ir a la habitación </a></p>\
                <p class='transient'><a href='calleuno' class='once'> -Ir a la calle </a></p>");
                }
            },
            enter: function (character, system, action) {
                if (character.qualities.hora == 390) {
                    system.write("<p>De camino hacia el comedor me encuentras mamá la cual al ver que me he depertado temprano, decide darme un tique de descuento en el billete de avión, tras eso se marcha</p>");
                    system.setQuality("boleto", 1);
                }
                system.setQuality("hora", character.qualities.hora - 60);
            }

        },
    ),

    calleuno: new undum.SimpleSituation(
        "<h1>En la calle Simón</h1>\
    <center><img src='media/games/tutorial/policia.jpg' width='350' height='250'></center>\
    <p> Veo un policía por la calle y me pregunta donde está mi mascarilla y me advierte que no podré ir a ningún lado si no la llevas, yo atemorizado <a href='./bolsillo' class='once'>me toco los bolsillos.</a></p>",

        {
            actions: {
                bolsillo: function (character, system, action) {
                    if (character.qualities.mascarilla == 1) {
                        system.write("<p>Le enseño la mascarilla y me la pongo por lo que el policía se va y <a href='calledos' class='once'> me voy a la calle principal </a> donde podré continuar con mi camino.</p>");
                    }
                    else {
                        if (character.qualities.llaves == 1) {
                            system.write("<p>Vuelvo a la habitación y cojo la mascarilla pero he perdido algo de tiempo, después de eso me voy <a href='calledos' class='once'> a la calle principal </a></p>");
                            system.setQuality("mascarilla", 1);
                            system.setQuality("hora", character.qualities.hora - 15);

                        }
                        else { system.write("<<h1>Fin del juego, objetivo no cumplido</h1> <p>He perdido, no puedo entrar a la casa ya que estaba solo y pasará mucho tiempo hasta que vuelvan por lo que no me dará tiempo a comprar ni el vuelo de avión ni la entrada de la Champions ni la equipación.</p>"); }
                    }
                }
            }
        }
    ),

    calledos: new undum.SimpleSituation(
        "<h1>En la calle Principal</h1>\
        <center><img src='media/games/tutorial/principal.jpg' width='450' height='250'></center>\
    <p>Me encuentro en la calle principal, donde desde aquí podré ir a todos los sitios de la ciudad:</p>\
    <p class='transient'><a href='aeropuerto' class='once'> -Ir al aeropuerto a comprar el billete de avión. </a></p>\
    <p class='transient'><a href='pena' class='once'> -Ir a la peña a comprar la entrada.</a></p>\
    <p class='transient'><a href='atajopena' class='once'> -Intentar ir a la peña a través de un atajo del que no escuche hablar.</a></p>\
    <p class='transient'><a href='tienda' class='once'> -Ir a la tienda.</a></p>\
    <p class='transient'><a href='casa' class='once'> -Ir a casa.</a></p>\
    ",
    {
    
        enter: function (character, system, from) {
            system.setCharacterText("<p>Desde que he ido a ese lugar y he vuelto a la calle principal han pasado 30 minutos.</p>");
            system.setQuality("hora", character.qualities.hora - 30);
            if(character.qualities.hora<=0){
            system.doLink('finaltwo');
            }
        }
    }
    ),

    casa: new undum.SimpleSituation(
        "",
        {  
            enter: function (character, system, from) {
                system.write( "<h1>En la casa</h1>\
                <center><img src='media/games/tutorial/casa.jpg' width='450' height='250'></center>\
                <p>He vuelto a casa, pero todavía tengo cosas que conseguir para antes de mañana, por lo que deberé de conseguirlas antes de terminar.</p>");
              
                    if (character.qualities.billeteavion == 1 && character.qualities.entrada && character.qualities.equipacionc) {
                        system.doLink('casavictoria');
                    } else { system.write("<p>Todavía no tengo todo lo necesario para poder ver al Madrid el siguiente día.</a> </p>"); 
                     system.write("<p><a href='calledos' class='once'> Volver a la calle principal</a></p>");}
                 
            }
        }

    ),

    casavictoria: new undum.SimpleSituation(
         "<h1>!!!Objetivo cumplido!!!</h1>\
         <center><img src='media/games/tutorial/victoria.jpg' width='350' height='170'></center>\
         <p>He conseguido la equipación oficial del Real Madrid, el billete de avión y la entrada para el partido, por lo que podré pasar el resto del día en tu casa y hacer la comida\
          mientras espero con impaciencia que llegue mañana.</p>",
         {  
            enter: function (character, system, from) {
                system.setCharacterText("<p>¡¡He conseguido el objetivo propuesto por el juego!!.</p>");               
            }
        }
    ),

    aeropuerto: new undum.SimpleSituation(
        "",
        {
    
            actions: {
                comprar: function (character, system, action) {
                    if (character.qualities.dinero>=70){
                    system.setQuality("billeteavion", 1);
                    system.setQuality("dinero", character.qualities.dinero-70);
                    system.setCharacterText("<p> Compro el billete de avión necesario para ver el partido. </p>");}
                    else{ system.setCharacterText("<p>No tengo el dinero necesario para comprar la entrada a la final.</p>");}
                }
            },
    
    
            enter: function (character, system, from) {
                system.write( "<h1>En el aeropuerto</h1>\
                <center><img src='media/games/tutorial/aeropuerto.jpg' width='450' height='250'></center>\
                <p>Me encuentro dentro del aeropuerto donde se adquieren los billetes de avión</p>");
                system.setCharacterText("<p>Me encuentro dentro del aeropuerto donde se adquieren los billetes de avión.</p>");
    
                if (character.qualities.billeteavion != 1) {
                    if (character.qualities.boleto == 1) {
                        system.doLink('aeropuertoconboleto');
                    } else { system.write("<p>Me dirijo hacia la taquilla para adquirir tu billete de vuelo, donde me dicen que el precio total es de 70 euros, recuerdo que\
                    mamá tenía un boleto de un descuento, pero como no me desperté cuando me llamó supones que se le olvido dármelo, mientras me lamento</p>\
                    <p class='transient'> <a href='./comprar' class='once'> Comprar billete de avión </a> </p>"); 
                     system.write("<p class='transient'><a href='calledos' class='once'> Volver a la calle principal</a></p>");}
                } else{ system.write("<p class='transient'><a href='calledos' class='once'> Volver a la calle principal</a></p>");}
            }
        }
    ),


   aeropuertoconboleto: new undum.SimpleSituation(
    "<p>Me dirijo hacia la taquilla para adquirir mi billete de vuelo, donde me dicen que el precio total es de 70 euros, recuerdo que mamá al levantarte me dio\
   un boleto de descuento de 50 euros debido a que hicimos muchos vuelos el año pasado, por lo que el billete de avión solo costaría 20 euros</p>\
    <p class='transient'> <a href='./comprar' class='once'> Comprar billete de avión </a> <p class='transient'><a href='calledos' class='once'> Volver a la calle principal</a></p> </p> ",

        {
            actions: {
                comprar: function (character, system, action) {
                    if (character.qualities.dinero>=20){
                    system.setQuality("billeteavion", 1);
                    system.setQuality("boleto", 0);
                    system.setQuality("dinero", character.qualities.dinero-20);
                    system.setCharacterText("<p> Compro el billete de avión necesario para ver el partido. </p>");}
                    else{ system.setCharacterText("<p> No dispongo del dinero sufiente, por lo que no puedo comprar el billete de avión. </p>");}
                }
            }
        }
    ),


    pena: new undum.SimpleSituation(
        "",
    {

        actions: {
            comprar: function (character, system, action) {
                if (character.qualities.dinero>=50){
                system.setQuality("equipacionb", 0);
                system.setQuality("entrada", 1);
                system.setQuality("dinero", character.qualities.dinero-50);
                system.setCharacterText("<p> Compro la entrada necesaria para ver el partido. </p>");
                }
                else{ system.setCharacterText("<p>No tengo el dinero necesario para comprar la entrada para la final de la Champions.</p>");}
                
            }
        },


        enter: function (character, system, from) {
            system.write( "<h1>En la peña</h1>\
            <center><img src='media/games/tutorial/pena.jpg' width='450' height='250'></center>\
            <p>Me encuentro en la entrada de la peña donde se adquieren las entradas del madrid</p>");
            system.setCharacterText("<p>Me encuentro en la entrada de la peña donde se compra la entrada para el partido.</p>");
            

            if (character.qualities.entrada != 1) {
                if (character.qualities.equipacionb == 1) {
                    system.doLink('penaequipacionb');
                } else { system.write("<p>Veo al presidente y me pregunta que si tengo una camiseta para el partido de su hijo de hoy, a lo que contestas no,\
                 tras una breve charla me dice que puedo <a href='./comprar' class='once'> comprar la entrada por 50 euros. </a></p>"); 
                 system.write("<p class='transient'><a href='calledos' class='once'> Volver a la calle principal</a></p>");}
            } else{ system.write("<p class='transient'><a href='calledos' class='once'> Volver a la calle principal</a></p>");}
        }
    }
    ),


 
    penaequipacionb: new undum.SimpleSituation(
        "<p>El presidente de la peña que es un conocido mio m ve llegar con una equipacion que le interesa y me ofrece intercambiar la camiseta barata por la entrada del partido que necesito ya que su hijo necesita una equipación para hoy. \
    <a href='./aceptar' class='once'> Acepto </a> mientras agradezco al presidente el gran favor que me ha hecho ya que en realidad la camiseta barata no era necesaria para nada.</p>",

        {
            actions: {
                aceptar: function (character, system, action) {
                    system.write("<p class='transient'><a href='calledos' class='once'> Volver a la calle principal</a></p>");
                    system.setQuality("equipacionb", 0);
                    system.setQuality("entrada", 1);
                    system.setCharacterText("<p> Compro la entrada necesaria para ver el partido. </p>");
                }
            }
        }
    ),


    atajopena: new undum.SimpleSituation(

        "<p>Creía que era un gran atajo pero en verdad he tardado el mismo tiempo que por el camino habitual,\
         sin embargo no podré volver por él para ir a la calle principal por motivos COVID , sigo hasta <a href='pena' class='once'> llegar a la peña. </a> </p>",

         

        {
            actions: {
                recoger: function (character, system, action) {
                    system.setCharacterText("<p>Mi dinero aumenta en 30.</p>");
                    system.setQuality("dinero", character.qualities.dinero + 30);
                },
                dardinero: function (character, system, action) {
                    system.setCharacterText("<p>Tras darle el dinero sale corriendo, trato de alcanzarlo pero al final se acaba llendo, pierdo tiempo y el dinero.</p>");
                    system.setQuality("dinero", 0);
                }
            },
            enter: function (character, system, action) {
                system.write("<h1>En el atajopena</h1>\
                <center><img src='media/games/tutorial/callejon.jpg' width='450' height='250'></center>");
                system.setCharacterText("<p>Me encuentras en el atajo que desconoces para ir a la peña.</p>");
                if (character.variable == 0) {
                    system.write("<p>Acabo de encontrar 30 euros  en el suelo <a href='./recoger' class='once'> que puedo recoger. </a></p>");
                    character.variable = 1;
                }
                if (character.extrano == 0) {
                    character.extrano=1;
                    system.write("<p>Encuentro a una persona la cual me pide el dinero que llevo prometiendome que me devolverá el doble del dinero que le de, <a href='./dardinero' class='once'> puedo darselo </a> o pasar de el.</p>");
                }
            },
        },



    ),

    tienda: new undum.SimpleSituation(
        "",

        {
            actions: {
                ayudar: function (character, system, action) {
                    system.setCharacterText("<p>Decido ayudar por lo que aumenta mi dinero pero disminuye mi tiempo.</p>");
                    system.setQuality("dinero", character.qualities.dinero + 25);
                    system.setQuality("hora", character.qualities.hora - 30);

                    if(character.qualities.hora<=0){
                    system.doLink('finaltwo');
                    }
                },
                comprarc: function (character, system, action) {
                    if(character.qualities.dinero>=60){
                    system.setCharacterText("<p>Decido comprar la equipación cara que es la que necesitas para el partido.</p>");
                    system.setQuality("equipacionc", 1);
                    system.setQuality("dinero", character.qualities.dinero - 60);
                    character.equipacionmadrid=1;}
                    else{ system.setCharacterText("<p>No tengo el dinero necesario para comprar la equipación del Real Madrid.</p>");}
                },
                comprarb: function (character, system, action) {
                    if(character.qualities.dinero>=20){
                    system.setCharacterText("<p>Decido comprar la equipación barata aunque no me sirve para ir a ver el partido, podría ser útil.</p>");
                    system.setQuality("equipacionb", 1);
                    system.setQuality("dinero", character.qualities.dinero - 20);
                    character.equipacionchino=1;}
                    else{ system.setCharacterText("<p>No tengo el dinero necesario para comprar la equipación barata del Real Madrid.</p>");}
                }
            },
            enter: function (character, system, action) {
                system.write( "<h1>En la tienda</h1>\
                <center><img src='media/games/tutorial/tienda.jpg' width='450' height='250'></center>\
                <p> Me encuentro en la tienda donde se compran las equipaciones del Madrid, entre otros accesorios.</a></p>");
                system.setCharacterText("<p>Me encuentro en la tienda donde se compra la equipación del Real Madrid.</p>");
                        
                if(character.equipacionchino==0 || character.qualities.equipacionc==0){
                system.write("<p> Una vez estoy en la sección de equipaciones puedo:</p>");
                }


                if(character.equipacionmadrid==0){
                    system.write("<p><a href='./comprarc' class='once'> - Comprar la equipación del Real Madrid Oficial </a></p>");
                }

                if(character.equipacionchino==0){
                    system.write("<p><a href='./comprarb' class='once'> - Comprar de los Chinos.</a></p>");
                }


                system.write("<p>El jefe de la tienda en la entrada que necesita ayuda y me pregunta si le puedes echar una mano y me pagará 20 euros cada vez que le ayude,\
                parece estar teniendo un mal día sin embargo no me gustaría perder mucho tiempo, pero dice que me remunerará bién... <a href='./ayudar'> puedo ayudarlo. </a>.</p>");
                

                system.write("<p class='transient'><a href='calledos' class='once'> Volver a la calle principal</a></p>");
            },
        },
    ),


    finaltwo: new undum.SimpleSituation(

        "<h1>Fin del juego, objetivo no cumplido II</h1>\
    <center><img src='media/games/tutorial/end.jpg' width='450' height='200'></center>\
    <p>He pasado el tiempo máximo por lo que no me ha dado tiempo a hacer las compras antes del tiempo fijado</p>",

    ),

    habitacionbuscar: new undum.SimpleSituation(
        "<h1>En la habitación</h1>\
    <img src='media/games/tutorial/mascarilla.jpg' class='float_right' width='245' height='206'>\
    <p><a href='./bolsillo' class='once'> Recojo la mascarilla </a> que hace falta para salir a la calle debido a que la obligación que existe por culpa de la nueva pandemia, tras eso me quedo otro rato buscando por si me hace falta algo más, pero no encuentro nada asique\
    abandono la habitación y <a href='calleuno' class='once'> me voy a la calle directamente.</a></p>",


        {
            actions: {
                bolsillo: function (character, system, action) {
                    system.setQuality("mascarilla", 1);
                } 
            },
                enter: function (character, system, action) {
                    system.setCharacterText("<p>Pierdo 15 minutos hasta que encuentro la mascarilla.</p>");
                    system.setQuality("hora",character.qualities.hora-15);
                }

        }



    ),

    finalone: new undum.SimpleSituation(
        "<h1>Fin del juego, objetivo no cumplido I</h1>\
    <center><img src='media/games/tutorial/end.jpg' width='450' height='200'></center>\
    <p>No me despierto en toda la mañana y acabo levantándome muy tarde y todas las tiendas estarán cerradas por lo que no podré ver a mi equipo en la final</p>",
    {
    
        enter: function (character, system, from) {
            system.setQuality("hora", 0);
        }
    }
    ),

};


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    hora: new undum.NumericQuality(
        "Minutos", { priority: "0001", group: 'tiempo' }
    ),
    dinero: new undum.NumericQuality(
        "Dinero", { priority: "0001", group: 'inventario' }
    ),
    mascarilla: new undum.OnOffQuality(
        "Mascarilla", { priority: "0002", group: 'inventario', onDisplay: "&#10003;" }
    ),
    boleto: new undum.OnOffQuality(
        "Boleto de descuento", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
    ),
    llaves: new undum.OnOffQuality(
        "Llaves", { priority: "0003", group: 'inventario', onDisplay: "&#10003;" }
    ),
    equipacionc: new undum.OnOffQuality(
        "Equipación RM", { priority: "0004", group: 'inventario', onDisplay: "&#10003;" }
    ),
    equipacionb: new undum.OnOffQuality(
        "Equipación chinos", { priority: "0005", group: 'inventario', onDisplay: "&#10003;" }
    ),
    entrada: new undum.OnOffQuality(
        "Entrada", { priority: "0006", group: 'inventario', onDisplay: "&#10003;" }
    ),
    billeteavion: new undum.OnOffQuality(
        "Billete de Avión", { priority: "0007", group: 'inventario', onDisplay: "&#10003;" }
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    tiempo: new undum.QualityGroup('Tiempo restante', { priority: "0001" }),
    inventario: new undum.QualityGroup('Inventario', { priority: "0001" }),
    requisitos: new undum.QualityGroup('Requisitos', { priority: "0001" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    system.setCharacterText("<p>Comienza mi aventura.</p>");
    character.variable = 0;
    character.encontrado = 0;
    character.equipacionchino = 0;
    character.equipacionmadrid = 0;
    character.extrano = 0
    character.minutosiniciales=390;
};
var extrano=0;
var variable = 0;
var encontrado=0;
var equipacionchino=0;
var equipacionmadrid=0;
var minutosiniciales=360;