export const ADDRESSES = {
  USDC: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831' as const,
  USERNAME_REGISTRY: 0x2fC8676386D799844F32173f8226a6E85FF19685 as const,
  SHARES_REGISTRY:  0x089B10b8Af63277FA4D8B8ECb23603B451245f59 as const,
  RAFFLE_MANAGER: 0xA018d2fdE729349c1CAE20b6B72007c817Bc342c as const,
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
