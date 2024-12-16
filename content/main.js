import { CustomModelMenuView } from "./custom-model-menu/view/custom-model-menu.view.js";

import {
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScErrorNode,
  getScExtSwitch,
  getScMemberList,
} from "./sc-components/sc-components-getters.js";
import { strings } from "./utils/strings.js";

console.log({ strings });

console.log(
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScErrorNode,
  getScExtSwitch,
  getScMemberList
);

const customModelMenuView = new CustomModelMenuView();
