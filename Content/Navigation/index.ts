export const menuItems = [
    {
        primaryLink: 'Home',
        link: '/',
        subLinks: [
            {
                name: 'tutorial',
                subLinksExist: false,
                link: '/Home/Tutorial'
            },
            {
                name: 'contact',
                subLinksExist: false,
                link: '/Home/Contact'
            },
            {
                name: 'about',
                subLinksExist: false,
                link: '/Home/About'
            },
            {
                name: 'FAQ',
                subLinksExist: false,
                link: '/Home/Faq'
            },
            {
                name: 'version',
                subLinksExist: false,
                link: '/Home/Version'
            },
            {
                name: 'health check',
                subLinksExist: false,
                link: '/Home/Healthcheck'
            }
        ]
    },
    {
        primaryLink: 'Configuration',
        link: '/Configuration',
        subLinks: [
            {
                name: 'merchants',
                link: 'merchants',
                subLinksExist: true,
                ariaControls: false,
                ariaExpanded: false,
                sublinks: [
                    {
                        label: 'Billing Groups',
                        key: 'billing groups',
                        link: 'Configuration/Merchants/BillingGroup'
                    },
                    {
                        label: 'Billing Group Chain',
                        key: 'billing group chain',
                        link: 'Configuration/Merchants/BillingGroupChain'
                    },
                    {
                        label: 'Payment Channels',
                        key: 'payment channels',
                        link: 'Configuration/Merchants/PaymentChannels'
                    },
                    {
                        label: 'Relationship Managers',
                        key: 'relationship managers',
                        link: 'Configuration/Merchants/RelationshipManagers'
                    },
                    {
                        label: 'Fee Templates',
                        key: 'fee templates',
                        link: 'Configuration/Merchants/FeeTemplates'
                    },
                    {
                        label: 'Billing Group Disbursement Hold',
                        key: 'billing group disbursement hold',
                        link: 'Configuration/Merchants/BillingGroupDisbursementHold'
                    },
                ]
            },
            {
                name: 'partners',
                subLinksExist: false,
                link: 'Configuration/Partners'
            },
            {
                name: 'ODFIs',
                link: '/odfis',
                subLinksExist: true,
                ariaControls: false,
                ariaExpanded: false,
                sublinks: [
                    {
                        label: 'Bank Expenses',
                        key: 'bank expenses',
                        link: 'Configuration/ODFIs/BankExpenses'
                    },
                    {
                        label: 'Expense Batches',
                        key: 'expense batches',
                        link: 'Configuration/ODFIs/ExpenseBatches'
                    },
                    {
                        label: 'Routing Numbers',
                        key: 'routing numbers',
                        link: 'Configuration/ODFIs/RoutingNumbers'
                    },
                ]
            },
            {
                name: 'business units',
                link: '/businessunits',
                subLinksExist: true,
                ariaControls: false,
                ariaExpanded: false,
                sublinks: [
                    {
                        label: 'Support Contacts',
                        key: 'support contacts',
                        link: 'Configuration/BusinessUnits/SupportContacts'
                    }
                ]
            },
            {
                name: 'profile',
                link: '/profile',
                subLinksExist: true,
                ariaControls: false,
                ariaExpanded: false,
                sublinks: [
                    {
                        label: 'API Profiles',
                        key: 'api profiles',
                        link: 'Configuration/Profile/APIProfiles'
                    },
                    {
                        label: 'Heartland Users',
                        key: 'heartland users',
                        link: 'Configuration/Profile/HeartlandUsers'
                    },
                    {
                        label: 'External Users',
                        key: 'external users',
                        link: 'Configuration/Profile/ExternalUsers'
                    },
                ]
            },
            {
                name: 'system',
                subLinksExist: false,
                link: 'Configuration/System'
            }
        ]
    },
     {
        primaryLink: 'Support',
        link: '/Support',
        subLinks: [
            {
                name: 'automation',
                link: '/automation',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Alerts',
                        link: '/Support/Automation/Alerts'
                    },
                    {
                        label: 'Subscriptions',
                        link: '/Support/Automation/Subscriptions'
                    },
                    {
                        label: 'Jobs',
                        link: '/Support/Automation/Jobs'
                    },
                ]
            },
            {
                name: 'consumers',
                link: '/Consumers',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Blacklist',
                        link: '/Support/Consumers/Blacklist'
                    },
                    {
                        label: 'Whitelist',
                        link: '/Support/Consumers/Whitelist'
                    },
                    {
                        label: 'Provisional Whitelist',
                        link: '/Support/Consumers/ProvisionalWhitelist'
                    },
                ]
            },
            {
                name: 'invoices',
                link: '/Invoices',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Billing Group',
                        link: '/Support/Invoices/BillingGroup'
                    },
                    {
                        label: 'Partner',
                        link: '/Support/Invoices/Partner'
                    }
                ]
            },
            {
                name: 'logging',
                link: '/Logging',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Failed Api Calls',
                        link: '/Support/Logging/FailedApiCalls'
                    },
                    {
                        label: 'Logs',
                        link: '/Support/Logging/Logs'
                    },
                    {
                        label: 'Emails',
                        link: '/Support/Logging/Emails'
                    },
                ]
            },
            {
                name: 'ACH files',
                link: '/AchFiles',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'ACH Entry Finder',
                        link: '/Support/AchFiles/AchEntryFinder'
                    },
                    {
                        label: 'ACH Rejects',
                        link: '/Support/AchFiles/AchRejects'
                    }
                ]
            },
            {
                name: 'returns',
                link: '/Returns',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Return Files',
                        link: '/Support/Returns/ReturnFiles'
                    },
                    {
                        label: 'Return Details',
                        link: '/Support/Returns/ReturnDetails'
                    },
                    {
                        label: 'Exceptions',
                        link: '/Support/Returns/Exceptions'
                    },
                    {
                        label: 'Reinitiations',
                        link: '/Support/Returns/Reinitiations'
                    },
                    {
                        label: 'Notices Of Change',
                        link: '/Support/Returns/NoticeOfChange'
                    },
                    {
                        label: 'Return Reconciliations',
                        link: '/Support/Returns/ReturnReconciliations'
                    },
                ]
            },
            {
                name: 'bulwark',
                link: '/Bulwark',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Risk Rule Configuration',
                        link: '/Support/Bulwark/RiskRuleConfiguration'
                    },
                    {
                        label: 'Risk Rule Enforcement',
                        link: '/Support/Bulwark/RiskRuleEnforcement'
                    }
                ]
            }
        ]
     },
    {
        primaryLink: 'Terminal',
        link: '/Terminal',
        subLinks: [
            {
                name: 'virtual terminal',
                subLinksExist: false,
                link: '/VirtualTerminal'
            },
            {
                name: 'history log',
                subLinksExist: false,
                link: '/HistoryLog'
            }
        ]
    },
    {
        primaryLink: 'Sagacity',
        link: '/Sagacity',
        subLinks: [
            {
                name: 'management',
                link: '/Management',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Business Units',
                        link: '/Sagacity/Management/BusinessUnits'
                    },
                    {
                        label: 'Merchants',
                        link: '/Sagacity/Management/Merchants'
                    },
                    {
                        label: 'Users',
                        link: '/Sagacity/Management/Users'
                    },
                    {
                        label: 'Global',
                        link: '/Sagacity/Management/Global'
                    },
                    {
                        label: 'GIACT Invoices',
                        link: '/Sagacity/Management/GIACTInvoices'
                    },
                ]
            },
            {
                name: 'history',
                link: '/History',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Bank Accounts',
                        link: '/Sagacity/History/BankAccounts'
                    },
                    {
                        label: 'Consumers',
                        link: '/Sagacity/History/Consumers'
                    },
                    {
                        label: 'Verification Requests',
                        link: '/Sagacity/History/VerificationRequests'
                    },
                    {
                        label: 'Authentication Requests',
                        link: '/Sagacity/History/AuthenticationRequests'
                    },
                    {
                        label: 'Statics',
                        link: '/Sagacity/History/Statics'
                    },
                    {
                        label: 'Failed API Calls',
                        link: '/Sagacity/History/FailedApiCalls'
                    },
                ]
            }
        ]
    }
]