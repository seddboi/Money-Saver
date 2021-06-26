const crypto = require('crypto')

const sha256SignB64 = ({ key, str }) => {
	const signer = crypto.createSign('sha256')
	signer.update(str)
	signer.end()

	return signer.sign(key).toString('base64')
}

const sha256Hash = (str) => {
	const hash = crypto.createHash('sha256')
	hash.update(str)
	const digest = `SHA-256=${hash.digest('base64')}`

	return digest
}

const generateSignature = ({ method, path, headers, body = '', key, keyId }) => {
	const { authorization, accept } = headers
	const date = (new Date()).toUTCString()

	const digest = sha256Hash(body)

	const header = {
		'(request-target)': `${method.toLowerCase()} ${path}`,
		accept,
		'content-type': headers['content-type'],
		date,
		digest,
		authorization,
		'user-agent': headers['user-agent'],
	}

	const headerStr = Object.keys(header)
		.filter(key => !!header[key]).map(key => `${key.toLowerCase()}: ${header[key]}`)
		.join('\n')

	const signature = sha256SignB64({ key, str: headerStr })

	const sigParts = {
		keyId,
		algorithm: 'rsa-sha256',
		headers: Object.keys(header)
			.filter(key => !!header[key])
			.filter(k => k !== '(request-target)')
			.join(' '),
		signature,
	}

	const completeSignature = Object.keys(sigParts).map(k => [k,`"${sigParts[k]}"`].join('=')).join(',')

	const ret = Object.assign({}, headers, {
		date,
		digest,
		signature: completeSignature,
	})

	return ret
}

module.exports = generateSignature