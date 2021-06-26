/*
	verifys implementation against documentation
*/
const tauth = require('./tauth')

const key = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAunDvDG5JeWU5qaI0evW3Pf+NYJu3xjmet+EYitnSLSC3tVfu
SttzpmiO00B1AZ3S7r9D02E86I850icPLICHoApbvtvQtmH5+YmVAYlSJoyFEDyd
i8ag0KnY3k9v0H3LhUYd4B6/0YwGF44u/Fv9j07fJ1TjF1jSw+QIR6+gpXIhKYV+
bd3wJKZhT8HpYXKDUKKFDXwelZBCdT38r6KcnrjrotsihO+SPOza21sQcHbXucqm
dCc5F84CwhFhBjTmAGX4oirxbzA76Qmd6/nM2KePFzZFW2KQcyWIvVSC1ILcgjsH
ayq0dih4fJBJnBOWw4Ue1dCkHa4ZqT8id4z+8QIDAQABAoIBAQC4AYfcg+ieGCp9
4inbhTERzmsRAv6wc+PS5STcvTfy9Ax7vMnhNY+BmEYF9uLD8qjgmwJs19ZOTDUr
1QLj0AKLEE4WI0ptBmu5PXFDb+0VQLB/IuP2tNW4uzjfyBS5971qzpXjwVVdkc3d
Z6W1yXCKBLS3U89BFpgFX8RQQ+TQAxFSOqsm+XyyNKAdWtArYXEW2SAWkE3doqL9
vSOMrralS0ForSW8Bh5KzMmiAl/dg3u+yma1o/uK9Uo2ko4ZWRROpuQ6rESEMFR+
WuXWSGJRZwbx1/cd4+Yr/Qlf81OHb2PVEL+2CW74/sd1WTAEddPCK9rOw4lwjr0R
9UqrzD9BAoGBAORF7XzeMzdBiIIG9K1JEumjFzXHAPYcWbd4xQpC2nzQSXNTzaw4
+gjFWaNJVjSyIgDF5+O6dmfensst8Hwj5sfmjRsx7jLslXCpBs/zVUL76+7Meo6b
/fproUX0213tapBvGxbWXC8zd+WDffWsDpYJ/Y8FfB7FUaUe8IvkaVAJAoGBANEW
QTdQjUnpydVJbmjeuG/owNgi4uJ5fPWJ92Jq/+jKsA1MuiOZl/ioAugqBICuTvod
CxLdTQ7cGX7cVkqM8+AM4FiK0gfqT05zhG+6tXfNodjYvxsdwLer/V3lCNVSjEEV
99rttEecXE8WNwQavdfX/rK7VQvlpigQMF8GhiGpAoGBAL4y/bRDOA1cTy94ODqC
Xn3JZDdsvwJRkPdsa1EnbwD8U5cCRqavOrZAKXYCTw/NNMPMInD/FlVpionklzH4
f/wjv4LfUYeg1MtwKrruFyae3XC1c5CLrU0QjOnLIVTb0yTRTpLyvRCfI9FahINE
f0rIvDqE6WyCIIsigm8tPApxAoGATHkZTUP3CUuq+ImtCko7pyK4NdU8qpzIqX3W
r3Z3Nwu7LIIdqpuoy9eXiJalovMeC7jHrhSm9IJoCNBJ92ZqZE4RWBEeFKsMaqMx
kzP032akhY1xCFfvfr43Izp76poQllWUm8xJHdAAqyRy5ttpCCMGExUVXA6YoRqa
tobKVFECgYBjppJEgar+LXWloOfFEMJhPCS7Cfa37IVOCnRoSORoZTmvonPQAxS1
yoXQN/1XxDMHBp/rLdMJ5jQiW0AB3b+JV5G9pMsYP7wpRpaL/zJoDBD7IfVlV9Tr
AiTxCpr35nV2PPYaFYwE+mfeT5jFZnhZuRyTlX9cfYx73rukFMrSmg==
-----END RSA PRIVATE KEY-----`

const options = {
	method: 'PUT',
	path: '/accounts/00000000-0000-0000-0000-000000000000/payments/00000000-0000-0000-0000-000000000000',
	host: 'api.teller.io',
	port: 443,
	headers: {
		accept: 'application/json',
		'content-type': 'application/x-www-form-urlencoded',
		authorization: 'Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		'user-agent': 'Super Rad App/0.0.1',
	},
	body: 'bank_code=00-00-00&account_number=00000000&amount=0.01',
	key,
	keyId: 'certificate',
}

const expectedSig = 'keyId="certificate",algorithm="rsa-sha256",headers="accept content-type date digest authorization user-agent",signature="g0nWC3Q4EnzX+gYhbxG38dhyVjlewsgA7xJjrllYc3GVuiYEE0KLEugQ2JhbeJK2zK2FtL1476wsS0QmTd+V+HOs0jdIy+aAmBIOAx6urIvsRYTmgOzUMnPfLDTtda1PYvUkwQMMZcZ2jmVN3lPs4ZWuGc9HwWfBlTtrhdjXPdyvMG8SgfTjM11MLl7b8UYURB4aWA7FG7aaoEGV3d8F5QY85pwgMtzSsRcpZL9cGIh8zr7p79fjeJ0M+arD/5geaATJRLsFovmpBFcdZKve44muLNCNmTO+Uu18sHhX5zi+mkINw4G1wxNXbyrPRaFPhcN9o6ZDlMPgtAogvyqbSQ=="'
const expectedDigest = 'SHA-256=dX9LYG6i/d+TuzG0QMckFzqOZ6Wll/TlGGjUtqGyMhQ='

// mock date
const constantDate = new Date('2018-04-09T15:24:16Z')
Date = class extends Date {
  constructor() {
    return constantDate
  }
}

const { 
	signature,
	digest,
} = tauth(options)

console.log(
	signature === expectedSig
	&&
	digest === expectedDigest
)


