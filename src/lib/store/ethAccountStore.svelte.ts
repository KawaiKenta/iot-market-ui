import { ethers } from 'ethers';

export function ethAccountStore() {
    let provider: ethers.BrowserProvider | undefined = $state();
    let signer: ethers.JsonRpcSigner | undefined = $state();
    return {
        get acount() { return { provider, signer }; },
        connectToMetaMask: async () => {
            const windowProvider = window.ethereum;
            if (windowProvider == null) {
                throw new Error('MetaMask not found');
            }
            try {
                provider = new ethers.BrowserProvider(windowProvider);
                signer = await provider.getSigner();
            } catch (error) {
                throw new Error('Error while connecting to MetaMask');
            }
        },
    };
}