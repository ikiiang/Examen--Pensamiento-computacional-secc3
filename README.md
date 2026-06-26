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













  
