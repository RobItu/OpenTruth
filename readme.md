<br/>
<p align="center">
<img src="frontend/public/logo2.png" width="500" alt="OpenTruth logo">
</a>
</p>
<br/>

# OpenTruth

_This is a project for Chainlink's Constellation Hackathon 2023._

OpenTruth is a platform that offers source authentication and AI breakdown for legal documents. To see a more in depth explanation of how it works check out the devpost {here}

Thanks for checking my project out!

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
- [Quickstart](#quickstart)
- [Environment Variables](#environment-variables)
- [Path Changes](#path-changes)
- [Encrypted Secrets](#encrypted-secrets)
- [Usage](#usage)
  - [Start NextJS Server](#start-nextjs-server)
  - [Start Express Server](#start-express-server)
  - [Listener (Optional)](#listener-optional)
- [More Information](#more-information)
  - [Issues/Bugs](#issuesbugs)
  - [Troubleshooting](#troubleshooting)
- [Going Forward](#going-forward)
- [Contact](#contact)
- [Thank You](#thank-you)

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJs](https://nodejs.org/en/)
- [npm](https://classic.yarnpkg.com/lang/en/docs/install/)
- [api.congress.gov API KEY](https://api.congress.gov/sign-up/)
- [Mumbai RPC URL](https://dashboard.alchemy.com/)

## Quickstart

```
//There are two folders that need packages installed

git clone https://github.com/RobItu/OpenTruth.git
cd OpenTruth

cd backend
npm install

cd ../frontend
npm install
```

## Environment Variables

NextJS cannot read environment variables set by chainlink env-enc so they need to be set up twice. Once in `/OpenTruth/backend` with chainlink env-enc and the other in `/OpenTruth/frontend` with a `.env.local` file for NextJS

1. **chainlink env-enc** _( /OpenTruth/backend )_

```
//set password
npx env-enc set-pw

//set key and values
npx env-enc set

//see values
npx env-enc view
```

You want to make sure to have these variables set:

- `MUMBAI_RPC_URL`
- `PRIVATE_KEY`
- [GOV_API_KEY](https://api.congress.gov/sign-up/)

2. Create **env.local** file _( /OpenTruth/frontend )_

```
GOV_API_KEY="" // Same value from chainlink env-enc
NEXT_PUBLIC_FUNCTIONS_API_URL=http://localhost:8888/run-chainlink-functions-script
NEXT_PUBLIC_UPDATE_DATA_URL=http://localhost:8888/update-data
MUMBAI_RPC_URL="" // Same value from chainlink env-enc
```

`NEXT_PUBLIC_FUNCTIONS_API_URL` and `NEXT_PUBLIC_FUNCTIONS_API_URL` values have to be as shown.

## Path changes

The Express API endpoints are configured to execute scripts located in specific paths on my personal computer. You will need to update these paths in the code to match the locations where the scripts are stored on your system.

| File Location                        | Variable Name | Line Number |
| ------------------------------------ | ------------- | ----------- |
| /OpenTruth/backend/node_api/index.js | filePath      | 36          |
| /OpenTruth/backend/node_api/index.js | --            | 86          |

Make sure the replacement path is the absolute path and **NOT** the relative path.

## Encrypted Secrets

Most likely the encrypted secrets needed to execute the functions request is expired and you must generate a new one. To generate a new one:

1. cd `/OpenTruth/backend`
2.

```
node scripts/06_congress_gov_secrets.js
```

3. Copy the new encrypted secret hash (0x...) and paste it inside `07_congress_request.js` in the `encryptedSecretsRef`(ln:20) variable

# Usage

### **IMPORTANT: You MUST run Express API server on a seperate terminal at the same time NextJS is running. It will NOT work otherwise.**

### Start NextJS server:

1. cd into `/OpenTruth/frontend`

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Start Express Server

1. Open a new terminal and cd into `/OpenTruth/backend`
2. `npx env-enc set-pw` to mount environment variables

```
npm start

## or

node node_api/index.js
```

Functions will trigger when you select a bill that has not been verified.

## Listener (Optional)

If you want to see the live-response from Chainlink Functions:

1. Open a new terminal and `npx env-enc set-pw` to mount environment variables
2. `cd /OpenTruth/backend`
3.

```
node listen.js
```

# More information

## Issues/Bugs

Issues that are known and are currently being worked on.

| Origin                       |                                   Description                                    |
| ---------------------------- | :------------------------------------------------------------------------------: |
| NextJS                       |  UseEffect() executes twice on page load, re-calling chainlink functions & APIs  |
| Congress API                 |    Sometimes bill does not have text version yet and Functions returns error     |
| NextJS api/fetchContractData | Sometimes calls Functions Consumer contract before it can populate s_lastRequest |
| NextJS                       |                        Sometimes it caches api responses                         |

## Troubleshooting

Generally, every problem is reported by a console.log. Be vigilant of your terminal's console logs as well as the browser's. The issues you might experience most likely have been acknowledged in the [Issues/Bugs](#issuesbugs) section and is being actively worked on.

- ### If the Verified URL never filled it could due to:
  - DON hosted secrets expired and must be replaced (most common)
    - Check [Express server](#) console logs for "_failed to fetch DONHosted secrets: not found_" error
    - Solution: [EncryptedKey](#)
  - `api.congress.gov` json response does not have the specific URL "key" that Functions is looking for some reason.
    - Check `listen.js` console log or [consumer contract](https://mumbai.polygonscan.com/address/0xde5c73ab2bd1379c92d3e80666f859e7fdc8e404#readContract) for error message "TypeError: _data.textVersions[0].formats format is undefined"_.
    - Solution: Patience. As per the official website:
      > Bills are generally sent to the Library of Congress from GPO, the Government Publishing Office, a day or two after they are introduced on the floor of the House or Senate. Delays can occur when there are a large number of bills to prepare or when a very large bill has to be printed.

## Going Forward

Going forward these are the next objectives:

- Resolve issues/bugs
- Create a brief description of the selected bills using ChatGPT
- Incorporate more legal documents such as terms and agreements
- Create a mobile version

# Contact

1. [Twitter](https://twitter.com/ancientveil)
2. [Telegram](https://t.me/RobertoAdv)

# Thank you

Thank you for checking OpenTruth. It was incredible to work on this project and improve my skills as a software developer. Thank you Chainlink Constellation Hackathon 2023 judges and participants.
