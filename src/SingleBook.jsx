import { useState } from 'react';
import { Card } from 'react-bootstrap'

function SingleBook({ img, title }) {

    const [selected, setSelected] = useState(false)

    function invertValue() {
        setSelected(!selected)
        console.log(selected)
    }

    return (


        <Card style={{ width: '45%', alignItems: 'center', margin: '10px', flexDirection: 'row' }} className='cardAdaptiveWidth'>
            <div
            className='contImgAdaptiveWidth' 
            style={{
                height: '100%',
                width: '50%',
                border: selected ? 'solid 3px red' : 'none'
            }}>
                <Card.Img
                    style={{
                        height: '100%',
                        width: '100%',

                    }}
                    src={img}
                    onClick={invertValue}
                />
            </div>

            <Card.Body style={{width: '50%'}}>
                <h3>{title}</h3>
                <Card.Text>
                    <small className="text-body-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus et enim, earum, alias, sit consequatur dolor nobis iste laborum error ducimus deserunt. Laborum, iure quis.</small>
                </Card.Text>
                <Card.Text>
                    <small className="text-body-secondary" >Ultimo aggiornamento 3 minuti fa</small>
                </Card.Text>
            </Card.Body>


        </Card>


    )
}

export default SingleBook;