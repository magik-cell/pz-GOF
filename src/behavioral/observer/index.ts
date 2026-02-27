import { ConcreteSubject } from './Subject';
import { ConcreteObserver } from './Observer';

console.log('--- Observer pattern demo (observer/index.ts) ---');

// 1. Створюємо об'єкт, за яким будемо спостерігати (Суб'єкт)
const subject = new ConcreteSubject();

// 2. Створюємо спостерігачів
const obs1 = new ConcreteObserver('Observer1');
const obs2 = new ConcreteObserver('Observer2');

// 3. Підписуємо їх на зміни стану суб'єкта
subject.attach(obs1);
subject.attach(obs2);

// 4. Змінюємо стан — обидва спостерігачі отримають повідомлення
subject.setState(1);
subject.setState(2);

// 5. Відписуємо одного спостерігача
subject.detach(obs1);

// 6. Змінюємо стан знову — тепер зреагує лише другий спостерігач
subject.setState(3);