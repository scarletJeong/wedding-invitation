function MainImage({ onImageClick }) {
  const imageUrl = "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop"
  
  return (
    <img 
      src={imageUrl} 
      alt="청첩장 메인 이미지" 
      className="main-image"
      onClick={() => onImageClick(imageUrl)}
    />
  )
}

export default MainImage

