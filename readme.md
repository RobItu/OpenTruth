<br/>
<p align="center">
<img src="./logo2.png" width="500" alt="OpenTruth logo">
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
  - [Express API](#express-server--listener)
  - [Listener](#listener)
- [More Information](#more-information)
  - [Issues/Bugs](#issuesbugs)
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

NextJS cannot read environment variables set by chainlink env-enc so they need to be set up twice. Once in `/OpenTruth` with chainlink env-enc and the other inside `/OpenTruth/frontend` with a `.env.local` file for NextJS

1. **chainlink env-enc** _(C:/Users/Your/Path/OpenTruth
   )_

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

2. Navigate to frontend folder and create a **env.local** file _(C:/Users/Your/Path/OpenTruth/frontend)_

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

Start NextJS server:

1. cd into `/OpenTruth/frontend`

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Express server & Listener

### Express

If you want to see the the express server execute the functions request script with dynamic arguements live:

1. Open a new terminal and `npx env-enc set-pw` to mount environment variables
2. `cd /OpenTruth/backend`
3.

```
npm start

## or

node node_api/index.js
```

Functions will trigger when you select a bill that has not been verified.

### Listener

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

# Contact

1. [Twitter](https://twitter.com/ancientveil)
2. [Telegram](https://t.me/RobertoAdv)

# Thank you

Thank you for checking OpenTruth. It was incredible to work on this project and improve my skills as a software developer. Thank you Chainlink Constellation Hackathon 2023 judges and participants.
