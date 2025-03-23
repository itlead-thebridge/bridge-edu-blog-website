import { type PostAuthor } from "./PostAuthor";

export type BasicPost = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: PostAuthor;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
