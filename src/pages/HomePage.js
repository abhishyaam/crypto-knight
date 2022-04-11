import React, { useState, useEffect, useContext } from 'react';
import { Banner, Carousel } from '../components';
import styled from 'styled-components/macro';
import { TrendingCoins } from '../apis/coin-gecko';
import { CryptoState } from '../context/CryptoContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 75vw;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default function HomePage() {
  const [trendCoins, setTrendCoins] = useState([]);
  const { currency, symbol } = CryptoState;

  useEffect(() => {
    try {
      //fetch trending coins
      const url = TrendingCoins('INR');
      fetch(url).then(async (res) => {
        const data = await res.json();
        setTrendCoins(data);
        console.log(trendCoins, data);
      });
    } catch (error) {}
  }, []);
  return (
    <>
      <Container style={{}}>
        <Banner>
          <Banner.Title>Crypto Knight</Banner.Title>
          <Banner.SubTitle>
            {' '}
            Get All The Info Regarding Your Favorite Crypto Currency
          </Banner.SubTitle>
        </Banner>

        <Carousel>
          <Carousel.Title>Trending Coins</Carousel.Title>
          <Carousel.List>
            {trendCoins.length > 0
              ? trendCoins.map(
                  ({
                    symbol,
                    id,
                    image,
                    ath_change_percentage,
                    current_price,
                  }) => (
                    <Carousel.Item key={symbol}>
                      <Carousel.Item.Icon src={image}></Carousel.Item.Icon>
                      <Carousel.Item.Row>
                        <span>{symbol.toUpperCase()}</span>{' '}
                        <span>{ath_change_percentage}%</span>
                      </Carousel.Item.Row>
                      {/* <Carousel.Item.Row>
                        <bold>{`${symbol}${current_price}`}</bold>
                      </Carousel.Item.Row> */}
                    </Carousel.Item>
                  )
                )
              : null}
          </Carousel.List>
        </Carousel>
      </Container>
    </>
  );
}
