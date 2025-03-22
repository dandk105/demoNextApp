import { PostList } from "@/interfaces/post";
import supabase from "../utils/supabase/client";

const getPostsQuery = "title, create_day, id, content, image_url, author:authors(first_name, avater_url)";
export async function getAllPosts() : Promise<PostList | []> {
  const { data, error } = await supabase.from("posts").select(getPostsQuery);
  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
  return data;
}

