import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  id: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  author,
  id,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={coverImage} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${id}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <Avatar name={author.first_name} picture={author.avater_url ? author.avater_url : ''} />
    </div>
  );
}
