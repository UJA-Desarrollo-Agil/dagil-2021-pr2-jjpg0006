# Documentación práctica 2
Aqui se expondrá la información requerida sobre la práctica 2.
Se ha cogido el ejemplo tutorial.en.html y se ha hecho una copia por lo que el archivo .html donde lo he llevado acabo esta en la misma carpeta con el nombre **Elgranpartido.html**, para el .js se ha llevado el mismo proceso he hecho una copia del js del .en y es llamado como **Elgranpartido.js**, está en la misma carpeta que el original y además se han incluido las imagenes que contiene el juego.
![cap7](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr2-jjpg0006/blob/master/capturas/cap7.png)
## Descripción del juego.
El juego va sobre que hoy es el último día para realizar todas las compras que he estado aplazando durante semanas, mañana es la final de la Champions entre mi equipo favorito, el Real Madrid y el Paris Saint Germain, mi deber es comprar la entrada al partido de Champions en la peña, la equipación ofical del Madrid en la tienda y el billete de avión en el aeropuerto. Debo de comprar todo y volver a tu casa antes de las 14:30 que es cuando cierran todas las tiendas y tengo que tener tiempo suficiente para preparar la comida.

El juego tiene las siguientes situaciones:
* **Start**: Es donde empiezo el juego, me encuentro en mi habitación y mi madre me intenta levantar. Puedo elegir si me quedo dormido hasta que suene la alarma o me levanto y me voy al pasillo.
* **Habitaciondos**: Es la situación consecuencia a elegir en start la opción de dormir: me sigo encontrando en mi habitación y me despierta la alarma esta vez, ha pasado una hora.  Puedo elegir si me quedo dormido hasta que suene la alarma o me levanto.
* **Finalone**: Es la situación consecuencia a elegir en Habitaciondos la opción de dormir: me levanto tarde y no me da tiempo a hacer las compras, he perdido mi objetivo.
* **Pasillo**: Es donde me dirijo después de haberme levantado en habitaciondos o start: aqui po elegir entre irme a la calle o irme al comedor.
* **Comedor**: Si me levanté a la hora que te dijo mi madre, me la encontraré camino al comedor y me dará un boleto de descuento, si me levanté tarde no estará y en consecuencia no lo recibiré. Aquí tendré la opción de irme a la calle o revisar mi habitación, en el comedor además encontrare unas llaves y dinero.
* **Habitacionbuscar**: Es donde me dirijo después de elegir la opción de revisar mi habitación, es donde encuentro la mascarilla, después de eso iré a la calle.
* **Calleuno**: Es donde me dirijo después de elegir la opción de salir a la calle. Si tengo la mascarilla la policía me dejará pasar, si tengo las llaves pero no la mascarilla, podré entrar a cogerla, si no tengo ni la llave ni la mascarilla no podré ir a ningún lado y perderé.
* **Calledos**: Es la calle principal dondré podré ir a todos los lugares que necesito, tengo que pasar por aquí después de ir a un lugar, es decir si quiero ir a la tienda y al aeropuerto, primero debo ir a esta calle, luego a la tienda, luego volver a la calle y luego ir al aeropuerto, luego debo de volver a esta calle si quiero volver a ir a otro lugar. Cada vez que pase por esta calle **pasarán 30 minutos** representan los minutos que han pasado desde que has ido hasta que has vuelto.
* **Aeropuerto**: Es donde puedo comprar el billete de avión cuando no tengo el boleto de descuento: será mas caro.
* **Aeropuertoconboleto**: Es donde puedo comprar el billete de avión cuando tengo el boleto de descuento: será más barato.
* **Atajopena**: Es un atajo para ir a la peña, la primera vez y solo la primera vez me aparecerá un tipo que te intenta estafar, además hay un billete en el suelo que puedo coger una vez.
* **Pena**: Es donde puedo comprar la entrada al Madrid tendré que pagar la entrada ya que no tengo la camiseta barata (aunque puedo ir a la tienda a por ella).
* **Penaequipacionb**:Es donde puedo comprar la entrada al Madrid, si tengo una equipación barata del madrid, el presidente me ofrecerá la entrada gratis por ella.
* **Tienda**: Es donde puedo comprar la equipación oficial del Real Madrid que se necesita y una barata no oficial para darsela al Presidente y conseguir la entrada gratis. También podremos **trabajar** todas las veces que quiera mientras **disponga de tiempo para conseguir dinero**.
* **Finaltwo**: Es la situación donde estoy cuando me quedo sin tiempo, he perdido mi objetivo.
* **Casa**: Es la situación que ocurre cuando vuelvo a mi casa desde la calle principal pero no he conseguido los 3 objetos que necesito, por lo tanto no pasará nada y tendré que volver a la calle principal.
* **Casavictoria**: Es la situación que ocurre cuando vuelvo a mi casa desde la calle principal y he conseguido los 3 objetos que necesito. **Por lo tanto he ganado y he completado mi objetivo**.

### Guía simple de como ganar fácilmente.
Hay diferentes maneras de como ganar (como trabajar en la tienda varias veces aunque hayas tomado malas decisiones en el pasado), pero expondré la más simple.
En la primera situación cuando te levantas, elegir la opción de levantarte.
En el pasillo, ir al comedor.
En el comedor (conseguimos el boleto de descuento), coger dinero y llaves.
Después, ir a la habitación.
Recoger mascarilla en habitación e ir a la calle.
Encontrar la mascarilla en la calle simón en la opción tocar los bolsillos e ir a la calle principal.
Ir a la tienda y comprar ambas equipaciones.
Volver a la calle principal.
Ir a la peña a través del atajo, coger el billete, ignorar al estafador e ir a la peña.
En la peña intercambiamos la camiseta por la entrada.
Volver a la calle principal.
Vamos al aeropueto y compramos el billete descontado gracias al boleto de descuento.
Volvemos a la calle principal.
Volvemos a la casa.

## URL Trello
https://trello.com/b/sJP85JN4/practica-2

## Capturas de pantalla tablero trello
Aqui mostraré la evolución del tablero de trello a través de la ejecución del proyecto.
![cap1](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr2-jjpg0006/blob/master/capturas/cap1.png)
![cap2](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr2-jjpg0006/blob/master/capturas/cap2.png)
![cap3](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr2-jjpg0006/blob/master/capturas/cap3.png)
![cap4](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr2-jjpg0006/blob/master/capturas/cap4.png)
![cap6](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr2-jjpg0006/blob/master/capturas/cap6.png)

## Capturas de pantalla de la aplicación Telegram
Aqui mostraré la captura de pantalla de que el repositorio se encuentra correctamente enlazado a trello.
![cap5](https://github.com/UJA-Desarrollo-Agil/dagil-2021-pr2-jjpg0006/blob/master/capturas/cap5.png)

