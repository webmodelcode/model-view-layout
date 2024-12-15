window.customBrodcastLayout = {
  enableMessage: "Enable MV",
  disableMessage: "Disable MV",
  isModelView: false,
  broadcastCointainer: undefined,
  broadcastWrapper: undefined,
  memberList: undefined,
  extSwitch: undefined,
  header: undefined,
  floatDiv: undefined,
  toggleModelViewButton: undefined,
  statusPanel: undefined,
  donateButton: undefined,
  headerMiddle: undefined,
  errorNode: undefined,
  statusPanelText: undefined,
  enableModelView: () => {},
  disableModelView: () => {},
  toggleModelView: () => {},
};

setTimeout(() => {
  let {
    isModelView,
    broadcastCointainer,
    broadcastWrapper,
    memberList,
    extSwitch,
    header,
    enableModelView,
    disableModelView,
    toggleModelView,
    toggleModelViewButton,
    enableMessage,
    disableMessage,
    donateButton,
    headerMiddle,
    floatDiv,
    errorNode,
  } = window.customBrodcastLayout;

  const doItTry = () => {
    errorNode = document.getElementsByClassName("main-layout-main-content")[0];
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

    headerMiddle = document.getElementsByClassName("header-middle")[0];

    enableModelView = () => {
      broadcastCointainer.style.flexDirection = "column-reverse";
      broadcastWrapper.style.display = "none";
      extSwitch.style.display = "none";
      memberList.style.height = "70vh";
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

    floatDiv = document.createElement("div");
    floatDiv.classList.add("float-div-container");

    const doFloat = new window.MakeElementFloating(floatDiv, 9999, true);
    doFloat.goMoveIt(doFloat);

    toggleModelViewButton = document.createElement("button");
    toggleModelViewButton.classList.add("model-view-button");
    toggleModelViewButton.classList.add("toggle");

    toggleModelViewButton.innerHTML = enableMessage;
    toggleModelViewButton.onclick = toggleModelView;

    donateButton = document.createElement("a");
    donateButton.classList.add("model-view-button");
    donateButton.classList.add("donate");
    donateButton.href = "https://buymeacoffee.com/juanleon";
    donateButton.target = "_blank";
    donateButton.innerHTML = "Donate";

    createCustomStatusPanel();

    try {
      floatDiv.appendChild(window.statusPanel);
      floatDiv.appendChild(toggleModelViewButton);
      floatDiv.appendChild(donateButton);
    } catch (error) {
      errorNode = false;
      return;
    }
  };

  window.customBrocastInterval = setInterval(() => {
    const checkCondition =
      broadcastCointainer &&
      broadcastWrapper &&
      memberList &&
      extSwitch &&
      header &&
      headerMiddle &&
      errorNode;
    doItTry();
    if (checkCondition) {
      if (errorNode && !window.domErrorObserverStarted) {
        window.domErrorObserverStarted = true;
        window.domObserver.observe(errorNode, window.domObserverConfig);
      }
      document.body.appendChild(floatDiv);
      clearInterval(window.customBrocastInterval);
    }
  }, 1000);
}, 4000);

const createCustomStatusPanel = () => {
  let originalStatusPanelText;
  try {
    originalStatusPanelText = document.getElementsByClassName(
      "player-panel-status-connection"
    )[0].childNodes[1].textContent;
  } catch (error) {
    return;
  }

  window.statusPanel = document.createElement("div");
  statusPanel.classList.add("custom-status-panel");

  const statusPanelTittleText = document.createElement("p");
  statusPanelTittleText.textContent = "Room Status:";

  const divider = document.createElement("hr");
  divider.classList.add("custom-status-panel-divider");

  const statusPanelIndicator = document.createElement("div");
  statusPanelIndicator.classList.add("custom-status-panel");
  statusPanelIndicator.classList.add("indicator");
  statusPanelIndicator.id = "custom-status-panel-indicator";
  if (originalStatusPanelText.toLocaleLowerCase() === "live") {
    statusPanelIndicator.classList.add("live");
  }

  const statusPanelText = document.createElement("p");
  statusPanelText.textContent = originalStatusPanelText;
  statusPanelText.id = "status-panel-text";
  statusPanelText.style.display = "inline-block";
  statusPanelText.style.textTransform = "uppercase";

  window.statusPanel.appendChild(statusPanelTittleText);
  window.statusPanel.appendChild(divider);
  window.statusPanel.appendChild(statusPanelIndicator);
  window.statusPanel.appendChild(statusPanelText);
};
