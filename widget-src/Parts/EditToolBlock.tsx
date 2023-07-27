const { widget } = figma
const { AutoLayout, Text } = widget

import { Property } from 'classDiagram/Models/Property'
import { Method } from 'classDiagram/Models/Method'
import { buttonTextSize } from 'classDiagram/Settings/Sizes'
import { isMultiLineEditMode } from 'classDiagram/Utils/EditMode'
import { startMultiLineEdit, cancelMultiLineEdit, saveMultiLineEditTempToLines } from 'classDiagram/Models/MultiLineEdit'

export const editToolBlock = (
    color: string,
    editMode: string,
    lines: Property[]|Method[],
    multiLineEditTemp: string,
    setLines:
        ((newValue: Property[] | ((currValue: Property[]) => Property[])) => void) | 
        ((newValue: Method[] | ((currValue: Method[]) => Method[])) => void),
    setEditTmp: (newValue: string | ((currValue: string) => string)) => void,
    setEditMode: (newValue: string | ((currValue: string) => string)) => void,
) => {
    if (isMultiLineEditMode(editMode)) {
        return (
            <AutoLayout
                verticalAlignItems={'center'}
                direction={'horizontal'}
                spacing={10}
                padding={0}
                width={'hug-contents'}
            >
                <AutoLayout
                    verticalAlignItems={'center'}
                    direction={'horizontal'}
                    spacing={8}
                    padding={5}
                    fill={color}
                    width={'hug-contents'}
                    cornerRadius={5}
                    onClick={() => {
                        saveMultiLineEditTempToLines(
                            multiLineEditTemp,
                            setLines,
                            setEditTmp,
                            setEditMode
                        )
                    }}
                    opacity={1}
                    hoverStyle={{
                        opacity: .5
                    }}
                >
                    <Text
                        fontSize={buttonTextSize}
                        fill={'#fff'}
                        width={'hug-contents'}
                    >Save</Text>
                </AutoLayout>

                <AutoLayout
                    verticalAlignItems={'center'}
                    direction={'horizontal'}
                    spacing={8}
                    padding={5}
                    fill={'#aaa'}
                    width={'hug-contents'}
                    cornerRadius={5}
                    onClick={() => {
                        cancelMultiLineEdit(setEditTmp, setEditMode)
                    }}
                    opacity={1}
                    hoverStyle={{
                        opacity: .5
                    }}
                >
                    <Text
                        fontSize={buttonTextSize}
                        fill={'#fff'}
                        width={'hug-contents'}
                    >Cancel</Text>
                </AutoLayout>
            </AutoLayout>
        )
    } else {
        return (
            <AutoLayout
                verticalAlignItems={'center'}
                direction={'horizontal'}
                spacing={8}
                padding={5}
                fill={color}
                width={'hug-contents'}
                cornerRadius={5}
                onClick={() => {
                    startMultiLineEdit(
                        lines,
                        setEditTmp,
                        setEditMode
                    )
                }}
                opacity={1}
                hoverStyle={{
                    opacity: .5
                }}
            >
                <Text
                    fontSize={buttonTextSize}
                    fill={'#fff'}
                    width={'hug-contents'}
                >Edit MultiLine</Text>
            </AutoLayout>
        )
    }
}