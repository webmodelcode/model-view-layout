"use strict";

import { CustomModelMenuView } from "./custom-model-menu/view/custom-model-menu.view.js";
import { CustomStatusPanelController } from "./custom-model-menu/controller/custom-status-panel.controller.js";
import { CustomToggleModelViewController } from "./custom-model-menu/controller/custom-toggle-model-view.controller.js";

import {
  getScErrorNode,
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
  getScStreamingStatus,
  checkAvaliableElements,
} from "./sc-components/sc-components-getters.js";

const customModelMenuView = CustomModelMenuView();
const customStatusPanel = customModelMenuView.getCustomStatusPanel();
const customStatusPanelController = CustomStatusPanelController({
  customStatusPanel,
  getScStreamingStatus,
});
const customToggleModelViewController = CustomToggleModelViewController({
  customModelMenuView,
  customStatusPanelController,
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
  checkAvaliableElements,
});

document.body.appendChild(customModelMenuView.create());
customToggleModelViewController.setButtonEventClick();
