import { useEffect, useState } from 'react';
import { Container } from "@/styles/result";
import { Title } from '@/styles';
import { Tag } from '@/components/Tag';

export default function Result() {

  const [age, setAge] = useState('');

  //useEffect(() => {
  //  const teste = api.get('carros/marcas/')
  //},[])

  return (
    <Container>
      <Title>Tabela fipe: Preço Chevrolet Cruze 2019</Title>
      <Tag></Tag>
    </Container>
  )
}
