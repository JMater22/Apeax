export type ChapterStatus = "upcoming" | "live" | "sold-out";

export interface Chapter {
  id: string;
  slug: string;
  number: string;
  title: string;
  storyTeaser: string;
  releaseDate: string;
  status: ChapterStatus;
  placeholderColor?: string;
  imageUrl?: string;
}