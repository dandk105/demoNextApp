import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";


export default async function Index() {
  const posts = await getAllPosts();
  if (!posts) {
    console.log("No posts found");
  }
  
  const mainPost = posts[0];
  

  return (
    <main>
      <Container>
        <Intro />
        {mainPost? (
          <HeroPost
            title={mainPost.title}
            coverImage={mainPost.image_url ? mainPost.image_url : ""}
            slug={mainPost.id}
            date={mainPost.create_day}
            author={mainPost.authors}
            excerpt={mainPost.content}
          />
        ) : <h2>Loading</h2>}
      </Container>
    </main>
  );
}
