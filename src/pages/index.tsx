import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Container, Header, Subtitle, Title } from "@/styles";
import { Button } from '@mui/material';
import { useCars } from '@/contexts/carsContext';
import { useRouter } from 'next/router';
import { Box } from '@/components';

export default function Home() {

  const { push } = useRouter()
  const { brands, getModels, models, years, getYears, getCar } = useCars()

  const [brandSelected, setBrandSelected] = useState('');
  const [modelSelected, setModelSelected] = useState('');
  const [yearSelected, setYearSelected] = useState('');

  const handleChangeBrand = (event: SelectChangeEvent) => {
    const idBrand = event.target.value
    setBrandSelected(idBrand);
    console.log(idBrand, 'event.target.value')
    getModels(idBrand)
  };

  const handleChangeModel = (event: SelectChangeEvent) => {
    const idModel = event.target.value
    setModelSelected(idModel);
    getYears(brandSelected, idModel)
  };

  const handleChangeYear = (event: SelectChangeEvent) => {
    const idYear = event.target.value
    setYearSelected(idYear);
    console.log(yearSelected, 'event.target.value')
  };

  const handleGetCar = async () => {
    await getCar(brandSelected, modelSelected, yearSelected)
    push('/resultado')
  }

  return (
    <Container>
      <Header>
        <Title>Tabela Fipe</Title>
        <Subtitle>Consulte o valor de um veículo de forma gratuita</Subtitle>
      </Header>
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
    { modelSelected && (
      <FormControl sx={{ minWidth: 600 }} size="medium">
      <InputLabel id="demo-select-small-label">Ano</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={yearSelected}
        label="Ano"
        onChange={handleChangeYear}
      >
        { years && years?.map(year => (
          <MenuItem key={year.codigo} value={year.codigo}>{year.nome}</MenuItem>
        )) }
      </Select>
    </FormControl>
    ) }
    <Button 
      variant="outlined"
      disabled={!yearSelected || !modelSelected || !brandSelected}
      onClick={handleGetCar} 
    >
      Consultar preço
    </Button>
        </Box>
    </Container>
  )
}
