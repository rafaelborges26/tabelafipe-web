import { useMemo } from 'react';
import { useCars } from '@/contexts/carsContext';
import { Container, Header } from "@/styles/result";
import { Subtitle, Title } from '@/styles';
import { Tag } from '@/components';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Resultado() {

  const { push } = useRouter()
  const { car } = useCars()

  const formatedCar = useMemo(() => {
    if(car){
      return `Preço ${car?.Marca} ${car.Modelo} ${car.AnoModelo}`
    }
  },[car])

  const handleBack = () => {
    push('/')
  }

  return (
    <>
    <Header>
      <Button variant="text" color='secondary' size='small' onClick={handleBack}>Voltar</Button>
    </Header>
    <Container>
      { car ? (
          <>
            <Title>{`Tabela fipe: ${formatedCar}`}</Title>
            <Tag title={car.Valor} type='success' />
            <Subtitle>Este é o preço de compra do veículo</Subtitle>
          </>
      ) : (
        <Title>Erro na tentativa de buscar o carro. Tente novamente mais tarde.</Title>
      )}
    </Container>
    </>
  )
}
