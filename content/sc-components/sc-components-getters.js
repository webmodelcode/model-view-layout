export const getScErrorNode = () => {
  try {
    return (
      document.getElementsByClassName("main-layout-main-content").item(0) ||
      null
    );
  } catch (error) {
    return null;
  }
};

export const getScBroadcastContainer = () => {
  try {
    return (
      document.getElementsByClassName("BroadcastContainer__main#ka").item(0) ||
      null
    );
  } catch (error) {
    return null;
  }
};

export const getScBroadcastWrapper = () => {
  try {
    return (
      document
        .getElementsByClassName(
          "broadcast-player-wrapper view-cam-resizer view-cam-resizer-boundary-x view-cam-resizer-broadcast"
        )
        .item(0) || null
    );
  } catch (error) {
    return null;
  }
};

export const getScMemberList = () => {
  try {
    return (
      document
        .getElementsByClassName("BroadcastContainer__members#Go cam-members")
        .item(0) || null
    );
  } catch (error) {
    return null;
  }
};

export const getScExtSwitch = () => {
  try {
    return document.getElementById("external-switcher") || null;
  } catch (error) {
    return null;
  }
};

export const getScStreamingStatus = () => {
  try {
    return document
      .getElementsByClassName("player-panel-status-connection")
      .item(0)
      .childNodes[1].textContent.toLocaleLowerCase();
  } catch (error) {
    return null;
  }
};

export const checkAvaliableElements = () => {
  return (
    getScErrorNode() &&
    getScBroadcastContainer() &&
    getScBroadcastWrapper() &&
    getScMemberList() &&
    getScExtSwitch() &&
    getScStreamingStatus()
  );
};
