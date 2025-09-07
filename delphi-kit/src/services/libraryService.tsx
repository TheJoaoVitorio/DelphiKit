import { dataLibrary } from "../data/library/index";

export default function libraryService() {
    return {
        getLibraryData() {
            return dataLibrary
        }
    }
}