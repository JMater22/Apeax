export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl?: string;
  placeholderColor?: string;
  chapterId?: string;
  editionSize?: number;   // e.g. 500
  unitsSold?: number;     // e.g. 500 = sold out
  isSoldOut?: boolean;
}