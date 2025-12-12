function Location() {
  return (
    <div className="location">
      <h2>오시는 길</h2>
      <div className="location-info">
        서울특별시 강남구 테헤란로 123<br />
        ○○웨딩홀 3층 그랜드홀<br /><br />
        지하철: 2호선 강남역 3번 출구 도보 5분<br />
        버스: 강남역 정류장 하차
      </div>
      <a href="https://map.naver.com" target="_blank" rel="noopener noreferrer" className="map-link">
        지도 보기
      </a>
    </div>
  )
}

export default Location

