import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import { Tag } from './'
import { Themes } from '@/styles/themes'

describe('tag component', () => {
    it('should be able to render an tag component', () => {
        const { getByText } = render(<Tag title='Test' type='success' />)
        expect(getByText('Test')).toBeTruthy()
    })

    it('should be able to render a success tag component', async () => {
      const { getByText } = render(<Tag title='Test' type='success' />)
      expect(getByText('Test')).toHaveStyle(`background: ${Themes.colors.green600};`)
    })

    it('should be able to render a error tag component', async () => {
      const { getByText } = render(<Tag title='Test' type='error' />)
      expect(getByText('Test')).toHaveStyle(`background: ${Themes.colors.red300};`)
    })
})