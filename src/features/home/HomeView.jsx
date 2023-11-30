import React from 'react'
import { useAuth } from '../../core/hooks/useAuth'
import AppButton from '../../core/ReusableComponets/Butoons/AppButton';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from './Services/movies.services';
import useSWR from 'swr';
import CarouselSection from '../../core/ReusableComponets/Carousels_Sections/CarouselSection';



const HomeView = () => {
    
    const {logout,isloggedIn} = useAuth();
    console.log(isloggedIn);

    const {data:popularMovies} = useSWR('getPopularMovies', getPopularMovies);
    const {data:topRatedMovies} = useSWR('getTopRatedMovies', getTopRatedMovies);
    const {data:upcomingMovies} = useSWR('getUpcomingMovies', getUpcomingMovies);

    return (
    <div>
        <h1>HOME</h1>
        <br /><br />
        <CarouselSection title="Peliculas Destacadas" datos={popularMovies}></CarouselSection>
        <br /><br />
        <CarouselSection title="Peliculas Mejor Puntuadas" datos={topRatedMovies}></CarouselSection>
        <br /><br />
        <CarouselSection title="Peliculas Proximamente en la Plataforma" datos={upcomingMovies}></CarouselSection>
        <br/><br/>
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
)
}

export default HomeView