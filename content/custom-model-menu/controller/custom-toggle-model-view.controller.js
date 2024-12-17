"use strict";

export const CustomToggleModelViewController = ({
  customModelMenuView,
  customStatusPanelController,
  checkAvaliableElements,
}) => {
  const customToggleButton = customModelMenuView.getToggleModelViewButton();

  const eventHandler = () => {
    if (!checkAvaliableElements()) {
      window.alert("Some elements are not available yet.");
      return;
    }
    customStatusPanelController.setIndicator();
    customStatusPanelController.setText();
  };

  const setButtonEventClick = () => {
    customToggleButton.onclick = eventHandler;
  };

  return {
    setButtonEventClick,
  };
};
