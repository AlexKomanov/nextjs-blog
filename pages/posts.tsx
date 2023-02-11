import SimpleAccordion, { ISimpleAccordionItem } from "@/src/components/general-ui-components/SimpleAccordion"
import IPost from "@/src/types/IPost";
import { useEffect, useState } from "react"

const Posts = () => {

  const [posts, setPosts] = useState<IPost[]>([]);
  
  const getPosts = () => {
    fetch('/api/posts')
    .then((response) => response.json())
    .then((data) => setPosts(data))
    console.log(posts)
  }

  useEffect(getPosts, [])
  
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