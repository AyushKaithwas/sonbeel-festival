"use server";
import prisma from "@/lib/prisma";

export async function IncrViewer() {
  const views = await prisma.viewer.update({
    where: {
      id: 1,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });
  return views.views;
}
