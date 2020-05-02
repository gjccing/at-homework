Basic:

```jsx
import React from 'react'
import moment from 'moment'

const [currentWeekOfYear, setCurrentWeekOfYear] = React.useState(moment().weeks())
;<WeekCalendar
  currentWeekOfYear={currentWeekOfYear}
  renderCell={(date) => 'something happen'}
  onPageChange={(week) => setCurrentWeekOfYear(week)}
/>
```

Loading:

```jsx
import React from 'react'
import moment from 'moment'

const [loading, setLoading] = React.useState(false)
const [currentWeekOfYear, setCurrentWeekOfYear] = React.useState(moment().weeks())
;<WeekCalendar
  loading={loading}
  currentWeekOfYear={currentWeekOfYear}
  renderCell={(date) => 'something happen'}
  onPageChange={(week) => {
    setLoading(true)
    setTimeout(() => {
      setCurrentWeekOfYear(week)
      setLoading(false)
    }, 2000)
  }}
/>
```

locale:

```jsx
import React from 'react'
import moment from 'moment'

const [currentWeekOfYear, setCurrentWeekOfYear] = React.useState(moment().weeks())
;<WeekCalendar
  lang="zh-tw"
  currentWeekOfYear={currentWeekOfYear}
  renderCell={(date) => 'something happen'}
  onPageChange={(week) => setCurrentWeekOfYear(week)}
/>
```