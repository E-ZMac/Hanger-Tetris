import * as React from 'react'
import { Aircraft } from '../../src/components/Aircraft'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

afterEach(cleanup)

describe('Aircraft list', () => {

    it('Has add aircraft button', async () => {
        const { getByRole } = render(<Aircraft />)

        expect(getByRole('button', { name: 'add-aircraft-button' })).toBeInTheDocument()
    })
    it('Opens Modal', async () => {
        const { getByRole, findByRole, getByText } = render(<Aircraft />)

        const button = await findByRole('button', { name: 'add-aircraft-button' });
        fireEvent.click(button)

        await waitFor(() => getByText(/Choose aircraft type and amount/i))

        expect(getByRole(/modal/)).toBeInTheDocument()

    })
})

describe('Modal functionality', () => {

    it('Has buttons', async () => {
        const { getByRole, findByRole, getByText } = render(<Aircraft />)

        const button = await findByRole('button', { name: 'add-aircraft-button' });
        fireEvent.click(button)

        await waitFor(() => getByText(/Choose aircraft type and amount/i))

        expect(getByRole(/modal/)).toBeInTheDocument()
        expect(getByRole('button', { name: 'add-button'})).toBeInTheDocument()
    })

    // it('Has dropdown for aircraft', async () => {
    //     const { getByRole, findByRole, getByText } = render(<Aircraft />)

    //     const button = await findByRole('button', { name: 'add-aircraft-button' });
    //     fireEvent.click(button)

    //     await waitFor(() => getByText(/Choose aircraft type and amount/i))
    //     expect(getByRole(/modal/)).toBeInTheDocument()

    //     const dropdown = await findByRole('button', {name: 'aircraft-type-checkdrop'})
    //     fireEvent.click(dropdown)
    //     expect(getByText(/f-22/i)).toBeInTheDocument()
    // })
})