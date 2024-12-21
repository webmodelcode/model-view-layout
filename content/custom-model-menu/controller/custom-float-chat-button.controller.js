"use strict";
import { strings } from "../../utils/strings.js";

export const CustonFloatChatButtonController = ({
  customModelMenuView,
  getScChatContainer,
  checkAvaliableElements,
  FloatingElement,
}) => {
  const customFloatChatButton = customModelMenuView.getFloatingChatButton();

  const setButtonEventClick = () => {
    customFloatChatButton.onclick = () => {
      eventHandler({
        customModelMenuView,
        checkAvaliableElements,
        getScChatContainer,
        FloatingElement,
      });
    };
  };

  return {
    setButtonEventClick,
  };
};

const eventHandler = ({
  customModelMenuView,
  checkAvaliableElements,
  getScChatContainer,
  FloatingElement,
}) => {
  const chat = getScChatContainer();
  const floatingChatButton = new FloatingElement(chat, 9999, true);

  if (!checkAvaliableElements()) {
    window.alert(strings.elementsNotAvailable);
    return;
  }

  if (!floatingChatButton.isActive()) {
    doChatFloating({ customModelMenuView, floatingChatButton });
    return;
  }

  stopChatFloating({
    customModelMenuView,
    getScChatContainer,
    floatingChatButton,
  });
};

const doChatFloating = ({ customModelMenuView, floatingChatButton }) => {
  const customFloatChatButton = customModelMenuView.getFloatingChatButton();
  customFloatChatButton.innerHTML = strings.offChat;
  floatingChatButton.enable(floatingChatButton);
};

const stopChatFloating = ({
  customModelMenuView,
  getScChatContainer,
  floatingChatButton,
}) => {
  const customFloatChatButton = customModelMenuView.getFloatingChatButton();
  const chat = getScChatContainer();
  customFloatChatButton.innerHTML = strings.onChat;
  chat.style = "";
  floatingChatButton.disable(floatingChatButton);
};
