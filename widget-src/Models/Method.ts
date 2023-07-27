import { OrderEditType } from 'classDiagram/Enums/Enum'

export interface Method {
    access: string,
    name: string,
}

export const createMethod = (
    methods: Method[],
    setMethods: (newValue: Method[] | ((currValue: Method[]) => Method[])) => void
) => {
    methods.push({
        access: 'public',
        name: '',
    })
    setMethods(methods)
}

export const updateMethod = (
    value: Method,
    index: number,
    methods: Method[],
    setMethods: (newValue: Method[] | ((currValue: Method[]) => Method[])) => void
) => {
    methods[index] = value
    setMethods(methods)
}

export const updateMethodsOrder = (
    fromIndex: number,
    orderEditType: OrderEditType,
    methods: Method[],
    setMethods: (newValue: Method[] | ((currValue: Method[]) => Method[])) => void
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

    if (methods[toIndex] === undefined) {
    return
    }

    let currentMethod = methods[fromIndex]
    let targetMethod = methods[toIndex]

    methods[fromIndex] = targetMethod
    methods[toIndex] = currentMethod

    setMethods(methods)
}

export const deleteMethod = (
    index: number,
    methods: Method[],
    setMethods: (newValue: Method[] | ((currValue: Method[]) => Method[])) => void
) => {
    methods.splice(index, 1)
    setMethods(methods)
}