import ShareBar from "@/components/ShareBar";

const GITHUB_USER = "sohyunLee0517";
const EMAIL = "nonlyito@gmail.com";

type Project = {
  name: string;
  repo: string;
  period: string;
  summary: string;
  work: string[];
  challenge: string;
  solution: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    name: "하루패스 (harupass)",
    repo: "harupass",
    period: "2026",
    summary: "관리자/관리대상 역할이 분리된 미션 관리 Flutter 앱",
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
    tags: ["Flutter", "Firebase", "Riverpod", "Melos"],
  },
  {
    name: "야구 통계 (baseballStat)",
    repo: "baseballStat",
    period: "2026",
    summary: "선수 통계와 인증 시스템을 갖춘 야구 기록 서비스",
    work: [
      "Next.js + Prisma + Resend 기반 인증 흐름 구축",
      "이메일 인증 / 아이디 찾기 / 비밀번호 재설정 전 과정 구현",
      "선수 프로필 API + 기록 페이지",
    ],
    challenge:
      "VerificationToken을 Member에 FK로 묶었더니, 가입 도중 임시 토큰을 발급할 수 없는 구조적 문제가 발생.",
    solution:
      "VerificationToken에서 FK 제약을 제거하고 placeholder memberId를 허용하도록 스키마 리팩터. 인증 코드 기반으로 비번 재설정 플로우를 토큰 방식에서 코드 방식으로 단순화.",
    tags: ["Next.js", "Prisma", "Resend", "Auth"],
  },
  {
    name: "우리집 캘린더 (woorijib-calendar)",
    repo: "woorijib-calendar",
    period: "2026",
    summary: "PWA + Android TWA로 배포 가능한 가족 공유 캘린더",
    work: [
      "Next.js 기반 캘린더에 PWA 매니페스트·서비스 워커 통합",
      "Bubblewrap으로 Android TWA(Trusted Web Activity) AAB 빌드",
      "도메인 표기 통일 및 manifest 형식 호환성 개선",
    ],
    challenge:
      "PWA를 별도 네이티브 빌드 없이 Play Store에 올리고 싶었지만, manifest 형식(`.json`/`.webmanifest`)이 Next.js와 TWA에서 요구하는 게 달라 충돌이 잦았다.",
    solution:
      "manifest 위치/형식을 한 가지로 통일하고 RegisterServiceWorker 컴포넌트로 SW 등록을 명시화. TWA 초기화/빌드 스크립트를 별도 분리해 웹/안드로이드 두 트랙을 동시에 유지.",
    tags: ["Next.js", "PWA", "TWA", "Bubblewrap"],
  },
  {
    name: "각도기 앱 (protractor_app)",
    repo: "protractor_app",
    period: "2026",
    summary: "카메라로 실제 각도를 측정하는 Flutter 도구 앱 (Play Store 출시)",
    work: [
      "Flutter CustomPainter로 각도 시각화 + 제스처 처리",
      "Play Store 출시용 release signing 구성 + AAB 빌드",
    ],
    challenge:
      "Google Play Families Policy 심사에서 메타데이터·크래시 이슈로 거부당함.",
    solution:
      "앱 라벨을 영문 언더스코어 표기에서 한글 '각도기'로 변경, previewSize의 `!!` 강제 언래핑을 null-safe 접근으로 교체, 제스처 변수에 디폴트 값 부여, `shouldRepaint`를 필드 비교로 최적화. 재심사 통과.",
    tags: ["Flutter", "Play Store", "CustomPainter"],
  },
  {
    name: "우정의 온도 (woojung-event)",
    repo: "woojung-event",
    period: "2026",
    summary: "Host/Viewer가 실시간으로 연결되는 WebRTC 게임 이벤트 앱",
    work: [
      "Host/Viewer 분리된 WebRTC 시그널링 + 스트림 관리",
      "RANKING 단계 + tap score 게임 로직 + 커스텀 GameAlert",
      "참여자 수 기반 온도 게이지 밸런싱",
    ],
    challenge:
      "참가자 수가 늘어나면 영상 품질이 들쑥날쑥하고, 음성 피드백·노이즈 때문에 진행이 어려웠다.",
    solution:
      "outgoing bitrate 제어로 송출 품질을 균일화, getUserMedia에 `echoCancellation`·`noiseSuppression` 적용. 참가자 수에 따라 온도 가중치를 동적으로 조정해 게임 밸런스 확보.",
    tags: ["WebRTC", "Next.js", "실시간"],
  },
  {
    name: "야구 스코어보드 (baseball-scoreboard)",
    repo: "baseball-scoreboard",
    period: "2026",
    summary: "사회인 야구 경기를 위한 점수판 + 선수 기록 관리",
    work: [
      "편집 가능한 게임 제목 / 동적 점수 입력 / 선수 프로필 연동",
      "등록되지 않은 임시 선수도 입력 가능한 '직접 입력' 옵션",
      "작은 화면 대응 반응형 레이아웃",
    ],
    challenge:
      "정식 등록되지 않은 임시 선수를 다루지 못해 실제 경기에서 사용성이 떨어졌다.",
    solution:
      "선수 선택 드롭다운에 '기타(직접 입력)' 옵션을 추가해 즉석 입력 허용. 등록 선수가 없을 때도 안내 메시지로 자연스럽게 수동 입력으로 유도.",
    tags: ["TypeScript", "React"],
  },
  {
    name: "네온 피젯 스피너 (spinner)",
    repo: "spinner",
    period: "2026",
    summary: "물리 기반 회전감을 살린 정적 인터랙션 사이트",
    work: [
      "easing 함수 (`easeWarpFastStart`)를 직접 작성해 초반 가속감 강화",
      "CSS 네온 글로우와 회전 애니메이션 결합",
    ],
    challenge:
      "기본 easing으로는 '튕기듯 시작해서 천천히 멈추는' 손맛이 나오지 않았다.",
    solution:
      "표준 easing을 그대로 쓰지 않고, 초반 가속이 더 강한 커스텀 함수로 교체. 결과 텍스트 노출 등 불필요한 UI를 줄여 회전 자체에 집중하도록 정리.",
    tags: ["JavaScript", "Animation"],
  },
  {
    name: "이 사이트 (archive)",
    repo: "archive",
    period: "2026",
    summary: "지금 보고 계신 포트폴리오 — Next.js + GitHub Pages",
    work: [
      "정적 export + GitHub Actions 자동 배포 파이프라인",
      "PDF 다운로드 / 카카오톡 공유 / 링크 공유 / 프린트 4종 액션",
      "인쇄 시 액션바 숨김·페이지 분할 방지·URL 노출 등 print CSS 정리",
    ],
    challenge:
      "iCloud로 코드를 동기화하면 다른 컴퓨터에서 `node_modules`가 깨지는 문제와, 카카오 공유 4019 검증 이슈가 동시에 발생했다.",
    solution:
      "코드 동기화는 GitHub로 일원화하고 비밀 값만 별도 관리. 카카오 SDK는 SDK 초기화 / 도메인 등록 / 제품 링크 관리 단계를 분리해 차근차근 검증.",
    tags: ["Next.js 16", "GitHub Pages", "Tailwind"],
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 print:bg-white print:text-black">
      <ShareBar />

      <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-20 print:py-0">
        <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-800 print:border-zinc-400">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            iso archive
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            이소현
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
            만든 것들을 모아둔 작은 저장소
          </p>
        </header>

        <Section title="About">
          <p className="leading-7 text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
            웹과 모바일을 넘나들며 직접 손으로 만들고, 부딪힌 문제를
            기록하면서 다듬어가는 개발자입니다. Next.js, Flutter, Firebase,
            Prisma 같은 도구를 즐겨 쓰고, 사용자가 실제로 닿는 자리에서
            매끄럽게 동작하는 결과물을 만드는 데 관심이 있습니다.
          </p>
        </Section>

        <Section title="Projects">
          <ul className="space-y-8">
            {PROJECTS.map((p) => (
              <ProjectItem key={p.repo} project={p} />
            ))}
          </ul>
        </Section>

        <Section title="Contact">
          <ul className="space-y-1 text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
            <li>
              Email ·{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="underline-offset-4 hover:underline print:no-underline"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              GitHub ·{" "}
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline print:no-underline"
              >
                {GITHUB_USER}
              </a>
              <span className="hidden print:inline text-zinc-500">
                {" "}
                (https://github.com/{GITHUB_USER})
              </span>
            </li>
          </ul>
        </Section>

        <footer className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 print:border-zinc-400">
          © {new Date().getFullYear()} 이소현
        </footer>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 break-inside-avoid">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const url = `https://github.com/${GITHUB_USER}/${project.repo}`;
  return (
    <li className="break-inside-avoid">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 print:border-zinc-300 print:bg-white print:p-3 print:shadow-none"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-medium group-hover:underline print:no-underline">
            {project.name}
          </h3>
          <span className="shrink-0 text-sm text-zinc-500">
            {project.period}
          </span>
        </div>

        <p className="mt-1 text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
          {project.summary}
        </p>

        <p className="mt-1 text-xs text-zinc-500 print:text-zinc-600">
          github.com/{GITHUB_USER}/{project.repo}
        </p>

        <div className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
          <div>
            <span className="font-medium text-zinc-500 print:text-zinc-600">
              한 일
            </span>
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
              {project.work.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-medium text-zinc-500 print:text-zinc-600">
              고민
            </span>
            <p className="mt-1 leading-6">{project.challenge}</p>
          </div>
          <div>
            <span className="font-medium text-zinc-500 print:text-zinc-600">
              해결
            </span>
            <p className="mt-1 leading-6">{project.solution}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 print:border-zinc-300 print:text-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </li>
  );
}
