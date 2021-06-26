const makeJSONRequest = require('./makeJSONRequest')
const querystring = require('querystring')

const entrypoint = 'api.teller.io'

const permissionsToQuery = perms => Object.keys(perms).map(key => `${key}:${perms[key]}`).join(',')

const generateAuthUrl = ({ appId, permissions }) => `https://teller.io/auth/authorize?application_id=${appId}&permissions=${permissionsToQuery(permissions)}`

const makeTellerRequest = ({ path, method = 'get', token, form, key, cert }) => {
	let body
	let contentType
	let keyId

	if (form) {
		body = querystring.stringify(form)
		contentType = 'x-www-form-urlencoded'
		keyId = 'certificate'
	}

	const options = {
		host: entrypoint,
		port: 443,
		path,
		body,
		method,
		headers: {
			accept: 'application/json',
			authorization: `Bearer ${token}`,
			'user-agent': 'node-teller-io/0.0.4',
		}
	}

	if (contentType) {
		options.headers['content-type'] = contentType
	}

	return makeJSONRequest(options, { key, cert, keyId })
}

const parseRedirectUrl = uri => {
	const redirectUrl = new URL(uri)
	const searchParams = new URLSearchParams(redirectUrl.search)

	const token = searchParams.get('token')
	const permissionsQuery = searchParams.get('permissions')

	const permissions = {}
	permissionsQuery.split(',').forEach(val => {
		let [k, v] = val.split(':')
		if (v === 'true') {
			v = true
		}
		if (v === 'false') {
			v = false
		}
		permissions[k] = v
	})

	return {
		token,
		permissions,
	}
}

const getAccounts = ({ token, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: '/accounts',
	token,
})
const getAccount = ({ token, accountId, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: `/accounts/${accountId}`,
})


const getTransactions = ({ accountId, token, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: `/accounts/${accountId}/transactions`,
})
const getTransaction = ({ accountId, transactionId, token, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: `/accounts/${accountId}/transactions/${transactionId}`,
})

const getDirectDebits = ({ accountId, token, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: `/accounts/${accountId}/direct_debits`,
})
const getDirectDebit = ({ accountId, directDebitId, token, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: `/accounts/${accountId}/direct_debits/${directDebitId}`,
})

const getStandingOrders = ({ accountId, token, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: `/accounts/${accountId}/standing_orders`,
})
const getStandingOrder = ({ accountId, standingOrderId, token, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: `/accounts/${accountId}/standing_orders/${standingOrderId}`,
})

const getPayees = ({ accountId, token, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: `/accounts/${accountId}/payees`,
})
const getPayee = ({ accountId, payeeId, token, key, cert }) => makeTellerRequest({
	key, cert, token,
	path: `/accounts/${accountId}/payees/${payeeId}`,
})

// causes 500 - not sure why
const externalPayment = ({ accountId, payeeId, bankCode, accountNumber, amount, token, key, cert }) => makeTellerRequest({
	token, key, cert,
	path: `/accounts/${accountId}/payees/${payeeId}`,
	method: 'put',
	form: {
		bank_code: bankCode,
		account_number: accountNumber,
		amount,
	},
})

module.exports = {
	generateAuthUrl,
	parseRedirectUrl,

	makeTellerRequest,

	getAccounts,
	getAccount,

	getTransactions,
	getTransaction,

	getDirectDebits,
	getDirectDebit,

	getStandingOrders,
	getStandingOrder,

	getPayees,
	getPayee,

	externalPayment,
}
