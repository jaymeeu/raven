import React, { useEffect, useState } from 'react'
import './style.css'
import ReactApexChart from 'react-apexcharts';
import DurationToggle from './DurationToggle';
import { useSearchParams } from 'react-router-dom';


const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
          
  const duration = searchParams.get("duration")
  const symbol = searchParams.get("symbol")

  useEffect(() => {
    fetchCandlestickData(
        duration ? duration.toLowerCase() : "1h", 
        symbol ? symbol.toUpperCase() : "ETHBTC"
      )
  }, [duration, symbol])




  const [coins, setCoins] = useState('')
  const [chartData, setChartData] = useState([])
  const [coinDigit, setCoinDigit] = useState({})

 

  async function fetchCandlestickData(interval, symbol) {
    try {
        const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}`);
        const data = await response.json();
        setCoins(symbol)
        const [ open, high, low, close] = data[0];
  
        const openValue = parseFloat(open);
        const highValue = parseFloat(high);
        const lowValue = parseFloat(low);
        const closeValue = parseFloat(close);
  
        const changePercentage = ((closeValue - openValue) / openValue * 100).toFixed(2);
        const amplitudePercentage = ((highValue - lowValue) / lowValue * 100).toFixed(2);
  
        setCoinDigit({
          open : openValue,
          high : highValue,
          low : lowValue,
          close : closeValue,
          change :  changePercentage,
          amplitude : amplitudePercentage
        })
       
        setChartData(data.map(entry => ({
            x: new Date(entry[0]),
            y: [parseFloat(entry[1]), parseFloat(entry[2]), parseFloat(entry[3]), parseFloat(entry[4])]
        }))
      );
    } catch (error) {
        console.error('Error fetching candlestick data:', error);
    }
  }

  var options = {

    series: [{
      data: chartData
    }],
    options: {
      title: {
        text: '',
        align: 'left'
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true
        },
        opposite: true
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: 'rgba(37, 194, 110, 1)',
            downward: 'rgba(255, 104, 56, 1)'
          }
        }
      },
      chart: {
        foreColor: 'rgba(167, 177, 188, 1)',
        fontFamily: 'Satoshi, sans-serif',
        type: 'candlestick',
        height: 450
      },
      grid: {
        show: false,
      }
    },
  }
 
    
  return (

   
    

    <div>
      <div className='chart__filters'>
        <div className="chart__filter">
          <DurationToggle />
        </div>
      </div>

      <div className="trend__info">
        <div className="trend__text">
          <div className="trend__span">
            
            {
              coins ? coins : "BTC/USDT"
            }
          </div>
        </div>
        <div className="trend__text">
          <div className="trend__span">O</div>
          <div className="trend__span--cold"> {parseFloat(coinDigit?.open).toLocaleString()}</div>
        </div>
        <div className="trend__text">
          <div className="trend__span">H</div>
          <div className="trend__span--cold">{parseFloat(coinDigit?.high).toLocaleString()}</div>
        </div>
      <div className="trend__text">
        <div className="trend__span">L</div>
        <div className="trend__span--cold">{parseFloat(coinDigit?.low).toLocaleString()}</div>
      </div>
      <div className="trend__text">
        <div className="trend__span">C</div>
        <div className="trend__span--cold">{parseFloat(coinDigit?.close).toLocaleString()}</div>
      </div>
      <div className="trend__text">
        <div className="trend__span">Change</div>
        <div className="trend__span--cold">{coinDigit?.change}%</div>
      </div>
      <div className="trend__text">
        <div className="trend__span">Amplitude</div>
        <div className="trend__span--cold">{coinDigit?.amplitude}%</div>
      </div>
      </div>

      <ReactApexChart
        options={options.options}
        series={options.series}
        type="candlestick"
        height={450}
      />
    </div>
  )
}

export default Index
