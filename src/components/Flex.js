import styled from "styled-components";
const Container = styled.div`
   display: flex;
   align-items: center;
   gap: ${props => props.gap};
   flex-wrap: ${props => props.flexWrap};
   justify-content: space-between;

`
export const Flex = ({ children, gap = '0.5rem', flexWrap = 'wrap', style, onClick }) => {
   return (
      <Container gap={gap} flexWrap={flexWrap} style={style} onClick={onClick}>
         {children}
      </Container>
   )
}