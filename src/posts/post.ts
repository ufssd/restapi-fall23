type Post = {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
};

export type CreatePostRequest = {
  username: string;
  message: string;
}

export type UpdatePostRequest = {
  username: string;
  message: string;
}

export default Post;