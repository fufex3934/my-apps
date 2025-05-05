"use server";
import { conectToB } from "./ConnectToDB"; // Fixed typo
import { revalidatePath } from "next/cache";
import { Post } from "../models/Post";
import { redirect } from "next/navigation";

export async function createPost(prevState: any, formData: FormData) {
  // Validate first
  const { title, content } = Object.fromEntries(formData);
  if (!title || !content) {
    return { success: false, error: "Validation failed" };
  }

  try {
    await conectToB();
    await Post.create({ title, content });
    revalidatePath("/blog");
  } catch (error) {
    console.error("Post creation failed:", error);
    return {
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
