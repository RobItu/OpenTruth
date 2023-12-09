# OpenTruth/backend

This is the backend for OpenTruth, powered by NodeJS and ExpressJS.

The express server can be found at`/node_api/index.js`

## Getting Started

### Install dependencies

```
npm install
```

- #### Make sure to have set up chainlink env-enc environment variables at the [root]() of this project.
- #### Make sure to have configured [the execution path]() for the express api endpoint
- #### Make sure to have a fresh [encrypted secret]() to avoid Functions errors

## Usage

### Express

If you want to see the the express server execute the functions request script with dynamic arguements live:

```
npm start

## or

node node_api/index.js
```

Functions will trigger when you select a bill that has not been verified.

### Listener

If you want to see the live-response from Chainlink Functions:

```
node listen.js
```

## More Information

### Express API endpoint

`/node_api/index.js` holds the express API endpoint that's responsible for executing the Functions request script and updating the [verifiedBills.json]() with the bill's information.

### Scripts

The scripts in `/scripts` were used to set up Chainkink's Function framework.

- `01-deployConsumers.js` used to deploy Functions Consumer contract
- `02-createAndFundSubscription` to create and fund Function subscription
- `03-secrets.js` creates ChatGPT encrypted secret (API keys) for DON to hold (will be used in the future)
- `04-request.js` sends ChatGPT request (will be used in the future)
- `05-readResponse` Listens to and decodes s_lastRequest from consumer contract
- `06-congress_gov_secrets.js` encrypts GOV_API_KEY secret for DON to hold
- `07_congress_request.js` sends function request with dynamic arguements. Dynamic arguments are passed from express api endpoint which is called by [NextJS selected bill page]()

## Source Files (Functions)

There are two source files, `source.js` and `sourceGPT.js`. Only `source.js` is being used currently, as the other one will be used in the future.

`source.js` has the url that Functions will fetch, it has been modified with placeholders so that it may be replaced with dynamic values from `07_congress_request.js`
