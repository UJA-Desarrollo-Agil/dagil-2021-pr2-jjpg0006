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
        <p>Juan José, Juan José, Juan José... escuchas tu nombre repetidamente, te dás cuenta de que esas voces vienen de tu madre, te llama como si tuvieras algo\
        importante que hacer, sin embargo miras el móvil (con el que siempre tendrás la hora a mano) y la alarma está puesta para las nueve, una más tarde de la hora actual. </p>\
        <p>Tienes que tomar ahora una decisión: levantarte o bien esperar a que suene la alarma</p>\
        <p class='transient'><a href='pasillo' class='once'> - Despertarte </a></p>\
        <p class='transient'><a href='habitaciondos' class='once'> - Seguir durmiendo hasta que suene la alarma </a></p>"
    ),


    habitaciondos: new undum.SimpleSituation(
        "<h1>Descansar</h1>\
    <center><img src='media/games/tutorial/despertador.jpg'></center>\
    <p> Bip... bip..., la alarma vuelve a sonar, por lo que puedes levantarte o seguir durmiendo:</p>\
    <p class='transient'><a href='pasillo' class='once'> -Despertarte ahora </a></p>\
    <p class='transient'><a href='finalone' class='once'> -Seguir durmiendo </a></p>\
    ",

        {

            enter: function (character, system, action) {
                system.setCharacterText("<p>Decides dormirte dos horas más, por lo que ganas energía tras haber dormido mejor.</p>");
                system.setQuality("hora", character.qualities.hora + 0.1);
            }

        },

    ),



    pasillo: new undum.SimpleSituation(
        "<h1>En el pasillo</h1>\
    <img src='media/games/tutorial/pasillo.jpg' class='float_right'>\
    <p> Tras despertarte y vestirte te diriges al pasillo y andando recuerdas que el Real Madrid jugará mañana la final de la Championship League, recuerdas que te encargaron\
        de comprar el billete de avión en el aeropuerto (donde llegar a antes de una determinada hora ya que o si no el avión despegará) y la entrada en un la peña del Madrid y comprar la equipación del Madrid para apoyar al equipo y que te reconozcan en la tienda.</p>\
    <p> Te impacientas mucho y no quieres perder mucho tiempo, aunque todavía es temprano, por lo que no sabes si salir ya e irte a comprar lo que necesitas o bien ir al comerdor y comer</p>\
    <p class='transient'><a href='comedor' class='once'> -Ir al comedor </a></p>\
    <p class='transient'><a href='calleuno' class='once'> -Salir a la calle </a></p>"
    ),

    comedor: new undum.SimpleSituation(
        "<h1>En el comedor</h1>\
    <img src='media/games/tutorial/comedor.jpg' class='float_right' width='245' height='206'>\
    <p>Te encuentras solo en la casa mientras tomas tus tostada con tomate y jamón con zumo de naranaja como de costumbre mientras juegas con el móvil perdiendo una hora, ves el dinero que necesitas y las llaves en la encimera antes de salir de casa por lo que\
    te alegras de haber ido a desayunar y no salir con prisa cuando estabas en el pasillo, cuando acabas te diriges a la encimera y coges el dinero y las llaves:</p>\
    <p class='transient'><a href='./bolsillo' class='once'> Coger Dinero y llaves </a></p>",



        {
            actions: {
                bolsillo: function (character, system, action) {
                    system.setCharacterText("<p>A partir de ahora el personaje dispone de 50 euros y las llaves</p>");
                    system.setQuality("dinero", 50);
                    system.setQuality("llaves", 1);
                    system.write("<p>Tienes todo para salir y comprar lo que necesitas, pero no sabes si echar un vistazo por si falta algo en tu habitación ya que al levantarte estabas adormido. </p>\
                <p class='transient'><a href='habitacionbuscar' class='once'> -Ir a la habitación </a></p>\
                <p class='transient'><a href='calleuno' class='once'> -Ir a la calle </a></p>");
                }
            },
            enter: function (character, system, action) {
                if (character.qualities.hora == 8) {
                    system.write("<p>De camino hacia el comedor te encuentras con tu madre la cual al ver que te has depertado temprano cuando ella te llama, decide darte un tique de descuento en el billete de avión, tras eso se marcha</p>");
                    system.setQuality("boleto", 1);
                }
                system.setQuality("hora", character.qualities.hora + 1);
            }

        },



    ),

    calleuno: new undum.SimpleSituation(
        "<h1>En la calle Simón</h1>\
    <center><img src='media/games/tutorial/policia.jpg' width='350' height='250'></center>\
    <p> Ves un policía por la calle y te pregunta donde está tu mascarilla y te advierte que no podrás ir a ningún lado si no la llevas, tu atemorizado <a href='./bolsillo' class='once'>te tocas los bolsillos.</a></p>",

        {
            actions: {
                bolsillo: function (character, system, action) {
                    if (character.qualities.mascarilla == 1) {
                        system.write("<p>Le enseñas la mascarilla y te la pones por lo que el policía se va y <a href='calledos' class='once'> te vas a la calle principal </a> donde puedes continuar con tu camino</p>");
                    }
                    else {
                        if (character.qualities.llaves == 1) {
                            system.write("<p>Vuelves a la habitación y coges la mascarilla pero has perdido algo de tiempo, después de eso te vas <a href='calledos' class='once'> a la calle principal </a></p>");
                            system.setQuality("mascarilla", 1);
                            system.setQuality("hora", character.qualities.hora + 1);

                        }
                        else { system.write("<<h1>Fin del juego, objetivo no cumplido</h1> <p>Has perdido, no puedes entrar a la casa ya que estabas solo y pasará mucho tiempo hasta que vuelvan por lo que no te dará tiempo a comprar ni el vuelo de avión ni la entrada de la Champions</p>"); }
                    }
                }
            }
        }
    ),

    calledos: new undum.SimpleSituation(
        "<h1>En la calle Principal</h1>\
    <p>Te encuentras en la calle principal, donde desde aquí podrás ir a todos los sitios de la ciudad:</p>\
    <p class='transient'><a href='aeropuerto' class='once'> -Ir al aeropuerto a comprar el boleto e irte </a></p>\
    <p class='transient'><a href='pena' class='once'> -Ir a la peña a comprar la entrada</a></p>\
    <p class='transient'><a href='atajopena' class='once'> -Intentar ir a la peña a través de un atajo del que no oiste hablar pero ahorrarás tiempo, este camino solo es de ida por motivos de seguridad COVID</a></p>\
    <p class='transient'><a href='tienda' class='once'> -Ir a la tienda</a></p>\
    "
    ),

    aeropuerto: new undum.SimpleSituation(
        "",
        {
    
            actions: {
                comprar: function (character, system, action) {
                    system.setQuality("billeteavion", 1);
                    system.setQuality("dinero", character.qualities.dinero-50);
                }
            },
    
    
            enter: function (character, system, from) {
                system.write( "<h1>En el aeropuerto</h1>\
                <p>Te encuentras dentro del aeropuerto donde se adquieren los billetes de avión</p>");
    
    
                if (character.qualities.billeteavion != 1) {
                    if (character.qualities.boleto == 1) {
                        system.doLink('aeropuertoconboleto');
                    } else { system.write("<p>Te diriges hacia la taquilla para adquirir tu billete de vuelo, donde te dicen que el precio total es de 50 euros, recuerdas que\
                    tu madre tenía un boleto de un descuento, pero como no te despertaste cuanto te llamó supones que se le olvido dártelo, mientras te lamentas</p>\
                    <p> <a href='./comprar' class='once'> Comprar boleto </a> </p>"); 
                     system.write("<p><a href='calledos' class='once'> Volver a la calle principal</a></p>");}
                } else{ system.write("<p><a href='calledos' class='once'> Volver a la calle principal</a></p>");}
            }
        }
    ),


   aeropuertoconboleto: new undum.SimpleSituation(
    "<p>Te diriges hacia la taquilla para adquirir tu billete de vuelo, donde te dicen que el precio total es de 50 euros, recuerdas que tu madre al levantarte te dio\
   un boleto de descuento de 40 euros debidos a que hicisteis muchos vuelos el año pasado, por lo que el boleto de avión solo costaría 10 euros</p>\
    <p> <a href='./comprar' class='once'> Comprar boleto </a> <p><a href='calledos' class='once'> Volver a la calle principal</a></p> </p> ",

        {
            actions: {
                comprar: function (character, system, action) {
                    system.setQuality("billeteavion", 1);
                    system.setQuality("boleto", 0);
                    system.setQuality("dinero", character.qualities.dinero-10);
                }
            }
        }
    ),


    pena: new undum.SimpleSituation(
        "",
    {

        actions: {
            comprar: function (character, system, action) {
                system.setQuality("equipacionb", 0);
                system.setQuality("entrada", 1);
                system.setQuality("dinero", character.qualities.dinero-50);
            }
        },


        enter: function (character, system, from) {
            system.write( "<h1>En la peña</h1>\
            <p>Te encuentras en la entrada de la peña donde se adquieren las entradas del madrid</p>");


            if (character.qualities.entrada != 1) {
                if (character.qualities.equipacionb == 1) {
                    system.doLink('penaequipacionb');
                } else { system.write("<p>Ves al presidente y te pregunta que si tienes una camiseta para el partido de su hijo de hoy, a lo que contestas no,\
                 tras una breve charla te dice que puedes <a href='./comprar' class='once'> comprar la entrada por 50 euros </a></p>"); 
                 system.write("<p><a href='calledos' class='once'> Volver a la calle principal</a></p>");}
            } else{ system.write("<p><a href='calledos' class='once'> Volver a la calle principal</a></p>");}
        }
    }
    ),


 
    penaequipacionb: new undum.SimpleSituation(
        "<p>El presidente de la peña que es un conocido tuyo te ve llegar con una equipacion que le interesa y te ofrece intercambiar la camiseta barata por la entrada del partido que necesitas ya que su hijo necesita una equipación para hoy. \
    <a href='./aceptar' class='once'> Tu aceptas </a> mientras agradeces al presidente el gran favor que te ha hecho ya que en realidad la camiseta barata no era necesaria para nada.</p>",

        {
            actions: {
                aceptar: function (character, system, action) {
                    system.write("<p><a href='calledos' class='once'> Volver a la calle principal</a></p>");
                    system.setQuality("equipacionb", 0);
                    system.setQuality("entrada", 1);
                }
            }
        }
    ),


    atajopena: new undum.SimpleSituation(

        "<p>Es un gran atajo que te ha ahorrado mucho tiempo por lo que te alegras de haber ido por el, sin embargo no podrás volver por él para ir a la calle principal por motivos COVID , ahora podras <a href='pena' class='once'> ir a la peña </a> </p>",



        {
            actions: {
                recoger: function (character, system, action) {
                    system.setCharacterText("<p>Tu dinero aumenta en 50.</p>");
                    system.setQuality("dinero", character.qualities.dinero + 50);
                },
                dardinero: function (character, system, action) {
                    system.setCharacterText("<p>Tras darle el dinero sale corriendo, tratas de alcanzarlo pero al final se acaba llendo, pierdes tiempo y dinero.</p>");
                    system.setQuality("dinero", 0);
                    system.setQuality("tiempo", character.qualities.tiempo + 50);
                }
            },
            enter: function (character, system, action) {
                system.write("<h1>En el atajopena</h1>");
                if (character.variable == 0) {
                    system.write("<p>Acabas de encontrar <a href='./recoger' class='once'> un billete de 50 euros</a> que se añadirán a tu cuenta.</p>");
                    variable = 1;
                }
                if (character.qualities.hora < 5) {
                    system.write("<p>Encuentras a una persona la cual te pide el dinero que llevas prometiendote que te devolverá el doble del dinero que le has dado, <a href='./dardinero' class='once'> puedes darselo </a> o pasar de el.</p>");
                }
            },
        },



    ),

    tienda: new undum.SimpleSituation(
        "",

        {
            actions: {
                ayudar: function (character, system, action) {
                    system.setCharacterText("<p>Decides ayudar.</p>");
                    system.setQuality("dinero", character.qualities.dinero + 20);
                    system.setQuality("hora", character.qualities.hora + 1);
                    character.ayudar=1;

                },
                comprarc: function (character, system, action) {
                    system.setCharacterText("<p>Decides comprar la equipación cara.</p>");
                    system.setQuality("equipacionc", 1);
                    character.equipacionmadrid=1;
                },
                comprarb: function (character, system, action) {
                    system.setCharacterText("<p>Decides comprar la equipación barata.</p>");
                    system.setQuality("equipacionb", 1);
                    character.equipacionchino=1;
                }
            },
            enter: function (character, system, action) {
                system.write( "<h1>En la tienda</h1>\
                <p> Te encuentras en la tienda donde se compran las equipaciones del Madrid, entre otros accesorios.</a></p>");
                        
                if(character.equipacionchino==0 || character.qualities.equipacionc==0){
                system.write("<p> Una vez estas en la sección de equipaciones puedes:</p>");
                }


                if(character.equipacionmadrid==0){
                    system.write("<p><a href='./comprarc' class='once'>- Comprar la equipación del Real Madrid Oficial </a></p>");
                }

                if(character.equipacionchino==0){
                    system.write("<p><a href='./comprarb' class='once'> - Comprar de los Chinos.</a></p>");
                }

                if(character.qualities.hora<24){
                system.write("<p class='transient'>El jefe de la tienda en la entrada que necesita ayuda y te pregunta si le puedes echar una mano y te pagará 20 euros cada vez que le ayudes,\
                parece estar teniendo un mal día sin embargo no te gustaría perder mucho tiempo, pero dice que te remunerará bién... <a href='./ayudar'> puedes ayudarlo. </a>.</p>");
                }

                system.write("<p><a href='calledos' class='once'> Volver a la calle principal</a></p>");
            },
        },
    ),

    habitacionbuscar: new undum.SimpleSituation(
        "<h1>En la habitación</h1>\
    <img src='media/games/tutorial/mascarilla.jpg' class='float_right' width='245' height='206'>\
    <p><a href='./bolsillo' class='once'> Recoges la mascarilla </a> que hace falta para salir a la calle debido a que la obligación que existe por culpa de la nueva pandemia, tras eso te quedas otro rato buscando por si te hace falta algo más, pero no encuentras nada asique\
    abandonas la habitación y <a href='calleuno' class='once'> te vas a la calle directamente.</a></p>",


        {
            actions: {
                bolsillo: function (character, system, action) {
                    system.setQuality("mascarilla", 1);
                }
            }
        }



    ),

    finalone: new undum.SimpleSituation(
        "<h1>Fin del juego, objetivo no cumplido I</h1>\
    <center><img src='media/games/tutorial/end.jpg' width='450' height='200'></center>\
    <p>No te despiertas en todo el día y acabas levantándote a las 24:00 por lo que no podrás ver a tu equipo en la final, almenos tu energía estará al máximo al dia siguiente</p>",
        {
            enter: function (character, system, action) {
                system.setCharacterText("<p>Son las 12 de la noche del siguiente día, pero almenos dispondras de toda la energía posible");
                system.setQuality("hora", 24, 00);
                character.qualities.dinero = 20;
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
    energia: new undum.NumericQuality(
        "Energia", { priority: "0002", group: 'estadisticas' }
    ),
    hora: new undum.NumericQuality(
        "Hora", { priority: "0001", group: 'tiempo' }
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
    estadisticas: new undum.QualityGroup('Estadisticas', { priority: "0001" }),
    tiempo: new undum.QualityGroup('Hora', { priority: "0001" }),
    inventario: new undum.QualityGroup('Inventario', { priority: "0001" }),
    requisitos: new undum.QualityGroup('Requisitos', { priority: "0001" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
    character.qualities.energia = 12;
    character.qualities.hora = 8;
    character.variable = 0;
    character.ayudar = 0;
    character.equipacionchino = 0;
    character.equipacionmadrid = 0;
};
var variable = 0;
var ayudar=0;
var equipacionchino=0;
var equipacionmadrid=0;