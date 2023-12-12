import { useContext } from "react";
import { ListaDeFavoritosContext } from "../listaDeFavoritos/context/ListaDeFavoritosContext";

export const useFavoritos = () => {
    const {listaDeFavoritos, agregarFavoritos, borrarFavoritos, esFavoritos} = 
    useContext(ListaDeFavoritosContext);

    return {
        listaDeFavoritos,
        agregarFavoritos,
        borrarFavoritos,
        esFavoritos
    }
}