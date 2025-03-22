
import { Tables } from "./database.types";

export type Post = Pick<Tables<"posts">, "title" | "content" | 'id' | "create_day" | "image_url" > & { author: Pick<Tables<"authors">, "first_name" | "avater_url">};

export type PostList = Post[];