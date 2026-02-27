import { DocumentFactory } from "./factory";

export function demonstrateFactoryMethod(): void {
  console.log("\n=== Factory Method Pattern ===\n");

  const types = ["PDF", "Word", "Excel"];

  types.forEach((type) => {
    // Якщо DocumentFactory.createDocument викине помилку,
    // виконання цього коду і всього циклу припиниться.
    const doc = DocumentFactory.createDocument(type);
    doc.open();
    doc.save();
    doc.close();
    console.log();
  });

  console.log(
    "✅ Factory Method виконано успішно\n"
  );


}

demonstrateFactoryMethod();
