import { Journal } from "@/types/journals";

export async function getJournals(): Promise<Journal[]> {
  const res = await fetch("http://localhost:8080/api/v1/journals");

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}
