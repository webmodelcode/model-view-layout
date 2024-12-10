// 1. Crear una instancia del observer
window.domErrorObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // mutation.type puede ser 'childList', 'attributes' o 'characterData'
    console.log("Tipo de cambio:", mutation.type);

    if (mutation.type === "childList") {
      // Nodos añadidos
      mutation.addedNodes.forEach((node) => {
        console.log("Nodo añadido:", node);
        if (
          node.innerHTML
            .toLocaleLowerCase()
            .includes("loadableerrorboundary#jc")
        )
          location.reload();
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

// 3. Comenzar a observar un elemento
// const targetNode = document.querySelector("#elemento-a-observar");

// window.domErrorObserver.observe(targetNode, window.domErrorObserverConfig);

// 4. Detener la observación cuando ya no sea necesaria
// window.domErrorObserver.disconnect();
