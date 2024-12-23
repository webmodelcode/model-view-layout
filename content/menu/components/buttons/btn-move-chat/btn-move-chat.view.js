export const btnMoveChat = () => {
  const btn = document.createElement("button");
  btn.classList.add("sct-button");
  btn.classList.add("move");
  btn.classList.add("sct-max-height-transition");
  btn.innerHTML = svgImg;

  return btn;
};

const svgImg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-move"
>
  <path d="M12 2v20" />
  <path d="m15 19-3 3-3-3" />
  <path d="m19 9 3 3-3 3" />
  <path d="M2 12h20" />
  <path d="m5 9-3 3 3 3" />
  <path d="m9 5 3-3 3 3" />
</svg>`;
