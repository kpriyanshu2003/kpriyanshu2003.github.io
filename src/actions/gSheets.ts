"use server";
import { google } from "googleapis";

const serviceAccountKeyFile = "./serviceAccount.json";
const sheetId = process.env.SHEET_ID;
const tabName = process.env.TAB_NAME;

async function getGoogleSheetClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: serviceAccountKeyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const authClient = await auth.getClient();
  return google.sheets({ version: "v4", auth: authClient as any });
}

export async function readGoogleSheet(range: string) {
  const res = await (
    await getGoogleSheetClient()
  ).spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tabName}!${range}`,
  });
  return res.data.values;
}

export async function readAndFindGoogleSheet(range: string, id: string) {
  const data = await readGoogleSheet(range);
  return data?.find((row) => row[0] === id);
}
