document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".share-modal");
  if (!el) return;

  el.addEventListener("click", () => {
    console.log("Share modal clicked");
  });
});
