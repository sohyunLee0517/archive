# Archive — Design Brief

이소현의 개인 포트폴리오 사이트(`iso archive`)를 디자인하기 위한 설명 문서입니다. 디자인 AI나 디자이너에게 그대로 전달해도 되도록 목적·내용·제약을 정리합니다.

---

## 0. 현재 디자인 (Stitch 기반)

이 사이트는 Google Stitch에서 디자인한 **레트로 터미널 + 파일시스템 컨셉**을 따른다.

- 좌측: 디렉토리 트리 형태의 사이드바 (├─, └─ 트리 선)
- 상단: `$ ls /sys/archive/` 또는 `$ cd /sys/archive/projects/{slug}` 같은 터미널 path + 깜빡이는 커서
- 하단: `[SAVE_TO_PDF] [KAKAO_SHARE] [COPY_LINK] [PRINT_DOC]` 형태의 다크 액션바
- 메인 컨텐츠: 카드 리스트(메인) 또는 상세 정보(상세)
- 폰트: Space Grotesk (영문/터미널) + Pretendard (한글 본문)
- 컬러: `#1a1c1c` 프라이머리 / `#f2f2f2` 배경 / `#f9f9f9` 서피스
- 모서리: 모두 각짐(`border-radius: 0`)
- 스크롤바: 솔리드 블록 + 각진 모서리 (커서와 통일)

## 1. 사이트 한 줄 정의

> **"만든 것들을 모아둔 작은 저장소."** 화려한 포트폴리오라기보다, 직접 만든 것들과 그 과정의 고민·해결을 차분히 보여주는 개인 아카이브.

- 사이트 이름: **iso archive**
- 주인: **이소현 (Sohyun Lee)**
- 톤: 차분, 정돈, 약간의 미니멀 — "보여주려고 꾸민" 느낌보다 "기록을 모아둔 책장" 느낌
- 배포: GitHub Pages (https://sohyunlee0517.github.io/archive/)

---

## 2. 핵심 기능 (디자인이 반드시 고려해야 함)

상단/사이드 어딘가에 **항상 접근 가능한 4가지 액션 버튼**이 있어야 합니다.

| 액션 | 동작 | 라벨 |
|---|---|---|
| PDF 다운로드 | 프린트 다이얼로그를 열어 PDF로 저장 유도 | `PDF 다운로드` |
| 카카오톡 공유 | Kakao SDK로 친구 픽커 띄움 | `카카오톡` |
| 링크 공유 | `navigator.share` + 클립보드 폴백 | `링크 공유` |
| 프린트 | `window.print()` | `프린트` |

> 4개 버튼은 묶여 있어야 하며, 페이지 어디서든 누를 수 있도록 **sticky** 또는 항상 보이는 영역에 둡니다.

---

## 3. 페이지 구조 (섹션 순서)

1. **Header**
   - 라벨 (작은 영문 대문자): `ISO ARCHIVE`
   - 이름 (대제목): `이소현`
   - 한 줄 설명: `만든 것들을 모아둔 작은 저장소`

2. **About** (짧은 자기소개)
   - 2~3 문장 분량
   - 도구(Next.js, Flutter, Firebase, Prisma 등)와 관심사 언급

3. **Projects** (메인 콘텐츠 — 8개 카드)
   - 각 카드는 **클릭 시 GitHub 레포로 이동**
   - 이 사이트는 "기록 아카이브"이므로, **만들 당시의 모든 맥락**을 카드 한 장에 담는다.
   - 카드 내 정보:
     - 프로젝트명 (한글 + 영문 레포명)
     - 연도 (우측 정렬)
     - 한 줄 요약
     - GitHub 경로 (작은 글씨, 인쇄 시에도 보여야 함)
     - **컨셉** — 어떤 아이디어에서 출발했는지
     - **목표** — 만들 당시 무엇을 이루고자 했는지
     - **사용 기술** — 핵심 스택 (강조된 Pill, 카드 안에서 시각적으로 가장 두드러짐)
     - **한 일** — 실제 수행한 작업 (불릿)
     - **고민** — 부딪힌 문제
     - **해결** — 어떻게 풀었는지
     - **배운점** — 이 프로젝트로 체득한 것 (불릿)
   - 정보가 많으므로 각 항목은 좌측 라벨 + 우측 본문의 **definition list 패턴**으로 정렬 (`<dl><dt><dd>`).

4. **Contact**
   - Email: `nonlyito@gmail.com` → `mailto:` 링크
   - GitHub: `sohyunLee0517` → 프로필 링크

5. **Footer**
   - 저작권 표기

---

## 4. 콘텐츠 — 실제 들어갈 8개 프로젝트

| 순서 | 프로젝트 | 요약 | 핵심 키워드 |
|---|---|---|---|
| 1 | **하루패스 (harupass)** | 관리자/관리대상 분리 미션 관리 Flutter 앱 | Flutter, Firebase, Riverpod, Melos |
| 2 | **야구 통계 (baseballStat)** | 인증 시스템 갖춘 야구 기록 서비스 | Next.js, Prisma, Resend |
| 3 | **우리집 캘린더 (woorijib-calendar)** | PWA + Android TWA 가족 공유 캘린더 | Next.js, PWA, TWA |
| 4 | **각도기 앱 (protractor_app)** | Play Store 출시한 Flutter 도구 앱 | Flutter, CustomPainter |
| 5 | **우정의 온도 (woojung-event)** | WebRTC 실시간 게임 이벤트 앱 | WebRTC, Next.js |
| 6 | **야구 스코어보드 (baseball-scoreboard)** | 사회인 야구 점수판 + 기록 | TypeScript, React |
| 7 | **네온 피젯 스피너 (spinner)** | 회전감을 살린 정적 인터랙션 | JavaScript, CSS |
| 8 | **이 사이트 (archive)** | 지금 보고 있는 포트폴리오 자체 | Next.js 16, Tailwind |

각 프로젝트 상세 텍스트는 [`src/app/page.tsx`](src/app/page.tsx)의 `PROJECTS` 배열에 있습니다.

---

## 5. 디자인 제약 (반드시 지켜야 함)

### 5-1. 인쇄 / PDF 출력에서도 예뻐야 함 (필수)
이 사이트의 핵심 정체성은 "PDF로 뽑아 이력서/포트폴리오로 쓸 수 있다"는 점입니다. 화면용 디자인이 인쇄에서 망가지면 안 됩니다.

- 액션 버튼·토스트·다크 배경은 인쇄 시 **숨김** (`@media print`)
- 섹션과 프로젝트 카드는 페이지 중간에서 **잘리지 않게** (`break-inside-avoid`)
- 인쇄 시: 흰 배경 + 검정 글씨로 강제
- A4 기준 여백 (`@page { size: A4; margin: 16mm; }`)
- 외부 링크는 인쇄에서도 **URL이 텍스트로 식별 가능**하도록 (작은 글씨로 노출)
- 다크 모드는 화면용 — 인쇄에서는 라이트만

### 5-2. 다크/라이트 모드 둘 다 지원
- `prefers-color-scheme` 따라 자동 전환
- 두 모드 모두에서 시각적으로 깔끔해야 함

### 5-3. 모바일 우선 + 데스크톱
- 본문 폭은 너무 넓지 않게 (현재 `max-w-3xl`, 약 768px)
- 모바일에서 액션 버튼이 자연스럽게 줄바꿈 또는 축약

### 5-4. 한글 가독성
- 본문은 한국어가 주 언어
- 한글 폰트 폴백: `Apple SD Gothic Neo`, `Pretendard` 같은 시스템/한글 친화적 폰트 우선

---

## 6. 톤 & 무드 키워드

- **차분함** (Calm)
- **정돈** (Tidy / Organized)
- **여백 많음** (Generous whitespace)
- **단단함** (Solid, not playful)
- **읽기 편함** (Readable, document-like)
- 굳이 비유하면: *"잘 정리된 노트 / 종이 이력서 / 작가의 작품 인덱스"*

피하고 싶은 것:
- 화려한 그라데이션, 과도한 애니메이션
- 트렌디 SaaS 랜딩 스타일 (히어로 일러스트, 거대한 버튼)
- 가벼운 이모지 남발

---

## 7. 컬러 (현재 기본값, 자유롭게 조정 가능)

- **배경**: 라이트 `#fafafa` / 다크 `#0a0a0a`
- **본문 텍스트**: 라이트 `#171717` / 다크 `#ededed`
- **보조 텍스트**: zinc-500 계열
- **액션 버튼**: 화이트/다크 배경 + 테두리만 있는 미니멀 pill
- **카드 보더**: zinc-200 (라이트) / zinc-800 (다크)

---

## 8. 타이포 (현재 기본값)

- **헤더 (이름)**: 4xl~5xl, 폰트 굵기 600 (semibold), 자간 약간 좁힘
- **섹션 라벨**: 작은 영문 대문자 + tracking 넓게 (Eyebrow text)
- **본문**: leading-7 정도의 넉넉한 줄간격
- **태그 (Pill)**: 작은 글씨 + 둥근 테두리

---

## 9. 디자인 AI에 입력할 때 권장 프롬프트

> "This is a personal portfolio site called **iso archive**, owned by a Korean developer Sohyun Lee. It's a calm, minimalist **document-style archive** that records the full context of each project at the time it was made. The page lists 8 GitHub projects as long, content-rich cards. Each card includes: project title, year, one-line summary, GitHub path, and 7 labeled fields — **Concept (컨셉), Goal (목표), Tech Stack (사용 기술), What I did (한 일), Challenge (고민), Solution (해결), Lessons Learned (배운점)**. Use a definition-list layout (label on left, content on right) so all 7 fields read like a structured journal entry. The **Tech Stack** field should be visually emphasized — its pills are the most prominent visual element inside a card (solid dark fill with white text in light mode, inverted in dark). No separate tag row at the bottom — tech stack is shown only in that one field. The whole card must be clickable and link to its GitHub repo. The page must support **clean print/PDF output** as a primary feature — when printed, it should look like a polished resume/portfolio document, with each card not splitting across pages, and tech pills rendering as outlined shapes (no solid fill ink). There are 4 sticky action buttons (PDF download, KakaoTalk share, link share, print). Tone: tidy, document-like, generous whitespace, no playful gradients or trendy SaaS hero patterns. Korean is the primary language; keep typography readable in Korean. Support both light and dark modes for screen; print is always light. Inspiration: traditional paper résumé, well-structured engineering journal, Brian Lovin's portfolio."

---

## 10. 참고 — 현재 구현된 모습

- 라이브: https://sohyunlee0517.github.io/archive/
- 코드: https://github.com/sohyunLee0517/archive
- 메인 페이지: [`src/app/page.tsx`](src/app/page.tsx)
- 액션 바: [`src/components/ShareBar.tsx`](src/components/ShareBar.tsx)
- 인쇄 CSS: [`src/app/globals.css`](src/app/globals.css)
