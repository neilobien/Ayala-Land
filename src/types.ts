export interface Property {
  id: string;
  name: string;
  location: string;
  developer: 'Ayala Land Premier' | 'Alveo Land' | 'Avida Land' | 'Amaia';
  price: string;
  type: 'Condominium' | 'Residential Lot' | 'House and Lot';
  status: 'Pre-Selling' | 'Ready for Occupancy';
  tags: string[];
  beds?: number;
  sqm: number;
  image: string;
}

export interface Location {
  id: string;
  name: string;
  image: string;
}
