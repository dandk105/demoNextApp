
import fs from "fs";
import matter from "gray-matter";
import { Post, PostsList } from "@/interfaces/post";
import { join } from "path";
import supabase  from "../utils/supabase";
import { Tables } from "@/interfaces/database.types";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}


const getPostsQuery = "title, create_day, id, content, image_url, authors(first_name, avater_url)";
export async function getAllPosts(): Promise<PostsList[]> {
  const { data, error } = await supabase.from("posts").select(getPostsQuery).order("create_day", { ascending: false });
  if (error) {
    return [];
  }
  return data;
}

export async function getPostById(id: number): Promise<PostsList | null> {
  const { data, error } = await supabase.from("posts").select(getPostsQuery).eq("id", id).single();
  if (error) {
    return null;
  }
  return data;
}

export async function fetchFromDB(): Promise<any> {
  const { data } = await supabase.from("posts").select("*");
  return data;
};

export async function fetchAuthor(id: string): Promise<Tables<"authors"> | null> {
  const { data, error } = await supabase.from("authors").select("*").eq("id", id).single();
  if (error) {
    return null;
  }
  return data;
}