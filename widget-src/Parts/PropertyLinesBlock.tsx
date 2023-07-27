const { widget } = figma
const { AutoLayout, Input, Text, SVG } = widget

import { Property, updateProperty, updatePropertiesOrder, deleteProperty } from 'classDiagram/Models/Property'
import { closeButtonIconSvgSrc, upButtonIconSvgSrc, downButtonIconSvgSrc } from 'classDiagram/Settings/Icon'
import { accessSymbolSize, accessSymbolWrapSize, controlButtonSize, controlButtonMargin } from 'classDiagram/Settings/Sizes'
import { getAccessSymbol, getNextAccessValue } from 'classDiagram/Settings/Access'
import { OrderEditType } from 'classDiagram/Enums/Enum'

export const propertyLinesBlock = (
    properties: Property[],
    setProperties: (newValue: Property[] | ((currValue: Property[]) => Property[])) => void
) => {
    const lastLoop = properties.length === 0 ? 0 : properties.length - 1

    const lines = properties.map((property, index) => {
        return (
            <AutoLayout
                verticalAlignItems={'center'}
                horizontalAlignItems={'center'}
                padding={5}
                width={'fill-parent'}
                key={index}
            >
                {/** Access Symbol */}
                <AutoLayout
                    verticalAlignItems={'center'}
                    horizontalAlignItems={'center'}
                    width={accessSymbolWrapSize}
                    height={accessSymbolWrapSize}
                    onClick={() => {
                        updateProperty({
                            access: getNextAccessValue(property.access),
                            name: property.name
                        }, index, properties, setProperties)
                    }}
                    opacity={1}
                    hoverStyle={{
                        opacity: .5
                    }}
                >
                    <Text
                        fontSize={accessSymbolSize}
                        verticalAlignText={'center'}
                        horizontalAlignText={'center'}
                        fill={'#444'}
                        width={'hug-contents'}
                    >{getAccessSymbol(property.access)}</Text>
                </AutoLayout>
                {/** Access Symbol End */}

                {/** Input */}
                <AutoLayout
                    verticalAlignItems={'center'}
                    width={'fill-parent'}
                    padding={2}
                >
                    <Input
                        value={property.name}
                        placeholder='Property Name'
                        onTextEditEnd={(e) => {
                            updateProperty({
                                access: property.access,
                                name: e.characters
                            }, index, properties, setProperties)
                        }}
                        fontSize={20}
                        width={'fill-parent'}
                        fill='#333'
                        inputBehavior='wrap'
                    />
                </AutoLayout>
                {/** Input End */}

                {/** Control Buttons */}
                <AutoLayout
                    verticalAlignItems={'center'}
                    width={controlButtonSize}
                    onClick={() => {
                        updatePropertiesOrder(index, OrderEditType.UP, properties, setProperties)
                    }}
                    opacity={index === 0 ? .3 : 1}
                    hoverStyle={{
                        opacity: .3
                    }}
                >
                    <SVG
                        src={upButtonIconSvgSrc}
                        width={controlButtonSize}
                        height={controlButtonSize}
                    />
                </AutoLayout>
                <AutoLayout
                    width={controlButtonMargin}
                    height={1}
                ></AutoLayout>
                <AutoLayout
                    verticalAlignItems={'center'}
                    width={controlButtonSize}
                    onClick={() => {
                        updatePropertiesOrder(index, OrderEditType.DOWN, properties, setProperties)
                    }}
                    opacity={index === lastLoop ? .3 : 1}
                    hoverStyle={{
                        opacity: .3
                    }}
                >
                    <SVG
                        src={downButtonIconSvgSrc}
                        width={controlButtonSize}
                        height={controlButtonSize}
                    />
                </AutoLayout>
                <AutoLayout
                    width={controlButtonMargin}
                    height={1}
                ></AutoLayout>
                <AutoLayout
                    verticalAlignItems={'center'}
                    width={controlButtonSize}
                    onClick={() => {
                        deleteProperty(index, properties, setProperties)
                    }}
                    opacity={1}
                    hoverStyle={{
                        opacity: .3
                    }}
                >
                    <SVG
                        src={closeButtonIconSvgSrc}
                        width={controlButtonSize}
                        height={controlButtonSize}
                    />
                </AutoLayout>
                {/** Control Buttons End */}
            </AutoLayout>
        )
    })

    return lines
}