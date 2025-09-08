import { BaseType } from "../baseType"

export type FrameworkType = BaseType & {
    description: string,
    type: "framework"
}