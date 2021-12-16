import { useState } from 'react'
import {
    OutlinedInput,
    InputLabel,
    MenuItem,
    FormControl,
    ListItemText,
    Checkbox,
    } from '../lib/ui'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const aircraft = [
  'F-22',
  'C-17',
  'KC-135',
];

const Dropdown = () => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Click for dropdown</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          >
          {aircraft.map((aircraft) => (
            <MenuItem key={aircraft} value={aircraft}>
              <Checkbox checked={personName.indexOf(aircraft) > -1} />
              <ListItemText primary={aircraft} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export { Dropdown }