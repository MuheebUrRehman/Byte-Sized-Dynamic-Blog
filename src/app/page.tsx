import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const query = `*[_type == 'blog']  | order(_updatedAt asc){
 Title,Paragraph,image,
  "slug":slug.current
}`;
  const data: Blog[] = await client.fetch(query, {}, { cache: "no-store" });

  return (
    <>
      <Hero />
      {data.map((data: Blog) => (
        <Main data={data} key={data.slug} />
      ))}
    </>
  );
}
