export const FeeSettlementAgreement = {
    question: 'How does the fee settlement agreement type affect the collection of fees from a merchant?',
    text: 'If the merchant is sent for invoice, split or ACH monthly the fees that the merchant owes for a transaction are going to be collected with a separate transaction. The only difference between the three are how fees are collected.',
    scenarios: [
        'Split – the fees are collected at the next batch for the merchant.',
        'Invoice – the fees are collected by a party external to the system after the invoice is issued at the first of the following month and the invoice must be marked as handled manually.',
        'ACH Monthly – the fees are collected by the system automatically on the first of the following month.'
    ],
    text2: 'In all three scenarios, the original disbursement to the merchant isn’t adjusted by the amount of money they owe us. That ONLY happens for a merchant set to ACH NET.'
}

export const AchReturnCodes = {
    question: 'What are the ACH Return Codes supported by the Gateway?',
    text: 'This is a comprehensive list that is defined by NACHA',
    list: [
        'R01 - Insufficient Funds',
        'R02 - Account Closed',
        'R03 - No Account/Unable to Locate Account',
        'R04 - Invalid Account Number Structure',
        'R05 - Unauthorized Debit to Consumer Account Using Corporate SEC Code',
        'R06 - Returned per ODFIs Request',
        'R07 - Authorization Revoked by Customer',
        'R08 - Payment Stopped',
        'R09 - Uncollected Funds',
        'R10 - Customer Advises Originator is Not Known to Receiver and/or Originator is Not Authorized by Receiver to Debit Receiver’s Account',
        'R11 - Customer Advises Entry Not in Accordance with the Terms of the Authorization',
        'R12 - Account Sold to Another DFI',
        'R13 - Invalid ACH Routing Number',
        'R14 - Representative Payee Deceased or Unable to Continue in That Capacity',
        'R15 - Beneficiary or Account Holder Deceased',
        'R16 - Account Frozen',
        'R17 - File Record Edit Criteria',
        'R18 - Improper Effective Entry Date',
        'R19 - Amount Field Error',
        'R20 - Non-Transaction Account',
        'R21 - Invalid Company Identification',
        'R22 - Invalid Individual ID Number',
        'R23 - Credit Entry Refused by Receiver',
        'R24 - Duplicate Entry',
        'R25 - Addenda Error',
        'R26 - Mandatory Field Error',
        'R27 - Trace Error Number',
        'R28 - Routing Number Check Digit Error',
        'R29 - Corporate Customer Advises Not Authorized',
        'R30 - RDFI Not Participant in Check Truncate Program',
        'R31 - Permissible Return Entry',
        'R32 - RDFI Non-Settlement',
        'R33 - Return of XCK Entry',
        'R34 - Limited Participation DFI',
        'R35 - Return of Improper Debit Entry',
        'R36 - Return of Improper Credit Entry',
        'R37 - Source Document Presented for Payment',
        'R38 - Stop Payment on Source Document',
        'R39 - Improper Source Document/Source Document Presented for Payment',
        'R40 - Return of ENR Entry by Federal Government Agency',
        'R41 - Invalid Transaction Code',
        'R42 - Routing Number/Check Digit Error',
        'R43 - Invalid DFI Account Number',
        'R44 - Invalid Individual ID Number/Identification Number',
        'R45 - Invalid Individual Name/Company Name',
        'R46 - Invalid Representative Payee Indicator',
        'R47 - Duplicate Enrollment',
        'R50 - State Law Affecting RCK Acceptance',
        'R51 - Item related to RCK Entry is Ineligible or RCK Entry is Improper',
        'R52 - Stop Payment on Item Related to RCK Entry',
        'R53 - Item and RCK Entry Presented for Payment',
        'R61 - Misrouted Return',
        'R62 - Return of Erroneous or Reversing Debt',
        'R67 - Duplicate Return',
        'R68 - Untimely Return',
        'R69 - Field Error(s)',
        'R70 - Permissible Return Entry Not Accepted/Return Not Requested by ODFI',
        'R71 - Misrouted Dishonored Return',
        'R72 - Untimely Dishonored Return',
        'R73 - Timely Original Return',
        'R74 - Corrected Return',
        'R75 - Return Not a Duplicate',
        'R76 - No Errors Found',
        'R77 - Non-Acceptance of R62 Dishonored Return',
        'R80 - IAT Entry Coding Error',
        'R81 - Non-Participant in IAT Program',
        'R82 - Invalid Foreign Receiving DFI Identification',
        'R83 - Foreign Receiving DFI Unable to Settle',
        'R84 - Entry Not Processed by Gateway',
        'R85 - Incorrectly Coded Outbound International Payment'
    ]
}

export const Claims = {
    question: 'What are claims?',
    text: 'Claims provision a user with access rights to a given resource in the system. A resource can be broadly defined to include any page or data element in the system. Claims are typically coarsely defined and control access to multiple resources. There are three groups of claims:',
    generalClaims: {
        heading: 'General Claims',
        text: 'These claims grant a Heartland User the ability to work with common business objects in this system. This includes, but is not limited to, Merchants, Payment Channels, Payment Channel Fees, Partners, ODFIs and Business Units. Modify security confers rights for users to be able to view and search for the full DDA account numbers.',
        list: [
            'Read Non Security',
            'Modify Boarding',
            'Approve Payment Channel',
            'View Processing File Contents',
            'Finance Operator',
            'Modify Alerts',
            'Modify Merchant Graylist Settings',
            'Modify Provisional Whitelist',
            'Bulwark Operator',
            'Terminal User',
            'Terminal Auditor',
            'Sagacity Read',
            'Sagacity Modify',
            'Modify Risk Rules',
            'Modify Jobs',
            'View Account Number In Payment Channels',
            'Modify Fee Templates',
            'Collections: Remove Hold',
            'Collections: Release Funds',
            'Collections: Approve Release',
            'Modify Expense Rates'
        ]
    },
    securityClaims: {
        heading: 'Security Claims',
        text: 'These claims granted a Heartland User the ability to work with security related objects and properties. This includes, API Profiles, Heartland Users and External Users. These should only be granted to security administrators',
        list: [
            'Read Security',
            'Modify Api Profiles',
            'Modify External Users',
            'Modify Heartland Profiles',
            'Modify Global Configuration',
            'Edit DDA Fields',
            'Minimum Fee Override'
        ]
    },
    reportingClaims: {
        heading: 'Reporting Claims',
        text: 'These claims grant a Heartland User access the Reporting website and the features within it.',
        list: [
            'View Reports',
            'View Account Number In Reports',
            'Accounting Reports',
            'Processing Reports',
            'Merchant Reports',
            'Partner Reports'
        ]
    }
}

export const AchFiles = {
    question: 'When are ACH files sent to the ODFI?',
    text: "The timing of the file transfers are determined by the 'Funding Window' schedules that are configured for the ODFI. This doesn't guarantee that the files are processed at that time at the bank, simply that the ACH Gateway has delivered the files. When a file is sent to the bank that contains the request to move funds for the consumer part of the transaction, the transaction is moved from the 'Request' to 'Processed' status and the transaction is considered settled."
}

export const EffectiveDate = {
    question: 'What is the Effective Date of a transaction?',
    text: "The Effective Date of a transaction is when the request to debit or credit a consumer's account is eligible to be sent to the bank for processing. The exact time of the request depends on a couple of factors, the most important two being if the merchant's consumer fund collection scheme is set to 'Passive' or an 'Aggressive' setting and when the next 'Funding Window' schedule occurs for the ODFI that the transaction is being sent to.",
    text2: "A passive consumer funds collection scheme enforces behavior such that the request to move funds for the consumer portion of the transaction will occur at the next ODFI Funding Window after the Batch Close Time that the transaction is in.",
    scenario1 : {
        scene: {
            heading: 'Scenario 1:',
            text: 'A merchant is configured for an passive consumer fund collection scheme and a batch close time of 5:00PM. The ODFI has two Funding Windows at 8:00AM & 7:00PM. A transaction is generated at 4:20PM for a payment channel of the merchant.'
        },
        result: {
            heading: 'Result:',
            text: "The request to move the consumer's funds would be sent to the bank in the 7:00PM file the same day."
        }
    },
    scenario2: {
        scene: {
            heading: 'Scenario 2:',
            text: 'A merchant is configured for an passive consumer fund collection scheme and a batch close time of 5:00PM. The ODFI has two Funding Windows at 8:00AM & 7:00PM. A transaction is generated at 5:20PM for a payment channel of the merchant.'
        },
        result: {
            heading: 'Result:',
            text: "The request to move the consumer's funds would be sent to the bank in the 8:00AM file the following business day."
        }
    },
    text3: 'An aggressive consumer funds collection scheme enforces behavior such that the request to move funds for the consumer portion of the transaction will occur at the next ODFI Funding window after the transaction has aged N minutes, where N is the aggressive consumer funds collection scheme: Aggressive-30 -> 30 minutes, Aggressive-60 -> 60 minutes & Aggressive-90 -> 90 minutes.',
    scenario3: {
        scene: {
            heading: 'Scenario 3:',
            text: 'A merchant is configured for an Aggressive-30 consumer fund collection scheme and a batch close time of 5:00PM. The ODFI has two Funding Windows at 8:00AM & 7:00PM. A transaction is generated at 5:20PM for a payment channel of the merchant.'
        },
        result: {
            heading: 'Result:',
            text: "The request to move the consumer's funds would be sent to the bank in the 7:00PM file the same day."
        }
    },
    scenario4: {
        scene: {
            heading: 'Scenario 4:',
            text: 'A merchant is configured for an Aggressive-30 consumer fund collection scheme and a batch close time of 5:00PM. The ODFI has two Funding Windows at 8:00AM & 7:00PM. A transaction is generated at 6:50PM for a payment channel of the merchant.'
        },
        result: {
            heading: 'Result:',
            text: "The request to move the consumer's funds would NOT be sent to the bank in the 7:00PM file the same day. When the 7:00PM funding window occurs the transaction is only 10 minutes old and isn't eligible to be sent. It will be sent at 8:00AM the following business day."
        }
    }
}

export const DisbursementDate = {
    question: 'What is the Disbursement Date of a transaction?',
    text: 'The disbursement dates of a transaction is when a request to debit or credit funds to the related business entities associated with the transaction are eligible to be sent to the ODFI for processing. The request to move funds is sent in the next Funding Window for the ODFI of the transactions with two further restrictions, Heartland and Partner funds are ONLY disbursed on Fridays. There are three different disbursement dates for any given transaction.',
    text2: "Heartland Disbursement Date - calculated by taking the batch close time for a transaction and adding the business unit's business days until disbursement.",
    scenario1: {
        scene: {
            heading: 'Scenario 1:',
            text: 'The date is 4/3/2013. The merchant has a batch close time of 5:00PM. The business unit has three business day until disbursement. The ODFI has a Funding Window at 8:00 AM. A transaction processed at 4:00 PM for a payment channel of the merchant. The batch close time of the transaction is 4/3/2013 5:00PM. The Heartland Disbursement Date of the transaction is 4/8/2013 5:00PM.'
        },
        result: {
            heading: 'Result:',
            text: "The request to move funds is sent to the bank on 4/12/2013 8:00AM."
        }
    },
    text3: "Merchant Disbursement Date - calculated by taking the batch close time for a transaction and adding the merchant's business days until disbursement.",
    scenario2: {
        scene: {
            heading: 'Scenario 2:',
            text: 'The date is 4/3/2013. The merchant has a batch close time of 5:00PM and three business days until disbursement. The ODFI has a Funding Window at 8:00 AM. A transaction processed at 4:00 PM for a payment channel of the merchant. The batch close time of the transaction is 4/3/2013 5:00PM. The Merchant Disbursement Date of the transaction is 4/8/2013 5:00PM.'
        },
        result: {
            heading: 'Result:',
            text: "The request to move funds is sent to the bank on 4/9/2013 8:00AM."
        }
    },
    text4: "Partner Disbursement Date - calculated by taking the batch close time for a transaction and adding the partner's business days until disbursement.",
    scenario3: {
        scene: {
            heading: 'Scenario 3:',
            text: 'The date is 4/3/2013. The merchant has a batch close time of 5:00PM. The partner has two business days until disbursement. The ODFI has a Funding Window at 8:00 AM. A transaction processed at 4:00 PM for a payment channel of the merchant. The batch close time of the transaction is 4/3/2013 5:00PM. The Partner Disbursement Date of the transaction is 4/5/2013 5:00PM.'
        },
        result: {
            heading: 'Result:',
            text: "The request to move funds is sent to the bank on 4/12/2013 8:00AM. The disbursement for the partner was not processed on 4/5/2013 because the ODFI had funding window at 8:00AM and the partner disbursement of the transaction wasn't eligible until 4/5/2013 5:00PM. Therefore because of partner disbursements are only processed on Fridays, the next eligible window that the funds for the partner can be disbursed on is 4/12/2013 8:00AM."
        }
    }
}