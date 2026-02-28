// Визначення інтерфейсу винесено в окремий файл, щоб уникнути дублювання.
import { Mediator } from './Mediator';

// Базовий клас Colleague
export abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }
}

