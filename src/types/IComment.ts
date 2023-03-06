import ICommentShort from "@/src/types/ICommentShort";

export default interface IComment extends ICommentShort{
    // description: string; //comes from ICommentShort
    author: string;
    email: string;
    // id: number; //comes from ICommentShort
}