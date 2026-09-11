import { ConsultancyService } from '../types';

export const CONSULTANCY_SERVICES: ConsultancyService[] = [
  {
    id: 'feasibility',
    title: 'Project Feasibility & Viability Studies',
    scope: 'Comprehensive highest-and-best-use (HBU) studies, demographic research, market absorption models, and sensitivity risk analysis.',
    deliverable: 'Institutional Investment Memorandum & Financial Models',
    badge: 'Pre-Development',
  },
  {
    id: 'engineering-design',
    title: 'Comprehensive Engineering & Architectural Design',
    scope: 'Full master planning, architectural modeling, civil & structural engineering detailing, and MEP building services design.',
    deliverable: 'BIM Level 2 Multi-Disciplinary Construction Sets',
    badge: 'Design & Engineering',
  },
  {
    id: 'statutory-approvals',
    title: 'Statutory Approvals & Permitting Management',
    scope: 'End-to-end management of approvals with County Governments, NEMA, NCA, Water Resources Authority (WRA), and KCAA.',
    deliverable: '100% Regulatory Cleared Approvals Dossier',
    badge: 'Regulatory & Compliance',
  },
  {
    id: 'procurement-tendering',
    title: 'Tender Documentation & Procurement Strategy',
    scope: 'Bills of quantities, FIDIC condition drafting, contractor pre-qualification, tender evaluation reports, and negotiation advisory.',
    deliverable: 'Complete Contract Dossiers & Tender Evaluation Reports',
    badge: 'Commercial Management',
  },
  {
    id: 'project-management',
    title: 'Project Management & Construction Supervision',
    scope: 'Independent employer representation, project programming (Primavera/MS Project), site supervision, and milestone certification.',
    deliverable: 'Weekly QA Audits, Cost Reports & Handover Certifications',
    badge: 'Site Operations',
  },
  {
    id: 'quantity-surveying',
    title: 'Cost Engineering & Quantity Surveying',
    scope: 'Budget estimates, cost planning, interim payment valuations, change order control, and final account reconciliation.',
    deliverable: 'Cost Variation Control & Audited Final Accounts',
    badge: 'Financial Governance',
  },
  {
    id: 'environmental-esg',
    title: 'Environmental & Social Impact Assessments (ESIA)',
    scope: 'Full NEMA-licensed ESIA studies, environmental management plans (EMP), biodiversity assessments, and annual statutory audits.',
    deliverable: 'NEMA Approved Licensures & ESG Compliance Portfolios',
    badge: 'Sustainability & ESG',
  },
  {
    id: 'ppp-advisory',
    title: 'Public-Private Partnership (PPP) Advisory',
    scope: 'Transaction advisory for government bodies, concessional framework design, value-for-money (VfM) assessments, and SPV incorporation.',
    deliverable: 'Bankable Concession Agreements & PPP Pitch Packages',
    badge: 'Capital & Policy',
  },
  {
    id: 'asset-management',
    title: 'Infrastructure Asset Management & Commissioning',
    scope: 'Post-handover maintenance schedules, life-cycle cost modeling, facility operational readiness, and warranty management.',
    deliverable: 'Facility O&M Manuals & Long-Term Asset Schedules',
    badge: 'Lifecycle Asset Care',
  },
];
