import { Document } from "./model";

export class PDFDocument extends Document {
  open(): void { console.log("📄 Відкриваю PDF документ..."); }
  close(): void { console.log("📄 Закриваю PDF документ"); }
  save(): void { console.log("💾 Зберігаю PDF документ"); }
}

export class WordDocument extends Document {
  open(): void { console.log("📝 Відкриваю Word документ..."); }
  close(): void { console.log("📝 Закриваю Word document"); }
  save(): void { console.log("💾 Зберігаю Word документ"); }
}

export class ExcelDocument extends Document {
  open(): void { console.log("📊 Відкриваю Excel документ..."); }
  close(): void { console.log("📊 Закриваю Excel документ"); }
  save(): void { console.log("💾 Зберігаю Excel документ"); }
}