export interface NavItems {
    navigation: {
        primaryLink: string;
        contentText: string;
        link: string;
        isActive: boolean;
        subLinks: ({
            name: string;
            link: string;
            subLinksExist: boolean;
            ariaControls?: boolean;
            ariaExpanded?: boolean;
            sublinks: {
                label: string;
                link: string;
            }[];
        } | {
            name: string;
            subLinksExist: boolean;
            link: string;
            sublinks?: undefined;
        })[];
    }[]
}