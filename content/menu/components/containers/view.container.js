const menuFixedContainer = () => {
  const fixedMenu = document.createElement("div");
  container.classList.add("sct-floating-menu");

  return fixedMenu;
};

const menuInternalContainer = () => {
  const internalContainer = document.createElement("div");
  internalContainer.classList.add("sct-menu-container");

  return internalContainer;
};

const menuContentContainer = () => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("sct-menu-content");

  return contentContainer;
};

export const sctMenuContainers = () => {
  const fixedContainer = menuFixedContainer();
  const internalContainer = menuInternalContainer();
  const contentContainer = menuContentContainer();

  return {
    fixedContainer,
    internalContainer,
    contentContainer,
  };
};
