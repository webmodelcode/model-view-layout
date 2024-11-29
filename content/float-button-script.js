window.makeElementFloating = function (element, options = {}) {
  // Configuración por defecto
  const config = {
    smoothFactor: options.smoothFactor || 0.15,
    offsetX: options.offsetX || 0,
    offsetY: options.offsetY || 0,
  };

  // Variables para el seguimiento
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  // Configurar el elemento
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  element.style.zIndex = "9999";
  element.style.transition = "all 0.1s ease";

  // Función para actualizar la posición
  function updatePosition() {
    // Calcular la nueva posición con efecto suave
    currentX +=
      (mouseX - currentX - element.offsetWidth / 2 + config.offsetX) *
      config.smoothFactor;
    currentY +=
      (mouseY - currentY - element.offsetHeight / 2 + config.offsetY) *
      config.smoothFactor;

    // Aplicar la transformación
    element.style.transform = `translate(${currentX}px, ${currentY}px)`;

    // Solicitar el siguiente frame de animación
    requestAnimationFrame(updatePosition);
  }

  // Escuchar el evento mousemove
  function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  // Agregar el event listener
  element.addEventListener("mousedown", handleMouseMove);

  // Iniciar la animación
  updatePosition();

  // Retornar una función para limpiar los event listeners si es necesario
  return function cleanup() {
    element.removeEventListener("mouseup", handleMouseMove);
  };
};
