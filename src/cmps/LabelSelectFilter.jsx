// LabelSelectFilter.jsx
import React from 'react';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, Checkbox, ListItemText } from '@mui/material';

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

function LabelSelectFilter({ labels, selectedLabels, onSelectLabels }) {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-checkbox-label">Filter By</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedLabels || []}
        onChange={onSelectLabels}
        input={<OutlinedInput label="Filter By" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {labels.map((label) => (
          <MenuItem key={label} value={label}>
            <Checkbox checked={selectedLabels.indexOf(label) > -1} />
            <ListItemText primary={label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LabelSelectFilter;
