// 1. Crear una instancia del observer
window.domObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // mutation.type puede ser 'childList', 'attributes' o 'characterData'
    console.log("Tipo de cambio:", mutation.type);

    if (mutation.type === "childList") {
      // Nodos añadidos
      mutation.addedNodes.forEach((node) => {
        let isError = isErrorNode(node);
        if (isError) location.reload();

        let isStatusTextNode =
          node.parentNode?.localName === "span" &&
          node.parentNode?.offsetParent?.className?.includes(
            "player-panel-status"
          );
        let isStatusTextNodeHidden =
          node.parentNode?.localName === "span" &&
          node.parentNode?.parentNode?.className?.includes(
            "player-panel-status"
          );
        let isStatusTextElement =
          node.parentElement?.localName === "span" &&
          node.parentElement?.offsetParent?.className?.includes(
            "player-panel-status"
          );
        let isStatusTextElementHidden =
          node.parentElement?.localName === "span" &&
          node.parentElement?.parentElement?.className?.includes(
            "player-panel-status"
          );
        if (
          isStatusTextNode ||
          isStatusTextElement ||
          isStatusTextNodeHidden ||
          isStatusTextElementHidden
        ) {
          console.log("Tu Estado de conexión es: ", node.textContent);
          document.getElementById(
            "status-panel-text"
          ).textContent = `${node.textContent}`;
          if (node.textContent.toLocaleLowerCase() === "online") {
            document
              .getElementById("custom-status-panel-indicator")
              .classList.add("live");
          } else if (node.textContent.toLocaleLowerCase() === "offline") {
            document
              .getElementById("custom-status-panel-indicator")
              .classList.remove("live");
          }
        }
      });

      // Nodos eliminados
      mutation.removedNodes.forEach((node) => {
        console.log("Nodo eliminado:", node);
      });
    }

    if (mutation.type === "attributes") {
      console.log("Atributo modificado:", mutation.attributeName);
    }
  });
});

// 2. Configurar las opciones de observación
window.domObserverConfig = {
  attributes: true, // observar cambios en atributos
  childList: true, // observar cambios en hijos directos
  subtree: true, // observar cambios en todo el subárbol
  characterData: true, // observar cambios en el contenido de texto
  attributeOldValue: true, // guardar valor anterior del atributo
  characterDataOldValue: true, // guardar valor anterior del texto
};

const isErrorNode = (node) => {
  try {
    return node.innerHTML.toLocaleLowerCase().includes("loadableerrorboundary");
  } catch (error) {
    return false;
  }
};
