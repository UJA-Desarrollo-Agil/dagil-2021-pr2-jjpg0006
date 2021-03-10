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
    inventario: new undum.QualityGroup('Inventario', { priority: "0001" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
    character.qualities.energia = 12;
    character.qualities.hora = 8;
};
