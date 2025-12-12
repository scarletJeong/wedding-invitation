# 폰트 폴더

이 폴더에 커스텀 폰트 파일을 넣으세요.

## 폰트 파일 형식
- `.ttf` (TrueType Font)
- `.otf` (OpenType Font)
- `.woff` (Web Open Font Format - 권장)
- `.woff2` (Web Open Font Format 2 - 가장 권장)

## 사용 방법

### 1. 폰트 파일 준비
- 원하는 폰트 파일을 다운로드하세요
- 이 폴더(`public/fonts/`)에 복사하세요
- 예: `MyCustomFont.woff2`, `MyCustomFont.woff`

### 2. CSS에 폰트 추가
`src/index.css` 파일 상단에 다음 코드를 추가하세요:

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/MyCustomFont.woff2') format('woff2'),
       url('/fonts/MyCustomFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

### 3. 폰트 사용
CSS에서 `font-family`에 폰트 이름을 지정하세요:

```css
.slide-title {
  font-family: 'MyCustomFont', serif;
}
```

## 폰트 변환 (필요한 경우)
온라인 도구를 사용하여 폰트를 웹용 형식으로 변환할 수 있습니다:
- https://cloudconvert.com/ttf-to-woff2
- https://convertio.co/kr/ttf-woff2/

