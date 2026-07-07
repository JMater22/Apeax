export type ChapterStatus = "upcoming" | "live" | "sold-out";

export interface Chapter {
  id: string;
  slug: string;
  number: string;        // "Chapter One"
  title: string;         // "Exceed Limits"
  storyTeaser: string;
  releaseDate: string;
  status: ChapterStatus;
  placeholderColor?: string;
}