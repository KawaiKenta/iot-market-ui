/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IoTMarket",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IoTMarket__factory>;
    getContractFactory(
      name: "Merchandise",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Merchandise__factory>;
    getContractFactory(
      name: "PubKey",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PubKey__factory>;

    getContractAt(
      name: "IoTMarket",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IoTMarket>;
    getContractAt(
      name: "Merchandise",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Merchandise>;
    getContractAt(
      name: "PubKey",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PubKey>;

    deployContract(
      name: "IoTMarket",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IoTMarket>;
    deployContract(
      name: "Merchandise",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Merchandise>;
    deployContract(
      name: "PubKey",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PubKey>;

    deployContract(
      name: "IoTMarket",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IoTMarket>;
    deployContract(
      name: "Merchandise",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Merchandise>;
    deployContract(
      name: "PubKey",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PubKey>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
