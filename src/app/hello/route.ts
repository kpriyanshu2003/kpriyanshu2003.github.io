import { getJSON } from "@/actions/json";

export async function GET() {
  const data = await getJSON("a7e72efdfccea4a55af0");
  return Response.json(data);
}
