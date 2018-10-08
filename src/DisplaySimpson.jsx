import  React  from  'react';

const  DisplaySimpson = ({ item }) => {
    return (
        <div  className="DisplaySimpson">
            <img  src={item.image}  alt="picture"  />
           
                <p>{item.quote}</p>
                <p>{item.character}</p>
                
           
        </div>
    );
};

export  default  DisplaySimpson;