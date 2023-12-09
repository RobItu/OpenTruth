# OpenTruth/frontend

This is the front end that's powered by [Next.js](https://nextjs.org/).

- [Getting Started](#getting-started)
  - [Install dependencies](#install-dependencies)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)

## Getting Started

### Install dependencies

```
npm install
```

### Environment Variables

If you haven't done so, create a **env.local** file

```
GOV_API_KEY=""
NEXT_PUBLIC_FUNCTIONS_API_URL=http://localhost:8888/run-chainlink-functions-script
NEXT_PUBLIC_UPDATE_DATA_URL=http://localhost:8888/update-data
MUMBAI_RPC_URL=""
```

`NEXT_PUBLIC_FUNCTIONS_API_URL` and `NEXT_PUBLIC_FUNCTIONS_API_URL` values have to be as shown.
`GOV_API_KEY` can be found [here](https://api.congress.gov/sign-up/).

## Usage

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

When navigating throught the website, `/services` will fetch congress API and return a list of bills. When you select a bill it will navigate you to `/service/[bill-title]` and initiate functions request if [verifiedBills.json] does not have the bill or the bill needs to be updated.
