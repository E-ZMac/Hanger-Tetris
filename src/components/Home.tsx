import {
    Typography,
    Box,
} from '../lib/ui'
import { Hanger } from '../components/Hanger'
import { Aircraft } from '../components/Aircraft'



const Home = () => {

    return (
        <Box>
            <Aircraft />
            <Hanger />
        </Box>
    )
}

export { Home }