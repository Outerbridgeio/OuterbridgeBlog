export const templates = {
  'thirdweb-embed': {
    nodes: [
      {
        width: 200,
        height: 66,
        id: 'webhook_0',
        position: { x: 660, y: 313 },
        type: 'customNode',
        data: {
          label: 'Webhook',
          name: 'webhook',
          type: 'webhook',
          inputAnchors: [],
          outputAnchors: [{ id: 'webhook_0-output-0' }],
          selected: false,
          inputParameters: {
            httpMethod: 'GET',
            responseCode: 200,
            responseData:
              '<!DOCTYPE html>\n    <html>\n    <head>\n    <title></title>\n    </head>\n    <body>\n\n    <iframe\n    src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x6a8c7F715D5f044437dA5b0576eD1289eC9b7eB6&chainId=5&theme=dark"\n        width="100%"\n        height="600px"\n        style="max-width:100%;"\n        frameborder="0"\n        ></iframe>\n\n    </body>\n    </html>',
            submit: null,
          },
        },
        positionAbsolute: { x: 660, y: 313 },
        selected: false,
      },
    ],
    edges: [],
  },
  'thirdweb-create-encrypted-nft': {
    nodes: [
      {
        width: 200,
        height: 66,
        id: 'thirdWeb_0',
        position: { x: 532.9730177875068, y: 194.4853481973272 },
        type: 'customNode',
        data: {
          label: 'Create batch of Encrypted NFTs',
          name: 'thirdWeb',
          type: 'action',
          inputAnchors: [{ id: 'thirdWeb_0-input-0' }],
          outputAnchors: [{ id: 'thirdWeb_0-output-0' }],
          selected: false,
          inputParameters: {
            contract: '0x41Ae92a3c638931B46FF3Ebd5A2a5b8c7e4b4546',
            contractType: 'nft-drop',
            code: '// the real NFTs, these will be encrypted until you reveal them\nconst realNFTs = [{\n  name: "Common NFT #1",\n  description: "Common NFT, one of many.",\n  image: "https://avatars.dicebear.com/api/micah/1.svg"\n}, {\n  name: "Super Rare NFT #2",\n  description: "You got a Super Rare NFT!",\n  image: "https://avatars.dicebear.com/api/micah/2.svg"\n}];\n\n// A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time\nconst placeholderNFT = {\n  name: "Hidden NFT",\n  description: "Will be revealed next week!"\n};\n\n// Create and encrypt the NFTs\nconst tx = await contract.revealer.createDelayedRevealBatch(\n  placeholderNFT,\n  realNFTs,\n  "mysecret",\n);\n\nreturn tx;',
            external: '',
            submit: null,
          },
          actions: { operation: 'execute', submit: null },
          networks: { network: 'goerli', submit: null },
        },
        positionAbsolute: { x: 532.9730177875068, y: 194.4853481973272 },
        selected: false,
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'thirdWeb_1',
        position: { x: 534.1359059451169, y: 318.3575972224225 },
        type: 'customNode',
        data: {
          label: 'Get unrevealed NFTs',
          name: 'thirdWeb',
          type: 'action',
          inputAnchors: [{ id: 'thirdWeb_1-input-0' }],
          outputAnchors: [{ id: 'thirdWeb_1-output-0' }],
          selected: false,
          inputParameters: {
            contract: '0x41Ae92a3c638931B46FF3Ebd5A2a5b8c7e4b4546',
            contractType: 'nft-drop',
            code: 'const batches = await contract.revealer.getBatchesToReveal();\nreturn batches ;',
            external: '',
            submit: null,
          },
          actions: { operation: 'read', submit: null },
          networks: { network: 'goerli', submit: null },
        },
        selected: false,
        positionAbsolute: { x: 534.1359059451169, y: 318.3575972224225 },
        dragging: false,
      },
    ],
    edges: [
      {
        source: 'thirdWeb_0',
        sourceHandle: 'thirdWeb_0-output-0',
        target: 'thirdWeb_1',
        targetHandle: 'thirdWeb_1-input-0',
        type: 'buttonedge',
        id: 'thirdWeb_0-thirdWeb_0-output-0-thirdWeb_1-thirdWeb_1-input-0',
        data: { label: '' },
      },
    ],
  },
  'thirdweb-reveal-nft': {
    nodes: [
      {
        width: 200,
        height: 66,
        id: 'thirdWeb_0',
        position: { x: 772.5, y: 160 },
        type: 'customNode',
        data: {
          label: 'Reveal batch of NFTs',
          name: 'thirdWeb',
          type: 'action',
          inputAnchors: [{ id: 'thirdWeb_0-input-0' }],
          outputAnchors: [{ id: 'thirdWeb_0-output-0' }],
          selected: false,
          inputParameters: {
            contract: '0x41Ae92a3c638931B46FF3Ebd5A2a5b8c7e4b4546',
            contractType: 'nft-drop',
            code: 'const batchId = 0; // the batch to reveal\nconst tx = await contract.revealer.reveal(batchId, "mysecret");\nreturn tx;',
            external: '',
            submit: null,
          },
          actions: { operation: 'execute', submit: null },
          networks: { network: 'goerli', submit: null },
        },
        selected: false,
        positionAbsolute: { x: 772.5, y: 160 },
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'scheduler_0',
        position: { x: 773.5, y: 43.75 },
        type: 'customNode',
        data: {
          label: 'Scheduler',
          name: 'scheduler',
          type: 'trigger',
          inputAnchors: [],
          outputAnchors: [{ id: 'scheduler_0-output-0' }],
          selected: false,
          inputParameters: {
            pattern: 'once',
            specificDateTime: '2022-12-06T21:35:00.000Z',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: { x: 773.5, y: 43.75 },
        dragging: false,
      },
    ],
    edges: [
      {
        source: 'scheduler_0',
        sourceHandle: 'scheduler_0-output-0',
        target: 'thirdWeb_0',
        targetHandle: 'thirdWeb_0-input-0',
        type: 'buttonedge',
        id: 'scheduler_0-scheduler_0-output-0-thirdWeb_0-thirdWeb_0-input-0',
        data: { label: '' },
        selected: false,
      },
    ],
  },
  'listen-webhook': {
    nodes: [
      {
        width: 200,
        height: 66,
        id: 'webhook_0',
        position: { x: 896.4831836893153, y: 70.8260959480902 },
        type: 'customNode',
        data: {
          label: 'Listen to Moralis Stream',
          name: 'webhook',
          type: 'webhook',
          inputAnchors: [],
          outputAnchors: [{ id: 'webhook_0-output-0' }],
          selected: false,
          inputParameters: {
            httpMethod: 'POST',
            responseCode: 200,
            responseData: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: { x: 896.4831836893153, y: 70.8260959480902 },
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'discord_0',
        position: { x: 895.9831836893154, y: 293.1196618208936 },
        type: 'customNode',
        data: {
          label: 'Discord',
          name: 'discord',
          type: 'action',
          inputAnchors: [{ id: 'discord_0-input-0' }],
          outputAnchors: [{ id: 'discord_0-output-0' }],
          selected: false,
          inputParameters: {
            webhookUrl: 'https://discord.com/api/webhooks/1014150840241623161/<webhook-id>',
            content:
              'New Donation🎉\n\nFrom: {{webhook_0[0].data.body.txs[0].fromAddress}}\nAmount: {{nodeJS_0[0].data}} ETH\nReceipt: {{webhook_0[0].data.body.txs[0].hash}}',
            username: '',
            avatarUrl: '',
            tts: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: { x: 895.9831836893154, y: 293.1196618208936 },
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'nodeJS_0',
        position: { x: 895.7331836893154, y: 180.7228788844919 },
        type: 'customNode',
        data: {
          label: 'Convert Amount',
          name: 'nodeJS',
          type: 'action',
          inputAnchors: [{ id: 'nodeJS_0-input-0' }],
          outputAnchors: [{ id: 'nodeJS_0-output-0' }],
          selected: false,
          inputParameters: {
            code: 'const convertedAmount = Number({{webhook_0[0].data.body.txs[0].value}}/1E18);\nreturn convertedAmount;',
            external: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: { x: 895.7331836893154, y: 180.7228788844919 },
        dragging: false,
      },
    ],
    edges: [
      {
        source: 'webhook_0',
        sourceHandle: 'webhook_0-output-0',
        target: 'nodeJS_0',
        targetHandle: 'nodeJS_0-input-0',
        type: 'buttonedge',
        id: 'webhook_0-webhook_0-output-0-nodeJS_0-nodeJS_0-input-0',
        data: { label: '' },
      },
      {
        source: 'nodeJS_0',
        sourceHandle: 'nodeJS_0-output-0',
        target: 'discord_0',
        targetHandle: 'discord_0-input-0',
        type: 'buttonedge',
        id: 'nodeJS_0-nodeJS_0-output-0-discord_0-discord_0-input-0',
        data: { label: '' },
      },
    ],
  },
  'footprint-analytics': {
    nodes: [
      {
        width: 200,
        height: 86,
        id: 'footprintAnalytics_0',
        position: {
          x: 711,
          y: 269,
        },
        type: 'customNode',
        data: {
          label: 'Get Compound Finance Transactions',
          name: 'footprintAnalytics',
          type: 'action',
          inputAnchors: [
            {
              id: 'footprintAnalytics_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'footprintAnalytics_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            chain: 'Ethereum',
            protocol_slug: 'compound',
            contract_address: '',
            wallet_address: '',
            start_time: '',
            end_time: '',
            limit: '',
            offset: '',
            submit: null,
          },
          actions: {
            api: 'restAPI',
            category: 'gamefi',
            operation: 'protocolTransactions',
            submit: null,
          },
          credentials: {
            credentialMethod: 'footprintAnalyticsApi',
            submit: null,
          },
        },
        positionAbsolute: {
          x: 711,
          y: 269,
        },
        selected: false,
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'scheduler_0',
        position: {
          x: 710.75,
          y: 149.75,
        },
        type: 'customNode',
        data: {
          label: 'Every 24 hours',
          name: 'scheduler',
          type: 'trigger',
          inputAnchors: [],
          outputAnchors: [
            {
              id: 'scheduler_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            pattern: 'repetitive',
            scheduleTimes: [
              {
                mode: 'everyX',
                specificDateTime: '',
                hour: 14,
                minute: 35,
                dayOfMonth: 18,
                weekday: '3',
                value: '24',
                unit: 'hours',
              },
            ],
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 710.75,
          y: 149.75,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'discord_0',
        position: {
          x: 711.5550723679196,
          y: 520.1788449119251,
        },
        type: 'customNode',
        data: {
          label: 'Send Discord Alert',
          name: 'discord',
          type: 'action',
          inputAnchors: [
            {
              id: 'discord_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'discord_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            webhookUrl: 'https://discord.com/api/webhooks/{replace-id}',
            content:
              'Alert 🚨\n\nHigh amount of token transfer!\n\nAmount: {{nodeJS_0[$index].data.amount}}\nWallet: {{nodeJS_0[$index].data.wallet_address}}\n\n\n\n\n',
            username: '',
            avatarUrl: '',
            tts: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 711.5550723679196,
          y: 520.1788449119251,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'nodeJS_0',
        position: {
          x: 711.2815382026736,
          y: 409.3567116023884,
        },
        type: 'customNode',
        data: {
          label: 'Get Transactions with amount > 20',
          name: 'nodeJS',
          type: 'action',
          inputAnchors: [
            {
              id: 'nodeJS_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'nodeJS_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            code: 'const returnData = [];\nconst queryData = {{footprintAnalytics_0[0].data.data}};\n\nfor (const data of queryData) {\n  if (Number(data.amount) > 20) {\n    returnData .push(data);\n  }\n}\n\nreturn returnData;',
            external: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 711.2815382026736,
          y: 409.3567116023884,
        },
        dragging: false,
      },
    ],
    edges: [
      {
        source: 'scheduler_0',
        sourceHandle: 'scheduler_0-output-0',
        target: 'footprintAnalytics_0',
        targetHandle: 'footprintAnalytics_0-input-0',
        type: 'buttonedge',
        id: 'scheduler_0-scheduler_0-output-0-footprintAnalytics_0-footprintAnalytics_0-input-0',
        data: {
          label: '',
        },
      },
      {
        source: 'footprintAnalytics_0',
        sourceHandle: 'footprintAnalytics_0-output-0',
        target: 'nodeJS_0',
        targetHandle: 'nodeJS_0-input-0',
        type: 'buttonedge',
        id: 'footprintAnalytics_0-footprintAnalytics_0-output-0-nodeJS_0-nodeJS_0-input-0',
        data: {
          label: '',
        },
      },
      {
        source: 'nodeJS_0',
        sourceHandle: 'nodeJS_0-output-0',
        target: 'discord_0',
        targetHandle: 'discord_0-input-0',
        type: 'buttonedge',
        id: 'nodeJS_0-nodeJS_0-output-0-discord_0-discord_0-input-0',
        data: {
          label: '',
        },
      },
    ],
  },
}