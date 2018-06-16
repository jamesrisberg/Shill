import ApiClient from '../scripts/ApiClient';

const initialState = {
    coins: [],
    selectedCoin: {

    },
    market_cap_by_available_supply: [],
    price_btc: [],
    price_usd: [],
    volume_usd: [],
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_COINS:
            return {
                ...state,
                coins: action.coins
            };
        case TOGGLE_SELECTED_COIN:
            console.log('should update selected coin');
            console.log(action.coin);
            return {
                ...state,
                selectedCoin: action.coin
            }
        case RECEIVE_COIN_DATA:
            return {
                ...state,
                market_cap_by_available_supply: action.data.market_cap_by_available_supply,
                price_btc: action.data.price_btc,
                price_usd: action.data.price_usd,
                volume_usd: action.data.volume_usd,
            }
        default:
            return state;
    }
}


export function receiveCoins(coins) {
    return {
        type: RECEIVE_COINS, 
        coins
    }
}

export function toggleSelectedCoin(coin) {
    return {
        type: TOGGLE_SELECTED_COIN,
        coin
    }
}

export function receiveCoinData(data) {
    return {
        type: RECEIVE_COIN_DATA,
        data
    }
}
export function fetchCoinGraphData(name) {
    return (dispatch) => {
        ApiClient.getExt(`https://graphs2.coinmarketcap.com/currencies/${name}/`)
        .then((values) => {
            console.log('fetchCoinGraphData res')
            console.log(values)
            dispatch(receiveCoinData(values));
        })
    }
};

export function fetchCoins() {
    return (dispatch) => {
        Promise.all([ApiClient.getExt('https://api.coinmarketcap.com/v1/ticker/?limit=2000'), ApiClient.getExt('https://s2.coinmarketcap.com/generated/search/quick_search.json')])
        .then((values) => {
           
            var coinData = values[0].map((d, i) => {
                return {
                    ...d,
                    imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/' + values[1][i].id + '.png'
                }
            });


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
            

            dispatch(receiveCoins(shuffle(coinData)));
        })
    }
}

const RECEIVE_COIN_DATA = 'coins/RECEIVE_COIN_DATA';
const RECEIVE_COINS = 'coins/RECEIVE_COINS';
const TOGGLE_SELECTED_COIN = 'coins/TOGGLE_SELECTED_COIN';
