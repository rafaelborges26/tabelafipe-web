import { api } from "@/services/api"
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react"

interface IModel {
    codigo: string
    nome: string
}

interface IBrand {
    codigo: string
    nome: string
}

interface IYear {
  codigo: string
  nome: string
}

interface ICar {
  TipoVeiculo: number
  Valor: string
  Marca: string
  Modelo: string
  AnoModelo: number
  Combustivel: string
  CodigoFipe: string
  MesReferencia: string
  SiglaCombustivel: string
}

type CarsContextData = {
    brands: IBrand[] | null
    getBrands: () => Promise<void>
    models: IModel[] | null
    getModels: (idBrand: string) => Promise<void>
    years: IYear[] | null
    getYears: (idBrand: string, idModel: string) => Promise<void>
    car: ICar | null
    getCar: (idBrand: string, idModel: string, idYear: string) => Promise<void>
  }

  type CarsProviderProps = {
    children: ReactNode
  }

  export const CarsContext = createContext({} as CarsContextData)

  export function CarsProvider({ children }: CarsProviderProps) {
    
    const [brands, setBrands] = useState<IBrand[] | null>(null)
    const [models, setModels] = useState<IModel[] | null>(null)
    const [years, setYears] = useState<IYear[] | null>(null)
    const [car, setCar] = useState<ICar | null>(null)

    const [isLoading, setisLoading] = useState(false)
    
    const getBrands = useCallback(async () => {
        const brandsResponse = await api.get('marcas')

        const brandsData = brandsResponse.data as IBrand[]
    
        if (brandsData) setBrands(brandsData)

      }, [])

      const getModels = useCallback(async (idBrand: string) => {
        const modelsResponse = await api.get(`marcas/${idBrand}/modelos`)

        const modelsData = modelsResponse.data.modelos as IModel[] 
    
        if (modelsData) setModels(modelsData)
      }, [])

      
      
      const getYears = useCallback(async (idBrand: string, idModel: string) => {
        const yearsResponse = await api.get(`marcas/${idBrand}/modelos/${idModel}/anos`)

        const yearsData = yearsResponse.data as IYear[] 
    
        if (yearsData) setYears(yearsData)
      }, [])

      
      const getCar = useCallback(async (idBrand: string, idModel: string, idYear: string) => {
        const carResponse = await api.get(`marcas/${idBrand}/modelos/${idModel}/anos/${idYear}`)

        const carData = carResponse.data as ICar 
    
        if (carData) setCar(carData)
      }, [])

      useEffect(() => {
        getBrands()
      },[getBrands])

      console.log(car, 'car')

      return (
        <CarsContext.Provider
          value={{
            brands,
            getBrands,
            getModels,
            models,
            years,
            getYears,
            car,
            getCar
          }}
        >
          {children}
        </CarsContext.Provider>
      )
    }

export function useCars() {
  return useContext(CarsContext)
}