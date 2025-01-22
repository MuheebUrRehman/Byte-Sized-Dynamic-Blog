import React from "react";
import { Blog } from "@/app/type";
import BlogCard from "./blogcard";
import { client } from "@/sanity/lib/client";

const Main = async () => {
  const query = `*[_type == 'blog']  | order(_updatedAt asc){
    Title,Paragraph,image,
     "slug":slug.current
   }`;
  const data: Blog[] = await client.fetch(query, {}, { cache: "no-store" });
  
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {data.map((data: Blog) => (
            <BlogCard data={data} key={data.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
