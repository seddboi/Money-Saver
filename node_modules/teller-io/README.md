# teller-io [![npm version](https://badge.fury.io/js/teller-io.svg)](https://badge.fury.io/js/teller-io)

API wrapper lib for [Teller](https://teller.io)

**note**: TAuth implementation is a WIP, external payments do not currently work, help on this would be appreciated!

## Installation

`npm install teller-io --save`

## Usage

`const teller = require('teller-io')`

### Generate Auth URL

Usage:

```
const appId = 'from application created here: https://teller.io/developer/applications'
const permissions = {
	full_account_number: true,
	balance: true,
	transaction_history: true,
	direct_debits: 'read',
	standing_orders: 'read',
	internal_transfers: false,
	payees: 'write',
	external_payments: true,
}

teller.generateAuthUrl({ appId, permissions })
```

Returns: String

### Extract data from Resulting Redirect URL

Usage:
```
const url = 'https://splitthis.app/?token=XXXXXXXXXXXXX&permissions=balance:true,direct_debits:read,external_payments:true,full_account_number:true,payees:write,standing_orders:read,transaction_history:true'

teller.parseRedirectUrl(url)
```
Returns: 
```
{
	token: 'XXXXXXXXXXXXX',
	permissions: {
		full_account_number: true,
		balance: true,
		transaction_history: true,
		direct_debits: 'read',
		standing_orders: 'read',
		internal_transfers: false,
		payees: 'write',
		external_payments: true,
	}
}
```

### Make Requests

Below all return a Promise which resolves to the result of the request, or rejects with an error.
You can pass in your developer personal access token, **or** a access token, private key, and cert.

`teller.getAccounts({ token, key, cert })`

`teller.getAccount({ token, key, cert, accountId })`


`teller.getTransactions({ accountId, token, key, cert })`

`teller.getTransaction ({ accountId, transactionId, token, key, cert })`


`teller.getDirectDebits({ accountId, token, key, cert })`

`teller.getDirectDebit({ accountId, directDebitId, token, key, cert })`


`teller.getStandingOrders({ accountId, token, key, cert })`

`teller.getStandingOrder({ accountId, standingOrderId, token, key, cert })`


`teller.getPayees({ accountId, token, key, cert })`

`teller.getPayee({ accountId, payeeId, token, key, cert })`

(wip)
`teller.externalPayment({ accountId, payeeId, bankCode, accountNumber, amount, token, key, cert })`

## License
[ISC](LICENSE)
