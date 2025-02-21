# Sparta_MbtiTest

Sparta_MbtiTest는 사용자의 성향을 분석하여 MBTI 유형을 제공하는 웹 애플리케이션입니다.

---

## 📁 파일 구조

src/
├── components/ # 재사용 가능한 UI 컴포넌트
├── pages/ # 페이지 컴포넌트 (Home, Login, Signup, Profile, TestPage, TestResultPage 등)
├── api/ # 서버와의 통신 로직 (auth.js, testResults.js 등)
├── data/ # 정적 데이터 (questions.js - MBTI 질문 데이터)
├── utils/ # 공통 유틸리티 로직 (mbtiCalculator.js 등)
├── App.jsx # 루트 컴포넌트
├── main.jsx # React DOM 렌더링하는 진입점
└── index.css # 전역 스타일링

---

## 💻 프로젝트 실행

- 1️⃣ 클론 및 이동

```bash
git clone <repository-url>
cd <project-directory>
```

- 2️⃣ 필요한 패키지 설치

```bash
yarn
```

- 3️⃣ 개발 서버 실행

```bash
yarn dev
```

---

🧩 기술 스택

**React**: 컴포넌트 기반 UI 라이브러리

**Vite**: 빠른 개발 환경을 위한 빌드 도구

**Axios**: 서버 API 호출

**Tailwind CSS**: 반응형 UI 개발

**React Router**: 페이지 이동 및 라우팅 관리

---

📌 필수 기능

### 1. Tailwind CSS 설치 및 설정

- Tailwind CSS 설치 및 `tailwind.config.js` 설정
- `index.css`에서 Tailwind 스타일 적용

### 2. 라우터 설정 및 페이지 생성

- react-router-dom을 활용하여 다음 페이지 설정:
  - 홈 (`/`)
  - 로그인 (`/login`)
  - 회원가입 (`/signup`)
  - 프로필 (`/profile`)
  - MBTI 테스트 (`/test`)
  - 테스트 결과 (`/result`)

### 3. JWT 인증 API 연결

- `src/api/auth.js`에서 회원가입, 로그인, 프로필 조회 API 정의
- JWT를 활용한 사용자 인증

### 4. 레이아웃과 네비게이션

- `Layout` 컴포넌트 작성
- `ProtectedRoute` 구현하여 로그인 사용자만 특정 페이지 접근 가능하도록 설정
- 네비게이션 바 및 로그아웃 버튼 추가

### 5. MBTI 문항 가져오기 및 테스트 기능 구현

- `data/questions.js`에서 질문 리스트 로드
- 사용자가 선택한 답변을 저장하고 `calculateMBTI.js`로 결과 분석
- MBTI 결과를 기반으로 `TestResultPage`에서 출력

### 6. json-server 셋업 및 API 연결

- `json-server`를 사용해 테스트 결과 저장 API 구성
- `db.json`에서 테스트 결과 관리
- `src/api/testResults.js`에서 CRUD API 작성

### 7. 테스트 결과 리스트 구성

- `TestResultList` 페이지에서 json-server의 데이터를 기반으로 저장된 결과 표시
- 각 결과 항목에서 공개여부 변경, 삭제 기능 제공

### 8. 테스트 결과 공유하기 기능

- 소셜 미디어 공유 기능 구현

### 9. 반응형 웹 개발

- Tailwind CSS의 `responsive utilities`를 활용하여 모바일, 태블릿, 데스크탑 지원

---

🚀 배포

### 1. JSON Server 배포

- json-server를 별도 GitHub 저장소에 push 후 Glitch에서 배포

### 2. Vercel로 React 앱 배포

- Vercel에 프로젝트 업로드
- json-server API URL을 배포된 주소로 설정

---

## 🛠️ 트러블 슈팅

- **링크**:
