import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
async function getData(slug:string) {
    const query=
`*[_type=="blog" && slug.current=="${slug}"]{
  "currentSlug":slug.current,
  title,
  titleImage,
  content,
  }[0]`;
  const data:fullBlog=await client.fetch(query);
  return data;   

}
export default async function BlogArticles({params}:{params:{slug:string}}){
    const data=await getData(params.slug)
    return(
        <div className="justify-between">
       <h1 >Palwasha<span className="block text-blue-600 tracking-wide">Blog</span>
       <span className=" mt-6 text-4xl tracking-tight font-bold ">{data.title}</span></h1> 
 
   <Image src={urlFor(data.titleImage).url()} width={800} height={800} alt=''
   className=" rounded-lg mt-8" />
   <div className="mt-8">
   <PortableText value={data.content}>
    </PortableText></div>
  </div>
    )
    }