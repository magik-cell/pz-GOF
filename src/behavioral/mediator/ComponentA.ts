import { Colleague } from './Colleague';
export class ComponentA extends Colleague {
    public doA(): void {
        console.log('ComponentA does A.');
        this.mediator.notify(this, 'A');
    }
}