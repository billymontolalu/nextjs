import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  const body = await req.json();
  const prisma = new PrismaClient();

  const post = await prisma.post.create({
    data: body,
  });

  return NextResponse.json({ post });
}

export async function GET(req, res) {
    const prisma = new PrismaClient();
  
    const post = await prisma.post.findMany({
    });
  
    return NextResponse.json(post);
  }
