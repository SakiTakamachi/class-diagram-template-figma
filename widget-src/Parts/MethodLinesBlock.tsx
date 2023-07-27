const { widget } = figma
const { AutoLayout, Input, Text, SVG } = widget

import { Method, updateMethod, updateMethodsOrder, deleteMethod } from 'classDiagram/Models/Method'
import { closeButtonIconSvgSrc, upButtonIconSvgSrc, downButtonIconSvgSrc } from 'classDiagram/Settings/Icon'
import { accessSymbolSize, accessSymbolWrapSize, controlButtonSize, controlButtonMargin } from 'classDiagram/Settings/Sizes'
import { getAccessSymbol, getNextAccessValue } from 'classDiagram/Settings/Access'
import { OrderEditType } from 'classDiagram/Enums/Enum'

export const methodLinesBlock = (
    methods: Method[],
    setMethods: (newValue: Method[] | ((currValue: Method[]) => Method[])) => void
) => {
    const lastLoop = methods.length === 0 ? 0 : methods.length - 1

    const lines = methods.map((method, index) => {
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
                        updateMethod({
                            access: getNextAccessValue(method.access),
                            name: method.name
                        }, index, methods, setMethods)
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
                    >{getAccessSymbol(method.access)}</Text>
                </AutoLayout>
                {/** Access Symbol End */}

                {/** Input */}
                <AutoLayout
                    verticalAlignItems={'center'}
                    width={'fill-parent'}
                    padding={2}
                >
                    <Input
                        value={method.name}
                        placeholder='Method Name'
                        onTextEditEnd={(e) => {
                            updateMethod({
                                access: method.access,
                                name: e.characters
                            }, index, methods, setMethods)
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
                        updateMethodsOrder(index, OrderEditType.UP, methods, setMethods)
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
                        updateMethodsOrder(index, OrderEditType.DOWN, methods, setMethods)
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
                        deleteMethod(index, methods, setMethods)
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