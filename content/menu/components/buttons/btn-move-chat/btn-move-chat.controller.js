import { strings } from "../../../../utils/strings.js";

export const moveChatButtonController = ({
  moveChatButton,
  getScChatContainer,
  checkAvaliableElements,
  FloatingElement,
}) => {
  moveChatButton.addEventListener("click", () => {
    const chat = getScChatContainer();
    const floatingChatButton = new FloatingElement(chat, 9999, true);

    if (!checkAvaliableElements()) {
      window.alert(strings.elementsNotAvailable);
      return;
    }

    if (!floatingChatButton.isActive()) {
      doChatFloating({ floatingChatButton });
      moveChatButton.classList.add("active");
      return;
    }

    stopChatFloating({
      getScChatContainer,
      floatingChatButton,
    });
    moveChatButton.classList.remove("active");
  });
};

const doChatFloating = ({ floatingChatButton }) => {
  floatingChatButton.enable(floatingChatButton);
  floatingChatButton.element?.classList.add("custom-floating-chat");
};

const stopChatFloating = ({ floatingChatButton }) => {
  floatingChatButton.disable(floatingChatButton);
  if (floatingChatButton.element) {
    floatingChatButton.element.style = "";
    floatingChatButton.element.classList.remove("custom-floating-chat");
  }
};
