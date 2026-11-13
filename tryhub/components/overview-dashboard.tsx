import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  Check,
  CircleAlert,
  Clock3,
  Compass,
  ExternalLink,
  Instagram,
  PackageCheck,
  Plus,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
} from "lucide-react";
import { DashboardHeader, FilterButton } from "@/components/dashboard-header";
import { Sidebar } from "@/components/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoCampaigns, snapshotLabel } from "@/lib/demo-data";

const summaryCards = [
  { label: "무신사 모집 중", value: "350", detail: "현재 확인된 전체 공고", icon: Store, tone: "mint", trend: "모집 상태 OPEN" },
  { label: "레벨 조건 미충족", value: "350", detail: "최소 회원 등급 2 필요", icon: CircleAlert, tone: "amber", trend: "내 등급 · 레벨 1" },
  { label: "외부 샘플", value: "3", detail: "계정 조건 확인이 필요해요", icon: PackageCheck, tone: "blue", trend: "리뷰플레이스 · 클라우드리뷰 · INGRAM" },
  { label: "등록한 리뷰 일정", value: "0", detail: "아직 연결된 일정이 없어요", icon: CalendarClock, tone: "violet", trend: "리뷰 캘린더" },
] as const;

const deadlines = [
  { day: "15", month: "NOV", title: "신라금관 생초콜릿 4구", platform: "클라우드리뷰", tone: "peach" },
  { day: "18", month: "NOV", title: "1등급 미한우 샘플러", platform: "리뷰플레이스", tone: "mint" },
  { day: "19", month: "NOV", title: "램스울 니트 비니", platform: "무신사 · 레벨 조건 미충족", tone: "slate" },
];

function SummaryCard({ card }: { card: (typeof summaryCards)[number] }) {
  const Icon = card.icon;
  return (
    <Card className="summary-card">
      <CardContent className="summary-card-content">
        <div className="summary-topline">
          <span className="summary-label">{card.label}</span>
          <span className={`summary-icon summary-icon-${card.tone}`}><Icon size={17} strokeWidth={1.9} /></span>
        </div>
        <div className="summary-value-row"><strong className="summary-value">{card.value}</strong><span className="summary-unit">건</span></div>
        <p className="summary-detail">{card.detail}</p>
        <div className="summary-footnote"><span className={`status-dot dot-${card.tone}`} />{card.trend}</div>
      </CardContent>
    </Card>
  );
}

function CampaignRows() {
  return (
    <div className="campaign-rows">
      {demoCampaigns.map((campaign) => (
        <article className="campaign-row" key={campaign.id}>
          <div className={`campaign-logo logo-${campaign.platform.toLowerCase().replace(/[^a-z0-9]/g, "")}`} aria-hidden="true">
            {campaign.platform === "INGRAM" ? <Instagram size={17} /> : campaign.platform.slice(0, 1)}
          </div>
          <div className="campaign-main">
            <div className="campaign-title-line"><span className="campaign-platform">{campaign.platform}</span><span className="campaign-category">{campaign.category}</span></div>
            <a className="campaign-title" href={campaign.href} target="_blank" rel="noreferrer">{campaign.title}<ExternalLink size={13} /></a>
            <span className="campaign-format">{campaign.format}</span>
          </div>
          <div className="campaign-reward"><small>제공 내역</small><strong>{campaign.reward}</strong></div>
          <div className="campaign-deadline"><small>신청 마감</small><strong>{campaign.deadline}</strong></div>
          <div className="campaign-status"><Badge variant={campaign.statusTone}>{campaign.status}</Badge><small>{campaign.eligibility}</small></div>
        </article>
      ))}
    </div>
  );
}

function DeadlineList() {
  return (
    <div className="deadline-list">
      {deadlines.map((item, index) => (
        <div className="deadline-row" key={item.title}>
          <div className={`deadline-date deadline-${item.tone}`}><strong>{item.day}</strong><span>{item.month}</span></div>
          <div className="deadline-info"><strong>{item.title}</strong><span>{item.platform}</span></div>
          <span className={`deadline-line ${index === deadlines.length - 1 ? "deadline-line-last" : ""}`} />
        </div>
      ))}
    </div>
  );
}

export function OverviewDashboard() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-column">
        <DashboardHeader />
        <main className="dashboard-main" id="overview">
          <div className="page-heading">
            <div>
              <div className="page-kicker"><span className="live-indicator" />{snapshotLabel}</div>
              <h1>체험단 기회, <span>한곳에서.</span></h1>
              <p>조건에 맞는 모집을 찾고, 신청과 리뷰 일정을 이어서 관리하세요.</p>
            </div>
            <Button asChild className="primary-action"><Link href="#campaigns"><Compass size={16} />캠페인 둘러보기<ArrowRight size={16} /></Link></Button>
          </div>

          <div className="snapshot-notice" role="note">
            <CircleAlert size={16} />
            <span>현재 화면은 조사 데이터를 담은 데모입니다. 플랫폼을 실시간으로 수집하거나 신청을 제출하지 않습니다.</span>
            <span className="snapshot-notice-date">2026.11.13 확인</span>
          </div>

          <section className="summary-grid" aria-label="요약">
            {summaryCards.map((card) => <SummaryCard key={card.label} card={card} />)}
          </section>

          <section className="main-grid">
            <div className="main-stack">
              <Card className="campaign-card" id="campaigns">
                <CardHeader className="section-card-header">
                  <div>
                    <div className="section-eyebrow">CAMPAIGN EXPLORER</div>
                    <CardTitle className="section-title">지금 확인할 캠페인</CardTitle>
                    <p className="section-subtitle">모집 중인 샘플을 조건과 마감일 기준으로 모았어요.</p>
                  </div>
                  <div className="section-actions"><FilterButton /><Button variant="ghost" size="sm" asChild><Link href="#campaigns">전체 보기<ArrowRight size={15} /></Link></Button></div>
                </CardHeader>
                <CardContent className="campaign-card-content">
                  <div className="table-head"><span>캠페인</span><span>제공 내역</span><span>마감일</span><span>자격 상태</span></div>
                  <CampaignRows />
                  <div className="data-source-note"><ShieldCheck size={14} />신청 자격과 결제 조건이 공개되지 않은 항목은 확인 필요로 표시합니다.</div>
                </CardContent>
              </Card>

              <Card className="eligibility-card" id="applications">
                <div className="eligibility-icon"><ShieldCheck size={20} /></div>
                <div className="eligibility-copy">
                  <div className="eligibility-topline"><span className="section-eyebrow">ELIGIBILITY CHECK</span><Badge variant="danger">무신사 · 신청 불가</Badge></div>
                  <h2>현재 레벨로 신청 가능한 무신사 공고가 없어요.</h2>
                  <p>확인된 모집 350개 모두 최소 회원 등급 2를 요구합니다. 등급이 올라가면 다시 조건을 확인할 수 있도록 준비할게요.</p>
                </div>
                <div className="eligibility-levels"><div><span>내 등급</span><strong>LEVEL 1</strong></div><ArrowRight size={16} /><div><span>필요 등급</span><strong>LEVEL 2+</strong></div></div>
              </Card>

              <Card className="social-card" id="sns">
                <div className="social-card-copy">
                  <div className="social-icon"><Instagram size={18} /></div>
                  <div><CardTitle className="small-card-title">내 채널을 연결해 추천을 구체화하세요</CardTitle><p>블로그와 SNS 정보가 있으면 채널 미션이 맞는 공고를 먼저 볼 수 있어요.</p></div>
                </div>
                <Button variant="outline" size="sm" disabled><Plus size={15} />SNS 연결 준비 중</Button>
              </Card>
            </div>

            <aside className="side-stack" aria-label="추천 및 일정">
              <Card className="recommendation-card" id="recommendations">
                <div className="recommendation-orb orb-one" /><div className="recommendation-orb orb-two" />
                <CardContent className="recommendation-content">
                  <div className="recommendation-tag"><Sparkles size={14} /> TRYHUB INSIGHT</div>
                  <h2>레벨 조건을 먼저 걸러냈어요.</h2>
                  <p>무신사 350개 공고는 레벨 2 이상이 필요합니다. 지금은 외부 공고 중 추가 결제 조건이 확인되지 않은 이벤트부터 살펴보세요.</p>
                  <div className="recommendation-divider" />
                  <div className="recommendation-signal"><span className="signal-check"><Check size={13} /></span><span><strong>우선 확인</strong><small>무료 배송 · 구매 미션 없는 공고</small></span></div>
                  <div className="recommendation-signal"><span className="signal-check signal-check-muted"><ArrowDownRight size={13} /></span><span><strong>보류</strong><small>선구매 후 페이백 조건이 있는 공고</small></span></div>
                  <Button variant="secondary" className="recommendation-button" asChild><Link href="#campaigns">추천 기준 보기<ArrowRight size={15} /></Link></Button>
                  <span className="recommendation-footnote">당첨 확률은 예측하지 않습니다.</span>
                </CardContent>
              </Card>

              <Card className="calendar-card" id="calendar">
                <CardHeader className="compact-card-header">
                  <div><div className="section-eyebrow">UPCOMING DEADLINES</div><CardTitle className="small-card-title">다가오는 마감</CardTitle></div>
                  <Button variant="ghost" size="icon" aria-label="일정 모두 보기"><ArrowUpRight size={17} /></Button>
                </CardHeader>
                <CardContent className="calendar-content"><DeadlineList /><p className="calendar-footnote"><Clock3 size={14} />모집 마감 일정 샘플 · 마감 전 알림은 아직 연결되지 않았어요.</p></CardContent>
              </Card>

              <Card className="platform-card" id="platforms">
                <CardHeader className="compact-card-header">
                  <div><div className="section-eyebrow">PLATFORM MANAGER</div><CardTitle className="small-card-title">플랫폼 연결</CardTitle></div>
                  <Badge variant="neutral">0 / 12 연결</Badge>
                </CardHeader>
                <CardContent>
                  <div className="platform-status-row"><span className="platform-status-icon musinsa-icon">M</span><span><strong>무신사</strong><small>조사 스냅샷 · 실시간 연결 전</small></span><Badge variant="outline">대기 중</Badge></div>
                  <div className="platform-status-row"><span className="platform-status-icon plus-icon"><Plus size={16} /></span><span><strong>다른 플랫폼</strong><small>레뷰 · 리뷰노트 · 리뷰플레이스 등</small></span><Badge variant="outline">준비 중</Badge></div>
                  <Button variant="outline" size="sm" className="platform-manage-button" disabled><Store size={15} />플랫폼 설정 준비 중</Button>
                </CardContent>
              </Card>

              <Card className="approval-card" id="settings">
                <div className="approval-icon"><BadgeCheck size={18} /></div>
                <div><strong>신청 전에는 항상 확인을 받아요</strong><p>신청서와 제출 정보는 승인 전까지 외부로 전송되지 않습니다.</p></div>
              </Card>
            </aside>
          </section>

          <footer className="dashboard-footer"><span>TRYHUB · 개인용 체험단 워크스페이스</span><span><Truck size={14} />공개 모집 샘플을 바탕으로 한 데모 화면</span></footer>
        </main>
      </div>
    </div>
  );
}
