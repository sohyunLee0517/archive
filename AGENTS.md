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

## 콘텐츠 규칙

- 프로젝트 섹션은 **각 프로젝트 카드 클릭 시 해당 GitHub 레포로 이동**해야 한다.
- 각 프로젝트 카드는 다음 7개 항목을 모두 포함한다 (이 사이트는 "기록"이 목적이라 만들 당시의 맥락 전체를 보여줘야 한다):
  1. **컨셉** — 어떤 아이디어/맥락에서 출발한 프로젝트인가
  2. **목표** — 만들 당시 무엇을 이루고자 했나
  3. **사용 기술** — 핵심 스택과 라이브러리 (pill 형태로 시각화)
  4. **한 일** — 실제 수행한 작업 (불릿)
  5. **고민** — 부딪힌 문제/구조적 어려움
  6. **해결** — 어떻게 풀었는가
  7. **얻은 것** — 이 프로젝트로 체득한 것 (불릿)
- 새 프로젝트 추가 시에도 위 7개 항목을 모두 채운다. 비워두지 않는다.
- Contact 섹션의 이메일은 `mailto:`, GitHub 핸들은 프로필 URL로 연결한다.
