export class Subject {
    constructor() {
        this.observers = new Set();
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    notify(ctx) {
        this.observers.forEach(obsvr => {
            obsvr.update(ctx)
        })
    }
}

export class Observer {
    constructor() {
        this.counter = 0;
    }
    update(number) {
        this.counter = number;
    }
}
