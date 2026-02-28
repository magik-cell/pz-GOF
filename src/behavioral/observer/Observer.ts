import { Subject, } from './Subject';

// Інтерфейс для всіх спостерігачів
export interface Observer {
    update(subject: Subject): void;
}

