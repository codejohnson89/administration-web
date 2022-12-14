export const menuItems = [
    {
        primaryLink: 'Home',
        contentText: 'HomeContent',
        link: '/HomeContent',
        isActive: false,
        subLinks: [
            {
                name: 'tutorial',
                subLinksExist: false,
                link: '/HomeContent/Tutorial'
            },
            {
                name: 'contact',
                subLinksExist: false,
                link: '/HomeContent/Contact'
            },
            {
                name: 'about',
                subLinksExist: false,
                link: '/HomeContent/About'
            },
            {
                name: 'FAQ',
                subLinksExist: false,
                link: '/HomeContent/Faq'
            },
            {
                name: 'version',
                subLinksExist: false,
                link: '/HomeContent/Version'
            },
            {
                name: 'health check',
                subLinksExist: false,
                link: '/HomeContent/Healthcheck'
            }
        ]
    },
    {
        primaryLink: 'Configuration',
        contentText: "Configuration",
        link: '/Configuration',
        isActive: false,
        subLinks: [
            {
                name: 'merchants',
                link: '/merchants',
                subLinksExist: true,
                ariaControls: false,
                ariaExpanded: false,
                sublinks: [
                    {
                        label: 'Billing Groups',
                        key: 'billing groups',
                        link: '/Configuration/Merchants/BillingGroups/'
                    },
                    {
                        label: 'Billing Group Chains',
                        key: 'billing group chains',
                        link: '/Configuration/Merchants/BillingGroupChains/'
                    },
                    {
                        label: 'Payment Channels',
                        key: 'payment channels',
                        link: '/Configuration/Merchants/PaymentChannels/'
                    },
                    {
                        label: 'Relationship Managers',
                        key: 'relationship managers',
                        link: '/Configuration/Merchants/RelationshipManagers/'
                    },
                    {
                        label: 'Fee Templates',
                        key: 'fee templates',
                        link: '/Configuration/Merchants/FeeTemplates/'
                    },
                    {
                        label: 'Billing Group Disbursement Hold',
                        key: 'billing group disbursement hold',
                        link: '/Configuration/Merchants/BillingGroupDisbursementHold/'
                    },
                ]
            },
            {
                name: 'partners',
                subLinksExist: false,
                link: '/Configuration/Partners'
            },
            {
                name: 'ODFIs',
                link: '/odfis',
                subLinksExist: true,
                ariaControls: false,
                ariaExpanded: false,
                sublinks: [
                    {
                        label: 'Financial Institution',
                        key: 'Financial Institution',
                        link: '/Configuration/ODFIs/FinancialInstitution'
                    },
                    {
                        label: 'Bank Expenses',
                        key: 'bank expenses',
                        link: '/Configuration/ODFIs/BankExpenses'
                    },
                    {
                        label: 'Expense Batches',
                        key: 'expense batches',
                        link: '/Configuration/ODFIs/ExpenseBatch'
                    },
                    {
                        label: 'Routing Numbers',
                        key: 'routing numbers',
                        link: '/Configuration/ODFIs/RoutingNumbers'
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
                        label: "Business Units",
                        key: "business units",
                        link: "/Configuration/BusinessUnits/BusinessUnits"
                    },
                    {
                        label: 'Support Contacts',
                        key: 'support contacts',
                        link: '/Configuration/BusinessUnits/SupportContacts'
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
                        link: '/Configuration/Profiles/APIProfiles'
                    },
                    {
                        label: 'Heartland Users',
                        key: 'heartland users',
                        link: '/Configuration/Profiles/HeartlandUsers'
                    },
                    {
                        label: 'External Users',
                        key: 'external users',
                        link: '/Configuration/Profiles/ExternalUsers'
                    },
                ]
            },
            {
                name: 'system',
                subLinksExist: false,
                link: '/Configuration/System'
            }
        ]
    },
     {
        primaryLink: 'Support',
        contentText: "Support",
        link: '/Support',
        isActive: false,
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
                        label: 'Consumers',
                        link: '/Support/Consumers/Consumers'
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
                        link: '/Support/ACHFiles/ACHEntryFinder'
                    },
                    {
                        label: 'ACH Files',
                        link: '/Support/ACHFiles/ACHFiles'
                    },
                    {
                        label: 'ACH Rejects',
                        link: '/Support/ACHFiles/ACHRejects'
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
                        label: 'Bulkwark',
                        link: '/Support/Bulwark/Bulwark'
                    },
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
        contentText: "Terminal",
        link: '/Terminal',
        isActive: false,
        subLinks: [
            {
                name: 'virtual terminal',
                subLinksExist: false,
                link: '/Terminal/VirtualTerminal'
            },
            {
                name: 'history log',
                subLinksExist: false,
                link: '/Terminal/HistoryLog'
            }
        ]
    },
    {
        primaryLink: 'Sagacity',
        contentText: "Sagacity",
        link: '/Sagacity',
        isActive: false,
        subLinks: [
            {
                name: 'management',
                link: '/Management',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Management',
                        link: '/Sagacity/Management/Management'
                    },
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
                        label: 'History',
                        link: '/Sagacity/History/History'
                    },
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
                        label: 'Statistics',
                        link: '/Sagacity/History/Statistics'
                    },
                    {
                        label: 'Failed API Calls',
                        link: '/Sagacity/History/FailedAPICalls'
                    },
                ]
            }
        ]
    }
]