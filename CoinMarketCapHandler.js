import ApiClient from './ApiClient';

export function fetchCoinData () {
        Promise.all([ApiClient.getExt('https://api.coinmarketcap.com/v1/ticker/?limit=2000'), ApiClient.getExt('https://s2.coinmarketcap.com/generated/search/quick_search.json')])
        .then((values) => {
            console.log('values');
            console.log(values)
            var coinData = values[0].map((d, i) => {
                return {
                    ...d,
                    imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/' + values[1][i].id + '.png'
                }
            });

            console.log('parsed coin data');
            console.log(coinData)

            function shuffle(coinData) {
                let currentIndex = coinData.length, tempValue, randomIndex;

                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    tempValue = coinData[currentIndex];
                    coinData[currentIndex] = coinData[randomIndex];
                    coinData[randomIndex] = tempValue
                }

                return coinData
            }
            //resolve(coinData);
            this.setState({
                coinData: shuffle(coinData)
            }) 
        })
        
}

