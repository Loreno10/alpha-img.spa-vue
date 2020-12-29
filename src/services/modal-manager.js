function openModal(imageUrl) {
    console.log("open")
    var modalContainer = document.getElementById("modal-container")

    var modalImg = document.getElementById("modal-img")
    modalContainer.style.display = "block"
    modalImg.src = imageUrl

    modalContainer.onclick = function () {
      modalContainer.style.display = "none"
    }
}

export { openModal };