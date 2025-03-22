import Container from "@/app/_components/container";
import { MoreStories} from "@/app/_components/more-stories";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";

export default async function Index() {
  const posts = await getAllPosts();
  if (!posts || posts.length === 0) {
    console.log("No posts found");
    return null;
  }

  const mainPost = posts[0];

  return (
    <main>
      <Container>
        <Intro />
        {mainPost ? (
          <HeroPost
            title={mainPost.title}
            coverImage={mainPost.image_url ? mainPost.image_url : ""}
            slug={mainPost.id}
            date={mainPost.create_day}
            author={mainPost.author}
            excerpt={mainPost.content}
          ></HeroPost>
        ) : (
          <h2>Loading</h2>
        )}
        {posts.length > 0 && <MoreStories posts={posts} />}
      </Container>
    </main>
  );
}
