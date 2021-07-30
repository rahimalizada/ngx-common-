import { Country } from './country.enum';

export interface Address {
  title?: string;
  country: Country;
  region?: string;
  city: string;
  district?: string;
  zipCode?: string;
  addressLine1: string;
  addressLine2?: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
}
