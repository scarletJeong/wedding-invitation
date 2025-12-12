# 모바일 청첩장

GitHub Pages를 이용한 모바일 청첩장입니다.

## 사용 방법

### 1. GitHub 저장소 생성
1. GitHub에 새 저장소를 만듭니다 (예: `wedding-invitation`)
2. 저장소 이름을 기억해두세요

### 2. 파일 업로드
1. 이 폴더의 모든 파일을 GitHub 저장소에 업로드합니다
2. `index.html` 파일이 루트에 있어야 합니다

### 3. GitHub Pages 활성화
1. 저장소의 **Settings** 탭으로 이동
2. 왼쪽 메뉴에서 **Pages** 선택
3. **Source**에서 **Deploy from a branch** 선택
4. **Branch**를 `main` (또는 `master`) 선택
5. **Save** 클릭

### 4. 접속 URL
- URL 형식: `https://[사용자명].github.io/[저장소명]`
- 예: `https://yourname.github.io/wedding-invitation`

## 커스터마이징

### 내용 수정
`index.html` 파일을 열어서 다음 내용을 수정하세요:

1. **신랑/신부 이름**: `<span>홍길동</span>` 부분
2. **예식 날짜/시간**: 날짜 정보 섹션
3. **장소 정보**: 오시는 길 섹션
4. **인사말**: 인사말 섹션의 텍스트
5. **계좌번호**: 마음 전하실 곳 섹션
6. **사진**: 이미지 URL을 본인의 사진으로 변경

### 이미지 교체 방법

#### 방법 1: 온라인 이미지 호스팅 사용
- [Imgur](https://imgur.com) 또는 [Cloudinary](https://cloudinary.com)에 이미지 업로드
- 업로드된 이미지 URL을 HTML에 입력

#### 방법 2: GitHub에 이미지 저장
1. 저장소에 `images` 폴더 생성
2. 이미지 파일 업로드
3. HTML에서 경로를 `images/your-image.jpg` 형식으로 변경

### 색상 변경
CSS의 색상 코드를 수정하세요:
- 헤더 그라데이션: `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`
- 날짜 섹션: `background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);`

## 참고사항

- 이미지는 반드시 HTTPS URL을 사용하거나 같은 저장소에 저장하세요
- 모바일에서 최적화되어 있습니다
- 카카오톡으로 공유할 때 미리보기가 잘 나오도록 메타 태그가 포함되어 있습니다

