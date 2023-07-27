import { SizeType, TypeType } from 'classDiagram/Enums/Enum'

export const getMenu = (color:string, type: string, size: string): WidgetPropertyMenuItem[] => {
    return [
        {
            itemType: 'color-selector',
            propertyName: 'colors',
            tooltip: 'Color selector',
            selectedOption: color,
            options: [
            {option: '#d05c58', tooltip: 'Red'},
            {option: '#63a1da', tooltip: 'Blue'},
            {option: '#ee7f1a', tooltip: 'Orange'},
            {option: '#53a45d', tooltip: 'Green'},
            {option: '#555555', tooltip: 'Dark'},
            ],
        },
        {
            itemType: 'separator',
        },
        {
            itemType: 'action',
            propertyName: 'add property',
            tooltip: 'Add Property',
        },
        {
            itemType: 'separator',
        },
        {
            itemType: 'action',
            propertyName: 'add method',
            tooltip: 'Add Method',
        },
        {
            itemType: 'separator',
        },
        {
            itemType: 'dropdown',
            propertyName: 'type',
            tooltip: 'Type',
            selectedOption: type,
            options: [
            {option: `${TypeType.CLASS}`, label: "Class"},
            {option: `${TypeType.ABSTRACT_CLASS}`, label: "Abstract Class"},
            {option: `${TypeType.INTERFACE}`, label: "Interface"},
            ],
        },
        {
            itemType: 'separator',
        },
        {
            itemType: 'dropdown',
            propertyName: 'size',
            tooltip: 'Size',
            selectedOption: size,
            options: [
            {option: `${SizeType.S}`, label: "S"},
            {option: `${SizeType.M}`, label: "M"},
            {option: `${SizeType.L}`, label: "L"},
            {option: `${SizeType.XL}`, label: "XL"},
            {option: `${SizeType.XXL}`, label: "XXL"},
            ],
        },
    ]
}