export const btnFocusChat = () => {
  const btn = document.createElement("a");
  btn.classList.add("sct-button");
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
      class="lucide lucide-maximize-2"
    >
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" x2="14" y1="3" y2="10" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>`;
