import { useRef } from "react";

export const AppSwiper = ({children}) => {
    const swiperElRef = useRef(null);
return (
    <swiper-container 
        ref={swiperElRef}
        slides-per-view='5'
        slider-per-group='1'
        navigation='true'
        pagination='true'
        //loop='true'      
    >
        {children}
    </swiper-container>
)
}

export default AppSwiper