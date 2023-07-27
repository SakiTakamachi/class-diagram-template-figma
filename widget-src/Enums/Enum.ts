export const SizeType = {
    S: 'S',
    M: 'M',
    L: 'L',
    XL: 'XL',
    XXL: 'XXL',
} as const;

export const AccessType = {
    PUBLIC: 'public',
    PROTECTED: 'protected',
    PRIVATE: 'private',
} as const;

export const AccessSymbolType = {
    PUBLIC: '+',
    PROTECTED: '#',
    PRIVATE: '-',
} as const;

export const TypeType = {
    CLASS: 'class',
    INTERFACE: 'interface',
    ABSTRACT_CLASS: 'abstract class',
} as const;

export const OrderEditType = {
    UP: 'up',
    DOWN: 'down',
} as const;
export type OrderEditType = typeof OrderEditType[keyof typeof OrderEditType];

export const EditModeType = {
    DEFAULT: 'default',
    MULTI_LINE: 'multi_line'
} as const;