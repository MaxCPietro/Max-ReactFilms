import React from 'react'
import AppSwiper from '../Carousels/AppSwiper'
import AppSwiperSlide from '../SwiperSliders/AppSwiperSlide'
import H2Title from '../titles/H2Title'

const CarouselSection = ({title, datos}) => {
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
                            with:'250px',
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