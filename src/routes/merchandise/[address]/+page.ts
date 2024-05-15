import { ethers } from "ethers";
import { Merchandise__factory } from "../../../types/typechain-types";
import { SERVER_SIDE_RPC_PROVIDER, CLIENT_SIDE_RPC_PROVIDER } from "$lib/const/jsonRPCProvider";
import type { PageLoad } from "./$types";
export const load: PageLoad = async ({ params }) => {
    let provider;
    if (typeof window === "undefined") {
        provider = ethers.getDefaultProvider(SERVER_SIDE_RPC_PROVIDER);
    } else {
        provider = ethers.getDefaultProvider(CLIENT_SIDE_RPC_PROVIDER);
    }
    const address = params.address;
    const merchandisies = Merchandise__factory.connect(address, provider);
    const price = await merchandisies.getPrice().then((price) => ethers.formatEther(price));
    const clientData = {
        retryLimit: await merchandisies.getRetryLimit(),
        owner: await merchandisies.getOwner(),
        price: price,
        address: await merchandisies.getAddress(),
        state: await merchandisies.getState(),
    };

    return clientData;
};