import { Document, Schema, model } from 'mongoose';
import Post from './post';

interface PostModel extends Document {
  _id: String;
  username: String;
  message: String;
  timestamp: Date;
}

const PostSchema: Schema = new Schema({
  username: String,
  message: String,
  timestamp: Date,
});

export const postFromModel = (model: PostModel): Post => {
  return {
    id: model._id.toString(),
    username: model.username.toString(),
    message: model.message.toString(),
    timestamp: model.timestamp,
  };
}

export default model<PostModel>("posts", PostSchema);