import { readGoogleSheet } from "@/actions/gSheets";

export async function GET() {
  const data = await readGoogleSheet();
  return Response.json(data);
}
