import { conectToB } from "@/app/lib/ConnectToDB";
import { Post } from "@/app/models/Post";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    await conectToB();
    const { title, content } = await request.json();
    const post = await Post.create({ title, content });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "failed to create post",
      },
      { status: 500 }
    );
  }
}
