const { widget } = figma
const { AutoLayout, Input } = widget

import { multiLineEditFieldColor } from 'classDiagram/Settings/Colors'

export const propertyMultiLineEditBlock = (
    color: string,
    propertiesEditTmp: string,
    setPropertiesEditTmp: (newValue: string | ((currValue: string) => string)) => void
) => {
    return (
        <AutoLayout
            verticalAlignItems={'center'}
            width={'fill-parent'}
            padding={2}
        >
            <Input
                value={propertiesEditTmp}
                placeholder='example) "private {free}" or "- {free}"'
                onTextEditEnd={(e) => {
                    setPropertiesEditTmp(e.characters)
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