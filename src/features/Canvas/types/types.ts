export const ActionTypeEnum = {
    DRAWING: 'drawing',
    ERASE: 'erase',
} as const

export type ActionType = typeof ActionTypeEnum[keyof typeof ActionTypeEnum] | null

export const BrushColors = ['#000', '#f00', '#00f'] as const
export type BrushColor = (typeof BrushColors)[number]