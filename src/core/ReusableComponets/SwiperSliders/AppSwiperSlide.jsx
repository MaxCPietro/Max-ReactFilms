import React from 'react'

const AppSwiperSlide = ({children, ...props}) => {
return (
    <swiper-slide {...props}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            with:'250px',
            height:'150px',
            backgroundColor: "red",
            border: "2px solid white",
            margin: "10px",
        }}
    >
        {children}
    </swiper-slide>
)
}

export default AppSwiperSlide