'use client';
import { useActionState } from "react";
import { createPost } from "../lib/action"
export default function Form() {
  const [state,formAction] = useActionState(createPost,null);
  return (
    <form action={formAction} className="bg-blue-200 max-w-4xl mx-auto flex flex-col p-4">
      <input 
      type="text" 
      placeholder="Title" 
      name="title"  
      className="border border-gray-400 rounded p-2 mb-2"
      />
      <textarea 
      placeholder="Content Here" 
      name="content"  
      className="border border-gray-400 rounded p-2"
      />
      <button  className="bg-indigo-500 text-white p-4 rounded mt-2">Create</button>
    </form>
  )
}
