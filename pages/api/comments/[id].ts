import type {NextApiRequest, NextApiResponse} from 'next'
import IComment from "@/src/types/IComment";
import comments from 'data/comments.json'

const getComment = (id: number): IComment | undefined => {
    return comments.find((comment) => comment.id == id);
}
export default function handleCommentWithId(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const {id} = req.query;

    const comment = getComment(Number(id));

    comment ? res.status(200).json(comment)
        : res.status(404).send(`The id '${id}' was not found!`);
}
