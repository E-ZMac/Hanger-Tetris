import { 
    Box,
    Paper,
    Button,
    Modal,
    Typography,
    Input,
} from '../lib/ui'
import { useState } from 'react'

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

const Hanger = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [dimension, setDimension] = useState<string>('');
    const [data, setData] = useState<string[]>([])

    const addToDo = (event) => {
        setDimension(event.setTask.value)
      }
    
      const SecondEvent = () => {
    
        localStorage.setItem('task', 'description')
        localStorage.removeItem('task')
    
        setData((prev) => {
    
            return [...prev, dimension]
        })
        
        setDimension('')
        }
    
        const deleteAll = () => {
            setData([])
        }

    return (
        <>
            <Box>
                <Paper sx={{}}>
                    <Button
                        sx={{ margin: '15px' }}
                        onClick={handleOpen}
                        aria-label='add-hanger-button'
                        >
                        Add Hanger
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
                        Input hanger dimensions.
                    </Typography>
                    <Input value={dimension} placeholder="Add item" onChange={addToDo}/>
                    <Button 
                        sx={{ mt: 2, marginRight: '8px' }}
                        variant='contained'
                        >
                        Edit Selected hanger
                    </Button>
                    <Button 
                        sx={{ mt: 2 }}
                        variant='contained'
                        aria-label="submit-button"
                        onClick={SecondEvent}
                        margin-left={5}
                        >
                        Submit
                    </Button>
                </Box>
          </Modal>
        </>
    )
}

export { Hanger }