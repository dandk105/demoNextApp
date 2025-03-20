import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { fetchFromDB, getAllPosts } from "@/lib/api";


export default async function Index() {

  const posts = await fetchFromDB();
  const mainPost = posts[0];
  
  
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={mainPost.title}
          coverImage={heroPost.coverImage}
          date={mainPost.inserted_at}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={mainPost.content}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
