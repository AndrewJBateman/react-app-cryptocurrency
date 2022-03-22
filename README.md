# :zap: React App Cryptocurrency

* Crypto currency app using React
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/react-app-cryptocurrency?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/react-app-cryptocurrency?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/react-app-cryptocurrency?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/react-app-cryptocurrency?style=plastic)

## :page_facing_up: Table of contents

* [:zap: React App Cryptocurrency](#zap-react-app-cryptocurrency)
	* [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
	* [:books: General info](#books-general-info)
	* [:camera: Screenshots](#camera-screenshots)
	* [:signal_strength: Technologies](#signal_strength-technologies)
	* [:floppy_disk: Setup](#floppy_disk-setup)
	* [:computer: Code Examples](#computer-code-examples)
	* [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
	* [:clap: Inspiration](#clap-inspiration)
	* [:file_folder: License](#file_folder-license)
	* [:envelope: Contact](#envelope-contact)

## :books: General info

* Lists prices of cryptocurrencies against the US dollar - setup can be changed via http request.

## :camera: Screenshots

![Example screenshot](./img/crypto-api.png).

## :signal_strength: Technologies

* [Node.js v12](https://nodejs.org/) javascript runtime using the [Chrome V8 engine](https://v8.dev/).
* [React v17](https://reactjs.org/) Javascript library.
* [Axios v0.26.1](https://www.npmjs.com/package/axios) promise based HTTP client used to get crypto prices from axternal API.

## :floppy_disk: Setup

* API does not require an API key.
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

* Status: Working
* To-Do: Nothing

## :clap: Inspiration

* [Gary Simon of Coursetro: React CryptoCurrency Tutorial - Display Exchange Data with an API sept 2017](https://www.youtube.com/watch?v=18DkUJ669kc&t=120s)
* [CryptoCompare API](https://min-api.cryptocompare.com) for cryptocurrency prices.

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
