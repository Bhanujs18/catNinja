import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`
const Card = styled.div`
display: block;
background-color: white;
height: max-content;
width: 35rem;
position: relative;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
text-align:center;
padding: 2rem;
border-radius: 15px;
align-items:Center;
`
const Button = styled.button`
background-color: red;
color: white;
padding: 0.5rem 1.5rem;
border-radius: 9px;
border:none;
cursor:pointer;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`
const Fact = styled.p`
font-style:italic;
`
const Video = styled.video`
height: 100vh;
width: 100%;
border:none;
outline:none;
position: absolute;
`

const App = () => {

  const [fact, setFact] = useState("Loading");

  const fetchFacts = async () => {
   const res = await axios.get("https://catfact.ninja/fact");
   setFact(res.data.fact);
  }

  useEffect(()=>{
   fetchFacts();
  },[])
 
  return (
    <Wrapper>
      <Video autoPlay loop controls>
        <source src='./meow.mp4' type='video/mp4' />
      </Video>
      <Card>
          <Fact>"{fact}"</Fact>
          <Button onClick={fetchFacts}>Press For Random Fact</Button>
         </Card>
    </Wrapper>
  )
}

export default App