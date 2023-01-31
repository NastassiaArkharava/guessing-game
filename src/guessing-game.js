class GuessingGame {
    constructor() {}

    setRange(min, max) {
			this.minValue = min;
			this.maxValue = max;
    }

    guess() {
			return this.guessNumber = Math.round((this.maxValue + this.minValue) / 2);
    }

    lower() {
			return this.maxValue = this.guessNumber;
    }

    greater() {
			return this.minValue = this.guessNumber;
    }
}

module.exports = GuessingGame;
