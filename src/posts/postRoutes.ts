import express, { Request, Response, request } from "express";
import { createPost, updatePost, deletePost, getPost, listAllPosts } from "./postDAO";

const postsRouter = express.Router();

postsRouter.get("/", (request: Request, response: Response) => {
  response.send("Hello, you've reached our API!");
});

postsRouter.get("/posts", async (request: Request, response: Response) => {
  const posts = await listAllPosts();
  response.status(200).json(posts);
});

postsRouter.get("/posts/post/:id", async (request: Request, response: Response) => {
  const post = await getPost(request.params.id);
  
  if (post === undefined) {
    response.status(404).send("Error: Post not found");
  }
  response.json(post);
});

postsRouter.post("/posts/post", async (request: Request, response: Response) => {
  const id = await createPost(request.body);
  response.status(201).send();
});

postsRouter.put("/posts/post/:id", async (request: Request, response: Response) => {
  const updatedPost = await updatePost(request.params.id, request.body);
  
  if (updatedPost === undefined) {
    response.status(404).send("Error: Post not found");
  }
  response.json(updatedPost);
});

postsRouter.delete("/posts/post/:id", async (request: Request, response: Response) => {
  const deletedPost = await deletePost(request.params.id);
  
  if (deletedPost === undefined) {
    response.status(404).send("Error: Post not found");
  }
  response.json(deletedPost);
});

export default postsRouter;