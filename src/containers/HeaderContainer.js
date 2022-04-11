import { useState } from 'react';
import { Header } from '../components';
import { CryptoState } from '../context/CryptoContext';
const currencies = [
  { id: 1, name: 'INR' },
  { id: 2, name: 'USD' },
];
export default function HeaderContainer() {
  const [expand, setExpand] = useState(false);
  const { currency, setCurrency } = CryptoState();
  const renderCurrencies = () => {
    return currencies.map(({ id, name }) => (
      <Header.Option key={id} onClick={() => selectCurrency(name)}>
        {name}
      </Header.Option>
    ));
  };
  const selectCurrency = (currency) => {
    setCurrency(currency);
    setExpand(false);
  };
  return (
    <Header>
      <Header.Title>Crypto Knight</Header.Title>
      <Header.Frame>
        <Header.Select
          onClick={() => setExpand((expand) => !expand)}
          expand={expand ? 1 : 0}
        >
          <Header.Bigtext>{currency}</Header.Bigtext>
        </Header.Select>

        <Header.Options expand={expand ? 1 : 0}>
          {currencies.length > 0 ? renderCurrencies() : null}
        </Header.Options>
      </Header.Frame>
    </Header>
  );
}
