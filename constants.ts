export const ADDRESSES = {
  USDC: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831' as const,
  USERNAME_REGISTRY: '0xc184b9ab1e725E174EC2eD36D43AD81F3b32f88A' as const,
  SHARES_REGISTRY: '0xa6c459FCe17C6b13cA218eBDD78edA08CC1af8df' as const,
  RAFFLE_MANAGER: '0x79D941Fc75D3fbdE45e35193f1246d2C558F05ff' as const,
};

export const ABIS = {
  USDC: [
    { name: "approve", type: "function", stateMutability: "nonpayable", inputs: [{ name: "spender", type: "address" }, { name: "amount", type: "uint256" }], outputs: [{ type: "bool" }] },
    { name: "balanceOf", type: "function", stateMutability: "view", inputs: [{ name: "account", type: "address" }], outputs: [{ type: "uint256" }] },
    { name: "allowance", type: "function", stateMutability: "view", inputs: [{ name: "owner", type: "address" }, { name: "spender", type: "address" }], outputs: [{ type: "uint256" }] }
  ] as const,
  USERNAME_REGISTRY: [
    { inputs: [], name: "InvalidUsername", type: "error" },
    { inputs: [], name: "UsernameAlreadyTaken", type: "error" },
    { inputs: [], name: "UsernameTooLong", type: "error" },
    { inputs: [], name: "UsernameTooShort", type: "error" },
    { inputs: [], name: "WalletAlreadyHasUsername", type: "error" },
    { inputs: [{ name: "wallet", type: "address" }], name: "getUsername", outputs: [{ type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [{ name: "username", type: "string" }], name: "isUsernameAvailable", outputs: [{ type: "bool" }], stateMutability: "view", type: "function" },
    { inputs: [{ name: "username", type: "string" }], name: "registerUsername", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [{ name: "wallet", type: "address" }], name: "hasUsername", outputs: [{ type: "bool" }], stateMutability: "view", type: "function" }
  ] as const,
  SHARES_REGISTRY: [
    { inputs: [{ name: "amount", type: "uint256" }], name: "buyShares", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [{ name: "roundId", type: "uint256" }], name: "claimRewards", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "getSharesAvailable", outputs: [{ type: "uint256" }], stateMutability: "view", type: "function" }
  ] as const,
  RAFFLE_MANAGER: [
    { inputs: [{ name: "ticketCount", type: "uint256" }], name: "buyTickets", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "getCurrentRound", outputs: [{ name: "roundId", type: "uint256" }, { name: "totalPool", type: "uint256" }, { name: "endTime", type: "uint256" }, { name: "participantCount", type: "uint256" }, { name: "ticketCount", type: "uint256" }, { name: "isActive", type: "bool" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "TICKET_PRICE", outputs: [{ type: "uint256" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "currentRoundId", outputs: [{ type: "uint256" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "finalizeRound", outputs: [], stateMutability: "nonpayable", type: "function" }
  ] as const,
};
