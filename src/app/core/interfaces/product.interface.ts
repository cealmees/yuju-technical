import { IImage } from './image.interface';
import { IMarketplace } from './marketplace.interface';

export interface IProduct {
  availability: string;
  brand: string;
  category_pk: number;
  color: string;
  condition: string;
  created_at: Date;
  depth: number;
  description: string;
  dimensions_unit: string;
  discount?: any;
  discount_from?: any;
  discount_to?: any;
  gender: string;
  height: number;
  images: IImage[];
  marketplaces: IMarketplace[];
  name: string;
  pk: number;
  price: number;
  shipping_depth: number;
  shipping_height: number;
  shipping_width: number;
  size: string;
  sku: string;
  sku_simple: string;
  stock: number;
  weight: number;
  weight_unit: string;
  width: number;
}
