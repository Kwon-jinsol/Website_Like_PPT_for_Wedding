// 현재 슬라이드 인덱스
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// 슬라이드 변경 함수
function changeSlide(direction) {
    // 현재 슬라이드 비활성화
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // 비디오 일시정지 (성능 최적화)
    const currentVideo = slides[currentSlide].querySelector('video');
    if (currentVideo) {
        currentVideo.pause();
    }
    
    // 다음 슬라이드 인덱스 계산
    currentSlide += direction;
    
    // 순환 처리
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    // 새 슬라이드 활성화
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // 새 비디오 재생
    const newVideo = slides[currentSlide].querySelector('video');
    if (newVideo) {
        newVideo.play();
    }
    
    // 가사 애니메이션 재시작
    const lyricsContainer = slides[currentSlide].querySelector('.lyrics-container');
    if (lyricsContainer) {
        lyricsContainer.style.animation = 'none';
        setTimeout(() => {
            lyricsContainer.style.animation = 'fadeInUp 1s ease-out';
        }, 10);
    }
}

// 특정 슬라이드로 이동
function goToSlide(index) {
    const direction = index - currentSlide;
    if (direction !== 0) {
        changeSlide(direction);
    }
}

// 키보드 네비게이션
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === ' ' || e.key === 'Enter') {
        // 스페이스바나 엔터키로 다음 슬라이드
        changeSlide(1);
    }
});

// 터치/스와이프 지원
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 왼쪽으로 스와이프 (다음 슬라이드)
            changeSlide(1);
        } else {
            // 오른쪽으로 스와이프 (이전 슬라이드)
            changeSlide(-1);
        }
    }
}

// 비디오 로드 최적화
document.addEventListener('DOMContentLoaded', () => {
    // 첫 번째 슬라이드의 비디오만 로드
    const firstVideo = slides[0].querySelector('video');
    if (firstVideo) {
        firstVideo.play();
    }
    
    // 다른 비디오들은 지연 로드
    for (let i = 1; i < slides.length; i++) {
        const video = slides[i].querySelector('video');
        if (video) {
            video.preload = 'metadata';
        }
    }
});

// 페이지 가시성 변경 시 비디오 제어
document.addEventListener('visibilitychange', () => {
    const currentVideo = slides[currentSlide].querySelector('video');
    if (currentVideo) {
        if (document.hidden) {
            currentVideo.pause();
        } else {
            currentVideo.play();
        }
    }
});

// 자동 슬라이드 기능 (옵션)
let autoPlayInterval = null;
let autoPlayEnabled = false;

function toggleAutoPlay() {
    if (autoPlayEnabled) {
        clearInterval(autoPlayInterval);
        autoPlayEnabled = false;
    } else {
        autoPlayInterval = setInterval(() => {
            changeSlide(1);
        }, 5000); // 5초마다 다음 슬라이드
        autoPlayEnabled = true;
    }
}

// 마우스 휠 지원
let isScrolling = false;
document.addEventListener('wheel', (e) => {
    if (!isScrolling) {
        isScrolling = true;
        
        if (e.deltaY > 0) {
            changeSlide(1);
        } else {
            changeSlide(-1);
        }
        
        // 스크롤 디바운싱
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }
}); 