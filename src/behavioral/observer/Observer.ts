import { Subject, ConcreteSubject } from './Subject';

// Інтерфейс для всіх спостерігачів
export interface Observer {
    update(subject: Subject): void;
}

// Конкретна реалізація спостерігача
export class ConcreteObserver implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public update(subject: Subject): void {
        // Перевіряємо, чи суб'єкт є саме ConcreteSubject, щоб отримати доступ до його стану
        if (subject instanceof ConcreteSubject) {
            console.log(`${this.name} observed state change to ${subject.getState()}`);
        }
    }
}