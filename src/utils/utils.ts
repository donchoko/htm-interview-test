
export type Property = { 
    id: number;
    propertyTypeId: number; 
    propertyType: boolean;
    name: string;
    description: string;
    code: string;
    baseRoom: string;
    gradeId: number;
    gradeSort: number;
    locationId: number;
    accomTypeId: number;
    viewId: number;
    kitchenId: number;
    liftDistanceId: number;
    villageCentreDistanceId: number;
    bathrooms: number;
    standardPax: number;
    maximumPax: number;
    soldSeparately: boolean;
    upgradedFacilities: boolean;
    amenities: { 
        aircon: boolean;
        appletv: boolean;
        btspeakers: boolean;
        cardkey: boolean;
        chromecast: boolean;
        fireplace: boolean;
        hdtv: boolean;
        jacuzzi: boolean;
        nespresso: boolean;
    };
    bedConfigurations: number[];
    status: string;
    floorArea: number;
    online: boolean;
    images: never[];
    mainImage: string
}
