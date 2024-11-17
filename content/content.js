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
  donateButton: undefined,
  headerMiddle: undefined,
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
    donateButton,
    headerMiddle,
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
    statusPanel = document.getElementsByClassName("player-panel-status")[0];
    headerMiddle = document.getElementsByClassName("header-middle")[0];

    enableModelView = () => {
      broadcastCointainer.style.flexDirection = "column-reverse";
      broadcastWrapper.style.display = "none";
      extSwitch.style.display = "none";
      memberList.style.height = "70vh";
      headerMiddle.before(statusPanel);
      statusPanel.classList.add("external");
    };

    disableModelView = () => {
      broadcastCointainer.style.flexDirection = "row";
      broadcastWrapper.style.display = "block";
      extSwitch.style.display = "flex";
      memberList.style.height = "100%";
    };

    toggleModelView = () => {
      if (isModelView) {
        disableModelView();
        toggleModelViewButton.style.backgroundColor = "white";
        toggleModelViewButton.style.color = "black";
        toggleModelViewButton.innerHTML = enableMessage;
      } else {
        enableModelView();
        toggleModelViewButton.style.backgroundColor = "purple";
        toggleModelViewButton.style.color = "white";
        toggleModelViewButton.innerHTML = disableMessage;
      }
      isModelView = !isModelView;
    };

    toggleModelViewButton = document.createElement("button");
    toggleModelViewButton.innerHTML = enableMessage;
    toggleModelViewButton.style.position = "fixed";
    toggleModelViewButton.style.top = "6vh";
    toggleModelViewButton.style.width = "10vh";
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

    donateButton = document.createElement("a");
    donateButton.href = "https://buymeacoffee.com/juanleon";
    donateButton.target = "_blank";
    donateButton.innerHTML = "Donate";
    donateButton.style.position = "fixed";
    donateButton.style.top = "10vh";
    donateButton.style.width = "10vh";
    donateButton.style.right = "10px";
    donateButton.style.zIndex = "9999";
    donateButton.style.padding = "10px";
    donateButton.style.border = "none";
    donateButton.style.backgroundColor = "yellow";
    donateButton.style.color = "black";
    donateButton.style.cursor = "pointer";
    donateButton.style.borderRadius = "5px";
    donateButton.style.fontWeight = "bold";
    donateButton.style.textAlign = "center";
  };

  window.customBrocastInterval = setInterval(() => {
    console.log("interval try");
    doItTry();
    if (broadcastCointainer) {
      document.body.appendChild(toggleModelViewButton);
      document.body.appendChild(donateButton);
      clearInterval(window.customBrocastInterval);
    }
    // Observador de mutaciones para manejar cambios dinámicos en la página
  }, 5000);
}, 4000);
