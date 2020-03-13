module.exports = {
  contractAddress: "0xe0d8f334f585FD7FE9Eb9db7f74ce12FD714C3B7",
  abi: [
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "tp",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "addressHouse",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "surface",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct MarketContract.House[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "name": "logData",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_tp",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_addressHouse",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_surface",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        }
      ],
      "name": "addHouseToSeller",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getNumberOfHouse",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getHouse",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "tp",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "addressHouse",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "surface",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            }
          ],
          "internalType": "struct MarketContract.House",
          "name": "",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getHouses",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "tp",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "addressHouse",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "surface",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            }
          ],
          "internalType": "struct MarketContract.House[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTransaction",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "buyerId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sellerId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "tp",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "addressHouse",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "surface",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                }
              ],
              "internalType": "struct MarketContract.House",
              "name": "house",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            }
          ],
          "internalType": "struct MarketContract.Transaction",
          "name": "",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_addressPerson",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_action",
          "type": "bytes"
        }
      ],
      "name": "setPerson",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_idHouse",
          "type": "uint256"
        }
      ],
      "name": "newTransaction",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "buyerId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sellerId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "tp",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "addressHouse",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "surface",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                }
              ],
              "internalType": "struct MarketContract.House",
              "name": "house",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            }
          ],
          "internalType": "struct MarketContract.Transaction",
          "name": "",
          "type": "tuple"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
};
