"use server";
import { google } from "googleapis";

const serviceAccountKeyFile = "./serviceAccount.json";
const sheetId = process.env.SHEET_ID;
const tabName = process.env.TAB_NAME;
const range = process.env.RANGE;

async function _getGoogleSheetClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: serviceAccountKeyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const authClient = await auth.getClient();
  return google.sheets({
    version: "v4",
    auth: authClient as any, // Cast authClient to any to bypass type checking
  });
}

export async function readGoogleSheet() {
  const res = await (
    await _getGoogleSheetClient()
  ).spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tabName}!${range}`,
  });
  return res.data.values;
}

// async function _writeGoogleSheet(
//   googleSheetClient,
//   sheetId,
//   tabName,
//   range,
//   data
// ) {
//   await googleSheetClient.spreadsheets.values.append({
//     spreadsheetId: sheetId,
//     range: `${tabName}!${range}`,
//     valueInputOption: "USER_ENTERED",
//     insertDataOption: "INSERT_ROWS",
//     resource: {
//       majorDimension: "ROWS",
//       values: data,
//     },
//   });
// }
