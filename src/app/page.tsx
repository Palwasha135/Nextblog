import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
async function getData() {
  const query = `
  
  *[_type == 'blog']| order(_createdAt desc){
    title,
      smallDescription,
      "currentSlug":slug.current,
      titleImage
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post) => (
        <Card className="md:m-0 mx-16">
          <Image
            src={urlFor(post.titleImage).url()}
            alt="Blog post image"
            width={310}
            height={100}
            className="rounded-t-lg h-[200px] w-full"
          />
          <CardContent className="mt-6">
            {" "}
            <h3>{post.title}</h3>
            <p className=" line-clamp-2 text-sm text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`} className=" bg-green-600 hover:bg-green-800">Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
