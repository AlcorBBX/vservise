import React from 'react'
import Input from '../ui/input/Input'

const SearchForm = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "rgba(92,135,219,1)", height: '100px', alignItems: 'center'  }}>
        <Input title="Откуда" placeholder='fsd' />
        <Input title="Куда" placeholder='fsd' />
        <Input title="Туда" placeholder='fsd' />
        <Input title="Обратно" placeholder='fsd' />
    </div>
  )
}

export default SearchForm