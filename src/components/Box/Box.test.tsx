import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import { Box } from './'

describe('Box component', () => {
    it('should be able to render an box component', () => {
        const { getByText } = render(<Box>Teste</Box>)
        expect(getByText('Teste')).toBeTruthy()
    })
})