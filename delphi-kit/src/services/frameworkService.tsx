import { dataFrameworks } from "../data/frameworks/index";

export default function frameworkService() {
    return {
        getFrameworksData() {
            return dataFrameworks
        }
    }
}