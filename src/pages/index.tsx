import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Container, Subtitle, Title } from "@/styles";
import { Button } from '@mui/material';



export default function Home() {

  const [age, setAge] = useState('');


  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Title>Tabela Fipe</Title>
      <Subtitle>Consulte o valor de um veículo de forma gratuita</Subtitle>

      <Box>
      <FormControl sx={{ minWidth: 600 }} size="medium">
      <InputLabel id="demo-select-small-label">Marca</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ minWidth: 600 }} size="medium">
      <InputLabel id="demo-select-small-label">Marca</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <Button variant="outlined">Consultar preço</Button>
        </Box>
    </Container>
  )
}
