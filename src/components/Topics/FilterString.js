import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            names: ['Murray', 'Kels', 'Bug', 'Benny', 'Noly'],
            userInput: '',
            filteredArray: []
        }
    }

    getWrecked(value) {
        this.setState({ userInput: value })
    }

    filterArray(userInput) {
        let names = this.state.names
        let filteredNames = []

        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
                filteredNames.push(names[i])
            }
        }
        this.setState({ filteredNames: filteredNames })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.names, null, 10)}</span>
                <input type="text" className="inputLine"
                    onChange={(e) => this.getWrecked(e.target.value)} />
                <button className="confirmationButton"
                    onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}

//filterString is complete