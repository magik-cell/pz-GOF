/**
 * Загальний інтерфейс медіатора, який використовують колеги.
 * Винесений у власний модуль, щоб не дублювати визначення.
 */
export interface Mediator {
    notify(sender: object, event: string): void;
}
