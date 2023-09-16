const { widget } = figma
const { AutoLayout, Input, Text, SVG } = widget

import { fileIconSvgSrc } from 'classDiagram/Settings/Icon'
import { isInterface, isAbstractClass } from 'classDiagram/Utils/ClassType'

export const classNameBlock = (
    color: string,
    type: string,
    className: string,
    setClassName: (newValue: string | ((currValue: string) => string)) => void,
    classDescription: string,
    setClassDescription: (newValue: string | ((currValue: string) => string)) => void
) => {
    return (
        <AutoLayout
            verticalAlignItems={'center'}
            horizontalAlignItems={'center'}
            direction={'vertical'}
            padding={10}
            fill={color}
            stroke={color}
            width={'fill-parent'}
        >
            {/** Interface Label */}
            <AutoLayout
                verticalAlignItems={'start'}
                horizontalAlignItems={'start'}
                width={'fill-parent'}
                height={34}
                hidden={! isInterface(type)}
            >
                <Text
                    fontSize={20}
                    fill={'#fff'}
                    width={'hug-contents'}
                >
                    &lt;&lt; interface &gt;&gt;
                </Text>
            </AutoLayout>
            {/** Interface Label End */}

            <AutoLayout
                verticalAlignItems={'center'}
                horizontalAlignItems={'center'}
                width={'fill-parent'}
            >
                <SVG
                    src={fileIconSvgSrc}
                    width={28}
                    height={28}
                />

                <Input
                    value={className}
                    placeholder='Class name'
                    onTextEditEnd={(e) => {
                        setClassName(e.characters);
                    }}
                    fontSize={28}
                    width={'fill-parent'}
                    fill='#fff'
                    inputFrameProps={{
                        padding: {
                            vertical: 0,
                            horizontal: 10,
                        },
                        cornerRadius: {
                            topLeft: 8,
                            topRight: 8,
                            bottomLeft: 0,
                            bottomRight: 0,
                        }
                    }}
                    inputBehavior='wrap'
                    italic={isAbstractClass(type)}
                />
            </AutoLayout>

            {/** Description */}
            <AutoLayout
                verticalAlignItems={'center'}
                horizontalAlignItems={'center'}
                width={'fill-parent'}
                padding={{
                    top: 10,
                    bottom: 0,
                    left: 10,
                    right: 10,
                }}
            >
                <Input
                    value={classDescription}
                    placeholder='Description'
                    onTextEditEnd={(e) => {
                        setClassDescription(e.characters);
                    }}
                    fontSize={16}
                    width={'fill-parent'}
                    fill='#fff'
                    inputFrameProps={{
                        padding: {
                            vertical: 0,
                            horizontal: 10,
                        },
                        cornerRadius: {
                            topLeft: 8,
                            topRight: 8,
                            bottomLeft: 0,
                            bottomRight: 0,
                        }
                    }}
                    inputBehavior='wrap'
                />
            </AutoLayout>
            {/** Description End */}

            {/** Abstract Class Label */}
            <AutoLayout
                verticalAlignItems={'end'}
                horizontalAlignItems={'start'}
                width={'fill-parent'}
                height={34}
                hidden={! isAbstractClass(type)}
            >
                <Text
                    fontSize={20}
                    fill={'#fff'}
                    width={'hug-contents'}
                >
                    {'{'} abstract {'}'}
                </Text>
            </AutoLayout>
            {/** Abstract Class Label End */}
        </AutoLayout>
    )
}