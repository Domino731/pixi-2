import {MAP_LOCATION_GROUP, MAP_LOCATION_TYPE} from "./Map.const";

export type MapLocationItem = {
    group: MAP_LOCATION_GROUP,
    type: MAP_LOCATION_TYPE,
    name: string;
}