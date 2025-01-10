/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Merchandise, MerchandiseInterface } from "../Merchandise";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "contract PubKey",
        name: "pubKey",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "accessDeniedAddresses",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "additionalInfoKeys",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "additionalInfoValues",
        type: "string[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Merchandise__AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "Merchandise__AlreadyPurchased",
    type: "error",
  },
  {
    inputs: [],
    name: "Merchandise__Bunned",
    type: "error",
  },
  {
    inputs: [],
    name: "Merchandise__NotBuyer",
    type: "error",
  },
  {
    inputs: [],
    name: "Merchandise__NotEnoughETH",
    type: "error",
  },
  {
    inputs: [],
    name: "Merchandise__NotForSale",
    type: "error",
  },
  {
    inputs: [],
    name: "Merchandise__NotInProgress",
    type: "error",
  },
  {
    inputs: [],
    name: "Merchandise__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Merchandise__WithdrawFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "pubkey",
        type: "string",
      },
    ],
    name: "Purchase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "Upload",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "Verify",
    type: "event",
  },
  {
    inputs: [],
    name: "RETRY_LIMIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "encryptURI",
        type: "string",
      },
    ],
    name: "emitUpload",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllAdditionalInfo",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "key",
            type: "string",
          },
          {
            internalType: "string",
            name: "value",
            type: "string",
          },
        ],
        internalType: "struct KeyValuePair[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProgressBuyer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPubKeyAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRetryLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getState",
    outputs: [
      {
        internalType: "enum Merchandise.MerchandiseState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTrialCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "isConfirmedBuyer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "s_confirmedBuyers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_merchandiseState",
    outputs: [
      {
        internalType: "enum Merchandise.MerchandiseState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040526000600160006101000a81548160ff021916908360028111156200002d576200002c62000395565b5b021790555060006002553480156200004457600080fd5b50604051620029b3380380620029b383398181016040528101906200006a919062000849565b3273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050856000819055508460a081815250508373ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505060005b835181101562000179576001600560008684815181106200010a576200010962000942565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806200017090620009a0565b915050620000e4565b5060005b8251811015620002495760066040518060400160405280858481518110620001aa57620001a962000942565b5b60200260200101518152602001848481518110620001cd57620001cc62000942565b5b60200260200101518152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001908162000218919062000c2e565b50602082015181600101908162000230919062000c2e565b50505080806200024090620009a0565b9150506200017d565b50620002766040518060600160405280602a815260200162002989602a913930336200028260201b60201c565b50505050505062000deb565b620003268383836040516024016200029d9392919062000d78565b6040516020818303038152906040527ffcec75e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200032b60201b60201c565b505050565b62000351816200034c6200035460201b62001159176200037560201b60201c565b60201c565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6200038960201b6200123e17819050919050565b6200039362000dbc565b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604051905090565b600080fd5b600080fd5b6000819050919050565b620003ed81620003d8565b8114620003f957600080fd5b50565b6000815190506200040d81620003e2565b92915050565b6000819050919050565b620004288162000413565b81146200043457600080fd5b50565b60008151905062000448816200041d565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200047b826200044e565b9050919050565b60006200048f826200046e565b9050919050565b620004a18162000482565b8114620004ad57600080fd5b50565b600081519050620004c18162000496565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200051782620004cc565b810181811067ffffffffffffffff82111715620005395762000538620004dd565b5b80604052505050565b60006200054e620003c4565b90506200055c82826200050c565b919050565b600067ffffffffffffffff8211156200057f576200057e620004dd565b5b602082029050602081019050919050565b600080fd5b620005a0816200046e565b8114620005ac57600080fd5b50565b600081519050620005c08162000595565b92915050565b6000620005dd620005d78462000561565b62000542565b9050808382526020820190506020840283018581111562000603576200060262000590565b5b835b818110156200063057806200061b8882620005af565b84526020840193505060208101905062000605565b5050509392505050565b600082601f830112620006525762000651620004c7565b5b815162000664848260208601620005c6565b91505092915050565b600067ffffffffffffffff8211156200068b576200068a620004dd565b5b602082029050602081019050919050565b600080fd5b600067ffffffffffffffff821115620006bf57620006be620004dd565b5b620006ca82620004cc565b9050602081019050919050565b60005b83811015620006f7578082015181840152602081019050620006da565b60008484015250505050565b60006200071a6200071484620006a1565b62000542565b9050828152602081018484840111156200073957620007386200069c565b5b62000746848285620006d7565b509392505050565b600082601f830112620007665762000765620004c7565b5b81516200077884826020860162000703565b91505092915050565b60006200079862000792846200066d565b62000542565b90508083825260208201905060208402830185811115620007be57620007bd62000590565b5b835b818110156200080c57805167ffffffffffffffff811115620007e757620007e6620004c7565b5b808601620007f689826200074e565b85526020850194505050602081019050620007c0565b5050509392505050565b600082601f8301126200082e576200082d620004c7565b5b81516200084084826020860162000781565b91505092915050565b60008060008060008060c08789031215620008695762000868620003ce565b5b60006200087989828a01620003fc565b96505060206200088c89828a0162000437565b95505060406200089f89828a01620004b0565b945050606087015167ffffffffffffffff811115620008c357620008c2620003d3565b5b620008d189828a016200063a565b935050608087015167ffffffffffffffff811115620008f557620008f4620003d3565b5b6200090389828a0162000816565b92505060a087015167ffffffffffffffff811115620009275762000926620003d3565b5b6200093589828a0162000816565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620009ad82620003d8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620009e257620009e162000971565b5b600182019050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000a4057607f821691505b60208210810362000a565762000a55620009f8565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262000ac07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000a81565b62000acc868362000a81565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000b0f62000b0962000b0384620003d8565b62000ae4565b620003d8565b9050919050565b6000819050919050565b62000b2b8362000aee565b62000b4362000b3a8262000b16565b84845462000a8e565b825550505050565b600090565b62000b5a62000b4b565b62000b6781848462000b20565b505050565b5b8181101562000b8f5762000b8360008262000b50565b60018101905062000b6d565b5050565b601f82111562000bde5762000ba88162000a5c565b62000bb38462000a71565b8101602085101562000bc3578190505b62000bdb62000bd28562000a71565b83018262000b6c565b50505b505050565b600082821c905092915050565b600062000c036000198460080262000be3565b1980831691505092915050565b600062000c1e838362000bf0565b9150826002028217905092915050565b62000c3982620009ed565b67ffffffffffffffff81111562000c555762000c54620004dd565b5b62000c61825462000a27565b62000c6e82828562000b93565b600060209050601f83116001811462000ca6576000841562000c91578287015190505b62000c9d858262000c10565b86555062000d0d565b601f19841662000cb68662000a5c565b60005b8281101562000ce05784890151825560018201915060208501945060208101905062000cb9565b8683101562000d00578489015162000cfc601f89168262000bf0565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b600062000d3382620009ed565b62000d3f818562000d15565b935062000d51818560208601620006d7565b62000d5c81620004cc565b840191505092915050565b62000d72816200046e565b82525050565b6000606082019050818103600083015262000d94818662000d26565b905062000da5602083018562000d67565b62000db4604083018462000d67565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fd5b60805160a05160c051611b2862000e616000396000818161085d0152610f18015260008181610c3b01528181610cf90152610f4501526000818161045f015281816105520152818161091501528181610c8c01528181610e4c01528181610ee701528181610f8b01526110b60152611b286000f3fe6080604052600436106100fe5760003560e01c8063893d20e811610095578063a4da229011610064578063a4da2290146102f6578063b5b5145914610321578063cfc8430b1461035e578063e0ec60d114610387578063f561836b146103b2576100fe565b8063893d20e81461024a57806398d5fdca146102755780639ad082bb146102a05780639bdf960e146102cb576100fe565b806364edfbf0116100d157806364edfbf0146101ad5780637485d84c146101b757806375e36616146101e257806383e3bf9e1461021f576100fe565b8063183505a9146101035780631865c57d14610140578063390991241461016b5780633ccfd60b14610196575b600080fd5b34801561010f57600080fd5b5061012a600480360381019061012591906112ba565b6103dd565b6040516101379190611302565b60405180910390f35b34801561014c57600080fd5b50610155610433565b6040516101629190611394565b60405180910390f35b34801561017757600080fd5b5061018061044a565b60405161018d9190611394565b60405180910390f35b3480156101a257600080fd5b506101ab61045d565b005b6101b5610637565b005b3480156101c357600080fd5b506101cc6109a7565b6040516101d99190611545565b60405180910390f35b3480156101ee57600080fd5b506102096004803603810190610204919061159d565b610b2a565b6040516102169190611302565b60405180910390f35b34801561022b57600080fd5b50610234610eda565b60405161024191906115e3565b60405180910390f35b34801561025657600080fd5b5061025f610ee3565b60405161026c919061160d565b60405180910390f35b34801561028157600080fd5b5061028a610f0b565b60405161029791906115e3565b60405180910390f35b3480156102ac57600080fd5b506102b5610f14565b6040516102c2919061160d565b60405180910390f35b3480156102d757600080fd5b506102e0610f3c565b6040516102ed91906115e3565b60405180910390f35b34801561030257600080fd5b5061030b610f41565b6040516103189190611637565b60405180910390f35b34801561032d57600080fd5b50610348600480360381019061034391906112ba565b610f69565b6040516103559190611302565b60405180910390f35b34801561036a57600080fd5b5061038560048036038101906103809190611787565b610f89565b005b34801561039357600080fd5b5061039c611125565b6040516103a9919061160d565b60405180910390f35b3480156103be57600080fd5b506103c761114f565b6040516103d491906115e3565b60405180910390f35b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600160009054906101000a900460ff16905090565b600160009054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104e2576040517f8a52830b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002808111156104f5576104f461131d565b5b600160009054906101000a900460ff1660028111156105175761051661131d565b5b0361054e576040517f1766baa500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff164760405161059490611801565b60006040518083038185875af1925050503d80600081146105d1576040519150601f19603f3d011682016040523d82523d6000602084013e6105d6565b606091505b5050905080610611576040517fa002905900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610634604051806060016040528060278152602001611acc60279139303361117a565b50565b6000600281111561064b5761064a61131d565b5b600160009054906101000a900460ff16600281111561066d5761066c61131d565b5b146106a4576040517f3808184600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000543410156106e0576040517f9c83fe7400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610764576040517f6371089a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60011515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515036107ee576040517f5fbafb8b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018060006101000a81548160ff021916908360028111156108135761081261131d565b5b021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fce9512a326040518263ffffffff1660e01b81526004016108b4919061160d565b600060405180830381865afa1580156108d1573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906108fa9190611886565b90503373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f2a012512d0f77edfcb4c5930b8b0b128a7e43ca3419186882058eb3f05706046836040516109799190611919565b60405180910390a36109a4604051806060016040528060278152602001611aa560279139303361117a565b50565b60606006805480602002602001604051908101604052809291908181526020016000905b82821015610b2157838290600052602060002090600202016040518060400160405290816000820180546109fe9061196a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2a9061196a565b8015610a775780601f10610a4c57610100808354040283529160200191610a77565b820191906000526020600020905b815481529060010190602001808311610a5a57829003601f168201915b50505050508152602001600182018054610a909061196a565b80601f0160208091040260200160405190810160405280929190818152602001828054610abc9061196a565b8015610b095780601f10610ade57610100808354040283529160200191610b09565b820191906000526020600020905b815481529060010190602001808311610aec57829003601f168201915b505050505081525050815260200190600101906109cb565b50505050905090565b600060016002811115610b4057610b3f61131d565b5b600160009054906101000a900460ff166002811115610b6257610b6161131d565b5b14610b99576040517f0d14589200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c20576040517f0eb8ee0600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60026000815480929190610c33906119ca565b9190505550817f000000000000000000000000000000000000000000000000000000000000000014158015610c6a5750600a600254105b15610cf657600015153373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167fd097ce000053ce97ab91fd27d014f308bce1dcc28e97bb7956720989aa0f251060405160405180910390a460009050610ed5565b817f000000000000000000000000000000000000000000000000000000000000000014158015610d295750600a60025410155b15610d62576002600160006101000a81548160ff02191690836002811115610d5457610d5361131d565b5b021790555060009050610ed5565b6000600160006101000a81548160ff02191690836002811115610d8857610d8761131d565b5b021790555060006002819055506000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600115153373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167fd097ce000053ce97ab91fd27d014f308bce1dcc28e97bb7956720989aa0f251060405160405180910390a4610ed0604051806060016040528060258152602001611a8060259139303361117a565b600190505b919050565b6000600a905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60008054905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600a81565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60046020528060005260406000206000915054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461100e576040517f8a52830b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160028111156110225761102161131d565b5b600160009054906101000a900460ff1660028111156110445761104361131d565b5b1461107b576040517f0d14589200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f05f287e30d29b97a5ad15563cbd028af0e0178d4f5a32ff285a815e4bf5c63268360405161111a9190611919565b60405180910390a350565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600254905090565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b61121483838360405160240161119293929190611a12565b6040516020818303038152906040527ffcec75e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611219565b505050565b61123081611228611159611233565b63ffffffff16565b50565b61123e819050919050565b611246611a50565b565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112878261125c565b9050919050565b6112978161127c565b81146112a257600080fd5b50565b6000813590506112b48161128e565b92915050565b6000602082840312156112d0576112cf611252565b5b60006112de848285016112a5565b91505092915050565b60008115159050919050565b6112fc816112e7565b82525050565b600060208201905061131760008301846112f3565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6003811061135d5761135c61131d565b5b50565b600081905061136e8261134c565b919050565b600061137e82611360565b9050919050565b61138e81611373565b82525050565b60006020820190506113a96000830184611385565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114155780820151818401526020810190506113fa565b60008484015250505050565b6000601f19601f8301169050919050565b600061143d826113db565b61144781856113e6565b93506114578185602086016113f7565b61146081611421565b840191505092915050565b600060408301600083015184820360008601526114888282611432565b915050602083015184820360208601526114a28282611432565b9150508091505092915050565b60006114bb838361146b565b905092915050565b6000602082019050919050565b60006114db826113af565b6114e581856113ba565b9350836020820285016114f7856113cb565b8060005b85811015611533578484038952815161151485826114af565b945061151f836114c3565b925060208a019950506001810190506114fb565b50829750879550505050505092915050565b6000602082019050818103600083015261155f81846114d0565b905092915050565b6000819050919050565b61157a81611567565b811461158557600080fd5b50565b60008135905061159781611571565b92915050565b6000602082840312156115b3576115b2611252565b5b60006115c184828501611588565b91505092915050565b6000819050919050565b6115dd816115ca565b82525050565b60006020820190506115f860008301846115d4565b92915050565b6116078161127c565b82525050565b600060208201905061162260008301846115fe565b92915050565b61163181611567565b82525050565b600060208201905061164c6000830184611628565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61169482611421565b810181811067ffffffffffffffff821117156116b3576116b261165c565b5b80604052505050565b60006116c6611248565b90506116d2828261168b565b919050565b600067ffffffffffffffff8211156116f2576116f161165c565b5b6116fb82611421565b9050602081019050919050565b82818337600083830152505050565b600061172a611725846116d7565b6116bc565b90508281526020810184848401111561174657611745611657565b5b611751848285611708565b509392505050565b600082601f83011261176e5761176d611652565b5b813561177e848260208601611717565b91505092915050565b60006020828403121561179d5761179c611252565b5b600082013567ffffffffffffffff8111156117bb576117ba611257565b5b6117c784828501611759565b91505092915050565b600081905092915050565b50565b60006117eb6000836117d0565b91506117f6826117db565b600082019050919050565b600061180c826117de565b9150819050919050565b6000611829611824846116d7565b6116bc565b90508281526020810184848401111561184557611844611657565b5b6118508482856113f7565b509392505050565b600082601f83011261186d5761186c611652565b5b815161187d848260208601611816565b91505092915050565b60006020828403121561189c5761189b611252565b5b600082015167ffffffffffffffff8111156118ba576118b9611257565b5b6118c684828501611858565b91505092915050565b600082825260208201905092915050565b60006118eb826113db565b6118f581856118cf565b93506119058185602086016113f7565b61190e81611421565b840191505092915050565b6000602082019050818103600083015261193381846118e0565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061198257607f821691505b6020821081036119955761199461193b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119d5826115ca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a0757611a0661199b565b5b600182019050919050565b60006060820190508181036000830152611a2c81866118e0565b9050611a3b60208301856115fe565b611a4860408301846115fe565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfe7665726966792069732063616c6c65643a20616464726573733a25732c2063616c6c3a257370757263686173652069732063616c6c65643a20616464726573733a25732c2063616c6c3a257377697468647261772069732063616c6c65643a20616464726573733a25732c2063616c6c3a2573a2646970667358221220abe6a07ca1b310567fd09290a99cfa6d0d35384514ae52c3ec36823957ce5cd564736f6c63430008130033636f6e7374727563746f722069732063616c6c65643a20616464726573733a25732c2063616c6c3a2573";

type MerchandiseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerchandiseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Merchandise__factory extends ContractFactory {
  constructor(...args: MerchandiseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    price: BigNumberish,
    dataHash: BytesLike,
    pubKey: AddressLike,
    accessDeniedAddresses: AddressLike[],
    additionalInfoKeys: string[],
    additionalInfoValues: string[],
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      price,
      dataHash,
      pubKey,
      accessDeniedAddresses,
      additionalInfoKeys,
      additionalInfoValues,
      overrides || {}
    );
  }
  override deploy(
    price: BigNumberish,
    dataHash: BytesLike,
    pubKey: AddressLike,
    accessDeniedAddresses: AddressLike[],
    additionalInfoKeys: string[],
    additionalInfoValues: string[],
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      price,
      dataHash,
      pubKey,
      accessDeniedAddresses,
      additionalInfoKeys,
      additionalInfoValues,
      overrides || {}
    ) as Promise<
      Merchandise & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Merchandise__factory {
    return super.connect(runner) as Merchandise__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerchandiseInterface {
    return new Interface(_abi) as MerchandiseInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Merchandise {
    return new Contract(address, _abi, runner) as unknown as Merchandise;
  }
}
