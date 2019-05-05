import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'

const PokemonProfile = (props) => {
  return (
    <Col>
      <Col className='m-2 mt-5 mb-4 text-center'>
        <h5>Profile</h5>
      </Col>
      <Row className='col-md-12'>
        <Col className='col-md-6'>
          <Row>
            <div className='col-6'>
              <span className='float-right mySpan mySpan'>Height:</span>
            </div>
            <div className='col-6'>
              <span className='float-left mySpan'>{props.height} ft.</span>
            </div>
            <div className='col-6'>
              <span className='float-right mySpan'>Weight:</span>
            </div>
            <div className='col-6'>
              <span className='float-left mySpan'>{props.weight} ft.</span>
            </div>
            <div className='col-6'>
              <span className='float-right mySpan'>Catch Rate:</span>
            </div>
            <div className='col-6'>
              <span className='float-left mySpan'>{props.catchRate}%</span>
            </div>
            <div className='col-6'>
              <span className='float-right mySpan'>Gender Ratio:</span>
            </div>
            <div className='col-6'>
              <ProgressBar>
                <ProgressBar
                  variant='info'
                  now={props.genderRatioMale}
                  label='MALE' />
                <ProgressBar
                  variant='danger'
                  now={props.genderRatioFemale}
                  label='FEMALE' />
              </ProgressBar>
            </div>
          </Row>
        </Col>
        <Col className='col-md-6'>
          <Row>
            <div className='col-6'>
              <span className='float-right mySpan mySpan'>Egg Groups:</span>
            </div>
            <div className='col-6'>
              <span className='float-left mySpan'>{props.eggGroup}</span>
            </div>
            <div className='col-6'>
              <span className='float-right mySpan'>Hatch Steps:</span>
            </div>
            <div className='col-6'>
              <span className='float-left mySpan'>{props.hatchSteps}</span>
            </div>
            <div className='col-6'>
              <span className='float-right mySpan'>Abilities:</span>
            </div>
            <div className='col-6'>
              <span className='float-left mySpan'>{props.abilities}</span>
            </div>
            <div className='col-6'>
              <span className='float-right mySpan'>EVS:</span>
            </div>
            <div className='col-6'>
              <span className='float-left mySpan'>{props.evs}</span>
            </div>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default PokemonProfile
