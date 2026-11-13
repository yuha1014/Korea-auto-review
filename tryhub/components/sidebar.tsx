import Link from "next/link";
import {
  Aperture,
  Bell,
  CalendarDays,
  ClipboardCheck,
  Compass,
  LayoutDashboard,
  Settings2,
  Sparkles,
  Store,
  UserRound,
  Instagram,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type NavItem = { label: string; href: string; icon: LucideIcon; ready?: boolean };

const primaryItems: NavItem[] = [
  { label: "Overview", href: "#overview", icon: LayoutDashboard, ready: true },
  { label: "Campaign Explorer", href: "#campaigns", icon: Compass, ready: true },
  { label: "AI Recommendations", href: "#recommendations", icon: Sparkles, ready: true },
  { label: "Applications", href: "#applications", icon: ClipboardCheck, ready: true },
  { label: "Review Calendar", href: "#calendar", icon: CalendarDays, ready: true },
];

const manageItems: NavItem[] = [
  { label: "My SNS", href: "#sns", icon: Instagram },
  { label: "Platform Manager", href: "#platforms", icon: Store },
  { label: "Settings", href: "#settings", icon: Settings2 },
];

function NavLink({ item, active = false }: { item: NavItem; active?: boolean }) {
  const Icon = item.icon;
  return (
    <Link className={`nav-link${active ? " nav-link-active" : ""}`} href={item.href} aria-current={active ? "page" : undefined}>
      <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
      <span>{item.label}</span>
      {!item.ready && <span className="nav-soon">준비 중</span>}
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="주요 메뉴">
      <Link className="brand-lockup" href="#overview" aria-label="TRYHUB 홈">
        <span className="brand-mark"><Aperture size={20} strokeWidth={2.2} /></span>
        <span className="brand-name">tryhub<span>.</span></span>
      </Link>

      <div className="workspace-pill">
        <span className="workspace-avatar">Y</span>
        <span className="workspace-copy"><strong>개인 워크스페이스</strong><small>Creator plan</small></span>
        <span className="workspace-caret" aria-hidden="true">⌄</span>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-label">WORKSPACE</p>
        <div className="nav-group">{primaryItems.map((item, index) => <NavLink key={item.label} item={item} active={index === 0} />)}</div>
        <p className="nav-label nav-label-spaced">MANAGE</p>
        <div className="nav-group">{manageItems.map((item) => <NavLink key={item.label} item={item} />)}</div>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-note">
          <div className="sidebar-note-icon"><Bell size={16} /></div>
          <p><strong>마감일을 놓치지 마세요</strong><span>모집 종료 전 알림을 준비 중이에요.</span></p>
          <Badge variant="outline">곧 제공</Badge>
        </div>
        <div className="account-row">
          <span className="account-avatar"><UserRound size={17} /></span>
          <span className="account-name"><strong>크리에이터</strong><small>무신사 레벨 1</small></span>
          <button className="account-more" aria-label="계정 메뉴">···</button>
        </div>
      </div>
    </aside>
  );
}
