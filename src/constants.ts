import { Property, Location } from './types';

export const BROKER_INFO = {
  name: 'Neil Kenneth Obien',
  title: 'Licensed Real Estate Broker',
  company: 'Ayala Land International Sales Inc.',
  mobile: '+639163372900',
  email: 'obien.neil@ayalaland-intl.com',
  leads: ['obien.neil@ayalaland-intl.com', 'nikobien14@yahoo.com']
};

export const PROPERTIES: Property[] = [
  {
    id: '1',
    name: 'Park Central Towers',
    location: 'Makati City',
    developer: 'Ayala Land Premier',
    price: '₱45,000,000 - ₱150,000,000',
    type: 'Condominium',
    status: 'Pre-Selling',
    tags: ['Luxury', 'Prime Location', 'High-End'],
    beds: 3,
    sqm: 240,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '2',
    name: 'The Courtyards',
    location: 'Vermosa, Cavite',
    developer: 'Ayala Land Premier',
    price: '₱20,000,000 - ₱45,000,000',
    type: 'Residential Lot',
    status: 'Ready for Occupancy',
    tags: ['Quiet', 'Strategic Investment'],
    sqm: 600,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '3',
    name: 'Portico',
    location: 'Pasig City',
    developer: 'Alveo Land',
    price: '₱8,500,000 - ₱25,000,000',
    type: 'Condominium',
    status: 'Pre-Selling',
    tags: ['Urban Living', 'Investment Grade'],
    beds: 1,
    sqm: 55,
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '4',
    name: 'Hillside Ridge',
    location: 'Silang, Cavite',
    developer: 'Alveo Land',
    price: '₱12,000,000 - ₱22,000,000',
    type: 'Residential Lot',
    status: 'Pre-Selling',
    tags: ['Nature', 'Cool Climate'],
    sqm: 350,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '5',
    name: 'Avida Towers Makati South',
    location: 'Makati City',
    developer: 'Avida Land',
    price: '₱6,000,000 - ₱12,000,000',
    type: 'Condominium',
    status: 'Ready for Occupancy',
    tags: ['City Living', 'Value Packed'],
    beds: 2,
    sqm: 48,
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '6',
    name: 'Nuvali Residential',
    location: 'Nuvali, Santa Rosa',
    developer: 'Ayala Land Premier',
    price: '₱15,000,000 - ₱35,000,000',
    type: 'House and Lot',
    status: 'Ready for Occupancy',
    tags: ['Family Oriented', 'Eco-Friendly'],
    beds: 4,
    sqm: 450,
    image: 'https://images.unsplash.com/photo-1564013799912-4f995a9010e0?auto=format&fit=crop&q=80&w=1000',
  }
];

export const LOCATIONS: Location[] = [
  { id: 'makati', name: 'Makati', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1000' },
  { id: 'bgc', name: 'BGC', image: 'https://images.unsplash.com/photo-1542385151-efd9000782a6?auto=format&fit=crop&q=80&w=1000' },
  { id: 'qc', name: 'Quezon City', image: 'https://images.unsplash.com/photo-1555505012-1c94d6983d7b?auto=format&fit=crop&q=80&w=1000' },
  { id: 'nuvali', name: 'Nuvali', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000' },
  { id: 'cebu', name: 'Cebu', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1000' }
];
