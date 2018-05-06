import ApiClient from '../scripts/ApiClient';

const initialState = {
    coins: [],
    selectedCoin: {

    }
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_COINS:
            return {
                ...state,
                coins: action.coins
            };
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

const RECEIVE_COINS = 'coins/RECEIVE_COINS';
