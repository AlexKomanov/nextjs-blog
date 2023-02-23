import type {NextApiRequest, NextApiResponse} from 'next'
import ICommentShort from "@/src/types/ICommentShort";
import comments from '../../../data/comments.json';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ICommentShort[]>
) {
    let shortComments: ICommentShort[] = comments.map((comment) => {
        const {id, description} = comment;
        return {id, description}
    });
    res.status(200).json(shortComments)
}
