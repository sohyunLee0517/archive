<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 프로젝트 필수 규칙

## 인쇄/PDF 다운로드 레이아웃 (필수)

이 사이트는 PDF 다운로드 / 프린트 기능을 핵심 기능으로 제공한다. **화면에서 잘 보이는 것만으로는 부족하며, 인쇄/PDF 출력물도 보기 좋아야 한다.** 모든 UI 변경은 다음 기준을 만족해야 한다.

- 인쇄 시 액션바·토스트·다크 배경 등 의미 없는 UI는 `.no-print`로 숨긴다.
- 섹션과 프로젝트 항목은 페이지 중간에 잘리지 않도록 `break-inside-avoid`를 적용한다.
- 인쇄 시 글자색은 검정, 배경은 흰색으로 강제한다 (다크모드 대비 명확).
- A4 기준 여백(`@page`)을 유지하고, 본문 폭은 인쇄 폭에 맞춘다.
- 프로젝트 카드 등에 외부 링크가 있을 경우, **인쇄물에서도 URL을 식별 가능한 형태로 노출**한다 (작은 글씨로 텍스트 표시 등).
- 새 컴포넌트 추가 시 `print` 미디어 쿼리에서 어떻게 보일지 항상 확인한다 (Chrome DevTools → Rendering → Emulate CSS media type: print).

## 레이아웃 / 스크롤 동작 (필수)

이 사이트는 **고정 viewport 레이아웃**이다. 페이지 전체가 스크롤되지 않고, **메인 컨텐츠 영역만 내부에서 스크롤**된다.

- `body`는 `h-screen overflow-hidden flex flex-col` 구조 — 헤더 / 컨텐츠 row / 액션바가 세로로 배치되며 셋 다 항상 시야 안에 있어야 한다.
- 헤더와 하단 액션바는 `shrink-0`, 메인 컨텐츠는 `overflow-y-auto`.
- 사이드바도 자체 스크롤(`overflow-y-auto`) — 좌측 트리가 길어져도 메인과 독립적으로 스크롤.
- 인쇄 시에는 `print:overflow-visible / print:h-auto`로 viewport 제약을 해제해 모든 컨텐츠가 인쇄되게 한다.

## 스크롤바 디자인 (필수)

깜빡이는 커서와 시각적으로 통일된 **각진 솔리드 블록 스크롤바**를 사용한다 (둥근 모서리 금지).

- 너비/높이: 10px
- thumb: `var(--color-primary)` (#1a1c1c) — 깜빡이는 커서와 동일 색
- thumb hover: `#000000`
- track: `var(--color-outline-variant)`
- `border-radius: 0` 강제, 좌측 1px 테두리로 레트로 청크 느낌
- Firefox: `scrollbar-width: thin`, `scrollbar-color: primary outline-variant`
- 인쇄 시 `display: none`으로 숨김

## 헤더 커서 표시 규칙

상단 헤더의 `ISO ARCHIVE : 이소현` 옆 깜빡이는 커서는 **메인 페이지(`/`)에서만 노출**한다. 상세 페이지에서는 breadcrumb 옆에 별도 커서가 있으므로 헤더 커서를 숨겨 시각적 중복을 피한다.

## 사이트 구조 (필수)

이 사이트는 **메인 / 상세 두 화면**으로 구성된다. 좌측 사이드바·상단 헤더·하단 액션바는 두 화면이 공유하며, **메인 콘텐츠 영역만 화면별로 달라진다**.

- **메인** (`/`) — 컴팩트 카드 리스트. 카드는 [ CONCEPT ] + [ STACK ]만 보여주며 우측에 화살표 아이콘.
- **상세** (`/projects/[slug]/`) — 한 프로젝트의 모든 정보. Hero(메타) → Tech Stack → Concept/Goal → Implementation → Challenges/Solutions → Learnings → Prev/Next 네비.
- 사이드바의 프로젝트 항목과 메인의 카드 모두 클릭 시 상세 페이지로 라우팅한다.
- 사이드바는 `usePathname()`으로 현재 활성 프로젝트를 자동 하이라이트한다.
- 상단 터미널 path는 페이지에 따라 달라진다 (`$ ls /sys/archive/` ↔ `$ cd /sys/archive/projects/{slug}`).
- 정적 export 환경이므로 `app/projects/[slug]/page.tsx`는 `generateStaticParams()`로 모든 슬러그를 미리 빌드한다.

## 콘텐츠 규칙

- 프로젝트 섹션은 **각 프로젝트 카드 클릭 시 해당 프로젝트의 상세 페이지로 이동**해야 한다.
- 상세 페이지의 Repository 영역에서 실제 GitHub 레포로 외부 링크를 제공한다.
- 각 프로젝트 카드는 다음 7개 항목을 모두 포함한다 (이 사이트는 "기록"이 목적이라 만들 당시의 맥락 전체를 보여줘야 한다):
  1. **컨셉** — 어떤 아이디어/맥락에서 출발한 프로젝트인가
  2. **목표** — 만들 당시 무엇을 이루고자 했나
  3. **사용 기술** — 핵심 스택과 라이브러리 (강조된 pill 스타일)
  4. **한 일** — 실제 수행한 작업 (불릿)
  5. **고민** — 부딪힌 문제/구조적 어려움
  6. **해결** — 어떻게 풀었는가
  7. **배운점** — 이 프로젝트로 체득한 것 (불릿)
- 새 프로젝트 추가 시에도 위 7개 항목을 모두 채운다. 비워두지 않는다.
- 기술 스택은 "사용 기술" 한 곳에서만 노출한다 (별도 태그 row를 추가해 중복시키지 않는다).
- Contact 섹션의 이메일은 `mailto:`, GitHub 핸들은 프로필 URL로 연결한다.
