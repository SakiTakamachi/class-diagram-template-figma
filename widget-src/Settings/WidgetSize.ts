import { SizeType } from 'classDiagram/Enums/Enum'

export const getSizeValue = (size: string) => {
    switch (size) {
    case SizeType.S:
        return 400
    case SizeType.M:
        return 600
    case SizeType.L:
        return 800
    case SizeType.XL:
        return 1000
    case SizeType.XXL:
        return 1200
    }

    return 600
}