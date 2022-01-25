import React, { useState } from 'react';
import { Flex } from './Flex';
import { Highlight } from './PageComponents';
import styled from 'styled-components'
import { useUIState } from '../context/UpdateUiContext';

export const EditableInput = styled.input`
   background: #00000021;
   border: none;
   color: ${props => props.theme.text1};
   font-size: 1rem;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   margin-top: 0.5em;
   margin-bottom: 0.5em;
   line-height: 1.2rem;

`
const ColorSelect = styled(Highlight)`
   min-block-size: 1rem;
   min-inline-size: 1rem;
   cursor: pointer;
`
const ColorContainer = styled.div`
   display: flex;
`
export const EditableText = ({ title, color, taskId, stage }) => {
   const [show, setShow] = useState(false)
   const [stateText, setStateText] = useState({
      title: title,
      stage: stage,
   })

   const showColors = () => {
      setShow(prev => !prev)
   }
   const updateText = (e) => {
      setStateText({ ...stateText, title: e.target.value })
   }
   const { setUpdateUI } = useUIState()

   const updateFunction = async (color) => {

      await fetch(`${process.env.REACT_APP_MDB}/columndata/${taskId}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ color: color, stage: stateText.stage, title: stateText.title })
      })

      setUpdateUI()
   }
   return (
      <>
         <Highlight className={color} >
            <Flex>
               {show ?
                  <>
                     <EditableInput autoFocus type="text" value={stateText.title} onChange={updateText} />
                     <i className="fa fa-check" aria-hidden="true" style={{ cursor: 'pointer', color: 'greenyellow' }} onClick={() => { showColors(); updateFunction(color) }}></i>
                  </>
                  :
                  <>
                     <p>{stateText.title}</p>
                     <i className="fa fa-pencil" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={showColors}></i>
                  </>
               }
            </Flex>
         </Highlight>
         {show && (

            <ColorContainer>
               <ColorSelect onClick={() => updateFunction('pink')} className='pink'></ColorSelect>
               <ColorSelect onClick={() => updateFunction('purple')} className='purple'></ColorSelect>
               <ColorSelect onClick={() => updateFunction('mint')} className='mint'></ColorSelect>
               <ColorSelect onClick={() => updateFunction('blue')} className='blue'></ColorSelect>
               <ColorSelect onClick={() => updateFunction('warning')} className='warning'></ColorSelect>
               <ColorSelect onClick={() => updateFunction('danger')} className='danger'></ColorSelect>
               <ColorSelect onClick={() => updateFunction('success')} className='success'></ColorSelect>
            </ColorContainer>
         )}
      </>
   );
};
