import React from 'react'
import AppSwiper from '../Carousels/AppSwiper'
import AppSwiperSlide from '../SwiperSliders/AppSwiperSlide'

const CarouselSection = ({title, datos}) => {
return (
    <>
    <h2>{title}</h2>
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