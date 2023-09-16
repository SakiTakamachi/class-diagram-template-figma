// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Line } = widget

import { SizeType, TypeType, EditModeType } from 'classDiagram/Enums/Enum'
import { getSizeValue } from 'classDiagram/Settings/WidgetSize'
import { Property, createProperty } from 'classDiagram/Models/Property'
import { Method, createMethod } from 'classDiagram/Models/Method'
import { getMenu } from 'classDiagram/Utils/Menu'
import { classNameBlock } from 'classDiagram/Parts/ClassNameBlock'
import { propertyBlock } from 'classDiagram/Parts/PropertyBlock'
import { methodBlock } from 'classDiagram/Parts/MethodBlock'

function ClassDiagram() {
    const [color, setColor] = useSyncedState('theme', '#555555')
    const [className, setClassName] = useSyncedState('className', '')
    const [classDescription, setClassDescription] = useSyncedState('classDescription', '')

    const [size, setSize] = useSyncedState('size', `${SizeType.M}`)
    const [type, setType] = useSyncedState('type', `${TypeType.CLASS}`)

    const [properties, setProperties] = useSyncedState<Property[]>('properties', [])
    const [propertiesEditTmp, setPropertiesEditTmp] = useSyncedState<string>('propertiesEditTmp', '')
    const [propertiesEditMode, setPropertiesEditMode] = useSyncedState<string>('propertiesEditMode', `${EditModeType.DEFAULT}`)

    const [methods, setMethods] = useSyncedState<Method[]>('methods', [])
    const [methodsEditTmp, setMethodsEditTmp] = useSyncedState<string>('methodsEditTmp', '')
    const [methodsEditMode, setMethodsEditMode] = useSyncedState<string>('methodsEditMode', `${EditModeType.DEFAULT}`)

    usePropertyMenu(
        getMenu(color, type, size),
        ({propertyName, propertyValue}) => {
            switch (propertyName) {
                case 'colors':
                    setColor(`${propertyValue}`)
                    break
                case 'add property':
                    createProperty(properties, setProperties)
                    break
                case 'add method':
                    createMethod(methods, setMethods)
                    break
                case 'type':
                    setType(`${propertyValue}`)
                    break
                case 'size':
                    setSize(`${propertyValue}`)
                    break
            }
        },
    )

    return (
        <AutoLayout
            verticalAlignItems={'center'}
            cornerRadius={8}
            fill={'#FFFFFF'}
            stroke={color}
            direction={'vertical'}
            width={getSizeValue(size)}
        >

            {classNameBlock(color, type, className, setClassName, classDescription, setClassDescription)}

            {propertyBlock(
                color,
                propertiesEditMode,
                properties,
                propertiesEditTmp,
                setProperties,
                setPropertiesEditTmp,
                setPropertiesEditMode
            )}

            <Line
                length={'fill-parent'}
                stroke={color}
            />

            {methodBlock(
                color,
                methodsEditMode,
                methods,
                methodsEditTmp,
                setMethods,
                setMethodsEditTmp,
                setMethodsEditMode
            )}
        </AutoLayout>
    )
}

widget.register(ClassDiagram)
