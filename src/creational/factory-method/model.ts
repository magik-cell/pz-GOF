// Абстрактна база для документів
export abstract class Document {
  abstract open(): void;
  abstract close(): void;
  abstract save(): void;
}