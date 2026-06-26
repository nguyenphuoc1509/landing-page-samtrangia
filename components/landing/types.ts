export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface IngredientItem {
  name: string;
  description: string;
  image: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  label: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  rating: number;
  quote: string;
}

export interface ComboItem {
  name: string;
  price: string;
  quantity: string;
  features: string[];
  highlight?: boolean;
  image: string;
}

export interface FooterLinks {
  about: string[];
  quick: string[];
  policy: string[];
}

// ProductSection types
export interface ProductBadge {
  label: string;
  variant: "new" | "hot" | "sale" | "best";
}
 
export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  unit?: string;
  image: string;
  rating?: number;
  reviewCount?: number;
  badges?: ProductBadge[];
  outOfStock?: boolean;
}