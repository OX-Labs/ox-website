
import { injected } from '@/connectors';
import { useWeb3React } from '@web3-react/core';
import { useState, useCallback } from "react"

export const useConnectWallet = () => {
  const { activate, deactivate } = useWeb3React();
  const connectWalletByLocalStorage = useCallback(() => {
    const login_status = localStorage.getItem("login_status");
    if (login_status == 'off') {
      return;
    }
    activate(injected);
    localStorage.setItem("login_status", "on")
  }, [activate])

  return connectWalletByLocalStorage;
}