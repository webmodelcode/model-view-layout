import { sctMenuContainers } from "./components/containers/view.container.js";
import { sctMenuAccordion } from "./components/accordion/view.accordion.js";
import { sctStatusIndicator } from "./components/status-indicator/status-indicator.view.js";
import { btnFocusChat } from "./components/buttons/btn-focus-chat/btn-focus-chat.view.js";
import { btnMoveChat } from "./components/buttons/btn-move-chat/btn-move-chat.view.js";
import { btnDonate } from "./components/buttons/btn-donate/btn-donate.view.js";

import { accordionController } from "./components/accordion/controller.accordion.js";
import { statusIndicatorController } from "./components/status-indicator/status-indicator.controller.js";
import { focusChatButtonController } from "./components/buttons/btn-focus-chat/btn-focus-chat.controller.js";
import { moveChatButtonController } from "./components/buttons/btn-move-chat/btn-move-chat.controller.js";

import {
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
  checkAvaliableElements,
  getScErrorNode,
  getScChatContainer,
  getScStreamingStatus,
} from "../sc-components/sc-components-getters.js";
import { FloatingElement } from "../utils/float-button/float-button-script.js";
import {
  domObserver,
  domObserverConfig,
} from "../utils/dom-observer/dom-observer.js";

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

    const startErrorObserver = () => {
      observeForError({ getScErrorNode, domObserver, domObserverConfig });
    };

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

    accordionController({ accordion, contentContainer });
    statusIndicatorController({
      statusIndicator,
      getScStreamingStatus,
    });
    focusChatButtonController({
      focusChatButton,
      getScBroadcastContainer,
      getScBroadcastWrapper,
      getScMemberList,
      getScExtSwitch,
      checkAvaliableElements,
      startErrorObserver,
    });

    moveChatButtonController({
      moveChatButton,
      getScChatContainer,
      checkAvaliableElements,
      FloatingElement,
      startErrorObserver,
    });
  };

  return {
    create,
  };
};

const observeForError = ({
  getScErrorNode,
  domObserver,
  domObserverConfig,
}) => {
  const domErrorObserverStarted = window.sctDomErrorObserverStarted;
  const errorNode = getScErrorNode();
  if (errorNode && !domErrorObserverStarted) {
    window.sctDomErrorObserverStarted = true;
    domObserver.observe(errorNode, domObserverConfig);
  }
};
