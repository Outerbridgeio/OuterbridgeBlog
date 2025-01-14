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
  'monitor-flow-balance': {
    nodes: [
      {
        width: 200,
        height: 65,
        id: 'FlowBalanceTrigger_0',
        position: {
          x: 813.5,
          y: 246,
        },
        type: 'customNode',
        data: {
          label: 'Flow Balance Trigger',
          name: 'FlowBalanceTrigger',
          type: 'trigger',
          inputAnchors: [],
          outputAnchors: [
            {
              id: 'FlowBalanceTrigger_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            address: '0xb9fa4996b8fba80c',
            triggerCondition: 'decrease',
            pollTime: '15s',
            submit: null,
          },
          networks: {
            network: 'testnet',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 813.5,
          y: 246,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 65,
        id: 'discord_0',
        position: {
          x: 835,
          y: 376.75,
        },
        type: 'customNode',
        data: {
          label: 'Discord',
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
            webhookUrl:
              'https://discord.com/api/webhooks/1066172161267613757/Er9Egvizejfn5_MEuyLY41OoKSyUHB9M5zCn41wXFIpqQUMcHb9lSfsPmVrbHGoa78Mg',
            content: 'New balance {{FlowBalanceTrigger_0[0].data.newBalance}}',
            username: 'peixer',
            avatarUrl: '',
            tts: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 835,
          y: 376.75,
        },
      },
    ],
    edges: [
      {
        source: 'FlowBalanceTrigger_0',
        sourceHandle: 'FlowBalanceTrigger_0-output-0',
        target: 'discord_0',
        targetHandle: 'discord_0-input-0',
        type: 'buttonedge',
        id: 'FlowBalanceTrigger_0-FlowBalanceTrigger_0-output-0-discord_0-discord_0-input-0',
        data: {
          label: '',
        },
      },
    ],
  },
  'request-finance': {
    nodes: [
      {
        width: 200,
        height: 65,
        id: 'webhook_0',
        position: { x: 684.5, y: 131.5 },
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
            returnType: 'lastNodeResponse',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: { x: 684.5, y: 131.5 },
        dragging: false,
      },
      {
        width: 200,
        height: 65,
        id: 'requestFinance_0',
        position: { x: 684.75, y: 264.75 },
        type: 'customNode',
        data: {
          label: 'Create New Invoice',
          name: 'requestFinance',
          type: 'action',
          inputAnchors: [{ id: 'requestFinance_0-input-0' }],
          outputAnchors: [{ id: 'requestFinance_0-output-0' }],
          selected: false,
          inputParameters: {
            invoiceCurrency: 'EUR | 2',
            invoiceItems: [
              { name: 'item1', unitPrice: '10', quantity: '1', taxType: '', taxAmount: '' },
            ],
            paymentAddress: '0xE597E474889537A3A9120d1B5793cdFAEf6B6c10',
            paymentCurrency: 'USDC-mainnet | 6',
            paymentDueDate: '2023-02-24T00:00:00.000Z',
            clientType: 'new',
            buyerInfoEmail: 'testclient@email.com',
            buyerInfoBusinessName: '',
            buyerInfoFirstName: '',
            buyerInfoLastName: '',
            buyerInfoStreetAddress: '',
            buyerInfoExtendedAddress: '',
            buyerInfoPostalCode: '',
            buyerInfoRegion: '',
            buyerInfoCountry: '',
            buyerInfoTaxRegistration: '',
            submit: null,
          },
          actions: { operation: 'createInvoice', submit: null },
          credentials: { credentialMethod: 'requestFinanceApi', submit: null },
        },
        selected: false,
        positionAbsolute: { x: 684.75, y: 264.75 },
        dragging: false,
      },
    ],
    edges: [
      {
        source: 'webhook_0',
        sourceHandle: 'webhook_0-output-0',
        target: 'requestFinance_0',
        targetHandle: 'requestFinance_0-input-0',
        type: 'buttonedge',
        id: 'webhook_0-webhook_0-output-0-requestFinance_0-requestFinance_0-input-0',
        data: { label: '' },
      },
    ],
  },
  'new-request-invoice': {
    nodes: [
      {
        width: 200,
        height: 65,
        id: 'requestFinanceTrigger_0',
        position: { x: 911.5, y: 26 },
        type: 'customNode',
        data: {
          label: 'New invoice',
          name: 'requestFinanceTrigger',
          type: 'trigger',
          inputAnchors: [],
          outputAnchors: [{ id: 'requestFinanceTrigger_0-output-0' }],
          selected: false,
          inputParameters: { pollTime: '15s', submit: null },
          actions: { invoiceStatus: 'new', submit: null },
          credentials: { credentialMethod: 'requestFinanceApi', submit: null },
        },
        selected: false,
        positionAbsolute: { x: 911.5, y: 26 },
        dragging: false,
      },
      {
        width: 200,
        height: 65,
        id: 'discord_0',
        position: { x: 910.375, y: 149.125 },
        type: 'customNode',
        data: {
          label: 'Send message',
          name: 'discord',
          type: 'action',
          inputAnchors: [{ id: 'discord_0-input-0' }],
          outputAnchors: [{ id: 'discord_0-output-0' }],
          selected: false,
          inputParameters: {
            webhookUrl:
              'https://discord.com/api/webhooks/1014150840241623161/W3O9ohCewTq2TjLHdQ0b8CJsnPIM1sXvRJZR5_5dUlEjtMondVnR27AMosoeRRMmSwpq',
            content:
              'New Invoice!\n\nPayment Currency: {{requestFinanceTrigger_0[0].data.paymentCurrency}}\nPayment Address: {{requestFinanceTrigger_0[0].data.paymentAddress}}\nLink: https://app.request.finance/{{requestFinanceTrigger_0[0].data.requestId}}',
            username: '',
            avatarUrl: '',
            tts: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: { x: 910.375, y: 149.125 },
      },
    ],
    edges: [
      {
        source: 'requestFinanceTrigger_0',
        sourceHandle: 'requestFinanceTrigger_0-output-0',
        target: 'discord_0',
        targetHandle: 'discord_0-input-0',
        type: 'buttonedge',
        id: 'requestFinanceTrigger_0-requestFinanceTrigger_0-output-0-discord_0-discord_0-input-0',
        data: { label: '' },
      },
    ],
  },
  helio: {
    nodes: [
      {
        width: 200,
        height: 65,
        id: 'helioWebhook_0',
        position: {
          x: 361.92784887284745,
          y: 179.9368638785519,
        },
        type: 'customNode',
        data: {
          label: 'New Paylink Webhook',
          name: 'helioWebhook',
          type: 'webhook',
          inputAnchors: [],
          outputAnchors: [
            {
              id: 'helioWebhook_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            paylinkId: '63eb6690ce2cefc141882b34',
            submit: null,
          },
          actions: {
            event: 'CREATED',
            submit: null,
          },
          networks: {
            network: 'test',
            submit: null,
          },
          credentials: {
            credentialMethod: 'helioApi',
            submit: null,
          },
        },
        positionAbsolute: {
          x: 361.92784887284745,
          y: 179.9368638785519,
        },
        selected: false,
        dragging: false,
      },
      {
        width: 200,
        height: 65,
        id: 'helio_0',
        position: {
          x: 572.6582621658308,
          y: 322.44512708688933,
        },
        type: 'customNode',
        data: {
          label: 'Get All Transactions',
          name: 'helio',
          type: 'action',
          inputAnchors: [
            {
              id: 'helio_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'helio_0-output-0',
            },
          ],
          selected: false,
          actions: {
            operation: 'listTransactions',
            submit: null,
          },
          networks: {
            network: 'test',
            submit: null,
          },
          credentials: {
            credentialMethod: 'helioApi',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 572.6582621658308,
          y: 322.44512708688933,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 65,
        id: 'googleSheet_0',
        position: {
          x: 570.7325651818827,
          y: 632.9757171806706,
        },
        type: 'customNode',
        data: {
          label: 'Add row',
          name: 'googleSheet',
          type: 'action',
          inputAnchors: [
            {
              id: 'googleSheet_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'googleSheet_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            spreadsheetId: '1X8QQXM-MEXVaVUh3dgfziDZvON7m0tfjf3XnbCQvz1w',
            sheetName: 'Sheet1',
            rowValues:
              '[\n  [\n    "{{helio_0[$index].data.id}}",\n    "{{helio_0[$index].data.paymentRequestName}}",\n    "{{helio_0[$index].data.paymentRequestUrl}}",\n    "{{helio_0[$index].data.time}}",\n    "{{helio_0[$index].data.convertedAmount}}",\n    "{{helio_0[$index].data.currency}}",\n    "{{helio_0[$index].data.blockchain}}",\n    "{{helio_0[$index].data.from}}"\n  ]\n]\n    ',
            submit: null,
          },
          actions: {
            operation: 'addRows',
            submit: null,
          },
          credentials: {
            credentialMethod: 'googleSheetsOAuth2Api_Outerbridge',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 570.7325651818827,
          y: 632.9757171806706,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 65,
        id: 'googleSheet_1',
        position: {
          x: 572.657409201124,
          y: 425.95174598510624,
        },
        type: 'customNode',
        data: {
          label: 'Clear All',
          name: 'googleSheet',
          type: 'action',
          inputAnchors: [
            {
              id: 'googleSheet_1-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'googleSheet_1-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            spreadsheetId: '1X8QQXM-MEXVaVUh3dgfziDZvON7m0tfjf3XnbCQvz1w',
            sheetName: 'Sheet1',
            submit: null,
          },
          actions: {
            operation: 'clearAll',
            submit: null,
          },
          credentials: {
            credentialMethod: 'googleSheetsOAuth2Api_Outerbridge',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 572.657409201124,
          y: 425.95174598510624,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 65,
        id: 'googleSheet_2',
        position: {
          x: 572.107905705627,
          y: 530.4791429249226,
        },
        type: 'customNode',
        data: {
          label: 'Add headers',
          name: 'googleSheet',
          type: 'action',
          inputAnchors: [
            {
              id: 'googleSheet_2-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'googleSheet_2-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            spreadsheetId: '1X8QQXM-MEXVaVUh3dgfziDZvON7m0tfjf3XnbCQvz1w',
            sheetName: 'Sheet1',
            rowValues:
              '[["ID", "NAME", "URL", "TIME", "AMOUNT", "CURRENCY", "BLOCKCHAIN", "FROM"]]',
            submit: null,
          },
          actions: {
            operation: 'addRows',
            submit: null,
          },
          credentials: {
            credentialMethod: 'googleSheetsOAuth2Api_Outerbridge',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 572.107905705627,
          y: 530.4791429249226,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 65,
        id: 'mailchimp_0',
        position: {
          x: 140.17708616127646,
          y: 318.72568687558424,
        },
        type: 'customNode',
        data: {
          label: 'Add user to Mailchimp',
          name: 'mailchimp',
          type: 'action',
          inputAnchors: [
            {
              id: 'mailchimp_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'mailchimp_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            listId: 'baffe8be94',
            email: '{{helioWebhook_0[0].data.body.transactionObject.meta.customerDetails.email}}',
            submit: null,
          },
          actions: {
            operation: 'addUser',
            submit: null,
          },
          credentials: {
            credentialMethod: 'mailChimpCredential',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 140.17708616127646,
          y: 318.72568687558424,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 65,
        id: 'hubspot_0',
        position: {
          x: 360.29194062769074,
          y: 318.9199665963873,
        },
        type: 'customNode',
        data: {
          label: 'Add user to Hubspot',
          name: 'hubspot',
          type: 'action',
          inputAnchors: [
            {
              id: 'hubspot_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'hubspot_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            email: '{{helioWebhook_0[0].data.body.transactionObject.meta.customerDetails.email}}',
            firstname: '',
            lastname: '',
            company: '',
            submit: null,
          },
          actions: {
            operation: 'addContact',
            submit: null,
          },
          credentials: {
            credentialMethod: 'hubspotCredential',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 360.29194062769074,
          y: 318.9199665963873,
        },
        dragging: false,
      },
    ],
    edges: [
      {
        source: 'googleSheet_1',
        sourceHandle: 'googleSheet_1-output-0',
        target: 'googleSheet_2',
        targetHandle: 'googleSheet_2-input-0',
        type: 'buttonedge',
        id: 'googleSheet_1-googleSheet_1-output-0-googleSheet_2-googleSheet_2-input-0',
        data: {
          label: '',
        },
      },
      {
        source: 'googleSheet_2',
        sourceHandle: 'googleSheet_2-output-0',
        target: 'googleSheet_0',
        targetHandle: 'googleSheet_0-input-0',
        type: 'buttonedge',
        id: 'googleSheet_2-googleSheet_2-output-0-googleSheet_0-googleSheet_0-input-0',
        data: {
          label: '',
        },
      },
      {
        source: 'helio_0',
        sourceHandle: 'helio_0-output-0',
        target: 'googleSheet_1',
        targetHandle: 'googleSheet_1-input-0',
        type: 'buttonedge',
        id: 'helio_0-helio_0-output-0-googleSheet_1-googleSheet_1-input-0',
        data: {
          label: '',
        },
      },
      {
        source: 'helioWebhook_0',
        sourceHandle: 'helioWebhook_0-output-0',
        target: 'helio_0',
        targetHandle: 'helio_0-input-0',
        type: 'buttonedge',
        id: 'helioWebhook_0-helioWebhook_0-output-0-helio_0-helio_0-input-0',
        data: {
          label: '',
        },
      },
      {
        source: 'helioWebhook_0',
        sourceHandle: 'helioWebhook_0-output-0',
        target: 'mailchimp_0',
        targetHandle: 'mailchimp_0-input-0',
        type: 'buttonedge',
        id: 'helioWebhook_0-helioWebhook_0-output-0-mailchimp_0-mailchimp_0-input-0',
        data: {
          label: '',
        },
      },
      {
        source: 'helioWebhook_0',
        sourceHandle: 'helioWebhook_0-output-0',
        target: 'hubspot_0',
        targetHandle: 'hubspot_0-input-0',
        type: 'buttonedge',
        id: 'helioWebhook_0-helioWebhook_0-output-0-hubspot_0-hubspot_0-input-0',
        data: {
          label: '',
        },
      },
    ],
  },
  dalle: {
    nodes: [
      {
        width: 200,
        height: 66,
        id: 'pinata_0',
        position: {
          x: 924.7308060636885,
          y: 60.421419571065684,
        },
        type: 'customNode',
        data: {
          label: 'Save NFT Image to IPFS',
          name: 'pinata',
          type: 'action',
          inputAnchors: [
            {
              id: 'pinata_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'pinata_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            cidVersion: '',
            wrapWithDirectory: true,
            name: 'PuppyV1',
            keyvalues: '',
            submit: null,
          },
          actions: {
            operation: 'base64',
            base64Content: '{{openAI_0[0].data.data[0].b64_json}}',
            submit: null,
          },
          credentials: {
            credentialMethod: 'pinataApi',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 924.7308060636885,
          y: 60.421419571065684,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'openAI_0',
        position: {
          x: 925.1039110873497,
          y: -61.476144724398026,
        },
        type: 'customNode',
        data: {
          label: 'Generate Image',
          name: 'openAI',
          type: 'action',
          inputAnchors: [
            {
              id: 'openAI_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'openAI_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            prompt: '3D image of a puppy reading a book',
            imageNumber: '1',
            imageSize: '1024x1024',
            response_format: 'b64_json',
            submit: null,
          },
          actions: {
            operation: 'generateImage',
            submit: null,
          },
          credentials: {
            credentialMethod: 'openAIApi',
            submit: null,
          },
        },
        positionAbsolute: {
          x: 925.1039110873497,
          y: -61.476144724398026,
        },
        selected: false,
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'thirdWeb_1',
        position: {
          x: 925.2172025607864,
          y: 183.1230967687086,
        },
        type: 'customNode',
        data: {
          label: 'Mint new NFT',
          name: 'thirdWeb',
          type: 'action',
          inputAnchors: [
            {
              id: 'thirdWeb_1-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'thirdWeb_1-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            contract: '0x2fbe6E3d9bA038DBb066b8Fddb08a507eA696FB9',
            contractType: 'nft-collection',
            code: 'const ipfsHash = {{pinata_0[0].data.IpfsHash}};\nconst nftName = "PuppyV1";\nconst imageName = encodeURIComponent(nftName);\n\nconst metadata = {\n  name: nftName,\n  description: "This is a cool puppy",\n  image: `ipfs://${ipfsHash}/${imageName}.png`,\n  properties: {"attribute": "reading"}\n};\n\nconst results = await contract.erc721.mint(metadata);\nreturn await results.data();',
            external: '',
            submit: null,
          },
          actions: {
            operation: 'execute',
            submit: null,
          },
          networks: {
            network: 'mumbai',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 925.2172025607864,
          y: 183.1230967687086,
        },
        dragging: false,
      },
    ],
    edges: [
      {
        source: 'openAI_0',
        sourceHandle: 'openAI_0-output-0',
        target: 'pinata_0',
        targetHandle: 'pinata_0-input-0',
        type: 'buttonedge',
        id: 'openAI_0-openAI_0-output-0-pinata_0-pinata_0-input-0',
        data: {
          label: '',
        },
      },
      {
        source: 'pinata_0',
        sourceHandle: 'pinata_0-output-0',
        target: 'thirdWeb_1',
        targetHandle: 'thirdWeb_1-input-0',
        type: 'buttonedge',
        id: 'pinata_0-pinata_0-output-0-thirdWeb_1-thirdWeb_1-input-0',
        data: {
          label: '',
        },
      },
    ],
  },
  chatgpt: {
    nodes: [
      {
        width: 200,
        height: 66,
        id: 'openAI_0',
        position: {
          x: 767.5,
          y: 203,
        },
        type: 'customNode',
        data: {
          label: 'OpenAI',
          name: 'openAI',
          type: 'action',
          inputAnchors: [
            {
              id: 'openAI_0-input-0',
            },
          ],
          outputAnchors: [
            {
              id: 'openAI_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            model: 'gpt-3.5-turbo',
            prompt: 'Write a Discord thread on blockchain',
            submit: null,
          },
          actions: {
            operation: 'chatgpt',
            submit: null,
          },
          credentials: {
            credentialMethod: 'openAIApi',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 767.5,
          y: 203,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'discord_0',
        position: {
          x: 768.1817153998911,
          y: 322.3215330163391,
        },
        type: 'customNode',
        data: {
          label: 'Discord',
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
            webhookUrl:
              'https://discord.com/api/webhooks/1014150840241623161/W3O9ohCewTq2TjLHdQ0b8CJsnPIM1sXvRJZR5_5dUlEjtMondVnR27AMosoeRRMmSwpq',
            content: '{{openAI_0[0].data.choices[0].message.content}}',
            username: '',
            avatarUrl: '',
            tts: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 768.1817153998911,
          y: 322.3215330163391,
        },
        dragging: false,
      },
    ],
    edges: [
      {
        source: 'openAI_0',
        sourceHandle: 'openAI_0-output-0',
        target: 'discord_0',
        targetHandle: 'discord_0-input-0',
        type: 'buttonedge',
        id: 'openAI_0-openAI_0-output-0-discord_0-discord_0-input-0',
        data: {
          label: '',
        },
      },
    ],
  },
  chainlink: {
    nodes: [
      {
        width: 200,
        height: 86,
        id: 'chainLinkFunctionWebhook_0',
        position: {
          x: 714.5,
          y: 102.25,
        },
        type: 'customNode',
        data: {
          label: 'Chainlink Function Webhook',
          name: 'chainLinkFunctionWebhook',
          type: 'webhook',
          inputAnchors: [],
          outputAnchors: [
            {
              id: 'chainLinkFunctionWebhook_0-output-0',
            },
          ],
          selected: false,
          inputParameters: {
            httpMethod: 'POST',
            authorization: 'none',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 714.5,
          y: 102.25,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'discord_0',
        position: {
          x: 713.5,
          y: 250.75,
        },
        type: 'customNode',
        data: {
          label: 'Discord',
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
            webhookUrl:
              'https://discord.com/api/webhooks/1083788317499326508/6r7OD8sri84PxlxupMuBHD3U_IqUaSVoY2Z-31rReDz0iKlQPlx6RtbQj64RlL1UyDXu',
            content: '{{chainLinkFunctionWebhook_0[0].data.body.message}}',
            username: '',
            avatarUrl: '',
            tts: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 713.5,
          y: 250.75,
        },
        dragging: false,
      },
      {
        width: 200,
        height: 66,
        id: 'nodeJS_0',
        position: {
          x: 713.2125414244422,
          y: 376.08976486279244,
        },
        type: 'customNode',
        data: {
          label: 'NodeJS',
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
            code: 'return {{discord_0[0].data.content}};',
            external: '',
            submit: null,
          },
        },
        selected: false,
        positionAbsolute: {
          x: 713.2125414244422,
          y: 376.08976486279244,
        },
        dragging: false,
      },
    ],
    edges: [
      {
        source: 'chainLinkFunctionWebhook_0',
        sourceHandle: 'chainLinkFunctionWebhook_0-output-0',
        target: 'discord_0',
        targetHandle: 'discord_0-input-0',
        type: 'buttonedge',
        id: 'chainLinkFunctionWebhook_0-chainLinkFunctionWebhook_0-output-0-discord_0-discord_0-input-0',
        data: {
          label: '',
        },
      },
      {
        source: 'discord_0',
        sourceHandle: 'discord_0-output-0',
        target: 'nodeJS_0',
        targetHandle: 'nodeJS_0-input-0',
        type: 'buttonedge',
        id: 'discord_0-discord_0-output-0-nodeJS_0-nodeJS_0-input-0',
        data: {
          label: '',
        },
      },
    ],
  },
}
