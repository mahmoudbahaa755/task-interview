export interface CardType {
  mainImage: string;
  images: string[];
  logo: string;
  id: number;
  type: number;
  hotelStars: number;
  nameEn: string;
  nameAr: string;
  discEn: string;
  discAr: string;
  mobile: string;
  email: string;
  website: string | null;
  address: string;
  city: string;
  mapLon: string;
  mapLat: string;
  averageRating: number;
  PropertyAmenities: object[];
  PropertySpecialAmenities: object[];
  PropertyType: {
    image: string;
    id: number;
    nameAr: string;
    nameEn: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  price: number;
  priceAfterDiscount: number;
}
