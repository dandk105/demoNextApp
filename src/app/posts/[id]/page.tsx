import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/api";

import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { Tables } from "@/interfaces/database.types";

type Params = {
  params: Promise<Pick<Tables<"posts">, "id">>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const post = await getPostById(params.id);

  if (!post) {
    return notFound();
  }

  // const content = await markdownToHtml(post.content || ""); */

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.image_url ? post.image_url : ""}
            date={post.create_day}
            author={post.author}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostById(params.id);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
  };
}


