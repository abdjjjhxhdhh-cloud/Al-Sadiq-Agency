export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface DestinationItem {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  image: string;
  highlight: string;
}

export interface PackageItem {
  id: string;
  number: string;
  title: string;
  description: string;
  included: string[];
  image: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface WhyItem {
  number: string;
  title: string;
  description: string;
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  destination: string;
  serviceType: string;
  travelDate: string;
  passengersCount: string;
  message: string;
}
