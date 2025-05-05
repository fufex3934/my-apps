import { createPost } from "../lib/action"
export default function Form() {
  return (
    <form action={createPost}>
      <input type="text" name="title"  />
      <input type="text" name="content"  />
      <button type="submit">Create</button>
    </form>
  )
}
