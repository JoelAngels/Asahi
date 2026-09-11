import { Project } from '../types';

// Imagery is the Rongai Heights render set under /public (01–11): exteriors and
// amenities feed `gallery`, unit interiors feed `interiors`.
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
      src: '/01-building-exterior-sunset.png',
      alt: 'Rongai Heights tower at sunset, balconies lit against the Ngong Hills horizon',
    },
    gallery: [
      {
        src: '/02-building-exterior-street.png',
        alt: 'Rongai Heights street approach with signage wall and landscaped verge',
        caption: 'Street approach & signature entrance',
      },
      {
        src: '/03-courtyard-playground.png',
        alt: "Landscaped internal courtyard with children's play structure and swings",
        caption: "Courtyard gardens & kids' play area",
      },
      {
        src: '/04-balcony-courtyard-view.png',
        alt: 'View down the balcony stack onto the planted courtyard below',
        caption: 'Private balconies over the green core',
      },
      {
        src: '/05-rooftop-terrace-sunset.png',
        alt: 'Rooftop amenity terrace with planters and an open skyline at sunset',
        caption: 'Rooftop amenity deck at sunset',
      },
    ],
    galleryCaption: 'Common amenities, retail frontage, courtyard gardens and the rooftop terrace.',
    interiors: [
      {
        src: '/06-interior-living-room-1.png',
        alt: 'Living room with floor-to-ceiling sheers, sectional sofa and framed artwork',
        caption: 'Living room — natural light throughout',
      },
      {
        src: '/07-interior-living-room-2.png',
        alt: 'Second living room view showing the seating arrangement and balcony access',
        caption: 'Living room — balcony aspect',
      },
      {
        src: '/08-interior-kitchen-living.png',
        alt: 'Open-plan kitchen with stone backsplash and gas range opening onto the living area',
        caption: 'Open-plan kitchen & living',
      },
      {
        src: '/09-interior-kitchen-bar.png',
        alt: 'Kitchen breakfast bar with stone counter and integrated storage',
        caption: 'Breakfast bar & prep counter',
      },
      {
        src: '/10-interior-bedroom.png',
        alt: 'Bedroom with upholstered bed, full-height wardrobes and sheer-draped window wall',
        caption: 'Master bedroom & fitted wardrobes',
      },
      {
        src: '/11-interior-bathroom.png',
        alt: 'Bathroom finished in stone tile with a glazed shower enclosure',
        caption: 'Bathroom — full stone finish',
      },
    ],
    interiorsCaption:
      'Representative unit finishes across the 1 and 2 bedroom layouts.',
  },
];
