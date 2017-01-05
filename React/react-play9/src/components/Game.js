import React, { Component } from 'react';

import AnswerFrame from './AnswerFrame';
import ButtonsFrame from './ButtonsFrame';
import NumbersFrame from './NumbersFrame';
import StarsFrame from './StarsFrame';

class Game extends Component {

    constructor() {
        super();
        this.state = {
            selectedNumbers: [],
            usedNumbers: [],
            numberOfStars: this.randomNumber(),
            correct: null,
            redraws: 5,
            doneStatus: null
        };
    }
    randomNumber() {
        return Math.floor(Math.random() * 9) + 1
    }

    selectNumber(number) {
        if ((this.state.selectedNumbers.indexOf(number) == -1) && ((this.state.usedNumbers.indexOf(number) == -1))) {
            this.setState({ selectedNumbers: this.state.selectedNumbers.concat(number) });
        }
    }
    unSelectNumber(number) {
        let selectedNumbers = this.state.selectedNumbers,
            indexOfNumber = selectedNumbers.indexOf(number);
        selectedNumbers.splice(indexOfNumber, 1);
        this.setState({ selectedNumbers: selectedNumbers });
    }
    sumOfSelectedNumbers() {
        return this.state.selectedNumbers.reduce(function (p, n) {
            return p + n;
        }, 0)
    }
    checkAnswer() {
        let correct = (this.state.numberOfStars === this.sumOfSelectedNumbers());
        this.setState({ correct });
    }
    acceptAnswer() {
        var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
        this.setState({
            selectedNumbers: [],
            usedNumbers: usedNumbers,
            correct: null,
            numberOfStars: this.randomNumber()
        }, function () {
            this.updateDoneStatus();
        });

    }
    redraw() {
        if (this.state.redraws >= 0) {
            this.setState({
                numberOfStars: this.randomNumber(),
                correct: null,
                selectedNumbers: [],
                redraws: this.state.redraws - 1
            }, function () {
                this.updateDoneStatus();
            });
        }

    }
    resetGame() {
        console.log('reset game...');
        this.setState({
            selectedNumbers: [],
            usedNumbers: [],
            numberOfStars: this.randomNumber(),
            correct: null,
            redraws: 5,
            doneStatus: null
        });
    }

    possibleCombinationSum(arr, n) {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return this.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount; i++) {
            var combinationSum = 0;
            for (var j = 0; j < listSize; j++) {
                if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    };

    possibleSolution() {
        var numberOfStars = this.state.numberOfStars,
            possibleNumbers = [],
            usedNumbers = this.state.usedNumbers;

        for (var i = 1; i <= 9; i++) {
            if (usedNumbers.indexOf(i) < 0) {
                possibleNumbers.push(i);
            }
        }

        return this.possibleCombinationSum(possibleNumbers, numberOfStars);
    }
    updateDoneStatus() {
        if (this.state.usedNumbers.length === 9) {
            this.setState({ doneStatus: 'Done. Nice!' });
            return;
        }
        if (this.state.redraws === 0 && !this.possibleSolution()) {
            this.setState({ doneStatus: 'Game Over!' });
        }
    }

    render() {
        return (
            <div>
                <div className="clearfix">
                    <StarsFrame numberOfStars={this.state.numberOfStars} />
                    <ButtonsFrame checkAnswer={this.checkAnswer.bind(this)}
                        acceptAnswer={this.acceptAnswer.bind(this)}
                        redraw={this.redraw.bind(this)}
                        redraws={this.state.redraws}
                        status={this.state.selectedNumbers.length === 0}
                        correct={this.state.correct} />
                    <AnswerFrame selectedNumbers={this.state.selectedNumbers}
                        unSelectNumber={this.unSelectNumber.bind(this)} />
                </div>
                <NumbersFrame selectedNumbers={this.state.selectedNumbers}
                    doneStatus={this.state.doneStatus}
                    usedNumbers={this.state.usedNumbers}
                    resetGame={this.resetGame.bind(this)}
                    selectNumber={this.selectNumber.bind(this)} />
            </div>
        );
    }
}

export default Game;