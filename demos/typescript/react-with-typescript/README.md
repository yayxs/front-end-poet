## 背景

### 思路

整体思路是依着`TypeScript` 的基础上 然后构建一个 `React` 应用，这里参考 ts 以及 webpack

## 使用

## 文件的导入

```
import * as React from "react";
```
## 属性的传值

### old

```jsx
import React from 'react'
import PropTypes from 'prop-types'

export function StandardComponent({ children, title = 'Dr.' }) {
  return (
    <div>
      {title}: {children}
    </div>
  )
}

StandardComponent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}
```
### new

```jsx

import * as React from 'react'

export interface StandardComponentProps {
  title?: string
  children: React.ReactNode
}

export function StandardComponent({
  children,
  title = 'Dr.',
}: StandardComponentProps) {
  return (
    <div>
      {title}: {children}
    </div>
  )
}
```