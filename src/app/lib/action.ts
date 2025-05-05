"use server";
import { conectToB } from "./ConnectToDB"; // Fixed typo
import { revalidatePath } from "next/cache";
import { Post } from "../models/Post";
import { redirect } from "next/navigation";

export interface FormState {
  fieldErrors?: {
    title?: string;
    content?: string;
  };
}

export interface PostType {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export async function createPost(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Validate first
  const { title, content } = Object.fromEntries(formData);
  //initialize the state
  const state: FormState = {
    ...prevState,
    fieldErrors: {
      title: !title ? "Title is requiered" : undefined,
      content: !content ? "Content is required" : undefined,
    },
  };

  //check for validation errors
  if (state.fieldErrors?.title || state.fieldErrors?.content) {
    return {
      ...state,
    };
  }
  try {
    await conectToB();
    await Post.create({ title, content });
    revalidatePath("/blog");
  } catch (error) {
    console.log("Error occured", error);
  }
  redirect("/blog");
}

//Read all posts
export async function getPosts(): Promise<PostType[]> {
  await conectToB();
  const posts = await Post.find().sort({ createdAt: -1 }).lean();
  const serializedPosts = posts.map((post: any) => ({
    ...post,
    _id: post._id.toString(),
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));

  return serializedPosts;
}

//read single post
export async function getPost(id: string) {
  const post = await Post.findById(id);
  return post;
}
export async function updatePost(
  id: string,

  formData: FormData
): Promise<void> {
  const { title, content } = Object.fromEntries(formData);

  try {
    await conectToB();
    await Post.findByIdAndUpdate(id, { title, content });
    revalidatePath(`/blog/${id}`);
  } catch (error) {
    console.log(error);
  }
  redirect("/blog");
}
export async function deletePost(id: string) {
  await Post.findByIdAndDelete(id);

  revalidatePath(`/blog/${id}`);
}
