import Post, { CreatePostRequest, UpdatePostRequest } from "./post";
import postModel, { postFromModel } from "./postModel"

export const getPost = async (id: string): Promise<Post | undefined> => {
  const query = await postModel.findOne({_id: id});
  return query ? postFromModel(query) : undefined;
}

export const listAllPosts = async (): Promise<Post[]> => {
  const query = await postModel.find();
  return query.map((post) => postFromModel(post));
};

export const createPost = async (post: CreatePostRequest): Promise<string> => {
  const insertion = await postModel.create({
    username: post.username,
    message: post.message,
    timestamp: Date.now()
  });

  return insertion._id.toString();
}

export const updatePost = async (
  id: string, 
  post: UpdatePostRequest
): Promise<Post | undefined> => {
  const update = await postModel.findOneAndUpdate({_id: id}, post);
  return update ? postFromModel(update) : undefined;
}

export const deletePost = async (id: string) => {
  const deletion = await postModel.findOneAndDelete({_id: id});
  return deletion ? postFromModel(deletion) : undefined;
}