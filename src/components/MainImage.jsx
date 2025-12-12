import { useState, useEffect, useRef } from 'react'

function MainImage({ onImageClick }) {
  // public/images 폴더에 메인 이미지들을 넣으세요
  const images = [
    "/images/main1.jpg",
    "/images/main2.jpg",
    "/images/main3.jpg",
    "/images/main4.jpg"
  ]

  // 각 이미지마다 표시할 텍스트 (null이면 텍스트 표시 안 함)
  const imageTexts = [
    { title: "Wedding Day!", subtitle: "2025.10.11" },  // 첫 번째 이미지
    null,  // 두 번째 이미지 - 텍스트 없음
    null,  // 세 번째 이미지 - 텍스트 없음
    null   // 네 번째 이미지 - 텍스트 없음
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)

  // 최소 스와이프 거리 (px)
  const minSwipeDistance = 50

  // 자동 슬라이드 (5초마다) - 드래그 중일 때는 중지
  useEffect(() => {
    if (isDragging) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length, isDragging])

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
    if (isRightSwipe) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
    }

    setIsDragging(false)
  }

  // 마우스 드래그 지원 (데스크톱)
  const onMouseDown = (e) => {
    setTouchEnd(null)
    setTouchStart(e.clientX)
    setIsDragging(true)
  }

  const onMouseMove = (e) => {
    if (touchStart !== null) {
      setTouchEnd(e.clientX)
    }
  }

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
    if (isRightSwipe) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
    }

    setIsDragging(false)
    setTouchStart(null)
    setTouchEnd(null)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div 
      className="main-image-slider"
      ref={sliderRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={(e) => {
              // 드래그 중이 아닐 때만 클릭 이벤트 발생
              if (!isDragging && touchStart === touchEnd) {
                onImageClick(image)
              }
            }}
          >
            {/* 텍스트 오버레이 - 각 이미지마다 다른 텍스트 표시 */}
            {index === currentIndex && imageTexts[index] && (
              <div className="slide-overlay">
                <div className="slide-text">
                  <h2 className="slide-title">{imageTexts[index].title}</h2>
                  {imageTexts[index].subtitle && (
                    <p className="slide-subtitle">{imageTexts[index].subtitle}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default MainImage

 