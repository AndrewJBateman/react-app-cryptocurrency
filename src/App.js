import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NumberFormat from 'react-number-format';

class App extends Component {

  constructor(props) {
    super(props);

		// holds response from API
    this.state = {
      cryptos: []
    };
  }

	/* 
	function will be carried out once app loads
	axios is promise-based so then function used
	cryptocompare returns price of 3 bitcoins compared to the US $. 
	*/
  componentDidMount() {
		const fsymsList = 'BTC,XRP,BCH,ETH,ZEC,EOS,XMR,ETC,LTC,DASH,QTUM,NEO,XLM,TRX,ADA,BTS,USDT,XUC,PAX,IOT'
		axios
			.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + fsymsList + '&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      });
  }

  render() {
    return (
      <div className="App">
				{Object.keys(this.state.cryptos).map((key) => (
					<div id="crypto-container">
						<span className="left">{key}</span>
						<span className="right"><NumberFormat 
							value={this.state.cryptos[key].USD} 
							displayType={'text'}
							decimalprecision={2} 
							thousandSeparator={true} 
							prefix={'$'} />
						</span>
					</div>
				))}
      </div>
    );
  }
} //end of class

export default App;