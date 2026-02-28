import { Colleague } from './Colleague';

export class ComponentB extends Colleague {
    public doB(): void {
        console.log('ComponentB does B.');
        this.mediator.notify(this, 'B');
    }
}
