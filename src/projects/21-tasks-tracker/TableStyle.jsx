import styled from "styled-components"

export const TableStyle = styled.div`
width: 700px;
margin: auto;
font-weight: 600;
ul.table-head{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 15px 20px;
}
ul.table-row{
  margin-bottom: 25px;

  & li{
    background-color: #fff;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0, .2);
  border-radius: 5px;
  margin-bottom: 25px;
  padding: 25px 30px;
    transition: all .2s ease;
    &:hover{
      cursor: pointer;
      box-shadow: none;
    }
    &:nth-child(even){
      background-color: rgba(30,158,186,.1)
    }
    &:nth-child(odd){
      background-color: rgba(30,158,186,.3)
    }
    &.completed{
      background-color: lightgray;
      color: gray;
    box-shadow: none;
    }
  }
}
input{
  border: none;
  padding: .35rem .75rem;
  font-weight: bold;
  font-size: .9;
}
input:hover{
  background : rgba(140, 140, 140, .2)
}
`;

export const NewTaskStyle = styled.li`
display: flex;
justify-content: space-between;
`
