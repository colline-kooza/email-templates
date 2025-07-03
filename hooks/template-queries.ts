import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getTemplateBySlug, getTemplates } from "@/actions/templates";
import { GetTemplatesParams } from "@/types";

// Query keys factory
export const templateKeys = {
  all: ["templates"] as const,
  lists: () => [...templateKeys.all, "list"] as const,
  list: (params: GetTemplatesParams) =>
    [...templateKeys.lists(), params] as const,
  details: () => [...templateKeys.all, "detail"] as const,
  detail: (slug: string) => [...templateKeys.details(), slug] as const,
};

// Query options
export const templateBySlugQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: templateKeys.detail(slug),
    queryFn: () => getTemplateBySlug(slug),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

export const templatesQueryOptions = (params: GetTemplatesParams = {}) =>
  queryOptions({
    queryKey: templateKeys.list(params),
    queryFn: () => getTemplates(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
export const useTemplateBySlug = (slug: string) => {
  return useSuspenseQuery(templateBySlugQueryOptions(slug));
};

export const useTemplates = (params: GetTemplatesParams = {}) => {
  return useSuspenseQuery(templatesQueryOptions(params));
};
