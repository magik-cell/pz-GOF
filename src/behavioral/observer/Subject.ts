import { Observer } from './Observer';

// Інтерфейс для Суб'єкта (те, за чим спостерігають)
export interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

export class ConcreteSubject implements Subject {
    // Список спостерігачів
    private observers: Observer[] = [];
    
    // Внутрішній стан суб'єкта
    private state: number = 0;

    // Приєднати спостерігача
    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }

    // Від'єднати спостерігача
    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    }

    // Сповістити всіх спостерігачів про зміну стану
    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    // Змінити стан (це автоматично викликає notify)
    public setState(state: number): void {
        this.state = state;
        this.notify();
    }

    // Отримати поточний стан
    public getState(): number {
        return this.state;
    }
}