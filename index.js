function handleEvent(e) {
  if (e.button === 3 || e.button === 4) 
    e.preventDefault();
}

export default {
  goosemodHandlers: {
    onImport: () => {
      window.addEventListener("mouseup", handleEvent);
    },

    onRemove: () => {
      window.removeEventListener("mouseup", handleEvent)
    },
  },
};
