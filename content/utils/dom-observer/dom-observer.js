// 1. Crear una instancia del observer
export const domObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // mutation.type puede ser 'childList', 'attributes' o 'characterData'
    console.log("Tipo de cambio:", mutation.type);

    if (mutation.type === "childList") {
      // Nodos añadidos
      mutation.addedNodes.forEach((node) => {
        let isError = isErrorNode(node);
        if (isError) location.reload();
      });

      // Nodos eliminados
      mutation.removedNodes.forEach((node) => {
        //code para manejar el evento de eliminación del nodo
      });
    }

    if (mutation.type === "attributes") {
      //code para manejar el evento de cambio de atributo
    }
  });
});

// 2. Configurar las opciones de observación
export const domObserverConfig = {
  attributes: false, // observar cambios en atributos
  childList: true, // observar cambios en hijos directos
  subtree: true, // observar cambios en todo el subárbol
  characterData: false, // observar cambios en el contenido de texto
  attributeOldValue: false, // guardar valor anterior del atributo
  characterDataOldValue: false, // guardar valor anterior del texto
};

const isErrorNode = (node) => {
  try {
    return node.innerHTML.toLocaleLowerCase().includes("loadableerrorboundary");
  } catch (error) {
    return false;
  }
};
