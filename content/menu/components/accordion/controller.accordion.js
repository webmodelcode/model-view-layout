export const accordionController = ({ accordion, contentContainer }) => {
  accordion.checkBox.addEventListener("change", () => {
    if (contentContainer.classList.contains("open")) {
      contentContainer.classList.remove("open");
      contentContainer.classList.add("closed");
      return;
    }
    contentContainer.classList.add("open");
    contentContainer.classList.remove("closed");
  });
};
