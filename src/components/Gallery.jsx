function Gallery({ onImageClick }) {
  // public/images 폴더에 갤러리 사진들을 넣으세요
  // 예: gallery1.jpg, gallery2.jpg, gallery3.jpg, gallery4.jpg
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg"
  ]

  return (
    <div className="gallery">
      <h2>사진 갤러리</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item" 
            onClick={() => onImageClick(image)}
          >
            <img src={image} alt={`사진 ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

