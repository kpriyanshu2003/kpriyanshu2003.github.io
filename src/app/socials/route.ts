import { readGoogleSheet } from "@/actions/gSheets";
import { NextRequest } from "next/server";

export async function GET(Request: NextRequest) {
  const range = Request.url.split("?")[1];
  const pattern = /^[A-Za-z]\d*:[A-Za-z]\d*$/;
  if (!range || pattern.test(range) === false)
    return Response.json({
      success: false,
      message: "Invalid range provided. Use ?A1:B2",
    });
  return Response.json({
    success: true,
    message: "Data fetched from Sheet",
    data: await readGoogleSheet(range),
  });
}
