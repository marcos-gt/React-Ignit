import { Text, TextProps } from "./Text";
import { Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    args:{
        children: 'Hello ',
        size: 'md',
        asChild: false,
    }

} as Meta <TextProps>;

export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
    }
}
export const Custom: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with p</p>
        )
    },
    argTypes: {   
        children: {
            table:{
                disable: true,
            }
        },
        asChild:{
            table: {
                disable: true,
            }
        }
    }
}