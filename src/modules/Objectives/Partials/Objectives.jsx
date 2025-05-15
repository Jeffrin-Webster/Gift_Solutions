import { ObjectiveData } from '@modules/Data/Data'
import React from 'react'
import { Container, ObjectiveCards, StyledObjectives } from './Style'
import { CustomRow } from '@components/others'
import { Col } from 'antd'

const Objectives = () => {
  return (
    <>

      <StyledObjectives>
        <Container>
          <CustomRow style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {ObjectiveData.map(({ pics, title, subtitle, key }, i) => {
             let cardStyle = {};
             if (i === 0) {
               cardStyle.backgroundColor = '#F1F9FA';
             } else if (i === 1) {
               cardStyle.backgroundColor = '#FFF9F2';
              //  cardStyle.boxShadow = '11px 11px 11px #EBEBEB';
             } else if (i === 2) {
               cardStyle.backgroundColor = '#FFF3F1';
             }
              return (
                <Col span={24} md={7} key={key}>
                  <ObjectiveCards style={cardStyle} hoverable>
                    <img src={pics} alt="pics" /><br />
                    <h1>{title}</h1><br />
                    <p>{subtitle}</p>
                  </ObjectiveCards>
                </Col>
              );
            })}
          </CustomRow>
        </Container>
      </StyledObjectives>

    </>
  )
}

export default Objectives