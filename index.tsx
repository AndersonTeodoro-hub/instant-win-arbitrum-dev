import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { arbitrum } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';
import App from './App';

const projectId = '94daeb9a2c7c766816ab3ea56255520b';

const config = createConfig({
  chains: [arbitrum],
  connectors: [
    injected(),
    walletConnect({ 
      projectId,
      metadata: {
        name: 'INSTANT WIN',
        description: 'Arbitrum Prize Protocol',
        url: 'https://instant-win-arbitrum-dev.vercel.app',
        icons: ['https://instant-win-arbitrum-dev.vercel.app/icon.png']
      }
    }),
  ],
  transports: {
    [arbitrum.id]: http(),
  },
});

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
