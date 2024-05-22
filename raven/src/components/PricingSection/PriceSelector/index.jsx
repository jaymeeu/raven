import React, { useEffect, useState } from 'react'
import './style.css'
import { IoChevronDown } from "react-icons/io5";
import btc from '@/assets/BTC.svg'
import { useSearchParams } from 'react-router-dom';

const Index = ({ type }) => {
  useEffect(() => {
    fetchTradingPairs()
  }, [])

  const [defaultcoins, setdefaultCoins] = useState([])
  const [coins, setCoins] = useState([])

  const [_searchParams, setSearchParams] = useSearchParams();

  async function fetchTradingPairs() {
    try {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price');
      const data = await response.json();
      setCoins(data);
      setdefaultCoins(data)
    } catch (error) {
      console.error('Error fetching trading pairs:', error);
    }
  }

  const onChange = (value) => setSearchParams(params => {
    params.set("symbol", value);
    return params;
  })

  const [show, setShow] = useState(false)
  const [selectedOption, setselectedOption] = useState({})

  const optionClicked = (selected) => {
    onChange(selected.symbol)
    setselectedOption(selected)
    setShow(false)
  }

  const onSelectorClicked = () => {
    setShow((prev) => !prev)
  }

  function filterTradingPairs(query) {
    if (query === "") {
      return setCoins(defaultcoins)
    }

    setCoins((prev) => prev.filter(coin => coin.symbol.toLowerCase().includes(query.toLowerCase())));
  }

  return (
    <div className='price__selector'>
      {
        type === 'search' ?
        <div class="coin__selector" onClick={onSelectorClicked}>
        <input placeholder="Search"  type="search" class="dropdown__search_top"></input>
    </div>
          :
          <div className="coin__selector" onClick={onSelectorClicked}>
            <img src={btc} className="selector__image" />
            <div className="selector__title">{selectedOption?.symbol ? selectedOption.symbol : "BTC/USDT"}</div>
            <IoChevronDown className='selector__chevron' />
            <div className="selector__price">
              ${selectedOption?.price ? selectedOption.price : "20,634"}
            </div>
          </div>
      }


      <div className={`coin__dropdown ${show && "show"}`} id="coin__dropdown">
        <div className="dropdown__container">
          <div className="dropdown__title">
            Select Market
          </div>
          <input onChange={(e) => filterTradingPairs(e.target.value)} placeholder="Search" id="search-coin-input" type="search" className="dropdown__search"></input>
          <div className="dropdown__filter">
            <div className="dropdown__filter--option">All</div>
            <div className="dropdown__filter--option">USD</div>
            <div className="dropdown__filter--option">BTC</div>
          </div>
          <div className="options__container" id="coin-list">
            {
              coins.map((coin) => (
                <div className="options__cont" onClick={() => optionClicked(coin)}>
                  <div className="options__title">
                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="${coin.symbol} logo" className="options__title--image" />
                    <div className="options__title--text">
                      {coin?.symbol}
                    </div>
                  </div>
                  <div className="options__cost">
                    <div className="options__cost--text">
                      {coin?.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Index
