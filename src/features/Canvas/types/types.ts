export const ActionTypeEnum = {
    DRAWING: 'drawing',
    ERASE: 'erase',
} as const

export type ActionType = typeof ActionTypeEnum[keyof typeof ActionTypeEnum] | null