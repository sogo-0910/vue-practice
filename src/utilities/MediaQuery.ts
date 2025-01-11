/**
 * ブレイクポイント (MediaQueryListで参照されるメジャーブレイクポイント)
 */
export const BREAK_POINT = 768

/**
 * matchMediaオブジェクト
 */
export const MQL = window.matchMedia(`(min-width:${BREAK_POINT}px)`)
