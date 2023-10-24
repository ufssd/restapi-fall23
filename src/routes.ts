import express, { Request, Response, request } from "express";
import { createPost, updatePost, deletePost, getPost, listAllPosts } from "./postDAO";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send("Hello, you've reached our API!");
});

router.get("/posts", async (request: Request, response: Response) => {
  const posts = await listAllPosts();
  response.status(200).json(posts);
});

router.get("/posts/post/:id", async (request: Request, response: Response) => {
  const post = await getPost(request.params.id);
  
  if (post === undefined) {
    response.status(404).send("Error: Post not found");
  }
  response.json(post);
});

router.post("/posts/post", async (request: Request, response: Response) => {
  const id = await createPost(request.body);
  response.status(201).send();
});

router.put("/posts/post/:id", async (request: Request, response: Response) => {
  const updatedPost = await updatePost(request.params.id, request.body);
  
  if (updatedPost === undefined) {
    response.status(404).send("Error: Post not found");
  }
  response.json(updatedPost);
});

router.delete("/posts/post/:id", async (request: Request, response: Response) => {
  const deletedPost = await deletePost(request.params.id);
  
  if (deletedPost === undefined) {
    response.status(404).send("Error: Post not found");
  }
  response.json(deletedPost);
});

export default router;