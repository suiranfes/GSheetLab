import { GoogleSpreadsheetService } from "./googlesp";

async function main() {
  const spreadService = await GoogleSpreadsheetService.getInstance();

  // スプレットシートのタイトルを取得
  console.log("Title: " + spreadService.getTitle());

  // シートを追加
  let newSheetName: string = "Sheet2";
  await spreadService.addSheet(newSheetName, ["name", "email"]);
}

main();
