import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Container, Subtitle, Title } from "@/styles";
import { Button } from '@mui/material';
import { api } from '@/services/api';
import { useCars } from '@/contexts/carsContext';



export default function Home() {

  const { brands, getModels, models } = useCars()

  const [brandSelected, setBrandSelected] = useState('');
  const [modelSelected, setModelSelected] = useState('');

  const handleChangeBrand = (event: SelectChangeEvent) => {
    const idBrand = event.target.value
    setBrandSelected(idBrand);
    console.log(idBrand, 'event.target.value')
    getModels(idBrand)
  };

  const handleChangeModel = (event: SelectChangeEvent) => {
    const idModel = event.target.value
    setModelSelected(idModel);
    console.log(idModel, 'event.target.value')
    //getModels(idModel)
  };

  //useEffect(() => {
  //  const teste = api.get('carros/marcas/')
  //},[])
  console.log(models, 'models')

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
        value={brandSelected}
        label="Marca"
        onChange={handleChangeBrand}
      >
        { brands && brands?.map(brand => (
          <MenuItem key={brand.codigo} value={brand.codigo}>{brand.nome}</MenuItem>
        )) }
      </Select>
    </FormControl>
    <FormControl sx={{ minWidth: 600 }} size="medium">
      <InputLabel id="demo-select-small-label">Modelos</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={modelSelected}
        label="Modelos"
        onChange={handleChangeModel}
      >
        { models && models?.map(model => (
          <MenuItem key={model.codigo} value={model.codigo}>{model.nome}</MenuItem>
        )) }
      </Select>
    </FormControl>
    <Button variant="outlined">Consultar preço</Button>
        </Box>
    </Container>
  )
}
