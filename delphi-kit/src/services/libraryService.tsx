import { dataLibrary } from "../data/index";

export default function libraryService() {
    return {
        getLibraryData() {
            return dataLibrary
        }
    }
}