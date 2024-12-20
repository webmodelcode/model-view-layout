"use strict";
import { strings } from "../../utils/strings.js";

export const CustonFloatChatButtonController = ({
  customModelMenuView,
  getScChatContainer,
  checkAvaliableElements,
  MakeElementFloating,
}) => {
  const customFloatChatButton = customModelMenuView.getFloatingChatButton();

  const setButtonEventClick = () => {
    customFloatChatButton.onclick = () => {
      eventHandler({
        customModelMenuView,
        checkAvaliableElements,
        getScChatContainer,
        MakeElementFloating,
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
  MakeElementFloating,
}) => {
  const isChatFloating = window.isChatFloating;
  const chat = getScChatContainer();
  const floatingChatButton = new MakeElementFloating(chat, 9999, true);

  if (!checkAvaliableElements()) {
    window.alert(strings.elementsNotAvailable);
    return;
  }

  if (!isChatFloating) {
    doChatFloating({ customModelMenuView, floatingChatButton });
    window.isChatFloating = true;
    return;
  }

  window.isChatFloating = false;
  stopChatFloating({ customModelMenuView, getScChatContainer });
};

const doChatFloating = ({ customModelMenuView, floatingChatButton }) => {
  const customFloatChatButton = customModelMenuView.getFloatingChatButton();
  customFloatChatButton.innerHTML = strings.offChat;
  floatingChatButton.goMoveIt(floatingChatButton);
};

const stopChatFloating = ({ customModelMenuView, getScChatContainer }) => {
  const customFloatChatButton = customModelMenuView.getFloatingChatButton();
  const chat = getScChatContainer();
  customFloatChatButton.innerHTML = strings.onChat;
  chat.style = "";
};
