export const focusChatButtonController = ({
  focusChatButton,
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
}) => {
  focusChatButton.addEventListener("click", () => {
    toggleFocusChat({
      focusChatButton,
      getScBroadcastContainer,
      getScBroadcastWrapper,
      getScMemberList,
      getScExtSwitch,
    });
  });
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
  broadcastCointainer.classList.add("sct-flex-reverse");
  broadcastWrapper.classList.add("sct-dnone");
  extSwitch.classList.add("sct-dnone");
  memberList.classList.add("sct-h-70");
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
  broadcastCointainer.classList.remove("sct-flex-reverse");
  broadcastWrapper.classList.remove("sct-dnone");
  extSwitch.classList.remove("sct-dnone");
  memberList.classList.remove("sct-h-70");
};

const toggleFocusChat = ({
  focusChatButton,
  getScBroadcastContainer,
  getScBroadcastWrapper,
  getScMemberList,
  getScExtSwitch,
}) => {
  const isSctFocusChat = window.isSctFocusChat || false;
  if (isSctFocusChat) {
    focusChatButton.classList.remove("active");
    disableFocusChat({
      getScBroadcastContainer,
      getScBroadcastWrapper,
      getScMemberList,
      getScExtSwitch,
    });
  } else {
    focusChatButton.classList.add("active");
    enableFocusChat({
      getScBroadcastContainer,
      getScBroadcastWrapper,
      getScMemberList,
      getScExtSwitch,
    });
  }
  window.isSctFocusChat = !isSctFocusChat;
};
