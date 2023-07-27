import { Property } from 'classDiagram/Models/Property'
import { Method } from 'classDiagram/Models/Method'
import { EditModeType, AccessType } from 'classDiagram/Enums/Enum'
import { extractAccess } from 'classDiagram/Settings/Access'

const multiLineEditTempToLines = (multiLineEditTemp: string): Property[]|Method[] => {
    const multiLines = multiLineEditTemp.split("\n")
    const multiLinesCountLastIndex = multiLines.length - 1

    const newLines:Property[]|Method[] = []

    multiLines.forEach((line: string, index: number) => {
        if (index === multiLinesCountLastIndex && line === '') {
            return
        }

        let access = extractAccess(line)
        let value = ''

        if (access) {
            value = line.trim().slice(access.length).trim()
        } else {
            access = AccessType.PUBLIC
            value = line.trim()
        }

        newLines.push({
            access: access,
            name: value,
        })
    })

    return newLines
}

const linesToMultiLineEditTemp = (lines: Property[]|Method[]): string => {
    let multiLineEditTemp = ''

    lines.forEach((line: Property|Method) => {
        multiLineEditTemp += line.access + ' ' + line.name + "\n"
    })

    return multiLineEditTemp
}

export const startMultiLineEdit = (
    lines: Property[]|Method[],
    setEditTmp: (newValue: string | ((currValue: string) => string)) => void,
    setEditMode: (newValue: string | ((currValue: string) => string)) => void,
) => {
    setEditTmp(linesToMultiLineEditTemp(lines))
    setEditMode(`${EditModeType.MULTI_LINE}`)
}

export const saveMultiLineEditTempToLines = (
    multiLineEditTemp: string,
    setLines:
        ((newValue: Property[] | ((currValue: Property[]) => Property[])) => void) | 
        ((newValue: Method[] | ((currValue: Method[]) => Method[])) => void),
    setEditTmp: (newValue: string | ((currValue: string) => string)) => void,
    setEditMode: (newValue: string | ((currValue: string) => string)) => void,
) => {
    setLines(multiLineEditTempToLines(multiLineEditTemp))
    setEditTmp('')
    setEditMode(`${EditModeType.DEFAULT}`)
}

export const cancelMultiLineEdit = (
    setEditTmp: (newValue: string | ((currValue: string) => string)) => void,
    setEditMode: (newValue: string | ((currValue: string) => string)) => void,
) => {
    setEditTmp('')
    setEditMode(`${EditModeType.DEFAULT}`)
}