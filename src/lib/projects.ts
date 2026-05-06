export const GITHUB_USER = "sohyunLee0517";
export const EMAIL = "nonlyito@gmail.com";

export type Project = {
  name: string;
  repo: string;
  period: string;
  summary: string;
  concept: string;
  goal: string;
  tech: string[];
  work: string[];
  challenge: string;
  solution: string;
  takeaways: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "하루패스 (harupass)",
    repo: "harupass",
    period: "2026 — PRESENT",
    summary: "관리자/관리대상 역할이 분리된 미션 관리 Flutter 앱",
    concept:
      "하루 단위로 목표를 정하고 누군가가 그 수행을 검수해주는 미션 패스. 학습·습관·관리 영역에서 두루 쓰일 수 있도록 일반화.",
    goal: "두 종류의 사용자(관리자·관리대상)가 같은 앱 안에서 명확히 분리된 경험을 갖되, 코드는 한 군데서 관리되도록 한다.",
    tech: ["Flutter", "Firebase", "Riverpod", "go_router", "Melos"],
    work: [
      "Melos 모노레포 → 단일 앱 통합 + 역할 선택 온보딩",
      "Firebase Auth + Firestore + Riverpod + go_router 기반 인증·라우팅",
      "관리자 대시보드(미션관리·검수·통계) / 관리대상 미션 홈(진행률·리스트)",
      "shared 모델 + 위젯 테스트 62개 작성",
    ],
    challenge:
      "초기에 admin_app/subject_app으로 분리했더니 공유 코드 동기화 비용이 크고, json_serializable 빌드 러너가 자주 깨졌다.",
    solution:
      "두 앱을 하나로 합치고 역할 선택 온보딩으로 분기. 자동 직렬화 코드젠 의존성을 제거하고 fromJson/toJson을 수동 구현해 빌드 안정화.",
    takeaways: [
      "모노레포의 실제 비용 — 공유 코드 동기화는 생각보다 비싸다",
      "자동 코드젠 과의존은 환경별 빌드 안정성을 해칠 수 있다",
      "역할 기반 라우팅 설계 + Riverpod StateNotifier 운용 패턴",
      "위젯 테스트로 회귀 방지 흐름 자리잡기",
    ],
  },
  {
    name: "야구 통계 (baseballStat)",
    repo: "baseballStat",
    period: "2026",
    summary: "선수 통계와 인증 시스템을 갖춘 야구 기록 서비스",
    concept:
      "동아리·사회인 야구팀의 선수 통계와 경기 기록을 한 곳에서 가볍게 관리할 수 있는 웹 서비스.",
    goal: "회원가입·인증·복구 흐름을 직접 끝까지 구현해, 실제 운영 가능한 수준의 인증 시스템을 만들어본다.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Resend"],
    work: [
      "Next.js + Prisma + Resend 기반 인증 흐름 구축",
      "이메일 인증 / 아이디 찾기 / 비밀번호 재설정 전 과정 구현",
      "선수 프로필 API + 기록 페이지",
    ],
    challenge:
      "VerificationToken을 Member에 FK로 묶었더니, 가입 도중 임시 토큰을 발급할 수 없는 구조적 문제가 발생.",
    solution:
      "VerificationToken에서 FK 제약을 제거하고 placeholder memberId를 허용하도록 스키마 리팩터. 인증 코드 기반으로 비번 재설정 플로우를 토큰 방식에서 코드 방식으로 단순화.",
    takeaways: [
      "인증 시스템의 엣지 케이스(가입 중간 토큰, 미인증 이메일 만료)를 체득",
      "Prisma 스키마 설계가 비즈니스 흐름에 직접 영향을 준다는 감각",
      "외부 메일 서비스(Resend) 연동과 환경변수 관리",
    ],
  },
  {
    name: "우리집 캘린더 (woorijib-calendar)",
    repo: "woorijib-calendar",
    period: "2026",
    summary: "PWA + Android TWA로 배포 가능한 가족 공유 캘린더",
    concept:
      "가족 구성원이 일정을 한곳에서 보고 추가하는 공유 캘린더. 별도 앱 다운로드 없이도 모바일 첫 화면에 둘 수 있도록 PWA로.",
    goal: "웹 한 코드베이스로 PWA + Android Play Store 설치까지 모두 가능하게 만든다.",
    tech: ["Next.js", "PWA", "Service Worker", "Bubblewrap", "TWA"],
    work: [
      "Next.js 기반 캘린더에 PWA 매니페스트·서비스 워커 통합",
      "Bubblewrap으로 Android TWA(Trusted Web Activity) AAB 빌드",
      "도메인 표기 통일 및 manifest 형식 호환성 개선",
    ],
    challenge:
      "PWA를 별도 네이티브 빌드 없이 Play Store에 올리고 싶었지만, manifest 형식(.json/.webmanifest)이 Next.js와 TWA에서 요구하는 게 달라 충돌이 잦았다.",
    solution:
      "manifest 위치/형식을 한 가지로 통일하고 RegisterServiceWorker 컴포넌트로 SW 등록을 명시화. TWA 초기화/빌드 스크립트를 별도 분리해 웹/안드로이드 두 트랙을 동시에 유지.",
    takeaways: [
      "PWA의 진짜 한계와 가능성을 직접 확인",
      "TWA로 웹 앱을 Play Store에 올리는 전체 흐름 경험",
      "매니페스트 형식 차이로 인한 호환성 처리 패턴",
    ],
  },
  {
    name: "각도기 앱 (protractor_app)",
    repo: "protractor_app",
    period: "2026",
    summary: "카메라로 실제 각도를 측정하는 Flutter 앱 (Play Store 출시)",
    concept:
      "종이 각도기 대신 스마트폰 카메라로 사물의 각도를 잴 수 있는 도구.",
    goal: "작은 기능이라도 끝까지 마무리해 실제 사용자에게 닿게 한다 — Play Store 출시까지.",
    tech: ["Flutter", "CustomPainter", "Camera", "Android Signing"],
    work: [
      "Flutter CustomPainter로 각도 시각화 + 제스처 처리",
      "Play Store 출시용 release signing 구성 + AAB 빌드",
    ],
    challenge:
      "Google Play Families Policy 심사에서 메타데이터·크래시 이슈로 거부당함.",
    solution:
      "앱 라벨을 영문 언더스코어 표기에서 한글 '각도기'로 변경, previewSize의 강제 언래핑을 null-safe 접근으로 교체, 제스처 변수에 디폴트 값 부여, shouldRepaint를 필드 비교로 최적화. 재심사 통과.",
    takeaways: [
      "Play Store Families Policy의 까다로움과 메타데이터 중요성",
      "null safety가 실제 크래시 방지에 어떻게 기여하는지 체감",
      "출시 라이프사이클(서명·AAB·심사·거부·재제출) 전 과정 경험",
    ],
  },
  {
    name: "우정의 온도 (woojung-event)",
    repo: "woojung-event",
    period: "2026",
    summary: "Host/Viewer가 실시간으로 연결되는 WebRTC 게임 이벤트 앱",
    concept:
      "한 호스트와 다수의 시청자가 한 화면에서 함께 만들어가는 실시간 게임 이벤트.",
    goal: "WebRTC를 직접 다뤄 시그널링부터 미디어 트랙 제어까지 손으로 구현한다.",
    tech: ["WebRTC", "Next.js", "TypeScript", "getUserMedia"],
    work: [
      "Host/Viewer 분리된 WebRTC 시그널링 + 스트림 관리",
      "RANKING 단계 + tap score 게임 로직 + 커스텀 GameAlert",
      "참여자 수 기반 온도 게이지 밸런싱",
    ],
    challenge:
      "참가자 수가 늘어나면 영상 품질이 들쑥날쑥하고, 음성 피드백·노이즈 때문에 진행이 어려웠다.",
    solution:
      "outgoing bitrate 제어로 송출 품질을 균일화, getUserMedia에 echoCancellation·noiseSuppression 적용. 참가자 수에 따라 온도 가중치를 동적으로 조정해 게임 밸런스 확보.",
    takeaways: [
      "WebRTC 시그널링·미디어 트랙·bitrate 제어 직접 구현",
      "다인 환경에서의 오디오 피드백 처리 노하우",
      "게임 페이즈 상태머신 설계 경험",
    ],
  },
  {
    name: "야구 스코어보드 (baseball-scoreboard)",
    repo: "baseball-scoreboard",
    period: "2026",
    summary: "사회인 야구 경기를 위한 점수판 + 선수 기록 관리",
    concept: "사회인 야구 경기에서 종이 점수판 대신 모바일로 가볍게 관리.",
    goal: "정식 등록되지 않은 임시 선수도 자연스럽게 입력 가능한 '느슨한' 데이터 입력 UX 만들기.",
    tech: ["TypeScript", "React", "REST API"],
    work: [
      "편집 가능한 게임 제목 / 동적 점수 입력 / 선수 프로필 연동",
      "등록되지 않은 임시 선수도 입력 가능한 '직접 입력' 옵션",
      "작은 화면 대응 반응형 레이아웃",
    ],
    challenge:
      "정식 등록되지 않은 임시 선수를 다루지 못해 실제 경기에서 사용성이 떨어졌다.",
    solution:
      "선수 선택 드롭다운에 '기타(직접 입력)' 옵션을 추가해 즉석 입력 허용. 등록 선수가 없을 때도 안내 메시지로 자연스럽게 수동 입력으로 유도.",
    takeaways: [
      "정식/임시 데이터를 같은 UI에서 자연스럽게 다루는 패턴",
      "현장에서 들고 쓰는 환경(작은 화면, 잦은 입력)에서의 반응형 설계",
    ],
  },
  {
    name: "네온 피젯 스피너 (spinner)",
    repo: "spinner",
    period: "2026",
    summary: "물리 기반 회전감을 살린 정적 인터랙션 사이트",
    concept: "손가락으로 튕기듯 회전시키는 피젯 스피너의 손맛을 웹에서 재현.",
    goal: "라이브러리 없이 순수 CSS/JS만으로 회전감과 비주얼을 끝까지 다듬어보기.",
    tech: ["Vanilla JS", "CSS Animation", "Custom Easing"],
    work: [
      "easing 함수 (easeWarpFastStart) 직접 작성해 초반 가속감 강화",
      "CSS 네온 글로우와 회전 애니메이션 결합",
    ],
    challenge:
      "기본 easing으로는 '튕기듯 시작해서 천천히 멈추는' 손맛이 나오지 않았다.",
    solution:
      "표준 easing을 그대로 쓰지 않고, 초반 가속이 더 강한 커스텀 함수로 교체. 결과 텍스트 노출 등 불필요한 UI를 줄여 회전 자체에 집중하도록 정리.",
    takeaways: [
      "표준 easing의 한계와 직접 함수를 만들 때의 자유도",
      "시각적 디테일(네온 글로우)이 인터랙션 만족도에 주는 영향",
    ],
  },
  {
    name: "이 사이트 (archive)",
    repo: "archive",
    period: "2026",
    summary: "지금 보고 있는 포트폴리오 — Next.js + GitHub Pages",
    concept: "화려하지 않게, 만든 것들을 그대로 모아두는 책장 같은 포트폴리오.",
    goal: "PDF로 출력해서 종이 이력서로도 쓸 수 있을 만큼 깔끔한 문서형 사이트.",
    tech: ["Next.js 16", "React 19", "Tailwind 4", "GitHub Actions", "Kakao SDK"],
    work: [
      "정적 export + GitHub Actions 자동 배포 파이프라인",
      "PDF 다운로드 / 카카오톡 공유 / 링크 공유 / 프린트 4종 액션",
      "인쇄 시 액션바 숨김·페이지 분할 방지·URL 노출 등 print CSS 정리",
      "터미널 + 파일시스템 컨셉 디자인 (Stitch 기반)",
    ],
    challenge:
      "iCloud 동기화로 인한 node_modules 깨짐과 카카오 공유 4019 검증 이슈가 동시에 발생.",
    solution:
      "코드 동기화는 GitHub로 일원화하고 비밀 값만 별도 관리. 카카오 SDK는 SDK 초기화 / 도메인 등록 / 제품 링크 관리 단계를 분리해 차근차근 검증.",
    takeaways: [
      "정적 export + GitHub Pages 자동 배포 파이프라인 직접 구성",
      "인쇄 CSS 디테일 (@page, break-inside-avoid, URL 노출)",
      "카카오 SDK의 검증 단계를 단계별로 분리해 디버깅하는 법",
      "Next.js 16 + React 19 새 버전 사용 경험",
    ],
  },
];

export function getProjectIndex(repo: string): number {
  return PROJECTS.findIndex((p) => p.repo === repo);
}

export function fileName(repo: string, index: number): string {
  return `${String(index + 1).padStart(2, "0")}_${repo}.sh`;
}
