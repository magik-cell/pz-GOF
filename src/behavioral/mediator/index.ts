import { ConcreteMediator } from './ConcreteMediator';

console.log('--- ЗАПУСК ПАТЕРНУ MEDIATOR ---');

// 1. Створюємо медіатор (він автоматично створить компоненти)
const mediator = new ConcreteMediator();

// 2. Ініціюємо дію через один із компонентів
// Це запустить ланцюжок: A -> Медіатор -> B -> Медіатор -> C
mediator.componentA.doA();

console.log('--- РОБОТУ ЗАВЕРШЕНО ---');