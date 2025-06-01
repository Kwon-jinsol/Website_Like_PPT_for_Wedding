# 웨딩 슬라이드쇼 웹사이트

배경에 움직이는 영상이나 GIF를 표시하고, 그 위에 가사나 메시지를 보여주는 파워포인트 스타일의 웹사이트입니다.

## 기능

- 🎬 배경 비디오/GIF 자동 재생
- 📝 가사 또는 메시지 오버레이
- ⬅️➡️ 화살표로 슬라이드 전환
- ⌨️ 키보드 네비게이션 (화살표 키, 스페이스바, 엔터)
- 📱 터치/스와이프 지원 (모바일)
- 🖱️ 마우스 휠 지원
- 🎯 슬라이드 인디케이터
- 📊 성능 최적화 (지연 로드, 비디오 일시정지)

## 사용 방법

### 1. 미디어 파일 준비

- **비디오 파일**: `videos/` 폴더에 MP4 형식으로 저장
  - 예: `video1.mp4`, `video2.mp4`, `video3.mp4`
- **GIF 파일**: `images/` 폴더에 저장
  - 예: `background1.gif`

### 2. 슬라이드 커스터마이징

`index.html` 파일에서 슬라이드를 추가하거나 수정할 수 있습니다:

```html
<div class="slide">
    <div class="background-video">
        <video autoplay muted loop playsinline>
            <source src="videos/your-video.mp4" type="video/mp4">
        </video>
    </div>
    <div class="lyrics-container">
        <h1 class="lyrics-title">제목</h1>
        <p class="lyrics-text">
            가사 또는 메시지<br>
            여러 줄로 작성 가능
        </p>
    </div>
</div>
```

### 3. 네비게이션

- **화살표 버튼**: 화면 좌우의 화살표 클릭
- **키보드**: 
  - `←` / `→`: 이전/다음 슬라이드
  - `Space` / `Enter`: 다음 슬라이드
- **모바일**: 좌우로 스와이프
- **마우스**: 휠 스크롤

### 4. 성능 최적화 팁

- 비디오는 웹에 최적화된 형식으로 압축
- 해상도는 1920x1080 이하 권장
- 비트레이트는 5Mbps 이하 권장
- GIF는 최대한 작은 용량으로 최적화

## 폴더 구조

```
Website_Like_PPT_for_Wedding/
│
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 파일
├── README.md           # 이 파일
│
├── videos/             # 비디오 파일 폴더
│   ├── video1.mp4
│   ├── video2.mp4
│   └── video3.mp4
│
└── images/             # 이미지/GIF 파일 폴더
    └── background1.gif
```

## 브라우저 호환성

- Chrome (권장)
- Firefox
- Safari
- Edge
- 모바일 브라우저

## 라이선스

개인 사용 목적으로 자유롭게 수정 및 사용 가능합니다.