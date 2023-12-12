import React from 'react'
import AppSwiper from '../Carousels/AppSwiper'
import AppSwiperSlide from '../SwiperSliders/AppSwiperSlide'
import H2Title from '../titles/H2Title'
import { useFavoritos } from '../../hooks/useFavoritos'



const CarouselSection = ({title, datos}) => {

const  {agregarFavoritos, borrarFavoritos, esFavoritos} = useFavoritos();

return (
    <>
        <H2Title>{title}</H2Title>
        <AppSwiper>
            {
                datos?.map((e) => (
                <AppSwiperSlide key={e.id}>
                    <div
                        style={{
                            //display: "flex",
                            //justifyContent: "left",
                            //alignItems: "top",
                            width:'250px',
                            height:'150px',
                            //backgroundColor: "red",
                            //border: "2px solid white",
                            margin: "10px",
                            padding: "10px",
                            backgroundImage: `url(${e.backdrop})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            }}
                        //onClick={() => console.log(e.title)}
                        onClick={() => {
                            console.log('Clic en', e.title);
                            if (esFavoritos(e)) borrarFavoritos(e); else agregarFavoritos(e);
                        }}
                    >
                        {e.title}
                    </div>
                </AppSwiperSlide>
                ))
            }
        </AppSwiper>
    </>
)
}

export default CarouselSection