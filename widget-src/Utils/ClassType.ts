import { TypeType } from 'classDiagram/Enums/Enum'

export const isInterface = (type: string) => {
    return type === TypeType.INTERFACE
}

export const isEnumeration = (type: string) => {
    return type === TypeType.ENUMERATION
}

export const isAbstractClass = (type: string) => {
    return type === TypeType.ABSTRACT_CLASS
}