type Post = {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
};

export interface CreateUpdatePostRequest {
  username: string;
  message: string;
}

export default Post;