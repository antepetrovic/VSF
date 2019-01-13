function addImages () {
  for(let i = 1; i < 32; i++) {
    $('#lightgallery').append(
    `<a href="../src/img/falcon-slike/${i}.jpg">
      <img src="../src/img/falcon-slike/${i}.jpg" />
    </a>`)
  }
}

addImages();