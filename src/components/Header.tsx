import {
    Typography,
    Box,
} from '../lib/ui'


const Header = () => {


    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '30px'
            }}>
                <Typography variant='h3'>Hanger Tetris</Typography>
            </Box>
        </>
    )
}

export { Header }