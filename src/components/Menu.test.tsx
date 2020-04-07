import React, {useState} from 'react'
import {render} from '@testing-library/react'
import Menu from './Menu'

test('renders without crashing', () => {
  const [selectedPage, setSelectedPage] = useState('')
  const {baseElement} = render(<Menu selectedPage={selectedPage} />)
  expect(baseElement).toBeDefined()
})
