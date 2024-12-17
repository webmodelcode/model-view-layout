export const CustomStatusPanelController = ({
  customStatusPanel,
  getScStreamingStatus,
}) => {
  const setIndicatorOffline = (indicator) => {
    indicator.classList.remove("live");
  };

  const setIndicatorOnline = (indicator) => {
    indicator.classList.add("live");
  };

  const setIndicator = () => {
    const { statusPanelIndicator: indicator } = customStatusPanel;
    switch (getScStreamingStatus()) {
      case "live":
        setIndicatorOnline(indicator);
        break;
      case "offline":
        setIndicatorOffline(indicator);
        break;
      default:
        // do nothing if status is not live or offline
        break;
    }
  };

  const setText = () => {
    const { statusPanelText: text } = customStatusPanel;
    const textContent = ["live", "offline"];
    switch (getScStreamingStatus()) {
      case textContent[0]:
        text.textContent = textContent[0];
        break;
      case textContent[1]:
        text.textContent = textContent[1];
        break;
      default:
        // do nothing if status is not live or offline
        break;
    }
  };

  return {
    setIndicator,
    setText,
  };
};
