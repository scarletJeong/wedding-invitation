import { useState } from 'react'

function Location() {
  const address = "서울특별시 강남구 테헤란로 123"
  const fullAddress = `${address}\n○○웨딩홀 3층 그랜드홀`
  const [copied, setCopied] = useState(false)
  const [mapImageError, setMapImageError] = useState(false)

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      alert('복사에 실패했습니다. 직접 복사해주세요.')
    }
  }

  // 네이버맵 URL (주소를 검색어로 사용)
  const mapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(address)}`
  
  // 지도 이미지 경로 (public/images/map.jpg 파일을 넣으세요)
  // 또는 카카오맵 Static Map API URL 사용 가능
  const mapImageUrl = "/images/map.jpg"

  return (
    <div className="location">
      <h2>오시는 길</h2>
      <div className="location-info">
        {address}<br />
        ○○웨딩홀 3층 그랜드홀<br /><br />
        지하철: 2호선 강남역 3번 출구 도보 5분<br />
        버스: 강남역 정류장 하차
      </div>
      
      {/* 지도 표시 - 이미지 클릭 시 네이버맵으로 이동 */}
      <div className="map-container">
        {!mapImageError ? (
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-image-link"
          >
            <img 
              src={mapImageUrl} 
              alt="오시는 길 지도" 
              className="map-image"
              onError={() => {
                setMapImageError(true)
              }}
            />
          </a>
        ) : (
          <div className="map-placeholder">
            <div className="map-placeholder-content">
              <p>지도 이미지를 준비 중입니다</p>
              <span>지도 보기 버튼을 클릭하세요</span>
            </div>
          </div>
        )}
      </div>

      {/* 버튼들 */}
      <div className="location-buttons">
        <button 
          className={`copy-address-btn ${copied ? 'copied' : ''}`}
          onClick={copyAddress}
        >
          {copied ? '✓ 복사 완료!' : '주소 복사'}
        </button>
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="map-link"
        >
          지도 보기
        </a>
      </div>
    </div>
  )
}

export default Location

