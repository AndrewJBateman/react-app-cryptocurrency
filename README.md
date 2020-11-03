# :zap: React App Cryptocurrency

* Creates a crypto currency app using React
* npm dependencies updated oct 2019.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Lists prices of cryptocurrencies against the US dollar - setup can be changed via http request.

## :camera: Screenshots

![Example screenshot](./img/crypto-api.png).

## :signal_strength: Technologies

* [Node.js v12](https://nodejs.org/) javascript runtime using the [Chrome V8 engine](https://v8.dev/).
* [React v16](https://reactjs.org/) Javascript library.
* [Axios v0.19.0](https://www.npmjs.com/package/axios) promise based HTTP client used to get crypto prices from axternal API.

## :floppy_disk: Setup

* `npm start` Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `npm run build` Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## :computer: Code Examples

* extract of `App.js` - axios http asynchronous call to cryptocurrency API.

```javascript

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

```

## :clipboard: Status & To-Do List

* Status oct 2019: working app that gets API data with no errors or warnings.

## :clap: Inspiration

* [Gary Simon of Coursetro: React CryptoCurrency Tutorial - Display Exchange Data with an API sept 2017](https://www.youtube.com/watch?v=18DkUJ669kc&t=120s)
* [CryptoCompare API](https://min-api.cryptocompare.com) for cryptocurrency prices.

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
