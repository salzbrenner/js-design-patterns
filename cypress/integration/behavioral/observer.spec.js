import {Observer, Subject} from "../../../src/behavioral/observer/observer";

describe('Observer Test', function() {
    it('should have matching random numbers', function() {
        const subject = new Subject();
        const observerA = new Observer();
        const observerB = new Observer();

        subject.addObserver(observerA);
        subject.addObserver(observerB);
        subject.notify(5);

        expect(observerA.counter).to.equal(5);
        expect(observerB.counter).to.equal(5);

        subject.removeObserver(observerA);
        subject.notify(10);

        expect(observerA.counter).to.equal(5);
        expect(observerB.counter).to.equal(10);
    })
})
