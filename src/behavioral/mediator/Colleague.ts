// Інтерфейс медіатора, який визначає метод сповіщення
interface Mediator {
    notify(sender: object, event: string): void;
}

// Базовий клас Colleague
export abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }
}

// Конкретний компонент A
export class ComponentA extends Colleague {
    public doA(): void {
        console.log('ComponentA does A.');
        this.mediator.notify(this, 'A');
    }
}

// Конкретний компонент B
export class ComponentB extends Colleague {
    public doB(): void {
        console.log('ComponentB does B.');
        this.mediator.notify(this, 'B');
    }
}

// Конкретний компонент C
export class ComponentC extends Colleague {
    public doC(): void {
        console.log('ComponentC does C.');
        this.mediator.notify(this, 'C');
    }
}