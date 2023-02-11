import IPost from '@/src/types/IPost';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPost[]>
) {
  const posts = await fetch('https://jsonplaceholder.typicode.com/users/1/posts').then(res => res.json());
  res.status(200).json(posts)
}
