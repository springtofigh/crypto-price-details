import React, { useEffect , useState } from 'react';

// API
import { getCoin } from '../services/api';

// Components
import Loader from './Loader';
import Coin from './Coin';

// Styles
import styles from './Landing.module.css'

const Landing = () => {

    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();

            setCoins(data)
        }
        fetchAPI();
    },[])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className={styles.container}>
        
        <input className={styles.input} type="text" placeholder='Search' value={search} onChange={searchHandler} />
        {
            coins.length ? 
            <div className={styles.coinContainer}>
            {
                searchCoins.map(coin => <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} marketCap={coin.market_cap} priceChange={coin.price_change_percentage_24h} />)
            }
        </div> : <Loader/>
        }
        
        </div>
    );
};

export default Landing;