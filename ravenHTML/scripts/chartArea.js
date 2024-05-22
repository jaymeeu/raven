let activeValue = '';

const onChangeDuration = (value) => {
  updateChart(value.toLowerCase(), "ETHBTC")
  activeValue = value;
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("duration", value);
  window.history.pushState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
  updateButtons();
};

const updateButtons = () => {
  const buttons = document.querySelectorAll('.text__btn');
  buttons.forEach((button) => {
    button.classList.toggle('active', button.textContent === activeValue);
  });
};

const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get("duration");
if (status === null) {
  activeValue = '1H';
} else {
  activeValue = status;
}
updateButtons();

async function fetchCandlestickData(interval, symbol) {
  try {
      const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}`);
      const data = await response.json();
      const [ open, high, low, close] = data[0];

      const openValue = parseFloat(open);
      const highValue = parseFloat(high);
      const lowValue = parseFloat(low);
      const closeValue = parseFloat(close);

      const changePercentage = ((closeValue - openValue) / openValue * 100).toFixed(2);
      const amplitudePercentage = ((highValue - lowValue) / lowValue * 100).toFixed(2);

      document.getElementById('openTrend').innerText = parseFloat(openValue.toFixed(2)).toLocaleString();
      document.getElementById('highTrend').innerText = parseFloat(highValue.toFixed(2)).toLocaleString();
      document.getElementById('lowTrend').innerText = parseFloat(lowValue.toFixed(2)).toLocaleString();
      document.getElementById('closeTrend').innerText = parseFloat(closeValue.toFixed(2)).toLocaleString();
      document.getElementById('changeTrend').innerText = `${changePercentage}%`;
      document.getElementById('amplitudeTrend').innerText = `${amplitudePercentage}%`;
      return data.map(entry => ({
          x: new Date(entry[0]),
          y: [parseFloat(entry[1]), parseFloat(entry[2]), parseFloat(entry[3]), parseFloat(entry[4])]
      }));
  } catch (error) {
      console.error('Error fetching candlestick data:', error);
  }
}

let chartData = [];

var options = {
  series: [{
      data: chartData
  }],
  chart: {
      type: 'candlestick',
      height: 450,
      foreColor: 'rgba(167, 177, 188, 1)',
      fontFamily: 'Satoshi, sans-serif',
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: 'rgba(37, 194, 110, 1)',
        downward: 'rgba(255, 104, 56, 1)'
      }
    }
  },
  xaxis: {
      type: 'datetime'
  },
  yaxis: {
      tooltip: {
          enabled: true
      },
      opposite: true
  },
  grid: {
    show: false,
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

async function updateChart(interval, symbol) {
  chartData = await fetchCandlestickData(interval, symbol);
  chart.updateSeries([{
      data: chartData
  }]);
}

// Initial load
updateChart('1h', 'ETHBTC');

// Optionally, refresh the data periodically
// setInterval(updateChart, 60000); // Update every minute


// async function fetchBTCUSDTData() {
//   try {
//       const response = await fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=1');
//       const data = await response.json();
      
//       const [ open, high, low, close] = data[0];

//       const openValue = parseFloat(open);
//       const highValue = parseFloat(high);
//       const lowValue = parseFloat(low);
//       const closeValue = parseFloat(close);

//       const changePercentage = ((closeValue - openValue) / openValue * 100).toFixed(2);
//       const amplitudePercentage = ((highValue - lowValue) / lowValue * 100).toFixed(2);

//       document.getElementById('openTrend').innerText = parseFloat(openValue.toFixed(2)).toLocaleString();
//       document.getElementById('highTrend').innerText = parseFloat(highValue.toFixed(2)).toLocaleString();
//       document.getElementById('lowTrend').innerText = parseFloat(lowValue.toFixed(2)).toLocaleString();
//       document.getElementById('closeTrend').innerText = parseFloat(closeValue.toFixed(2)).toLocaleString();
//       document.getElementById('changeTrend').innerText = `${changePercentage}%`;
//       document.getElementById('amplitudeTrend').innerText = `${amplitudePercentage}%`;
//   } catch (error) {
//       console.error('Error fetching BTC/USDT data:', error);
//   }
// }

async function fetchTradingPairs() {
  try {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price');
      const data = await response.json();

      return data;
  } catch (error) {
      console.error('Error fetching trading pairs:', error);
  }
}


async function displayTradingPairs(data) {
  try {
      
      const coinList = document.getElementById('coin-list');
      coinList.innerHTML = '';

      data.forEach(coin => {
          const listItem = document.createElement('div');
          listItem.classList.add('options__cont');
          // const priceChangePercentage = coin.price_change_percentage_24h.toFixed(2);
          // const priceChangeClass = priceChangePercentage < 0 ? 'red' : 'green';

          listItem.innerHTML = `
              <div class="options__title">
                  <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="${coin.symbol} logo" class="options__title--image">
                  <div class="options__title--text">
                      ${coin.symbol}
                  </div>
              </div>  
              <div class="options__cost">
                  <div class="options__cost--text">
                      $${coin.price.toLocaleString()}
                  </div>
                  <div class="options__cost--percent ">

                  </div>
              </div>
          `;

          listItem.addEventListener('click', () => {
            selectedCoin(coin)

            // Perform other actions as needed
        });

          coinList.appendChild(listItem);
      });
  } catch (error) {
      console.error('Error fetching coin list:', error);
  }
}


function filterTradingPairs(pairs, query) {
  return pairs.filter(pair => pair.symbol.toLowerCase().includes(query.toLowerCase()));
}


async function initialize() {
  const pairs = await fetchTradingPairs();
  displayTradingPairs(pairs);

  const searchInput = document.getElementById('search-coin-input');
  searchInput.addEventListener('input', (event) => {
      const query = event.target.value;
      const filteredPairs = filterTradingPairs(pairs, query);
      displayTradingPairs(filteredPairs);
  });
}

// Initialize the trading pairs list and search functionality
initialize();


async function selectedCoin(coin) {
  updateChart('1h', coin.symbol);
  
  const selectorDropdown = document.getElementById("coin__dropdown")
  const selectorTitle = document.getElementById("selector__title")
  const selectorId = document.getElementById("selector__price")
  const trendSpan = document.getElementById("trend__span")
  
  selectorTitle.innerHTML = coin.symbol
  trendSpan.innerHTML = coin.symbol
  selectorId.innerHTML = coin.price
  selectorDropdown.classList.remove('show');

}
