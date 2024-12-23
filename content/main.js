"use strict";

import { CustomModelMenuView } from "./custom-model-menu/view/custom-model-menu.view.js";
import { CustomStatusPanelController } from "./custom-model-menu/controller/custom-status-panel.controller.js";
import { CustomToggleModelViewController } from "./custom-model-menu/controller/custom-toggle-model-view.controller.js";
import { CustonFloatChatButtonController } from "./custom-model-menu/controller/custom-float-chat-button.controller.js";
import { FloatingElement } from "./utils/float-button/float-button-script.js";
import {
  domObserver,
  domObserverConfig,
} from "./utils/dom-observer/dom-observer.js";

import {
  getScErrorNode,
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
  getScStreamingStatus,
  getScChatContainer,
  checkAvaliableElements,
} from "./sc-components/sc-components-getters.js";

import { sctMenu } from "./menu/menu.js";

const mainScript = () => {
  const menu = sctMenu();
  const customModelMenuView = CustomModelMenuView();
  const customStatusPanel = customModelMenuView.getCustomStatusPanel();
  const customStatusPanelController = CustomStatusPanelController({
    customStatusPanel,
    getScStreamingStatus,
  });
  const customToggleModelViewController = CustomToggleModelViewController({
    customModelMenuView,
    customStatusPanelController,
    domObserver,
    domObserverConfig,
    getScBroadcastContainer,
    getScBroadcastWrapper,
    getScMemberList,
    getScExtSwitch,
    checkAvaliableElements,
    getScErrorNode,
  });
  const custonFloatChatButtonController = CustonFloatChatButtonController({
    customModelMenuView,
    getScChatContainer,
    checkAvaliableElements,
    FloatingElement,
  });

  menu.create();

  const addElementInterval = setInterval(() => {
    if (checkAvaliableElements()) {
      clearInterval(addElementInterval);
      document.body.appendChild(customModelMenuView.create());
      customStatusPanelController.setText();
      customToggleModelViewController.setButtonEventClick();
      custonFloatChatButtonController.setButtonEventClick();
      const floatDiv = customModelMenuView.getFloatDiv();
      const doFloatMainContainer = new FloatingElement(floatDiv, 9999, true);
      doFloatMainContainer.enable(floatDiv);
    }
  }, 1000);
};

mainScript();
