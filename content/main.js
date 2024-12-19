"use strict";

import { CustomModelMenuView } from "./custom-model-menu/view/custom-model-menu.view.js";
import { CustomStatusPanelController } from "./custom-model-menu/controller/custom-status-panel.controller.js";
import { CustomToggleModelViewController } from "./custom-model-menu/controller/custom-toggle-model-view.controller.js";
import { MakeElementFloating } from "./utils/float-button/float-button-script.js";
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
  checkAvaliableElements,
} from "./sc-components/sc-components-getters.js";

const mainScript = () => {
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

  const addElementInterval = setInterval(() => {
    if (checkAvaliableElements()) {
      clearInterval(addElementInterval);
      document.body.appendChild(customModelMenuView.create());
      customStatusPanelController.setText();
      customToggleModelViewController.setButtonEventClick();
      const doFloat = new MakeElementFloating(
        customModelMenuView.getFloatDiv(),
        9999,
        true
      );
      doFloat.goMoveIt(doFloat);
    }
  }, 1000);
};

mainScript();
