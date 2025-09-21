<div align="center">

# 💧 ChocChoc
### *Blink. Breathe. Done.*

**모니터 앞 당신의 눈가를 촉촉하게**

<img width="250" height="250" alt="chocchoc" src="https://github.com/user-attachments/assets/6a7b9c27-f36a-4564-a57c-dbdf761952fe" />

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey)
![Built with](https://img.shields.io/badge/built%20with-❤️-red)

</div>

**한국어** (현재 페이지)/**[English](README_EN.md)**

---

## 🎯 프로젝트 소개

모니터 앞 여러분들의 건강을 재밌게 지켜드려요.

- 실시간 눈 깜빡임 감지를 통한 안구 건조 경보
- 게이미피케이션을 통한 콤보와 피버, 라이프 시스템
- 눈 깜빡임 데이터를 통한 개인화된 AI 리포트

## 📱 실행화면
<img src="https://github.com/user-attachments/assets/3b7e6c8f-c66a-4b27-85e1-0cd6fe792139" width="300" />

---

## 🚀 빠른 시작

### 📋 시스템 요구사항
- **macOS** 10.14+ 또는 **Windows** 10+
- **Node.js** 18+ 
- **Python** 3.8+
- **웹캠** (내장 또는 외장)

### 🔧 설치
```bash
# 1. 레포지토리 클론
git clone https://github.com/Ssuamje/ChocChoc.git
cd ChocChoc

# 2. 클라이언트 설정
cd client/choc-app
npm install
npm run build

# 3. 서버 설정
cd ../../server
pip install -r requirements.txt

# 4. 환경 변수 설정 (선택사항)
export OPENAI_API_KEY="your-api-key-here"

# 5. 실행
npm run dev:electron  # 클라이언트
python main.py        # 서버 (별도 터미널)
```

---

## ✨ 핵심 기능
> 프로젝트가 초기 단계에 있어 일부 기능이 불안정할 수 있습니다!

### 👁️ 실시간 눈 깜빡임 인식
- **MediaPipe FaceMesh** 기반 정밀 추적
- **EAR(Eye Aspect Ratio)** 알고리즘으로 정확한 감지
- **개인별 캘리브레이션**으로 최적화된 임계값 설정

### 🎮 게이미피케이션
```
💖 하트 시스템      오랫동안 깜빡이지 않으면 하트 감소
🔥 콤보 시스템      연속 깜빡임으로 콤보 쌓기
⭐ 피버 모드       콤보 달성 시 특별 보너스
🎯 실시간 피드백    눈 상태에 따른 즉각적 반응
```

### 🤖 AI 건강 분석
- **개인화된 일일 리포트** 생성
- **깜빡임 패턴 분석** 및 시각화
- **맞춤형 건강 조언** 제공
- **장기 트렌드 추적**

### 🖥️ 개발자의 업무 환경을 고려한 UX/UI
- **적응형 투명도**: 업무 집중도에 따라 원하는 대로 조절
- **크로스 플랫폼**: macOS와 Windows 동시 지원
- **덜 거슬리는 알림**: 업무 흐름을 방해하지 않는 설계

### 🔄 데이터 플로우
1. **실시간 감지**: MediaPipe가 웹캠에서 얼굴 랜드마크 추출
2. **분석 처리**: EAR 알고리즘으로 깜빡임 상태 판단
3. **게임 로직**: 깜빡임 이벤트를 게임 요소로 변환
4. **데이터 수집**: 세션 데이터를 서버로 전송
5. **AI 분석**: OpenAI API로 개인화된 건강 리포트 생성
6. **시각화**: 그래프와 차트로 인사이트 제공

---

### 🗺️ 로드맵
- [ ] **v2.0**: 눈 스트레칭 추가 / 안구 인식 알고리즘 개선 / 리포트 서버 고도화
---

## 👥 팀 소개

| 역할 | 이름 | 담당 영역 | GitHub |
|------|------|-----------|---------|
| 🎯 Lead | 상제 | 프로젝트 총괄, 기획, 아키텍처 | [@Ssuamje](https://github.com/Ssuamje) |
| 🖥️ Frontend | 인호 | Electron, React UI | [@42inshin](https://github.com/42inshin) |
| 🤖 AI/CV | 연진 | MediaPipe, 알고리즘 | [@ye0njinkim](https://github.com/ye0njinkim) |
| 🐍 AI/Backend | 정균 | FastAPI, 데이터 분석 | [@Park323](https://github.com/Park323) |
| 👓 AI/Research | 지현 | MediaPipe, UX, 리서치 | [@Jihyun0510](https://github.com/Jihyun0510) |

---

## 📄 라이센스

이 프로젝트는 [MIT 라이센스](LICENSE) 하에 배포됩니다.

```
MIT License - 자유롭게 사용, 수정, 배포 가능
상업적 이용 가능 | 수정 허용 | 배포 허용 | 사적 이용 허용
```

</div>
