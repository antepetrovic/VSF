function addImages () {
  for(let i = 1; i < 28; i++) {
    $('#lightgallery').append(
    `<a href="../src/img/falcon-slike/${i}.jpg">
      <img class="grow" src="../src/img/falcon-thumbnails/${i}.jpg" />
      <div class="poster">
      
      </div>
    </a>`)
  }
}

addImages();