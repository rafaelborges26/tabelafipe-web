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

type CarsContextData = {
    brands: IBrand[] | null
    getBrands: () => Promise<void>
    models: IModel[] | null
    getModels: (id: string) => Promise<void>
  }

  type CarsProviderProps = {
    children: ReactNode
  }

  export const CarsContext = createContext({} as CarsContextData)

  export function CarsProvider({ children }: CarsProviderProps) {
    
    const [brands, setBrands] = useState<IBrand[] | null>(null)
    const [models, setModels] = useState<IModel[] | null>(null)

    const [isLoading, setisLoading] = useState(false)
  
    
    const getBrands = useCallback(async () => {
        const brandsResponse = await api.get('carros/marcas')

        const brandsData = brandsResponse.data as IBrand[]
    
        if (brandsData) setBrands(brandsData)

      }, [])

      const getModels = useCallback(async (idBrand: string) => {
        const modelsResponse = await api.get(`carros/marcas/${idBrand}/modelos`)

        const modelsData = modelsResponse.data.modelos as IModel[] 
    
        if (modelsData) setModels(modelsData)
      }, [])

      useEffect(() => {
        getBrands()
      },[getBrands])
      console.log(models, 'models')

      return (
        <CarsContext.Provider
          value={{
            brands,
            getBrands,
            getModels,
            models,
          }}
        >
          {children}
        </CarsContext.Provider>
      )
    }

export function useCars() {
  return useContext(CarsContext)
}