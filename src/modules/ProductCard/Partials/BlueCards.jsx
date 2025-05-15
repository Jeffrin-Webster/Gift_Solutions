import React from 'react'
import { CardMain, CardMainOne, Main } from './Style'
import giftkits_four from '@assets/images/giftkits_four.png'
import { Flex } from '@components/others'
import { FiShoppingCart } from 'react-icons/fi'
import { Button } from '@components/form'
import { IoMdHeartEmpty } from 'react-icons/io'



const BlueCards = () => {
    return (
        <>
            <Main>
                <CardMain>
                    <CardMainOne>
                        <img src={giftkits_four} alt='' />
                    </CardMainOne>
                    
                </CardMain>
                 <h3>Gold</h3>
                   <br/>
              <Flex gap={'5px'} center>
               
              <Button.Primary 
            className='productbtnheart'
            icon={<IoMdHeartEmpty  style={{ marginRight: '0px' }} />}

          />
              <Button.Primary
            className='productbtncart'
            icon={<FiShoppingCart style={{ marginRight: '0px' }} />}

          />
              </Flex>
            </Main>

        </>


    )
}

export default BlueCards















// import React from 'react'
// import { CardMain, CardMainOne, Main } from './Style'
// import { Flex } from '@components/others'
// import { FiShoppingCart } from 'react-icons/fi'
// import { Button } from '@components/form'
// import { IoMdHeartEmpty } from 'react-icons/io'

// const BlueCards = ({ cardData }) => {
//     console.log(cardData, 'cardData');

//     return (
//         <>
//             <Main>
//                 {cardData?.map(card => (
//                     <CardMain key={card.id}>
//                         <CardMainOne>
//                             <img src={card.imageUrl} alt='' />
//                             <br/>
//                             <h3>{card.title}</h3>
//                         </CardMainOne>
//                         <br/>
//                         <Flex center>
//                             <Button.Primary
//                                 className='productbtnheart'
//                                 icon={<IoMdHeartEmpty style={{ marginRight: '0px' }} />}
//                             />
//                             <Button.Primary
//                                 className='productbtncart'
//                                 icon={<FiShoppingCart style={{ marginRight: '0px' }} />}
//                             />
//                         </Flex>
//                     </CardMain>
//                 ))}
//             </Main>
//         </>
//     )
// }

// export default BlueCards
