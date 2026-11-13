export type DemoCampaign = {
  id: string;
  platform: string;
  title: string;
  category: string;
  format: string;
  deadline: string;
  reward: string;
  eligibility: string;
  status: "확인 필요" | "조건부 신청" | "신청 불가";
  statusTone: "warning" | "default" | "danger";
  href: string;
};

export const demoCampaigns: DemoCampaign[] = [
  {
    id: "reviewplace-hanwoo",
    platform: "리뷰플레이스",
    title: "1등급 미한우 샘플러 450g",
    category: "식품",
    format: "배송형 · 블로그",
    deadline: "11월 18일",
    reward: "7만원 상당 · 무료 배송",
    eligibility: "블로그 후기 미션 확인 필요",
    status: "조건부 신청",
    statusTone: "default",
    href: "https://www.reviewplace.co.kr/pr/?id=320387&rp_apply_refresh=20260814_pc_apply_return2",
  },
  {
    id: "cloudreview-chocolate",
    platform: "클라우드리뷰",
    title: "신라금관 생초콜릿 4구",
    category: "식품",
    format: "배송형 · 콘텐츠 미션",
    deadline: "11월 15일",
    reward: "12,000원 상당",
    eligibility: "플랫폼 계정·채널 조건 미확인",
    status: "확인 필요",
    statusTone: "warning",
    href: "https://www.cloudreview.co.kr/campaign/detail/257004?search_keyword2=&search_type2=&search_category2=&search_area2=",
  },
  {
    id: "ingram-shoes",
    platform: "INGRAM",
    title: "발란스365 기능성 신발",
    category: "패션/라이프",
    format: "배송형 · Instagram 릴스",
    deadline: "상시 모집",
    reward: "신발 1켤레",
    eligibility: "Instagram 채널 등록 및 1분 릴스",
    status: "조건부 신청",
    statusTone: "default",
    href: "https://www.ingram.co.kr/campaigns/93e36e61-c9bd-44e4-906d-db34a9103d06",
  },
  {
    id: "musinsa-beanie",
    platform: "무신사",
    title: "블랙샌즈 램스울 니트 비니",
    category: "패션잡화",
    format: "배송형 · 무신사 체험단",
    deadline: "11월 19일",
    reward: "제품 제공 · 10명 모집",
    eligibility: "최소 회원 등급 2 · 현재 레벨 1",
    status: "신청 불가",
    statusTone: "danger",
    href: "https://www.musinsa.com/preuser/events/49979?gf=A",
  },
];

export const snapshotLabel = "조사 스냅샷 · 2026년 11월 13일";
