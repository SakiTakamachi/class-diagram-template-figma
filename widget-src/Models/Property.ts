import { OrderEditType } from 'classDiagram/Enums/Enum'

export interface Property {
    access: string,
    name: string,
}

export const createProperty = (
    properties: Property[],
    setProperties: (newValue: Property[] | ((currValue: Property[]) => Property[])) => void
) => {
    properties.push({
        access: 'private',
        name: '',
    })
    setProperties(properties)
}

export const updateProperty = (
    value: Property,
    index: number,
    properties: Property[],
    setProperties: (newValue: Property[] | ((currValue: Property[]) => Property[])) => void
) => {
    properties[index] = value
    setProperties(properties)
}

export const updatePropertiesOrder = (
    fromIndex: number,
    orderEditType: OrderEditType,
    properties: Property[],
    setProperties: (newValue: Property[] | ((currValue: Property[]) => Property[])) => void
) => {
    let toIndex = fromIndex

    switch (orderEditType) {
    case OrderEditType.UP:
        toIndex -= 1
        break;
    case OrderEditType.DOWN:
        toIndex += 1
        break;
    }

    if (properties[toIndex] === undefined) {
    return
    }

    let currentProperty = properties[fromIndex]
    let targetProperty = properties[toIndex]

    properties[fromIndex] = targetProperty
    properties[toIndex] = currentProperty

    setProperties(properties)
}

export const deleteProperty = (
    index: number,
    properties: Property[],
    setProperties: (newValue: Property[] | ((currValue: Property[]) => Property[])) => void
) => {
    properties.splice(index, 1)
    setProperties(properties)
}