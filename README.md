# mypizzashop

Se realizó una SPA (Single Page Application) que permite tomar pedidos de pizzas, escoger los ingredientes extras, tomar nombre y teléfono del cliente y se calcula costo por pizza, costo total de los ingredientes extras y el costo final. Aún queda pendiente desabilitar las demás opciones de pizza cuando se selecciona alguna y deseleccionar ingredientes extras.

La aplicación tiene 3 vistas, la primera es el home con dos botones que redirigen, el primero a la toma de la orde(Order) y el segundo al archivo de órdenes (dashboard)

El proyecto presentó varios retos en su elaboración:
-Poder tomar los datos de los ingredientes extras por separado y calcular el valor a pagar por todos juntos. Esto se resolvió mapeando en la data de los ingredientes seleccionados.
-La otra dificultad fue que a pesar que se logra guardar el pedido con toda su data en el local storage, esta se elimina al volver a la vista Order. Esto aún no lo he podido resolver y ha sido el motivo de la tardanza en la entrega.
-Otro de los retos fue el no poder utilizar librerías con compoonentes listos, especialmente con el select.

Por otra parte traté de hacer una aplicación sencilla, mobile first, con colores fáciles a la vista y diseño alegre.
También se utilizó el template de PWA (Progressive Web Application) que permite que la app después de ser instalada con NPM install, se puede descargar como una app de escritorio. Y en caso de que se haga deploy en alguna plataforma para ello (Vercel, Heroku, et) se podrá hacer desde cualquier teléfono celular haciendo muy versátil su uso.

![Home] (images-readme\mypizzaapp1.jpg)

![Order] (images-readme\mypizzaapp2.jpg)

![Order Resume] (images-readme\mypizzaapp3.jpg)

![Select Extras en mobile] (images-readme\mypizzaapp4.jpg)

![Order Resume con data] (images-readme\mypizzaapp5.jpg)

![Instalación desde desktop] (images-readme\mypizzaapp6.png)

![App instalada en desktop] (images-readme\mypizzaapp7.png)
