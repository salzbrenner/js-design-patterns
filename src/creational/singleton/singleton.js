class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    return Singleton.instance = this._init();
  }

  _init() {
    return {
      randomNumber: this._getRandom()
    };
  }

  _getRandom() {
    return Math.random();
  }
}

export default Singleton;
