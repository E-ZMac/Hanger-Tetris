import * as React from 'react'
import { Hanger } from '../../src/components/Hanger'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

afterEach(cleanup)

describe('Hanger list', () => {

    it('Has add hanger button', async () => {
        const { getByRole } = render(<Hanger />)

        expect(getByRole('button', {name: 'add-hanger-button'})).toBeInTheDocument()
    })

    it('Modal functionality', async () => {
        const { getByRole, findByRole, getByText } = render(<Hanger />)

        const button = await findByRole('button', { name: 'add-hanger-button' });
        fireEvent.click(button)

        await waitFor(() => getByText(/Choose hanger dimension/i))

        expect(getByRole(/modal/)).toBeInTheDocument()
    })
})

// describe('Using the Modal', async () => {

// })