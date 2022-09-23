import { Component } from 'react'
import Image from "next/image"
import Navigation from "./components/navigation.js"

import styles from '../styles/Home.module.css'


class Coins extends Component {

    state = {
        coins: 0,
        color: 'yellow',
    }


    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        })
    }

    // Add coins to your current total! 
    addOneCoin = () => {
        this.setState(prevState => {
            return { coins: prevState.coins + 1, color: "orange" }
        })
        console.log("You got a coin.")
    }
    addFiveCoins = () => {
        this.setState(prevState => {
            return { coins: prevState.coins + 5, color: "orange" }
        })
        console.log("You 5 coins.")
    }
    addTenCoins = () => {
        this.setState(prevState => {
            return { coins: prevState.coins + 10, color: "orange" }
        })
        console.log("You got 10 coins.")
    }
    addTwentyFiveCoins = () => {
        this.setState(prevState => {
            return { coins: prevState.coins + 25, color: "orange" }
        })
        console.log("You got 25 coins.")
    }

    render() {
        return (
            <div className={styles.container}>

                <Navigation />

                <h2>Coin Collector</h2>

                <p style={{ color: this.state.color }}>{this.state.coins}</p>



                <p>Collect your coins!</p>
                
                <div id="coin1" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    +1
                    <button onClick={this.addOneCoin} style={{ border: "none", backgroundColor: "inherit", width: 40, height: 40 }}>
                        <Image src="/marioimages/coin.gif" alt="coin" width={32} height={32} />
                    </button>
                </div>

                <div id="coin2" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    +5
                    <button onClick={this.addFiveCoins} style={{ border: "none", backgroundColor: "inherit", width: 40, height: 40 }}>
                        <Image src="/marioimages/coin.gif" alt="coin" width={32} height={32} />
                    </button>
                </div>

                <div id="coin3" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    +10
                    <button onClick={this.addTenCoins} style={{ border: "none", backgroundColor: "inherit", width: 40, height: 40 }}>
                        <Image src="/marioimages/coin.gif" alt="coin" width={32} height={32} />
                    </button>
                </div>

                <div id="coin4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    +25
                    <button onClick={this.addTwentyFiveCoins} style={{ border: "none", backgroundColor: "inherit", width: 40, height: 40 }}>
                        <Image src="/marioimages/coin.gif" alt="coin" width={32} height={32} />
                    </button>
                </div>

            </div>
        )
    }
}

export default Coins