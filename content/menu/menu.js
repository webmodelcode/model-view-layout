import { sctMenuContainers } from "./components/containers/view.container.js";
import { sctMenuAccordion } from "./components/accordion/view.accordion.js";
import { sctStatusIndicator } from "./components/status-indicator/view.status-indicator.js";
import { btnFocusChat } from "./components/buttons/btn-focus-chat/btn-focus-chat.view.js";

export const sctMenu = () => {
  const create = () => {
    const containers = sctMenuContainers();
    const accordion = sctMenuAccordion();
    const statusIndicator = sctStatusIndicator();
    const focusChatButton = btnFocusChat();

    const menu = containers.fixedContainer;
    const internalContainer = containers.internalContainer;
    const contentContainer = containers.contentContainer;
    const statusIndicatorContainer = statusIndicator.container;

    menu.appendChild(internalContainer);
    internalContainer.appendChild(accordion.checkBox);
    internalContainer.appendChild(accordion.label);
    internalContainer.appendChild(contentContainer);
    contentContainer.appendChild(statusIndicatorContainer);
    statusIndicatorContainer.appendChild(statusIndicator.dot);
    statusIndicatorContainer.appendChild(statusIndicator.text);
    contentContainer.appendChild(focusChatButton);

    document.body.appendChild(menu);
  };

  return {
    create,
  };
};
