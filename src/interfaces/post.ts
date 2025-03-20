import { type Author } from "./author";
import { Tables } from "./database.types";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

export type PostsList = Pick<Tables<"posts">, "title" | "content" | 'id' | "create_day" | "image_url" > & { authors: Pick<Tables<"authors">, "first_name" | "avater_url">};