import { sctMenuContainers } from "./components/containers/view.container.js";
import { sctMenuAccordion } from "./components/accordion/view.accordion.js";
import { sctStatusIndicator } from "./components/status-indicator/view.status-indicator.js";
import { btnFocusChat } from "./components/buttons/btn-focus-chat/btn-focus-chat.view.js";
import { btnMoveChat } from "./components/buttons/btn-move-chat/btn-move-chat.view.js";
import { btnDonate } from "./components/buttons/btn-donate/btn-donate.view.js";

export const sctMenu = () => {
  const create = () => {
    const containers = sctMenuContainers();
    const accordion = sctMenuAccordion();
    const statusIndicator = sctStatusIndicator();
    const focusChatButton = btnFocusChat();
    const moveChatButton = btnMoveChat();
    const donateButton = btnDonate();

    const menu = containers.fixedContainer;
    const internalContainer = containers.internalContainer;
    const contentContainer = containers.contentContainer;
    const statusIndicatorContainer = statusIndicator.container;

    menu.appendChild(internalContainer);
    internalContainer.appendChild(accordion.checkBox);
    internalContainer.appendChild(accordion.label);
    internalContainer.appendChild(statusIndicatorContainer);
    internalContainer.appendChild(contentContainer);
    statusIndicatorContainer.appendChild(statusIndicator.dot);
    statusIndicatorContainer.appendChild(statusIndicator.text);
    contentContainer.appendChild(focusChatButton);
    contentContainer.appendChild(moveChatButton);
    contentContainer.appendChild(donateButton);

    document.body.appendChild(menu);
  };

  return {
    create,
  };
};
