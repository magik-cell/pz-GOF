import { Colleague } from './Colleague';
export class ComponentC extends Colleague {
    public doC(): void {
        console.log('ComponentC does C.');
        this.mediator.notify(this, 'C');
    }
}
