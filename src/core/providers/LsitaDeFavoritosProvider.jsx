import React, { useEffect, useState } from 'react'
import { ListaDeFavoritosContext } from '../listaDeFavoritos/context/ListaDeFavoritosContext'
import { AppStorage } from '../base/appStorage';


const LsitaDeFavoritosProvider = ({children}) => {
    const FAV_KEY = 'ListaFavoritos';
    //lista de favoritos
    const [listaDeFavoritos, setListaDeFavoritos] = useState([null]);

    //funciones
    const agregarFavoritos = async (fav) => {
        const newFavs = [...listaDeFavoritos, fav];
        setListaDeFavoritos(newFavs);
        await AppStorage.guardar(FAV_KEY, newFavs);
    }
    const borrarFavoritos = (show) => {
        const newFavs = listaDeFavoritos.filter((fav) => fav.id !== show.id);
        setListaDeFavoritos(newFavs);
        AppStorage.guardar(FAV_KEY, newFavs);
    }
    const esFavoritos = (show) => {
        return listaDeFavoritos.some((fav) => fav.id === show.id);        
    }        
    
    useEffect(() => {
        const initListaDeFavoritos = async () => {
            const results = await AppStorage.obtener("ListaFavoritos");
            if(!results) return;
            setListaDeFavoritos(results);            
        };
        initListaDeFavoritos();
    }, [])
    
    return (
        <ListaDeFavoritosContext.Provider 
            value={{listaDeFavoritos,agregarFavoritos,borrarFavoritos,esFavoritos}}>
            {children}
        </ListaDeFavoritosContext.Provider>
    )
}

export default LsitaDeFavoritosProvider