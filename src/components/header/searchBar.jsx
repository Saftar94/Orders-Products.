import { nanoid } from 'nanoid'
import styled from 'styled-components'


const SearchForm = styled.form`
display: flex;
align-items: center;
width: 100%;
max-width: 50%;
background-color: #fff;
border-radius: 4px;
overflow: hidden;
margin: auto;
box-shadow: 0px 0px 4px 1px #000000;
`

const SearchForminput = styled.input`
display: inline-block;
width: 100%;
font-weight: 500;
font-size: 16px;
line-height: 1.14;
border: none;
cursor: pointer;
padding: 5px 10px;
background: #d5d5d5;

::placeholder{
line-height: 1.14;
font-size: 16px;

}
`

export const  SerchBar = ()=>{


return(
  
    <SearchForm >
    <SearchForminput
      id={nanoid()}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Поиск"
    />
  </SearchForm>
  
)
}



