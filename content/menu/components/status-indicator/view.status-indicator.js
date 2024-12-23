const statusIndicatorContainer = () => {
  const statusIndicatorContainer = document.createElement("div");
  statusIndicatorContainer.classList.add("sct-status-indicator");

  return statusIndicatorContainer;
};

const statusIndicatorDot = () => {
  const statusIndicatorDot = document.createElement("div");
  statusIndicatorDot.classList.add("sct-indicator-dot");

  return statusIndicatorDot;
};

const statusIndicatorText = () => {
  const statusIndicatorText = document.createElement("span");
  statusIndicatorText.classList.add("sct-status-text");
  statusIndicatorText.textContent = "...";
  return statusIndicatorText;
};

export const sctStatusIndicator = () => {
  const container = statusIndicatorContainer();
  const dot = statusIndicatorDot();
  const text = statusIndicatorText();

  return {
    container,
    dot,
    text,
  };
};
