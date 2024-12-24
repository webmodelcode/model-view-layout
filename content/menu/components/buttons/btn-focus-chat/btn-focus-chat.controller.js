export const focusChatButtonController = ({
  focusChatButton,
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
}) => {
  focusChatButton.click = () => {
    toggleFocusChat({
      getScBroadcastContainer,
      getScBroadcastWrapper,
      getScMemberList,
      getScExtSwitch,
    });
  };
};

const enableFocusChat = ({
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
}) => {
  const broadcastCointainer = getScBroadcastContainer();
  const extSwitch = getScExtSwitch();
  const broadcastWrapper = getScBroadcastWrapper();
  const memberList = getScMemberList();
  broadcastCointainer.style.flexDirection = "column-reverse";
  broadcastWrapper.style.display = "none";
  extSwitch.style.display = "none";
  memberList.style.height = "70vh";
};

const disableFocusChat = ({
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
}) => {
  const broadcastCointainer = getScBroadcastContainer();
  const extSwitch = getScExtSwitch();
  const broadcastWrapper = getScBroadcastWrapper();
  const memberList = getScMemberList();
  broadcastCointainer.style.flexDirection = "row";
  broadcastWrapper.style.display = "block";
  extSwitch.style.display = "flex";
  memberList.style.height = "100%";
};

const toggleFocusChat = ({
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
}) => {
  const isSctFocusChat = window.isSctFocusChat || false;
  if (isSctFocusChat) {
    disableFocusChat({
      getScBroadcastContainer,
      getScBroadcastWrapper,
      getScMemberList,
      getScExtSwitch,
    });
  } else {
    enableFocusChat({
      getScBroadcastContainer,
      getScBroadcastWrapper,
      getScMemberList,
      getScExtSwitch,
    });
  }
  window.isSctFocusChat = !isSctFocusChat;
};
