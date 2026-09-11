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

export interface ProjectUnitType {
  id: string;
  category: string;
  variant: string;
  size: string;
  units: number;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  name: string;
  status: string;
  location: string;
  tagline: string;
  summary: string;
  overview: string;
  priceLabel: string;
  priceValue: string;
  stats: ProjectStat[];
  unitTypes: ProjectUnitType[];
  features: string[];
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  galleryCaption: string;
}
