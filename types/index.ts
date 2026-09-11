export type WaterCategory = 'all' | 'supply' | 'wastewater' | 'stormwater' | 'industrial';

export interface WaterSolutionItem {
  id: string;
  title: string;
  category: 'supply' | 'wastewater' | 'stormwater' | 'industrial';
  categoryLabel: string;
  description: string;
  spec: string;
  impactMetric: string;
}

export interface CoreStrength {
  id: string;
  title: string;
  description: string;
  metric: string;
  iconName: string;
}

export interface MetricStat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  detail: string;
}

export interface ConsultancyService {
  id: string;
  title: string;
  scope: string;
  deliverable: string;
  badge: string;
}

export interface NavItem {
  label: string;
  href: string;
}
