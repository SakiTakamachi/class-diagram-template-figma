const { widget } = figma
const { AutoLayout, Input } = widget

import { multiLineEditFieldColor } from 'classDiagram/Settings/Colors'

export const methodMultiLineEditBlock = (
    color: string,
    methodsEditTmp: string,
    setMethodsEditTmp: (newValue: string | ((currValue: string) => string)) => void
) => {
    return (
        <AutoLayout
            verticalAlignItems={'center'}
            width={'fill-parent'}
            padding={2}
        >
            <Input
                value={methodsEditTmp}
                placeholder='example) "private {free}" or "- {free}"'
                onTextEditEnd={(e) => {
                    setMethodsEditTmp(e.characters)
                }}
                fontSize={18}
                lineHeight={24}
                width={'fill-parent'}
                fill='#333'
                inputBehavior='multiline'
                inputFrameProps={{
                    fill: multiLineEditFieldColor,
                    padding: 10,
                    stroke: color
                }}
            />
        </AutoLayout>
    )
}