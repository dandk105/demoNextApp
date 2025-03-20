import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";


export default async function Index() {
  const posts = await getAllPosts();
  const mainPost = posts[0];
  

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={mainPost.title}
          coverImage={mainPost.image_url?mainPost.image_url:""}
          slug={mainPost.id}
          date={mainPost.create_day}
          author={mainPost.author_id}
          excerpt={mainPost.content}
        />
      </Container>
    </main>
  );
}
