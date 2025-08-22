# 🎬 Movie Search Viewer

## 📖 프로젝트 개요

TMDB API를 활용하여 영화 정보를 제공하는 웹 애플리케이션입니다.
사용자는 최신 영화, 인기 영화, 장르별 영화, 키즈 영화 등을 탐색하고 상세 정보를 확인할 수 있습니다.

---

## 📝 프로젝트 소개

- React Router를 사용하여 페이지 이동 구현
- Home 화면에서는 슬라이드형 배너와 썸네일 미리보기 리스트 제공
- 카테고리별 페이지(Popular, Theatre, Comedy, Kids)에서는 그리드 형태의 영화 목록과 페이지네이션 제공
- 검색 기능을 통해 영화 제목으로 원하는 영화를 탐색 가능
- 영화 클릭 시 상세 페이지에서 영화 정보를 확인 가능

---

## 🔄 주요 기능 흐름

### 주요 기능

- TMDB API 기반 영화 리스트/검색/상세 조회
- 반응형 네비게이션바 (768px 이하 햄버거 메뉴)
- 영화 슬라이드(자동/버튼 이동)
- 썸네일 선택 시 메인 배너 이미지 변경
- 페이지네이션을 통한 영화 목록 탐색

### 사용자 흐름

1. 홈 접속 → 3개의 메인 이미지(슬라이드) 확인
2. 영화 리스트 썸네일을 좌우 스크롤하여 탐색
3. 썸네일 클릭 시 → 상단 메인 이미지 업데이트
4. 네비바에서 카테고리 선택 → 그리드 형태로 영화 탐색
5. 영화 아이템 클릭 → 상세 페이지 이동
6. 검색바 입력 → 관련 영화 리스트 확인

---

## 📁 폴더 구조 (src/)

```js
src/
├── components/
│   ├── homepage/              → 홈 화면 관련 컴포넌트
│   │   ├── main.js        → 홈 메인 부모 컴포넌트 (슬라이드 + 썸네일)
│   │   ├── mainStyle.css
│   │   ├── SlideMovies.js     → 현재 보여지는 슬라이드 이미지 3개 (자동 슬라이드)
│   │   ├── SlideMoviesStyle.css
│   │   ├── PreviewMovies.js   → 전체 이미지 목록, 선택 시 상단 슬라이드 반영
│   │   └── PreviewMoviesStyle.css
│   ├── loading/              → API 호출 전 로딩 컴포넌트
│   │   ├── Loading.js
│   │   └── LoadingStyle.css
│   ├── messages/              → 검색 결과가 없을 때 문구 출력
│   │   ├── NoSearchResult.js
│   │   └── NoSearchResultStyle.css
│   ├── movielist/            → 영화 목록 및 아이템 단위 컴포넌트
│   │   ├── movie.js
│   │   ├── movieStyle.css
│   │   ├── movielist.js
│   │   └── movielistStyle.css
│   ├── nav/                  → 네비게이션 (햄버거 메뉴, 카테고리)
│   │   ├── navbar.js
│   │   ├── navbarStyle.css
│   │   ├── NavItem.js
│   │   └── NavItemStyle.css
│   ├── not-found/                 → 라우팅 에러시 보여주는 페이지
│   │   ├── NotFound.js
│   │   └── NotFoundStyle.css
│   ├── pagination/           → 페이지네이션 컴포넌트
│   │   ├── Pagination.js
│   │   └── PaginationStyle.css
│   └── search/               → 검색 입력 폼
│       ├── SearchForm.js
│       └── SearchFormStyle.css
├── pages/
│   ├── HomePage.js
│   ├── ErrorPage.js
│   ├── ComediePage.js
│   ├── KidsPage.js
│   ├── PopularPage.js
│   ├── TheatrePage.js
│   ├── SearchPage.js
│   ├── ErrorPage.js
│   ├── SingleMovie.js
│   ├── SingleMovieStyle.css
│   └── index.js             → 각 페이지 export 모음
├── sharedLayout/
│   ├── SharedLayout.js
│   ├── SharedLayoutPage.js
│   ├── SharedLayoutSearch.js
│   └── index.js             → Layout export 모음
├── context.js               → Context API 사용, async/await 기반 API 관리
├── App.js                   → 전체 라우팅 구조 설정 (BrowserRouter 사용)
└── index.css                → 전역 스타일 적용

```

---

## ⚛️ 컴포넌트 설명

### 📂 components

- error
  - ErrorPage: 잘못된 경로 접근 시 표시 (문구 + 홈으로 돌아가기 버튼)
- homepage
  - MainPage: Home 화면 전체 구성 (슬라이드 + 썸네일)
  - PreviewMovies: 썸네일 스크롤 & 클릭 시 상단 이미지 변경
  - SlideMovies: 3개 메인 이미지 API 호출 및 출력
- loading
  - Loading: 데이터 fetch 전 로딩 표시
- messages
  - NoSearchResult: 검색 결과 없음 표시
- moviesList
  - MovieList: map을 이용해 아이템을 Movie 컴포넌트에 전달 + Pagination 포함
  - Movie: 개별 영화 아이템 표시
  - Pagination: 페이지 이동 버튼(이전/숫자/다음)
- nav
  - Navbar: 로고 + 반응형 네비게이션
  - NavItem: 네비 버튼(Home, Popular, Theatre, Comedy, Kids)
- pagination
  - Pagination: 공용 페이지네이션 컴포넌트
- search
  - SearchForm: 검색 기능

### 📂 pages

- Home, Popular, Theatre, Comedy, Kids, Search, SingleMovie

### 📂 sharedLayout

- SharedLayoutPage, SharedLayoutPopular, SharedLayoutTheatre, SharedLayoutComedie, SharedLayoutKids, SharedLayoutSearch
  (각 라우터에 맞는 페이지를 감싸는 레이아웃 역할)

### 📂 context

- API fetch 및 컴포넌트 상태 관리

---

## 🛠️ 사용 기술 및 라이브러리

### React Hooks

- useState
- useEffect
- useRef
- useCallback
- useMemo
- memo
- createContext / useContext
- useNavigate
- Link

### 라우터

- BrowserRouter
- Routes
- Route

### 비동기 / API

- fetch
- async / await

### 스타일링

- 일반 CSS
- Media Query (반응형 디자인)

## 아이콘

- icons (사용한 React 아이콘 라이브러리)

---

## 🎯 개발 목적 및 계기

영화 정보를 탐색할 수 있는 웹 서비스를 만들어보고자 시작했습니다.  
처음에는 어떤 기능과 구조를 구현할지 고민했지만, 프로젝트를 진행하며 TMDB API를 활용해 영화 리스트를 제공하고, 사용자가 직관적으로 영화를 탐색할 수 있는 UI를 구성하는 것에 초점을 맞췄습니다.  
이 과정에서 React와 라우터, 상태 관리 방식을 직접 경험하며 프론트엔드 프로젝트를 설계하는 감각을 익히는 것이 목표였습니다.  
또한, 영화 데이터를 실시간으로 불러오면서 비동기 처리와 컴포넌트 단위로 화면을 구성하는 방식이 얼마나 중요한지 직접 경험할 수 있었습니다.

## 💡 개발하며 느낀점

- API 호출 시 로딩 표시가 없으면 사용자가 현재 진행 상황을 알 수 없다는 점을 깨달았습니다.
- 프롭스로 데이터를 전달하다 보니 불필요한 렌더링이 발생했고, Context API를 사용하니 효율적으로 상태를 공유할 수 있음을 배웠습니다.
- 라우터 구조에서 중첩을 활용하니 페이지 관리와 컴포넌트 구조가 훨씬 편리해졌습니다.
- 슬라이드, 썸네일 클릭 등 사용자 인터랙션을 구현하면서 UI와 상태가 어떻게 연결되는지 실무 감각을 익힐 수 있었습니다.
- 반응형 네비게이션, 페이지네이션, 검색 기능 등 다양한 기능을 조합하면서 프론트엔드에서 사용자가 실제로 경험하게 될 흐름을 설계하는 방법을 배우게 되었습니다.

## 🚀 개선 전 및 향후 계획

- 현재 프로젝트에서 공통적으로 쓰이는 코드가 일부 반복되고 있어, 재사용 가능한 형태로 정리하고 효율성을 높이는 방향으로 개선하고 싶습니다.
- 지금은 단순히 프론트엔드에서 보여지는 형태지만, 추후에는 백엔드와 연동하여 사용자 정보, 즐겨찾기, 평가 기능 등과 연결되는 기능까지 확장해보고자 합니다.
- 앞으로는 코드 구조와 상태 관리 방법을 더 깔끔하게 정리하고, 프로젝트를 점차 확장하며 실제 서비스에 가까운 환경을 구현해보고자 합니다.

---

## 📸 프로젝트 데모 및 기타

📸 프로젝트 데모
👉 [https://nonamehj.github.io/project-movielist](\https://nonamehj.github.io/project-movielist)

💻 GitHub 코드
👉 [https://github.com/nonamehj/project-movielist](https://github.com/nonamehj/project-movielist)

---
