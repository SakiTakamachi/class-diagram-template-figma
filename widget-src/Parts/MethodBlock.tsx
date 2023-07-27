const { widget } = figma
const { AutoLayout, Text } = widget

import { Method } from 'classDiagram/Models/Method'
import { labelTextSize } from 'classDiagram/Settings/Sizes'
import { isMultiLineEditMode } from 'classDiagram/Utils/EditMode'
import { methodLinesBlock } from 'classDiagram/Parts/MethodLinesBlock'
import { methodMultiLineEditBlock } from 'classDiagram/Parts/MethodMultiLineEditBlock'
import { editToolBlock } from 'classDiagram/Parts/EditToolBlock'

export const methodBlock = (
    color: string,
    methodsEditMode: string,
    methods: Method[],
    methodsEditTmp: string,
    setMethods: (newValue: Method[] | ((currValue: Method[]) => Method[])) => void,
    setMethodsEditTmp: (newValue: string | ((currValue: string) => string)) => void,
    setMethodsEditMode: (newValue: string | ((currValue: string) => string)) => void,
) => {
    const lineBlock = isMultiLineEditMode(methodsEditMode)
        ? methodMultiLineEditBlock(color, methodsEditTmp, setMethodsEditTmp)
        : methodLinesBlock(methods, setMethods)

    return (
        <AutoLayout
            verticalAlignItems={'center'}
            direction={'vertical'}
            spacing={8}
            padding={20}
            fill={'#fff'}
            width={'fill-parent'}
        >
            {/** Label Line */}
            <AutoLayout
                verticalAlignItems={'center'}
                direction={'horizontal'}
                spacing={8}
                padding={0}
                fill={'#fff'}
                width={'fill-parent'}
            >
                {/** Label */}
                <Text
                    fontSize={labelTextSize}
                    fill={'#999'}
                    width={'hug-contents'}
                >Methods</Text>
                {/** Label End */}

                {editToolBlock(
                    color,
                    methodsEditMode,
                    methods,
                    methodsEditTmp,
                    setMethods,
                    setMethodsEditTmp,
                    setMethodsEditMode
                )}
            </AutoLayout>
            {/** Label Line End */}

            {lineBlock}
        </AutoLayout>
    )
}