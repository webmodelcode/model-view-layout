"use strict";
import { strings } from "../../utils/strings.js";

export const CustomToggleModelViewController = ({
  customModelMenuView,
  customStatusPanelController,
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
  checkAvaliableElements,
}) => {
  const customToggleButton = customModelMenuView.getToggleModelViewButton();

  const setButtonEventClick = () => {
    customToggleButton.onclick = () => {
      eventHandler({
        customModelMenuView,
        customStatusPanelController,
        getScBroadcastContainer,
        getScBroadcastWrapper,
        getScMemberList,
        getScExtSwitch,
        checkAvaliableElements,
      });
    };
  };

  return {
    setButtonEventClick,
  };
};

const eventHandler = ({
  customModelMenuView,
  customStatusPanelController,
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
  checkAvaliableElements,
}) => {
  if (!checkAvaliableElements()) {
    window.alert("Some elements are not available yet.");
    return;
  }
  customStatusPanelController.setIndicator();
  customStatusPanelController.setText();
  toggleModelView({
    customModelMenuView,
    getScBroadcastContainer,
    getScBroadcastWrapper,
    getScMemberList,
    getScExtSwitch,
  });
};

const enableModelView = ({
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
}) => {
  const broadcastCointainer = getScBroadcastContainer();
  const extSwitch = getScExtSwitch();
  const broadcastWrapper = getScBroadcastWrapper();
  const memberList = getScMemberList();
  broadcastCointainer.style.flexDirection = "column-reverse";
  broadcastWrapper.style.display = "none";
  extSwitch.style.display = "none";
  memberList.style.height = "70vh";
};

const disableModelView = ({
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
}) => {
  const broadcastCointainer = getScBroadcastContainer();
  const extSwitch = getScExtSwitch();
  const broadcastWrapper = getScBroadcastWrapper();
  const memberList = getScMemberList();
  broadcastCointainer.style.flexDirection = "row";
  broadcastWrapper.style.display = "block";
  extSwitch.style.display = "flex";
  memberList.style.height = "100%";
};

const toggleModelView = ({
  customModelMenuView,
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
}) => {
  const isModelView = window.isModelView || false;
  const toggleModelViewButton = customModelMenuView.getToggleModelViewButton();
  if (isModelView) {
    disableModelView({
      getScBroadcastContainer,
      getScBroadcastWrapper,
      getScMemberList,
      getScExtSwitch,
    });
    toggleModelViewButton.style.backgroundColor = "white";
    toggleModelViewButton.style.color = "black";
    toggleModelViewButton.innerHTML = strings.enableText;
  } else {
    enableModelView({
      getScBroadcastContainer,
      getScBroadcastWrapper,
      getScMemberList,
      getScExtSwitch,
    });
    toggleModelViewButton.style.backgroundColor = "purple";
    toggleModelViewButton.style.color = "white";
    toggleModelViewButton.innerHTML = strings.disableText;
  }
  window.isModelView = !isModelView;
};
