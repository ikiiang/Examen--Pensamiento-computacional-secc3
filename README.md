# Examen--Pensamiento-computacional-secc3
Sobre el proceso de mi examen a partir de mi solemne dos, que quería, lo que logre asimismo los errores y los códigos correctos.

## Descripción 
El proyecto consiste en una experiencia visual basada en el arte óptico, donde una cuadrícula de figuras concéntricas reacciona dinámicamente a la posición y acciones del usuario.

El sistema guía al usuario a través de una narrativa interactiva clásica de tres fases: una pantalla de bienvenida que anuncia el inicio de la experiencia, un lienzo central interactivo (el "juego") donde el movimiento y la interacción generan ilusiones ópticas de deformación y volumen, y una pantalla de cierre que recopila el desempeño del usuario (cantidad de interacciones/clicks realizados) a modo de victoria.

## Sistema del juego
Los códigos estan programados de tal manera que al interactuar de una u otra forma el responda en tiempo real para generar respuestas audiovisuales dinámicas, en este código estan los estados;
- estado 0 (pantalla de inicio): el cual muestra el t´tulo "OP ARTE GAME" y las instrucciones correspondientes para empezar a jugar,
- estado 1 (juego): Al confirmarse el mensaje que da inicio al juego se despliega una cuadricula interactiva.
- estado 2 (pantalla final): Muestra el mensaje de éxito "OP ART COMPLETADO" y despliega el contador final de clicks
**inputs**
  - Teclado (ENTER): Controla la transición lineal entre los estados (Inicio-Juego-Final-Reinicio).
  - Teclado (SPACE): Reduce progresivamente la escala base de los círculos en un 10% por pulsación.
  - Mouse (Movimiento mouseX / mouseY): Modifica los ángulos de rotación individuales de cada grupo geométrico y aplica una fuerza de deformación/estiramiento en los ejes X e Y.

- Para que esto funcione hay una logica interna;
- Estructura de Cuadrícula: Mediante bucles for anidados se calcula una matriz de posiciones cartesianas fijas espaciadas cada 120 píxeles.

Efecto de Lupa Dinámica (Zoom): El sistema calcula constantemente la distancia (dist()) entre el cursor y el centro de cada grupo de círculos. Si el mouse entra en un radio de proximidad menor a 250 píxeles, el sistema aplica un condicional que altera el renderizado, aplicando una deformación matemática simulando un "zoom" o lente magnético.

Alternancia Óptica: Un bucle interno dibuja 12 círculos concéntricos. Utilizando el operador de módulo (i % 2 == 0), se evalúa si el índice de la figura es par o impar para alternar los colores de relleno (fill) entre blanco y negro.

Mapeo Proporcional: Se utiliza la función map() para traducir de forma fluida el rango de clicks realizados en incrementos de escala geométrica (intensidad) y deformación límite (deformacionNivel).


## Proceso
Inicie en base a mi solemne 2 en la cual era un sistema donde Aparecian elipces en blanco y negro, rotaciones dinámicas, variaciones de grosor en las líneas y deformaciones que cambian según la interacción del usuario (imag 1)

por lo cual quise mantener este sistema pero convertirlo en un juego donde la pantalla inicial diera la partida de este (estado 0), que al estar dentro uno pudiese interactuar con el movimiento de los circulos tanto rotandolos como haciendolos más grandes o pequeños (estado 1) y al colocar enter uno pueda ver cuantos clicks hiciste para deformar la figura. 
(imag 2 insp)

Para lograrlo, lo primero que hice fue implementar una estructura de máquina de estados utilizando una variable llamada estado. Con lo cual logré dividir el programa en los tres estados: pantallaInicio(), juego() (donde puse mi código de solemne 2 y adapté la lógica del primer código) y pantallaFinal(). Controlé la transición entre estas pantallas mediante el teclado en la función keyPressed(), usando la tecla ENTER para avanzar entre el inicio, el juego y el reinicio. 
(imag 3,4,5)
Además de la estructura por estados, incorporé un archivo de audio (levelup.mp3) cargado en preload() para cuando el usuario interactue con el sistema este se haga presente.

Dentro de la función principal del juego(), mantuve el canva de 600x600 y la lógica de los ciclos for anidados que ya había desarrollado en el primer código. Sin embargo, para que se sintiera como un juego donde el usuario progresa, introduje una variable llamada clicks. Cada vez que el usuario hace clic con el mouse (mousePressed()), el nivel aumenta, se reproduce el sonido y el color de fondo cambia aleatoriamente mediante random(255), rompiendo con la monotonía del blanco y negro original.


La interactividad con los módulos también evolucionó para volverse con más distorsión a medida avanzas el juego de esta manera:

Intensidad y Deformación Progresiva: Utilicé la función map() vinculada a la variable clicks para calcular una intensidad y una deformacionNivel. Así, mientras más clics hace el jugador, los círculos concéntricos crecen más y se deforman de manera mucho más agresiva con el movimiento del mouse (mouseX y mouseY) 

Mecánica de la barra espaciadora: Para darle al usuario el control sobre este comportamiento, agregué la variable circulosPequenos. Inicialmente, intenté usar la fórmula directa let tamano = baseTamano * circulosPequenos;, pero descubrí un problema: al avanzar los niveles, el crecimiento por los clicks era tan fuerte que anulaba el achicado del teclado, haciendo que las figuras disminuyeran un momento y luego volvieran a crecer sin control.Para solucionarlo y lograr el comportamiento que realmente necesitaba, aislé el cálculo creando la función calcularTamanoCirculo(). Al incorporar un nuevo map() que reduce el factor del nivel a medida que suben los clics (de 1 a 0.4), logré un equilibrio perfecto. Ahora el sistema compensa el crecimiento gigante de manera automática, permitiendo que la barra espaciadora funcione como una herramienta real y predeterminada de control para encoger el patrón en tiempo real.

La idea de que los círculos pudieran crecer y achicarse 

Finalmente, en la pantalla de juego incluí elementos de texto con text() para indicarle al usuario su nivel actual (los clics acumulados) y los comandos disponibles (SPACE y ENTER). El uso de push() y pop() siguió siendo fundamental para que toda esta nueva locura visual y geométrica se mantuviera contenida de forma independiente en cada coordenada de la grilla, logrando un juego visual dinámico que reacciona tanto al mouse como al progreso y teclado del jugador.


## Resultado 
A continuación, se presenta el resultado visual del 'OP ART GAME' en acción. En las capturas se evidencia cómo el fondo blanco inicial cambia a una paleta cromática aleatoria (RGB) con cada click, interactuando directamente con la deformación geométrica del patrón en tiempo real.
(imag 6, 7, 8, 9)













  
