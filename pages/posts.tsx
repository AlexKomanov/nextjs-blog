import SimpleAccordion, { ISimpleAccordionItem } from "@/src/components/general-ui-components/SimpleAccordion"
import IPost from "@/src/types/IPost";
import { getServerAbsoluteUrl } from "@/src/utils/server/serverUtils";
import path from "path";
import { FC } from "react"


export async function getStaticProps() {
  // get posts
  let posts : IPost[] = [];
  const url = path.join(getServerAbsoluteUrl(), '/api/posts')
  try {
    const response = await fetch(url);
    posts = await response.json();
  } catch (error) {
    console.error(error);
    
  }

  return {
    props: {posts},
  }
}

interface IProps {
  posts: IPost[];
}

const Posts : FC<IProps> = ({posts}) => {
  
  const allPosts: ISimpleAccordionItem[] = posts.map(post => {
    return {
      summary: post.title,
      details: post.body
    }
  }) 

  return (
    <>
    <h2 className='text-2xl font-extrabold mt-3 text-center mb-5'>Posts</h2>
    <SimpleAccordion items={allPosts}/>
    </>
  )
}

export default Posts