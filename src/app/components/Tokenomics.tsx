import { motion } from 'motion/react';

export function Tokenomics() {
  const tokenomics = [
    {
      title: 'Total Supply',
      value: '1,000,000,000',
      description: 'ElonMuskMom tokens',
    },
    {
      title: 'Liquidity',
      value: 'Locked',
      description: 'Forever',
    },
    {
      title: 'Tax',
      value: '0%',
      description: 'Buy and Sell',
    },
    {
      title: 'Distribution',
      value: '100%',
      description: 'To Community',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Get a Wallet',
      description: 'Download MetaMask or Trust Wallet',
    },
    {
      number: '02',
      title: 'Buy ETH',
      description: 'Fund your wallet through an exchange or card',
    },
    {
      number: '03',
      title: 'Swap',
      description: 'Swap ETH for $MAYMUSK on Uniswap',
    },
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      
    </section>
  );
}