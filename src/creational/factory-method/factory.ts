import { Document } from "./model";
import { PDFDocument, WordDocument, ExcelDocument } from "./types";

export class DocumentFactory {
  static createDocument(type: string): Document {
    switch (type.toLowerCase()) {
      case "pdf":
        return new PDFDocument();
      case "word":
        return new WordDocument();
      case "excel":
        return new ExcelDocument();
      default:
        throw new Error(`Невідомий тип документа: ${type}`);
    }
  }
}