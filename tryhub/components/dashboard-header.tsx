import { Bell, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="topbar">
      <div className="breadcrumb"><span>Workspace</span><span className="breadcrumb-slash">/</span><strong>Overview</strong></div>
      <div className="topbar-actions">
        <label className="search-box">
          <Search aria-hidden="true" size={16} />
          <input aria-label="체험단 검색" placeholder="캠페인 검색" />
          <kbd>⌘ K</kbd>
        </label>
        <Button variant="ghost" size="icon" className="notification-button" aria-label="알림"><Bell size={18} /></Button>
        <span className="topbar-divider" />
        <button className="topbar-profile" aria-label="프로필 메뉴">
          <span className="topbar-avatar">Y</span>
          <span className="topbar-profile-copy"><strong>개인 계정</strong><small>레벨 1</small></span>
          <ChevronDown size={15} />
        </button>
      </div>
    </header>
  );
}

export function FilterButton() {
  return <Button variant="outline" size="sm"><SlidersHorizontal size={15} /> 필터</Button>;
}
