export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  videoUrl?: string;
  audioUrl?: string;
  description: string;
  topic: string;
  thumbnail: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  registrationLink?: string;
  thumbnail: string;
  category: 'Conference' | 'Worship Night' | 'Youth' | 'Outreach' | 'Other';
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  category: string;
  contactEmail?: string;
  image: string;
}

export interface Pastor {
  id: string;
  name: string;
  bio: string;
  image: string;
  role: string;
}

export interface Campus {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  image: string;
}
