import * as React from 'react'
import { Header } from '../../src/components/Header'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

afterEach(cleanup)

describe('Header', () => {

    it('renders home page', async () => {
        const { getByText } = render(<Header />)
        
        expect(getByText(/hanger tetris/i)).toBeInTheDocument()
    })
})