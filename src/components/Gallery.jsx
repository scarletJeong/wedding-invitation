function Gallery({ onImageClick }) {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop"
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
            <img src={image.replace('w=600&h=600', 'w=400&h=400')} alt={`사진 ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

