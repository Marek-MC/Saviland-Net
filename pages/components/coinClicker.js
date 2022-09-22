import { Component } from 'react'

class CoinClicker extends Component {

    state = {
        coins: 0,
        color: 'chartreuse',
    }

    colorWheel = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        })
    }

    // Cookie Functions

    addOneCoin = () => {
        this.setState(prevState => {
            return { coins: prevState.coins + 1 }
        })
        console.log("You got a cookie.")
        this.randomizeColor()
    }

    randomizeColor = () => {
        this.setState({
            color: "red"
        })
    }

    


    render() {
        return (
            <div>

                <div id="cookie-clicker"
                    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <button onClick={this.addOneCoin}>🍪</button>
                    <p style={{ color: this.state.color }}>{this.state.coins}</p>
                </div>

            </div>
        )
    }
}

export default CoinClicker