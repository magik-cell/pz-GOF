import { ComponentA, ComponentB, ComponentC } from './Colleague';

export interface Mediator {
    notify(sender: object, event: string): void;
}

export class ConcreteMediator implements Mediator {
    public componentA: ComponentA;
    public componentB: ComponentB;
    public componentC: ComponentC;

    constructor() {
        this.componentA = new ComponentA(this);
        this.componentB = new ComponentB(this);
        this.componentC = new ComponentC(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.componentB.doB();
        }
        if (event === 'B') {
            console.log('Mediator reacts on B and triggers following operations:');
            this.componentC.doC();
        }
    }
}

// --- ДОДАЙТЕ ЦЕЙ БЛОК НИЖЧЕ ---

console.log('--- ЗАПУСК ПАТЕРНУ MEDIATOR ---');

// 1. Створюємо медіатор (він автоматично створить компоненти)
const mediator = new ConcreteMediator();

// 2. Ініціюємо дію через один із компонентів
// Це запустить ланцюжок: A -> Медіатор -> B -> Медіатор -> C
mediator.componentA.doA();

console.log('--- РОБОТУ ЗАВЕРШЕНО ---');