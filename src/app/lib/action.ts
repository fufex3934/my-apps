"use server";
import { conectToB } from "./ConnectToDB"; // Fixed typo
import { revalidatePath } from "next/cache";
import { Post } from "../models/Post";
import { redirect } from "next/navigation";

export interface FormState {
  success?: boolean;
  error?: string | null;
  fieldErrors?: {
    title?: string;
    content?: string;
  };
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
      success: false,
      error: "Validation failed",
    };
  }
  try {
    await conectToB();
    await Post.create({ title, content });
    revalidatePath("/blog");
  } catch (error) {
    return {
      ...state,
      success: false,
      error: error instanceof Error ? error.message : "Operation failed",
    };
  }
  redirect("/blog");
}
export async function deletePost(formData: FormData) {
  "use server";
  const id = formData.get("id");

  //update data
  //revalidate dat
}
