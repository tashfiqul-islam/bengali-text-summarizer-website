import { LucideIcon } from "lucide-react"

export interface Article {
  title: string;
  content: string;
}

export interface Category {
  name: string;
  icon: LucideIcon;
  articles: Article[];
}

export type ExpandedCategories = string[];

export interface CurrentSection {
  category: string;
  article: string;
}
