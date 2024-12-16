export const getScErrorNode = () =>
  document.getElementsByClassName("main-layout-main-content").item(0) || null;

export const getScBroadcastContainer = () =>
  document.getElementsByClassName("BroadcastContainer__main#ka").item(0) ||
  null;

export const getScBroadcastWrapper = () =>
  document
    .getElementsByClassName(
      "broadcast-player-wrapper view-cam-resizer view-cam-resizer-boundary-x view-cam-resizer-broadcast"
    )
    .item(0) || null;

export const getScMemberList = () =>
  document
    .getElementsByClassName("BroadcastContainer__members#Go cam-members")
    .item(0) || null;

export const getScExtSwitch = () =>
  document.getElementById("external-switcher") || null;
