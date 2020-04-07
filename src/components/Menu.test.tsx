import React from 'react'
import {render} from '@testing-library/react'
import Menu from './Menu'

test('renders without crashing', () => {
  const str = 'Test'
  const {baseElement} = render(<Menu selectedPage={str} />)
  expect(baseElement).toBeDefined()
})
