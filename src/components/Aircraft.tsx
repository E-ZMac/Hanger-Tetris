import { 
    Box,
    Paper,
    Button,
    Modal,
    Typography,
    Input,
} from '../lib/ui'
import { useState } from 'react'
import { Dropdown } from './AircraftDropdown'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

const Aircraft = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selection, setSelection] = useState<string>('');
    const [data, setData] = useState<string[]>([])

    const addToDo = (event) => {
        setSelection(event.setItem.value)
    }
    
    const SecondEvent = () => {

    localStorage.setItem('task', 'description')
    localStorage.removeItem('task')

    setData((prev) => {

        return [...prev, selection]
    })
    
    setSelection('')
    }

    const deleteAll = () => {
        setData([])
    }
    

    return (
        <>
            <Box sx={{paddingBottom: '30px'}}>
                <Paper>
                    <Button
                        sx={{ margin: '15px' }}
                        onClick={handleOpen}
                        aria-label='add-aircraft-button'
                        >
                        Add New Aircraft
                    </Button>
                </Paper>
            </Box>
            <Modal
                role='modal'
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} justifyContent='fixed'>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        paddingBottom='20px'
                        >
                        Choose aircraft type and amount.
                    </Typography>
                    <Dropdown/>
                    {/* <Input value={task} placeholder="Add item" onChange={addToDo}/> */}
                    <Button
                        aria-label="add-button"
                        sx={{ mt: 2, marginRight: '8px' }}
                        variant="outlined"
                        onClick={SecondEvent}
                        margin-left={5}
                        >
                        Add
                    </Button>
                    <Button
                        aria-label='submit-button'
                        sx={{ mt: 2 }}
                        variant='contained'
                        >
                        Submit
                    </Button>
                </Box>
          </Modal>
        </>
    )
}

export { Aircraft }