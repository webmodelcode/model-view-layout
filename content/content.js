window.customBrodcastLayout = {
  enableMessage: "Enable MV",
  disableMessage: "Disable MV",
  isModelView: false,
  broadcastCointainer: undefined,
  broadcastWrapper: undefined,
  memberList: undefined,
  extSwitch: undefined,
  header: undefined,
  statusPanel: undefined,
  toggleModelViewButton: undefined,
  enableModelView: ({
    broadcastCointainer,
    broadcastWrapper,
    extSwitch,
    memberList,
    header,
    statusPanel,
  }) => {
    broadcastCointainer.style.flexDirection = "column-reverse";
    broadcastWrapper.style.display = "none";
    extSwitch.style.display = "none";
    memberList.style.height = "70vh";
    header.insertAdjacentHTML("beforebegin", statusPanel);
  },
  disableModelView: ({
    broadcastCointainer,
    broadcastWrapper,
    extSwitch,
    memberList,
    header,
  }) => {
    broadcastCointainer.style.flexDirection = "row";
    broadcastWrapper.style.display = "block";
    extSwitch.style.display = "flex";
    memberList.style.height = "100%";
    document.getElementById("alt-panel").remove();
  },
  toggleModelView: ({
    isModelView,
    enableModelView,
    disableModelView,
    toggleModelViewButton,
  }) => {
    if (isModelView) {
      disableModelView();
      toggleModelViewButton.style.backgroundColor = "red";
      toggleModelViewButton.innerHTML = "Activar MV";
    } else {
      enableModelView();
      toggleModelViewButton.style.backgroundColor = "green";
      toggleModelViewButton.innerHTML = "Desactivar MV";
    }
    isModelView = !isModelView;
  },
};

setTimeout(() => {
  let {
    isModelView,
    broadcastCointainer,
    broadcastWrapper,
    memberList,
    extSwitch,
    header,
    statusPanel,
    enableModelView,
    disableModelView,
    toggleModelView,
    toggleModelViewButton,
    enableMessage,
    disableMessage,
  } = window.customBrodcastLayout;

  const doItTry = () => {
    broadcastCointainer = document.getElementsByClassName(
      "BroadcastContainer__main#ka"
    )[0];
    broadcastWrapper = document.getElementsByClassName(
      "broadcast-player-wrapper view-cam-resizer view-cam-resizer-boundary-x view-cam-resizer-broadcast"
    )[0];
    memberList = document.getElementsByClassName(
      "BroadcastContainer__members#Go cam-members"
    )[0];
    extSwitch = document.getElementById("external-switcher");
    header = document.getElementsByClassName(
      "view-cam-header__goal-wrapper"
    )[0];
    statusPanel =
      '<div id="alt-panel" class="external player-panel-status" style=" background: transparent; width: 160px;"><div class="player-panel-status-main" style="background: transparent;"><div class="player-panel-status-left"><div class="player-panel-status-connection"><div class="indicator live"></div><span>Live</span><span class="badge good" id="goodToolTip">Buena</span></div><div class="player-panel-status-label-wrapper"><span><span class="player-panel-status-label">Estado:</span>Público</span></div></div><div class="player-panel-status__more-button-container"><button type="button" aria-label="player menu" class="player-panel-status__more-button"><svg class="icon icon-menu-mobile"><use xlink:href="#icons-menu-mobile"></use></svg></button><div class="bottom-left dropdown-wrapper mobile-bottom-left player-panel-status__dropdown"></div></div></div></div>';

    enableModelView = () => {
      broadcastCointainer.style.flexDirection = "column-reverse";
      broadcastWrapper.style.display = "none";
      extSwitch.style.display = "none";
      memberList.style.height = "70vh";
      header.insertAdjacentHTML("beforebegin", statusPanel);
    };

    disableModelView = () => {
      broadcastCointainer.style.flexDirection = "row";
      broadcastWrapper.style.display = "block";
      extSwitch.style.display = "flex";
      memberList.style.height = "100%";
      document.getElementById("alt-panel").remove();
    };

    toggleModelView = () => {
      if (isModelView) {
        disableModelView();
        toggleModelViewButton.style.backgroundColor = "white";
        toggleModelViewButton.innerHTML = enableMessage;
      } else {
        enableModelView();
        toggleModelViewButton.style.backgroundColor = "yellow";
        toggleModelViewButton.innerHTML = disableMessage;
      }
      isModelView = !isModelView;
    };

    toggleModelViewButton = document.createElement("button");
    toggleModelViewButton.innerHTML = enableMessage;
    toggleModelViewButton.style.position = "fixed";
    toggleModelViewButton.style.top = "7vh";
    toggleModelViewButton.style.right = "10px";
    toggleModelViewButton.style.zIndex = "9999";
    toggleModelViewButton.style.padding = "10px";
    toggleModelViewButton.style.border = "none";
    toggleModelViewButton.style.backgroundColor = "white";
    toggleModelViewButton.style.color = "black";
    toggleModelViewButton.style.cursor = "pointer";
    toggleModelViewButton.style.borderRadius = "5px";
    toggleModelViewButton.style.fontWeight = "bold";
    toggleModelViewButton.onclick = toggleModelView;
  };

  window.customBrocastInterval = setInterval(() => {
    console.log("interval try");
    doItTry();
    if (broadcastCointainer) {
      document.body.appendChild(toggleModelViewButton);
      clearInterval(window.customBrocastInterval);
    }
    // Observador de mutaciones para manejar cambios dinámicos en la página
  }, 5000);
}, 4000);
