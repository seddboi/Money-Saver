const https = require('https')
const tauth = require('./tauth')

const makeJSONRequest = (options, { key, cert, keyId }) => {
	return new Promise((resolve, reject) => {
		const handler = (response) => {
			const body = []
			response.on('data', (chunk) => body.push(chunk))
			response.on('end', () => {
				const str = body.join('')
				try {
					const data = JSON.parse(str)
					if (response.statusCode > 302) {
						const error = {
							data,
							statusCode: response.statusCode,
						}
						reject(error)
					} else {
						resolve(data)
					}
				} catch (e) {
					e.statusCode = response.statusCode
					e.body = str
					reject(e)
				}
			})
		}

		if (key) {
			options.key = key
			options.cert = cert
		}

		if (keyId) {
			options.keyId = keyId
			options.headers = tauth(options)
		}

		const request = https.request(options, handler)

		request.on('error', (err) => reject(err))

		request.end(options.body || '')
	})
}

module.exports = makeJSONRequest