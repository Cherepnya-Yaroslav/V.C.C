export type ProductPhoto = {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  photos: ProductPhoto[];
  available?: boolean;
};
