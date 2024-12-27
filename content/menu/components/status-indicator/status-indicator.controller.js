export const statusIndicatorController = ({
  statusIndicator,
  getScStreamingStatus,
}) => {
  const { text, dot } = statusIndicator;

  setInterval(() => {
    try {
      const status = getScStreamingStatus();
      setIndicatorText({ text, status });
      setIndicatorDot({ dot, status });
    } catch (error) {
      return;
    }
  }, 1000);
};

const setIndicatorText = ({ text, status }) => {
  const element = text;
  setStatusStyle({ status, element });

  if (!status) {
    element.textContent = "...";
    return;
  }

  element.textContent = status;
};

const setIndicatorDot = ({ dot, status }) => {
  const element = dot;
  setStatusStyle({ status, element });
};

const setStatusStyle = ({ status, element }) => {
  element.classList.remove("offline");
  element.classList.remove("live");
  switch (status) {
    case "live":
      element.classList.add("live");
      break;
    case "offline":
      element.classList.add("offline");
      break;
    default:
      break;
  }
};
