export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Template {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  filePath: string;
  image: string | null;
  price: string | null;
  isFree: boolean;
  categoryId: string | null;
  createdAt: Date;
  updatedAt: Date;
  category: Category | null;
}

export interface FormattedTemplate {
  id: string;
  name: string;
  price: string;
  image: string | null;
  category: string | undefined;
}

export interface TemplateMetadata {
  title: string | undefined;
  description: string | null | undefined;
  tags: string[];
  createdAt: string;
}

export interface GetTemplatesResponse {
  templates: Template[];
  total: number;
}

export interface GetTemplatesParams {
  limit?: number;
  offset?: number;
  categoryId?: string;
}
