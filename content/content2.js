let isModified = false;
let originalStyles = {};

function applyChanges() {
  try {
    // Guardar estilos originales antes de modificar
    saveOriginalStyles();

    // Obtener elementos
    const broadcastContainer = document.getElementsByClassName(
      "BroadcastContainer__main#ka"
    )[0];
    const broadcastWrapper = document.getElementsByClassName(
      "broadcast-player-wrapper view-cam-resizer view-cam-resizer-boundary-x view-cam-resizer-broadcast"
    )[0];
    const memberList = document.getElementsByClassName(
      "BroadcastContainer__members#Go cam-members"
    )[0];
    const extSwitch = document.getElementById("external-switcher");
    const header = document.getElementsByClassName(
      "view-cam-header__goal-wrapper"
    )[0];

    // Verificar que todos los elementos existan
    if (
      !broadcastContainer ||
      !broadcastWrapper ||
      !memberList ||
      !extSwitch ||
      !header
    ) {
      console.error("No se encontraron todos los elementos necesarios");
      return;
    }

    // Panel de estado HTML
    const statusPanel = `
            <div class="external player-panel-status">
                <div class="player-panel-status-main">
                    <div class="player-panel-status-left">
                        <div class="player-panel-status-connection">
                            <div class="indicator live"></div>
                            <span>Live</span>
                            <span class="badge good" id="goodToolTip">Buena</span>
                        </div>
                        <div class="player-panel-status-label-wrapper">
                            <span>
                                <span class="player-panel-status-label">Estado:</span>
                                Público
                            </span>
                        </div>
                    </div>
                    <div class="player-panel-status__more-button-container">
                        <button type="button" aria-label="player menu" class="player-panel-status__more-button">
                            <svg class="icon icon-menu-mobile">
                                <use xlink:href="#icons-menu-mobile"></use>
                            </svg>
                        </button>
                        <div class="bottom-left dropdown-wrapper mobile-bottom-left player-panel-status__dropdown"></div>
                    </div>
                </div>
            </div>
        `;

    // Aplicar modificaciones
    broadcastContainer.style.flexDirection = "column-reverse";
    broadcastWrapper.style.display = "none";
    extSwitch.style.display = "none";
    memberList.style.height = "70vh";

    // Insertar panel de estado
    header.insertAdjacentHTML("beforebegin", statusPanel);

    isModified = true;
    console.log("Modificaciones aplicadas correctamente");
  } catch (error) {
    console.error("Error al aplicar modificaciones:", error);
  }
}

function saveOriginalStyles() {
  try {
    const elements = {
      broadcastContainer: document.getElementsByClassName(
        "BroadcastContainer__main#ka"
      )[0],
      broadcastWrapper: document.getElementsByClassName(
        "broadcast-player-wrapper view-cam-resizer view-cam-resizer-boundary-x view-cam-resizer-broadcast"
      )[0],
      memberList: document.getElementsByClassName(
        "BroadcastContainer__members#Go cam-members"
      )[0],
      extSwitch: document.getElementById("external-switcher"),
    };

    for (let [key, element] of Object.entries(elements)) {
      if (element) {
        originalStyles[key] = {
          flexDirection: element.style.flexDirection,
          display: element.style.display,
          height: element.style.height,
        };
      }
    }
  } catch (error) {
    console.error("Error al guardar estilos originales:", error);
  }
}

function removeChanges() {
  try {
    if (!isModified) return;

    // Restaurar estilos originales
    const broadcastContainer = document.getElementsByClassName(
      "BroadcastContainer__main#ka"
    )[0];
    const broadcastWrapper = document.getElementsByClassName(
      "broadcast-player-wrapper view-cam-resizer view-cam-resizer-boundary-x view-cam-resizer-broadcast"
    )[0];
    const memberList = document.getElementsByClassName(
      "BroadcastContainer__members#Go cam-members"
    )[0];
    const extSwitch = document.getElementById("external-switcher");

    if (broadcastContainer && originalStyles.broadcastContainer) {
      broadcastContainer.style.flexDirection =
        originalStyles.broadcastContainer.flexDirection;
    }
    if (broadcastWrapper && originalStyles.broadcastWrapper) {
      broadcastWrapper.style.display = originalStyles.broadcastWrapper.display;
    }
    if (memberList && originalStyles.memberList) {
      memberList.style.height = originalStyles.memberList.height;
    }
    if (extSwitch && originalStyles.extSwitch) {
      extSwitch.style.display = originalStyles.extSwitch.display;
    }

    // Remover panel de estado
    const statusPanel = document.querySelector(".external.player-panel-status");
    if (statusPanel) {
      statusPanel.remove();
    }

    isModified = false;
    console.log("Modificaciones removidas correctamente");
  } catch (error) {
    console.error("Error al remover modificaciones:", error);
  }
}

// Escuchar mensajes del popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggle") {
    if (request.enabled) {
      applyChanges();
    } else {
      removeChanges();
    }
  }
});

// Verificar estado inicial
chrome.storage.local.get(["enabled"], function (result) {
  if (result.enabled) {
    applyChanges();
  }
});

// Observador de mutaciones para manejar cambios dinámicos en la página
const observer = new MutationObserver(function (mutations) {
  chrome.storage.local.get(["enabled"], function (result) {
    if (result.enabled && !isModified) {
      applyChanges();
    }
  });
});

// Configurar y iniciar el observador
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
