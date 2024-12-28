const menuAccordionCheckBox = () => {
  const checkBoxAccordion = document.createElement("input");
  checkBoxAccordion.type = "checkbox";
  checkBoxAccordion.id = "sct-menu-toggle";

  return checkBoxAccordion;
};

const menuAccordionLabel = () => {
  const labelAccordion = document.createElement("label");
  labelAccordion.classList.add("sct-accordion-btn");
  labelAccordion.htmlFor = "sct-menu-toggle";

  return labelAccordion;
};

export const sctMenuAccordion = () => {
  const checkBox = menuAccordionCheckBox();
  const label = menuAccordionLabel();

  return {
    checkBox,
    label,
  };
};
