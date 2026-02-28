// When running under ts-node/CommonJS we import the TypeScript files
// directly; including a `.js` extension forces the loader to look for a
// compiled JavaScript file that doesn't exist.  Drop the extension so the
// module resolution works transparently in both development and after
// compilation.
import { ConcreteSubject } from "./ConcreteSubject";
import { ConcreteObserver } from "./ConcreteObserver";

export function demonstrateObserver(): void {
    const subject = new ConcreteSubject();

    const obs1 = new ConcreteObserver("Спостерігач 1");
    const obs2 = new ConcreteObserver("Спостерігач 2");

    subject.attach(obs1);
    subject.attach(obs2);

    subject.setState(1); // Тепер помилки не буде
    subject.setState(2);

    subject.detach(obs2);
    subject.setState(3);
}

demonstrateObserver();