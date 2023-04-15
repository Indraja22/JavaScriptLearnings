document
  .querySelector(".calculate-button")
  .addEventListener("click", function () {
    const radius = Number(document.querySelector(".radius-text-box").value);
    const volumeOfSphere = (4 / 3) * (22 / 7) * radius ** 3;
    const volumeOfSphereRounded = volumeOfSphere.toFixed(2);
    document.querySelector(".volume").value = volumeOfSphereRounded;
  });
