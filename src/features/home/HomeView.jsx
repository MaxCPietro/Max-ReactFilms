import React from 'react'
import { useAuth } from '../../core/hooks/useAuth'
import AppButton from '../../core/ReusableComponets/Butoons/AppButton';
import AppSwiper from '../../core/ReusableComponets/Carousels/AppSwiper';
import AppSwiperSlide from '../../core/ReusableComponets/SwiperSliders/AppSwiperSlide';

const HomeView = () => {
    
    const {logout,isloggedIn} = useAuth();
    console.log(isloggedIn)
    return (
    <div>
        <h1>HOME</h1>
        <AppSwiper>
                <AppSwiperSlide>Slide 0</AppSwiperSlide>
                <AppSwiperSlide>Slide 1</AppSwiperSlide>
                <AppSwiperSlide>Slide 2</AppSwiperSlide>
                <AppSwiperSlide>Slide 3</AppSwiperSlide>
        </AppSwiper>
        <br />
        <br />
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