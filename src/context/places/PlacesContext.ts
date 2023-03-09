import { createContext } from "react";
import { Feature } from "../../interfaces/places";
/**
 * Para muchas personas el contexto y el estado son iguales.
 * El estado es la informacion que almacenamos en memoria.
 * El contexto es lo que vamos a exponerle a los demas componentes.
 */

export interface PlacesContextProps{
  isLoading: boolean;
  userLocation?:[number,number];
  isLoadingPlaces: boolean;
  places:Feature[];
  //methods
  searchPlacesByTerm:(query:string) => Promise<Feature[]>
}

/**
 * El tipo generico sirve para poder darle flexibilidad al codigo y reutilizarlo. Es decir no es necesario decirle de
 * antemano el tipo que va a tener.
 * No lo inicializamos aca porque se inicializa en el provider
 */
export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);