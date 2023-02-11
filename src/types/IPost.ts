export default interface IPost {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
    }
  }