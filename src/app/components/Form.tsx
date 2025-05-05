"use client";
import { useActionState } from "react";
import { createPost } from "../lib/action";
import { FormState } from "../lib/action";

const initialState: FormState = {
  success: undefined,
  error: null,
  fieldErrors: {},
};
export default function Form() {
  const [state, formAction, isPending] = useActionState(
    createPost,
    initialState
  );
  return (
    <form
      action={formAction}
      className="bg-white shadow-lg max-w-4xl mx-auto flex flex-col w-full p-4 mt-6"
    >
      <input
        type="text"
        placeholder="Title"
        name="title"
        className="border border-gray-400 rounded p-2 mb-2"
      />
      {state.fieldErrors?.title && (
        <p className="text-red-500">{state.fieldErrors.title}</p>
      )}
      <textarea
        placeholder="Content Here"
        name="content"
        className="border border-gray-400 rounded p-2"
      />
      {state.fieldErrors?.content && (
        <p className="text-red-500">{state.fieldErrors.content}</p>
      )}

      <button
        type="submit"
        className="bg-indigo-500 text-white p-2 rounded mt-2 hover:bg-indigo-600 transition-colors disabled:opacity-50"
        disabled={isPending}
        aria-disabled={isPending}
      >
        {isPending ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}
