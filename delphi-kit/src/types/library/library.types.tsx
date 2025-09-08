import { BaseType } from "../baseType";

export type LibraryType = BaseType & {
    description?: string;
    type: "library"
}