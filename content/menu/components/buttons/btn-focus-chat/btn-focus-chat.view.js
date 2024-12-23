export const btnFocusChat = () => {
  const btnImage = document.createElement("img");

  btnImage.alt = "Maximize chat";

  const btnFocusChat = document.createElement("button");
  btnFocusChat.classList.add("sct-button");
  btnFocusChat.appendChild(btnImage);

  return btnFocusChat;
};
