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
}
