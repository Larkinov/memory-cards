import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const GamePage:React.FC = () => {

  const {timer,gameMode} = useSelector((state:RootState)=> state.settings);

  return (
    <>
    ssssssssssssssssssss
      {timer}
      {gameMode}
    </>
  )
}

export default GamePage