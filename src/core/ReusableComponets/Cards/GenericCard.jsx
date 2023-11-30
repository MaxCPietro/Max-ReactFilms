import React from 'react'

const GenericCardHeader = () => {
return (
    <section>cabecera</section>
)
}

const GenericCardBody = () => {
return (
    <section>cuerpo</section>
)
}

const GenericCardFooter = () => {
return (
    <section>pie</section>
)
}

const GenericCard = ({children}) => {
return (
    <article>
        {children}
    </article>
)
};

//Defino las propiedades que tendra el componente
GenericCard.Header = GenericCardHeader;
GenericCard.Body = GenericCardBody;
GenericCard.Footer = GenericCardFooter;

export default GenericCard