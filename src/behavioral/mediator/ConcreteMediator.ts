import { Mediator } from './Mediator';
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';
import { ComponentC } from './ComponentC';


export class ConcreteMediator implements Mediator {
    public componentA: ComponentA;
    public componentB: ComponentB;
    public componentC: ComponentC;

    // Стек для уникнення циклічних викликів
    private callStack: Set<object> = new Set();

    constructor() {
        this.componentA = new ComponentA(this);
        this.componentB = new ComponentB(this);
        this.componentC = new ComponentC(this);
    }

    public notify(sender: object, event: string): void {
        // Якщо ми вже опрацювали цього відправника в поточному ланцюжку — виходимо
        if (this.callStack.has(sender)) {
            return;
        }

        this.callStack.add(sender);

        try {
            if (sender instanceof ComponentA && event === 'A') {
                console.log('Mediator reacts on A and triggers B');
                this.componentB.doB();
            }

            if (sender instanceof ComponentB && event === 'B') {
                console.log('Mediator reacts on B and triggers C');
                this.componentC.doC();
            }

            if (sender instanceof ComponentC && event === 'C') {
                console.log('Mediator reacts on C and triggers A');
                this.componentA.doA();
            }
        } finally {
            // Очищуємо стек після завершення гілки викликів
            this.callStack.delete(sender);
        }
    }
}
