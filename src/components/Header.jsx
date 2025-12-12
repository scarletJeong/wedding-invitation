function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h1>초대합니다</h1>
        <div className="names">
          <span>홍길동</span>
          <span className="heart">♥</span>
          <span>김영희</span>
        </div>
        <p style={{ marginTop: '20px', fontSize: '0.95rem', opacity: 0.9 }}>
          2024년 12월 25일 수요일 오후 2시
        </p>
      </div>
    </div>
  )
}

export default Header

