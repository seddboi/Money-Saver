const teller = require('teller-io');
require('dotenv').config();

const token = 'test_CgBgpgjiT2WuctRjVSHTng'
const key = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCywRl/HZAY3CuoTVkyAaQY/bByyWKiV1dFX+UxNV7BphgvBm41uJ0a9Ba25itJu+4YuncggXT+CFW2NfJ3b5R7k18sURqSCK12ui/j6NwPst9vK/trhLd1di7zVok9OZkV7/abm/CAiRZeQjuaNsTmVRjVZcPlPoKYZl/ioh1R/VKnlwl5AV4diC/e22hYNNpNDswbnYoqNflU+Yp9/9OBGMcn27NojTLIrw34q8MASpK+NCSNzpwjJo8mxiRfd4G4+fqyIVFpgVnafWhARFYyHmB4alyF++CXI9osKYIa1pEpAqS2qTyUBhuNOz8pciF0SDfBJPmFt2uckCS4vbnhAgMBAAECggEACJCJ2nnTMXsRw1CMijqqAqGi29GKc+av9tIHeLTViNKCTK4PB2yvEsoIm+lbo7eaysuFsVZLc2/OPb5WhOKSyxS+gJQi5PByDeaDgeabX73ZyKXGxkSkAIZ8e4NDbN5F5brLO8f/x+ftJEWTkvELoDTtsNfPOfVB8rcIGzF2uPOW6XfW3onXv35Rj7u1Uif4j/DXce87F4w9dQxf8xDscmhP/paepjYU1IZtqxmUq8lXJh9wAi1T0KvJ8HObn3Xb7VErJxbuVP5S1YHKazzTysgVnuOaKMCmPK+LKcknt3AsKcm3+W+UXYGGW8LWyeM/GFCnWO0YpFUehFUu6+w7YwKBgQD5nHby5H/8zmWHt05qCS+G91GIbWBPj+kuUCvkT35aP/G7C+zPOweoseHXrlp5nbulc07u+TA3iO2dFRUJNRWUGHiqyicpKX5SV+zG3UxHJnNXD7xeCtMtV0+IZvHq1lOhgGMc3e5zc5T68bw0X7V5F4FrE67aSe6UYGYQ7AQjvwKBgQC3VFtocYImPg8eF82V8Tap1DNNbYPOgttBxXdAzF70cmRWKqO3qgWmyqN9l7USbtFzCCrWIB7ikjhDAGLWpBFiTPtUQqo0GtYZaPWz+h5VWEldtdA8cKYFn5Ze/Lc8MtoMfaeEXVRKWp7baavrN/DWJNw91LLfUm6t7WI5bfEKXwKBgDsgWPzIK5kSuvIe9bAgZOWvh9ytK/csu6uAyiTWv7NZGkWYWYvtC69mE30ni77rIhva6IOq+0TsZnyjFcyMioP+F/c803HopkeTFD83BG6GKSQiUhhksAk5eVlyKTPbeQv0gYXA/E7UviGDSXWOhkocy0c17mE+ygjTnNm9Tm25AoGBALUqy9n+sdsQ4OegJi3S3W4eoUQWwXZGol3wwdRrIjr3AGiWYouRnVwiTEZEsU+x65F9tLc9rsfAL5EmxIXQRM2bvZKa/o/XJVSfAJAG0AsO4BGXJl1UBPzxpCviGUGIDyrg0bZgdHe17d5uItKjyYAVlQAVPV6rm2yNdc/C8byJAoGBAKF+obwddDxydwXMMpQbOQrY1ZUnU3IR413u8wFs1lzEVmImijdZWsUuh/OtQj/l0nnLv0XYm+WW9Tdmg7MybUyWG+xtQcrGtOoMGPF8eF0g1brhdx4ZAA1JfjaqW2cFx+z/aSilQmuSMQ9A4wMGkoH8CU7sg8BL8McbhSnHi0hl';
const cert = 'MIIExjCCAq6gAwIBAgIIFoFMgOdJWTowDQYJKoZIhvcNAQELBQAwYTELMAkGA1UEBhMCR0IxEDAOBgNVBAgMB0VuZ2xhbmQxDzANBgNVBAcMBkxvbmRvbjEPMA0GA1UECgwGVGVsbGVyMR4wHAYDVQQLDBVUZWxsZXIgQXBwbGljYXRpb24gQ0EwHhcNMjEwNTIyMDUzMDU3WhcNMjQwNTIyMDUzMDU3WjAkMSIwIAYDVQQDDBlhcHBfbml2YTRibnNvbmMzb3JyMTc4MDAwMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAssEZfx2QGNwrqE1ZMgGkGP2wcslioldXRV/lMTVewaYYLwZuNbidGvQWtuYrSbvuGLp3IIF0/ghVtjXyd2+Ue5NfLFEakgitdrov4+jcD7Lfbyv7a4S3dXYu81aJPTmZFe/2m5vwgIkWXkI7mjbE5lUY1WXD5T6CmGZf4qIdUf1Sp5cJeQFeHYgv3ttoWDTaTQ7MG52KKjX5VPmKff/TgRjHJ9uzaI0yyK8N+KvDAEqSvjQkjc6cIyaPJsYkX3eBuPn6siFRaYFZ2n1oQERWMh5geGpchfvglyPaLCmCGtaRKQKktqk8lAYbjTs/KXIhdEg3wST5hbdrnJAkuL254QIDAQABo4G+MIG7MA4GA1UdDwEB/wQEAwIF4DATBgNVHSUEDDAKBggrBgEFBQcDAjCBkwYDVR0jBIGLMIGIgBSEq++simSLxXkuNSUKjel6pmhxmqFlpGMwYTELMAkGA1UEBhMCR0IxEDAOBgNVBAgMB0VuZ2xhbmQxDzANBgNVBAcMBkxvbmRvbjEPMA0GA1UECgwGVGVsbGVyMR4wHAYDVQQLDBVUZWxsZXIgQXBwbGljYXRpb24gQ0GCCQDiNWG/vm85CTANBgkqhkiG9w0BAQsFAAOCAgEAFmSML3sOtglK5arL1KPaMSvvuR8n+WEn7yorXquIwT5t1MjKxSPsd5QdsJz7TQ/5B/H/advzZDkRhey89Lu/V8a5/x8HZdTE7HVjaRjWLkKkqQs+gbDUTfxITltUOzHp+Qv5GlXB0MdmOW4iEbWCctegDDIQINwjanB7KRdBIFuIG7xSeNgqxe7zDRiGiw6gxu7/rRrra2pucWlBqzLq8liazZ60BsGz6k99BQitU/mUM3AKzpMTIMPi92ZHNO/DtR65iJs2Y4jX0YpaZGC51JqK37yDG1xYscVypO15/SEtIoVN4bZwqRLW23N/QAHg8/NCjQrugCoIdtcz3CQ9e88Y3tObF8sjunBqC4AwGbCFUef7RCFratPZ5qu7IbTokjTT91CxHawpWLraWLye5/eSvU6Gjx7IR04UaOBGyfuDDeECIjhfvfs3D/dO6orpVGC3Fu8ltyL9MPP26OSBLLAiafeKsSSyqwr8sRovixNFcbH2KTm8ZYBle1FCulUpk5t06iGrH8ugbodNVzv9phjrSHohxEK1Zodvi6mt0oObLKRG0rFHkXrqy+xE+/DwTywHfJ16UQj4a8Wq3c1+B6JEodpqO5k9G8hZILz2T596UYkob2dFubWpjxAzewXhC+3xuCxllmu7kiFt5yEJbzla7E+IzxCBSCW67JFWrKU=';

const appId = 'app_niva4bnsonc3orr178000';
const permissions = {
    full_account_number: true,
    balance: true,
    transaction_history: true,
    direct_debits: 'read',
    standing_orders: 'read', 
    internal_transfers: 'false',
    payees: 'write',
    external_payments: true,
};

// these two function, yet the appid gets printed as null
const generatedURL = teller.generateAuthUrl({appId, permissions});
console.log(generatedURL);

const parsedURL = teller.parseRedirectUrl(generatedURL);


// all possible teller-io module methods
// teller.getAccounts({ token, key, cert })

// teller.getAccount({ token, key, cert, accountId })

// teller.getTransactions({ accountId, token, key, cert })

// teller.getTransaction ({ accountId, transactionId, token, key, cert })

// teller.getDirectDebits({ accountId, token, key, cert })

// teller.getDirectDebit({ accountId, directDebitId, token, key, cert })

// teller.getStandingOrders({ accountId, token, key, cert })

// teller.getStandingOrder({ accountId, standingOrderId, token, key, cert })

// teller.getPayees({ accountId, token, key, cert })

// teller.getPayee({ accountId, payeeId, token, key, cert })