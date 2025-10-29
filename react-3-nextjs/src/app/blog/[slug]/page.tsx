type Props = { params: { slug: string } };

export default function BlogPostPage({ params }: Props) {
  return (
    <main style={{ padding: 24 }}>
      <h1>Blog post: {params.slug}</h1>
      <p>Try /blog/hello-next and /blog/another-post</p>
    </main>
  );
}


