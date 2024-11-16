document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const statusText = document.getElementById("statusText");

  // Check initial state
  chrome.storage.local.get(["enabled"], function (result) {
    const enabled = result.enabled || false;
    updateStatus(enabled);
  });

  toggleButton.addEventListener("click", function () {
    chrome.storage.local.get(["enabled"], function (result) {
      const newState = !result.enabled;
      chrome.storage.local.set({ enabled: newState });
      updateStatus(newState);

      // Notify content script
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "toggle",
          enabled: newState,
        });
      });
    });
  });

  function updateStatus(enabled) {
    statusText.textContent = enabled ? "Enabled" : "Disabled";
    toggleButton.style.backgroundColor = enabled ? "#ff4444" : "#4CAF50";
  }
});
