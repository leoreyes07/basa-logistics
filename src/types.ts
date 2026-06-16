/**
 * Types and interfaces for Basa Logistics App
 */

export type SectionType = 'inicio' | 'nosotros' | 'servicios' | 'rastreo' | 'contacto';

export interface TrackingStep {
  status: string;
  description: string;
  location: string;
  date: string;
  completed: boolean;
  current: boolean;
  iconName: string; // 'warehouse', 'file-check', 'ship', 'truck', 'check-circle'
}

export interface TrackingData {
  trackingId: string;
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  serviceType: 'Aéreo' | 'Marítimo' | 'Terrestre';
  weight: string; // e.g. "450 kg"
  volume: string; // e.g. "1.2 m³"
  estimatedDelivery: string;
  statusText: string;
  progressPercent: number; // 0 to 100
  history: TrackingStep[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  iconName: 'ship' | 'plane' | 'truck' | 'file-check' | 'shield-check' | 'warehouse';
  features: string[];
}

export interface OfficeLocation {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface QuoteFormState {
  serviceType: 'Aéreo' | 'Marítimo' | 'Terrestre';
  origin: string;
  destination: string;
  weight: number;
  volume: number;
  declaredValue: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  notes: string;
}

export interface QuoteEstimationResult {
  baseRate: number;
  fuelSurcharge: number;
  customsFees: number;
  insuranceCost: number;
  totalCost: number;
  currency: string;
  estimatedDays: string;
}
