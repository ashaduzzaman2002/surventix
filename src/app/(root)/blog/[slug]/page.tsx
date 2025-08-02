import { BLOGS, STATIC_BLOGS } from "@/constant/data";
import ClientBlogView from "./ClientBlogView";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return STATIC_BLOGS.map((b) => ({
    slug: b.slug,
  }));
}

export default function BlogDetailsPage({ params }: Props) {
  // Fallback to English locale for now — dynamic t() is used in client
  const blog = BLOGS((key: string) => key).find((b) => b.slug === params.slug);

  if (!blog) return <div>Blog not found</div>;

  return <ClientBlogView blog={blog} />;
}
