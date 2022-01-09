import { IconKey, Key } from "../components/Key.js";

export default {
    layouts: {
        'ABC': [
            ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'], 
            ['Layout:123', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Space', 'Backspace']
        ],
        '123': [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            ['Layout:ABC', 'Space', 'Backspace']
        ]
    },
    styling: {
        align: 'center',
        horizontalSpacing: 15,
        verticalSpacing: 20,
    },
    buttonTypes: {
        default: {
            type: Key,
        },
        Layout: {
            type: Key, w: 110,
        },
        Backspace: {
            type: IconKey, icon: '/images/backspace.png'
        },
        Space: {
            type: IconKey, w: 110, icon: '/images/space.png',
        }
    }
};