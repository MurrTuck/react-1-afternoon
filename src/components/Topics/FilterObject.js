import React, { Component } from 'react'

export default class FilterObjects extends Component {
    constructor() {
        super()

        this.state = {
            myCrew: [
                {
                    name: "Murray",
                    age: 34,
                    ballet: false
                },
                {
                    name: "Kels",
                    age: 33,
                    bestFeature: 'Lovable'
                },
                {
                    name: "Bug",
                    age: 8,
                    ballet: true
                },
                {
                    name: "Benny",
                    age: 6,
                    baseball: true
                },
                {
                    name: "Noly",
                    age: 4,
                    superhero: "Gangsta"
                }
            ],
            userInput: '',
            filteredCrew: []
        }
    }

    yeeYee(value) {
        this.setState({ userInput: value })
    }

    filterCrew(prop) {
        let myCrew = this.state.myCrew
        let filteredCrew = []

        for (let i = 0; i < myCrew.length; i++) {
            if (myCrew[i].hasOwnProperty(prop)) {
                filteredCrew.push(myCrew[i])
            }
        }
        this.setState({ filteredCrew: filteredCrew })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Objects</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.myCrew, null, 10)}</span>
                <input type="text" className="inputLine"
                    onChange={(e) => this.yeeYee(e.target.value)} />
                <button className="confirmationButton"
                    onClick={() => this.filterCrew(this.state.userInput)}>Filter</button>
                <span className="resultBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredCrew, null, 10)}</span>
            </div>

        )
    }
}

//filterObjects is complete