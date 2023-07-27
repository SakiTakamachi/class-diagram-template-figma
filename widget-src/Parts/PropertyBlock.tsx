const { widget } = figma
const { AutoLayout, Text } = widget

import { Property } from 'classDiagram/Models/Property'
import { labelTextSize } from 'classDiagram/Settings/Sizes'
import { isMultiLineEditMode } from 'classDiagram/Utils/EditMode'
import { propertyLinesBlock } from 'classDiagram/Parts/PropertyLinesBlock'
import { propertyMultiLineEditBlock } from 'classDiagram/Parts/PropertyMultiLineEditBlock'
import { editToolBlock } from 'classDiagram/Parts/EditToolBlock'

export const propertyBlock = (
    color: string,
    propertiesEditMode: string,
    properties: Property[],
    propertiesEditTmp: string,
    setProperties: (newValue: Property[] | ((currValue: Property[]) => Property[])) => void,
    setPropertiesEditTmp: (newValue: string | ((currValue: string) => string)) => void,
    setPropertiesEditMode: (newValue: string | ((currValue: string) => string)) => void,
) => {
    const lineBlock = isMultiLineEditMode(propertiesEditMode)
        ? propertyMultiLineEditBlock(color, propertiesEditTmp, setPropertiesEditTmp)
        : propertyLinesBlock(properties, setProperties)

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
                >Properties</Text>
                {/** Label End */}

                {editToolBlock(
                    color,
                    propertiesEditMode,
                    properties,
                    propertiesEditTmp,
                    setProperties,
                    setPropertiesEditTmp,
                    setPropertiesEditMode
                )}
            </AutoLayout>
            {/** Label Line End */}

            {lineBlock}
        </AutoLayout>
    )
}