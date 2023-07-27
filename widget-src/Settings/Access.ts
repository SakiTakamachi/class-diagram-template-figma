import { AccessType, AccessSymbolType } from 'classDiagram/Enums/Enum'

export const getAccessSymbol = (access: string) => {
    switch (access) {
    case AccessType.PUBLIC:
        return AccessSymbolType.PUBLIC
    case AccessType.PROTECTED:
        return AccessSymbolType.PROTECTED
    case AccessType.PRIVATE:
        return AccessSymbolType.PRIVATE
    }

    return AccessSymbolType.PUBLIC
}

export const extractAccess = (value: string): string|false => {
    const lowerLine = value.trim().toLowerCase()

    if (lowerLine.indexOf(AccessType.PUBLIC) === 0 || lowerLine.indexOf(AccessSymbolType.PUBLIC) === 0) {
        return AccessType.PUBLIC
    } else if (lowerLine.indexOf(AccessType.PROTECTED) === 0 || lowerLine.indexOf(AccessSymbolType.PROTECTED) === 0) {
        return AccessType.PROTECTED
    } else if (lowerLine.indexOf(AccessType.PRIVATE) === 0 || lowerLine.indexOf(AccessSymbolType.PRIVATE) === 0) {
        return AccessType.PRIVATE
    }

    return false
}

export const getNextAccessValue = (access: string) => {
    switch (access) {
    case AccessType.PUBLIC:
        return AccessType.PROTECTED
    case AccessType.PROTECTED:
        return AccessType.PRIVATE
    case AccessType.PRIVATE:
        return AccessType.PUBLIC
    }

    return AccessType.PUBLIC
}