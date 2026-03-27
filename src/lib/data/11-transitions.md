# Transitions & Animation

## Transition Property

| クラス                 | プロパティ                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transition`           | `transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` |
| `transition-all`       | 全プロパティにトランジション                                                                                                                                                                                                                     |
| `transition-colors`    | `color, background-color, border-color, text-decoration-color, fill, stroke` のみ                                                                                                                                                                |
| `transition-opacity`   | `opacity` のみ                                                                                                                                                                                                                                   |
| `transition-shadow`    | `box-shadow` のみ                                                                                                                                                                                                                                |
| `transition-transform` | `transform` のみ                                                                                                                                                                                                                                 |
| `transition-none`      | トランジションなし                                                                                                                                                                                                                               |
| `transition-[<value>]` | 任意の値                                                                                                                                                                                                                                         |

## Transition Duration

| クラス               | プロパティ                    |
| -------------------- | ----------------------------- |
| `duration-0`         | `transition-duration: 0s`     |
| `duration-75`        | `transition-duration: 75ms`   |
| `duration-100`       | `transition-duration: 100ms`  |
| `duration-150`       | `transition-duration: 150ms`  |
| `duration-200`       | `transition-duration: 200ms`  |
| `duration-300`       | `transition-duration: 300ms`  |
| `duration-500`       | `transition-duration: 500ms`  |
| `duration-700`       | `transition-duration: 700ms`  |
| `duration-1000`      | `transition-duration: 1000ms` |
| `duration-[<value>]` | 任意の値                      |

## Transition Timing Function

| クラス           | プロパティ                                                 |
| ---------------- | ---------------------------------------------------------- |
| `ease-linear`    | `transition-timing-function: linear`                       |
| `ease-in`        | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1)`   |
| `ease-out`       | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1)`   |
| `ease-in-out`    | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` |
| `ease-[<value>]` | 任意のタイミング関数                                       |

## Transition Delay

| クラス            | プロパティ                 |
| ----------------- | -------------------------- |
| `delay-0`         | `transition-delay: 0s`     |
| `delay-75`        | `transition-delay: 75ms`   |
| `delay-100`       | `transition-delay: 100ms`  |
| `delay-150`       | `transition-delay: 150ms`  |
| `delay-200`       | `transition-delay: 200ms`  |
| `delay-300`       | `transition-delay: 300ms`  |
| `delay-500`       | `transition-delay: 500ms`  |
| `delay-700`       | `transition-delay: 700ms`  |
| `delay-1000`      | `transition-delay: 1000ms` |
| `delay-[<value>]` | 任意の値                   |

## Animation

| クラス              | プロパティ                            |
| ------------------- | ------------------------------------- |
| `animate-none`      | `animation: none`                     |
| `animate-spin`      | 360度回転アニメーション (1秒、線形)   |
| `animate-ping`      | 外側にフェードアウトしながら拡大      |
| `animate-pulse`     | フェードイン/フェードアウトを繰り返す |
| `animate-bounce`    | 上下にバウンス                        |
| `animate-[<value>]` | 任意のアニメーション                  |

## @starting-style ⚡

> v4の新機能。要素が最初に表示される際のトランジション初期状態を定義。
> `starting:opacity-0 starting:translate-y-4` のように使用。

| クラス               | 説明                                    |
| -------------------- | --------------------------------------- |
| `starting:<utility>` | 要素がDOMに追加された直後の初期スタイル |
