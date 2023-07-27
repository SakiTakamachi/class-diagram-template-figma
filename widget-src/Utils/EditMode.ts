import { EditModeType } from 'classDiagram/Enums/Enum'

export const isDefaultMode = (mode: string) => {
    return mode === EditModeType.DEFAULT
}

export const isMultiLineEditMode = (mode: string) => {
    return mode === EditModeType.MULTI_LINE
}