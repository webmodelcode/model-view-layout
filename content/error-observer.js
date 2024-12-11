// 1. Crear una instancia del observer
window.domErrorObserver = new MutationObserver((mutations) => {
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
        console.log("Nodo eliminado:", node);
      });
    }

    if (mutation.type === "attributes") {
      console.log("Atributo modificado:", mutation.attributeName);
    }
  });
});

// 2. Configurar las opciones de observación
window.domErrorObserverConfig = {
  attributes: true, // observar cambios en atributos
  childList: true, // observar cambios en hijos directos
  subtree: true, // observar cambios en todo el subárbol
  characterData: true, // observar cambios en el contenido de texto
  attributeOldValue: true, // guardar valor anterior del atributo
  characterDataOldValue: true, // guardar valor anterior del texto
};

const isErrorNode = (node) => {
  return node.innerHTML.toLocaleLowerCase().includes("loadableerrorboundary");
};
