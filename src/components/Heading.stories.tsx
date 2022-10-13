import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
    args:{
        children: 'Hello ',
        size: 'sm',
        asChild: false,
    }

} as Meta <HeadingProps>;

export const Default: StoryObj<HeadingProps> = {}
export const Big: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
    }
}
export const BigBig: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
    }
}
export const Custom: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with h1</h1>
        )
    },argTypes: {   
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