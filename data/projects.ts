import { Project } from '../types';

// Imagery under /public/projects is placeholder artwork — swap the `src` values
// for the real renders, the rest of the section needs no changes.
export const PROJECTS: Project[] = [
  {
    id: 'rongai-heights',
    name: 'Rongai Heights',
    status: 'Now Selling',
    location: 'Ongata Rongai, Nairobi',
    tagline: '84 Residences. 10 Floors. One Uncommon Address.',
    summary:
      'Rongai Heights is a 12-level development, two basement levels, a commercial ground floor, ten residential floors and a rooftop amenity deck. Designed to carry the rare quality of urban serenity.',
    overview:
      'Positioned just 15 minutes from the SGR station, the development provides seamless connectivity to Nairobi and beyond, making it ideal for homeowners and investors alike. Every apartment captures both the energy of Nairobi and the calm of the Ngong Hills landscape that frames it.',
    priceLabel: 'Early bird offers from',
    priceValue: 'KSH 4.5M',
    stats: [
      { value: '84', label: 'Residences' },
      { value: '12', label: 'Levels Total' },
      { value: '10', label: 'Residential Floors' },
      { value: '15', label: 'Minutes to SGR' },
    ],
    unitTypes: [
      { id: '1br-t1', category: '1 Bedroom', variant: 'Type 1', size: '56 sqm', units: 10 },
      { id: '1br-t2', category: '1 Bedroom', variant: 'Type 2', size: '54 sqm', units: 10 },
      { id: '2br-t1', category: '2 Bedroom', variant: 'Type 1', size: '72 sqm', units: 53 },
      { id: '2br-t2', category: '2 Bedroom', variant: 'Type 2', size: '82 sqm', units: 10 },
    ],
    features: [
      '10 Residential Floors',
      '2 Basement Parking levels',
      'Commercial Ground Floor',
      'On-site borehole',
      "Kid's playground",
      'High speed Lift service',
      'Secure and well-managed environment',
    ],
    heroImage: {
      src: '/projects/rongai-heights-1.jpg',
      alt: 'Rongai Heights residential tower',
    },
    gallery: [
      { src: '/projects/rongai-heights-2.jpg', alt: 'Rongai Heights street approach and frontage' },
      { src: '/projects/rongai-heights-3.jpg', alt: 'Rongai Heights rooftop amenity deck at sunset' },
    ],
    galleryCaption: 'Common amenities, Kids play area and retail spaces',
  },
];
