function addImages () {
  for(let i = 1; i < 29; i++) {
    $('#lightgallery').append(
    `<a href="../src/img/falcon-slike/${i}.jpg">
      <img src="../src/img/falcon-thumbnails/${i}.jpg" />
    </a>`)
  }
}

addImages();