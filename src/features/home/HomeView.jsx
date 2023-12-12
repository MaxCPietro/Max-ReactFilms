import React from 'react'
import { useAuth } from '../../core/hooks/useAuth'
import AppButton from '../../core/ReusableComponets/Butoons/AppButton';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from './Services/movies.services';
import useSWR from 'swr';
import CarouselSection from '../../core/ReusableComponets/Carousels_Sections/CarouselSection';
import H2Title from '../../core/ReusableComponets/titles/H2Title';
import { getPopularTvShows, getTopRateTvShows } from './Services/tv.services';
import { useFavoritos } from '../../core/hooks/useFavoritos';



const HomeView = () => {
    
    const {logout,isloggedIn} = useAuth();
    console.log(isloggedIn);

    const {data:popularMovies} = useSWR('getPopularMovies', getPopularMovies);
    const {data:topRatedMovies} = useSWR('getTopRatedMovies', getTopRatedMovies);
    const {data:upcomingMovies} = useSWR('getUpcomingMovies', getUpcomingMovies);

    const {data:popularTvShows} = useSWR('getPopularTvShows', getPopularTvShows);
    const {data:topRateTvShows} = useSWR('getTopRateTvShows', getTopRateTvShows);

    const {listaDeFavoritos} = useFavoritos();
    return (
    <div>
        <br/>
        <hr style={{borderColor:'Yellow',borderWidth:'1px', borderStyle:'solid'}}/>
        <table style={{ width: '100%' }}>
            <tbody><tr>
                <td><h1>TFI CaC 23646 - Alberto Maximiliano Correa Pietrobon</h1></td>
                <td style={{paddingRight:'10px', verticalAlign:'bottom'}}> 
                    <AppButton 
                        style={
                            {
                                backgroundColor: "red",
                                color: "white",
                                borderRadius: "5px",
                                padding: "5px 10px",
                                border: "none",
                                cursor: "pointer"
                            }
                        }
                        onClick={logout}>Cerrar Sesión
                    </AppButton>
                </td>
            </tr></tbody>
        </table>
        <br/>
        <hr style={{borderColor:'Yellow',borderWidth:'1px', borderStyle:'solid'}}/>
        <br/>
        <hr style={{borderColor:'blue',borderWidth:'1px', borderStyle:'solid'}}/> 
        <br/>
        <H2Title style={{color:'yellow'}}>❤️TU LISTA DE FAVORITOS ❤️</H2Title>
        <p>Selecciona las películas y/o series que quieras agregar/quitar de tu lista de favoritos</p>
        <p style={{color:'red', fontSize:'20px'}}
        >{listaDeFavoritos.length===0 ? 'La lista de favoritos está vacía 😥' : ''}</p>
        <CarouselSection 
            key={'favoritos-' + (listaDeFavoritos ? listaDeFavoritos.length : 0)} 
            datos={listaDeFavoritos}>
        </CarouselSection>
        <br/>
        <hr style={{borderColor:'blue',borderWidth:'1px', borderStyle:'solid'}}/> 
        <br/>
        <hr style={{borderColor:'red'}}/>
        <br/>
        <H2Title style={{color:'yellow'}}>🎥 PELICULAS 🎥</H2Title>
        <br />
        <CarouselSection title="Peliculas Destacadas" datos={popularMovies}></CarouselSection>
        <br />
        <CarouselSection title="Peliculas Mejor Puntuadas" datos={topRatedMovies}></CarouselSection>
        <br />
        <CarouselSection title="Peliculas Proximamente en la Plataforma" datos={upcomingMovies}></CarouselSection>
        <br/>
        <hr style={{borderColor:'red'}}/>
        <br/>
        <H2Title style={{color:'yellow'}}>📺 Shows de Televisión 📺</H2Title>
        <br />
        <CarouselSection title="TV Shows Destacados" datos={popularTvShows}></CarouselSection>
        <br/>
        <CarouselSection title="TV Shows Mejor Puntuados" datos={topRateTvShows}></CarouselSection>
        <br/>
        <hr style={{borderColor:'red'}}/>
        <br/>
        <hr style={{borderColor:'Yellow',borderWidth:'1px', borderStyle:'solid'}}/>
        <br/>
        <div style={{paddingLeft:'10px', verticalAlign:'middle'}}>
            <AppButton 
            style={
                {
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    border: "none",
                    cursor: "pointer"
                }
            }
            onClick={logout}>Cerrar Sesión
            </AppButton>
        </div>
        <br/>
        <hr style={{borderColor:'Yellow',borderWidth:'1px', borderStyle:'solid'}}/>
        <br/>
    </div>
)
}

export default HomeView