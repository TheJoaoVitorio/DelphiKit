import { dataLibrary } from "../data/library/index";
import { dataFrameworks } from "../data/frameworks/index";

const allItems = [...dataLibrary, ...dataFrameworks];

function getItemByIdAndType(id: number, type: string | undefined) {
    if (!type) return undefined;
    
    return allItems.find((item) => item.id === id && item.type === type);
}

export function itemService(){
    return {
        getItemByIdAndType
    }
}