import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/app/type";
import { ulForr } from "@/sanity/lib/image";

const BlogCard = ({ data }: { data: Blog }) => {
  const img = ulForr(data.image).format("webp").url();

  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <Image src={img} width={250} height={100} alt="ai" />
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {data.Title}
        </h2>
        <p className="leading-relaxed">{data.Paragraph}</p>
        <Link
          href={`blog/${data.slug}`}
          className="text-indigo-500 inline-flex items-center mt-4"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
