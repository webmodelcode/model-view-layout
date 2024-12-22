import { sctMenuContainers } from "./components/containers/view.container";
import { sctMenuAccordion } from "./components/accordion/view.accordion";
import { sctStatusIndicator } from "./components/status-indicator/view.status-indicator";

export const sctMenu = () => {
  const create = () => {
    const containers = sctMenuContainers;
    const accordion = sctMenuAccordion;
    const statusIndicator = sctStatusIndicator;

    const mainContainer = containers.fixedContainer;
    const internalContainer = containers.internalContainer;
    const contentContainer = containers.contentContainer;
    const statusIndicatorContainer = statusIndicator.container;

    mainContainer.appendChild(internalContainer);
    internalContainer.appendChild(accordion.checkBox);
    internalContainer.appendChild(accordion.label);
    internalContainer.appendChild(contentContainer);
    contentContainer.appendChild(statusIndicatorContainer);
    statusIndicatorContainer.appendChild(statusIndicator.dot);
    statusIndicatorContainer.appendChild(statusIndicator.text);
  };

  return {
    create,
  };
};
