# Transforms

## Translate

| クラス | プロパティ |
|--------|-----------|
| `translate-x-<number>` | `translate: calc(var(--spacing) * <number>) 0` |
| `translate-x-px` | `translate: 1px 0` |
| `translate-x-full` | `translate: 100% 0` |
| `translate-x-1/2` | `translate: 50% 0` |
| `-translate-x-<number>` | 負の値 |
| `-translate-x-full` | `translate: -100% 0` |
| `translate-y-<number>` | `translate: 0 calc(var(--spacing) * <number>)` |
| `translate-y-px` | `translate: 0 1px` |
| `translate-y-full` | `translate: 0 100%` |
| `translate-y-1/2` | `translate: 0 50%` |
| `-translate-y-<number>` | 負の値 |
| `-translate-y-full` | `translate: 0 -100%` |
| `translate-<number>` | X・Y両方 |
| `translate-[<value>]` | 任意の値 |

## Rotate

| クラス | プロパティ |
|--------|-----------|
| `rotate-0` | `rotate: 0deg` |
| `rotate-1` | `rotate: 1deg` |
| `rotate-2` | `rotate: 2deg` |
| `rotate-3` | `rotate: 3deg` |
| `rotate-6` | `rotate: 6deg` |
| `rotate-12` | `rotate: 12deg` |
| `rotate-45` | `rotate: 45deg` |
| `rotate-90` | `rotate: 90deg` |
| `rotate-180` | `rotate: 180deg` |
| `-rotate-1` | `rotate: -1deg` |
| `-rotate-2` | `rotate: -2deg` |
| `-rotate-3` | `rotate: -3deg` |
| `-rotate-6` | `rotate: -6deg` |
| `-rotate-12` | `rotate: -12deg` |
| `-rotate-45` | `rotate: -45deg` |
| `-rotate-90` | `rotate: -90deg` |
| `-rotate-180` | `rotate: -180deg` |
| `rotate-[<value>]` | 任意の値 |

## 3D Rotate ⚡

| クラス | プロパティ |
|--------|-----------|
| `rotate-x-<number>` | `transform: rotateX(<number>deg)` |
| `rotate-y-<number>` | `transform: rotateY(<number>deg)` |
| `rotate-z-<number>` | `transform: rotateZ(<number>deg)` |
| `-rotate-x-<number>` | 負の値 |
| `-rotate-y-<number>` | 負の値 |
| `-rotate-z-<number>` | 負の値 |
| `rotate-x-[<value>]` | 任意の値 |

## Scale

| クラス | プロパティ |
|--------|-----------|
| `scale-0` | `scale: 0` |
| `scale-50` | `scale: 0.5` |
| `scale-75` | `scale: 0.75` |
| `scale-90` | `scale: 0.9` |
| `scale-95` | `scale: 0.95` |
| `scale-100` | `scale: 1` |
| `scale-105` | `scale: 1.05` |
| `scale-110` | `scale: 1.1` |
| `scale-125` | `scale: 1.25` |
| `scale-150` | `scale: 1.5` |
| `scale-x-<number>` | X軸スケール |
| `scale-y-<number>` | Y軸スケール |
| `scale-z-<number>` | Z軸スケール ⚡ |
| `scale-3d` | `transform-style: preserve-3d` ⚡ |
| `-scale-<number>` | 負の値（反転） |
| `scale-[<value>]` | 任意の値 |

## Skew

| クラス | プロパティ |
|--------|-----------|
| `skew-x-0` | `transform: skewX(0deg)` |
| `skew-x-1` | `transform: skewX(1deg)` |
| `skew-x-2` | `transform: skewX(2deg)` |
| `skew-x-3` | `transform: skewX(3deg)` |
| `skew-x-6` | `transform: skewX(6deg)` |
| `skew-x-12` | `transform: skewX(12deg)` |
| `-skew-x-1` | `transform: skewX(-1deg)` |
| `skew-y-0` | `transform: skewY(0deg)` |
| `skew-y-1` | `transform: skewY(1deg)` |
| `skew-y-2` | `transform: skewY(2deg)` |
| `skew-y-3` | `transform: skewY(3deg)` |
| `skew-y-6` | `transform: skewY(6deg)` |
| `skew-y-12` | `transform: skewY(12deg)` |
| `-skew-y-1` | `transform: skewY(-1deg)` |
| `skew-[<value>]` | 任意の値 |

## Transform Origin

| クラス | プロパティ |
|--------|-----------|
| `origin-center` | `transform-origin: center` |
| `origin-top` | `transform-origin: top` |
| `origin-top-right` | `transform-origin: top right` |
| `origin-right` | `transform-origin: right` |
| `origin-bottom-right` | `transform-origin: bottom right` |
| `origin-bottom` | `transform-origin: bottom` |
| `origin-bottom-left` | `transform-origin: bottom left` |
| `origin-left` | `transform-origin: left` |
| `origin-top-left` | `transform-origin: top left` |
| `origin-[<value>]` | 任意の値 |

## Transform Style ⚡

| クラス | プロパティ |
|--------|-----------|
| `transform-3d` | `transform-style: preserve-3d` |
| `transform-flat` | `transform-style: flat` |

## Perspective ⚡

| クラス | プロパティ |
|--------|-----------|
| `perspective-none` | `perspective: none` |
| `perspective-dramatic` | `perspective: 100px` |
| `perspective-near` | `perspective: 300px` |
| `perspective-normal` | `perspective: 500px` |
| `perspective-midrange` | `perspective: 800px` |
| `perspective-distant` | `perspective: 1200px` |
| `perspective-[<value>]` | 任意の値 |

## Perspective Origin ⚡

| クラス | プロパティ |
|--------|-----------|
| `perspective-origin-center` | `perspective-origin: center` |
| `perspective-origin-top` | `perspective-origin: top` |
| `perspective-origin-top-right` | `perspective-origin: top right` |
| `perspective-origin-right` | `perspective-origin: right` |
| `perspective-origin-bottom-right` | `perspective-origin: bottom right` |
| `perspective-origin-bottom` | `perspective-origin: bottom` |
| `perspective-origin-bottom-left` | `perspective-origin: bottom left` |
| `perspective-origin-left` | `perspective-origin: left` |
| `perspective-origin-top-left` | `perspective-origin: top left` |
| `perspective-origin-[<value>]` | 任意の値 |

## Backface Visibility ⚡

| クラス | プロパティ |
|--------|-----------|
| `backface-visible` | `backface-visibility: visible` |
| `backface-hidden` | `backface-visibility: hidden` |
