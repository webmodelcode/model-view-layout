import { strings } from "../../utils/strings";

// main floating container
const createMainFloatContainer = () => {
  const floatDiv = document.createElement("div");
  floatDiv.classList.add("float-div-container");

  return floatDiv;
};
// button to toggle model view
const createToggleButton = () => {
  const toggleModelViewButton = document.createElement("button");
  toggleModelViewButton.classList.add("model-view-button");
  toggleModelViewButton.classList.add("toggle");
  toggleModelViewButton.innerHTML = strings.enableText;

  return toggleModelViewButton;
};

// button to donate
const createDonateButton = () => {
  const donateButton = document.createElement("a");
  donateButton.classList.add("model-view-button");
  donateButton.classList.add("donate");
  donateButton.href = "https://buymeacoffee.com/juanleon";
  donateButton.target = "_blank";
  donateButton.innerHTML = "Donate";

  return donateButton;
};

// custom status panel
const createCustomStatusPanel = () => {
  // container of status panel
  const customStatusPanel = document.createElement("div");
  customStatusPanel.classList.add("custom-status-panel");

  // text of status panel
  const statusPanelTittleText = document.createElement("p");
  statusPanelTittleText.textContent = "Room Status:";

  // divider of status panel
  const divider = document.createElement("hr");
  divider.classList.add("custom-status-panel-divider");

  // indicator of status panel
  const statusPanelIndicator = document.createElement("div");
  statusPanelIndicator.classList.add("custom-status-panel");
  statusPanelIndicator.classList.add("indicator");
  statusPanelIndicator.id = "custom-status-panel-indicator";

  const statusPanelText = document.createElement("p");
  statusPanelText.textContent = originalStatusPanelText;
  statusPanelText.id = "status-panel-text";
  statusPanelText.style.display = "inline-block";
  statusPanelText.style.textTransform = "uppercase";

  customStatusPanel.appendChild(statusPanelTittleText);
  customStatusPanel.appendChild(divider);
  customStatusPanel.appendChild(statusPanelIndicator);
  customStatusPanel.appendChild(statusPanelText);

  return customStatusPanel;
};

export const CustomModelMenuView = () => {
  const floatDiv = createMainFloatContainer();
  const customStatusPanel = createCustomStatusPanel();
  const toggleModelViewButton = createToggleButton();
  const donateButton = createDonateButton();

  const create = () => {
    floatDiv.appendChild(customStatusPanel);
    floatDiv.appendChild(toggleModelViewButton);
    floatDiv.appendChild(donateButton);
  };

  const getFloatDiv = () => floatDiv;
  const getCustomStatusPanel = () => customStatusPanel;
  const getToggleModelViewButton = () => toggleModelViewButton;
  const getDonateButton = () => donateButton;

  return {
    create,
    getFloatDiv,
    getCustomStatusPanel,
    getToggleModelViewButton,
    getDonateButton,
  };
};
