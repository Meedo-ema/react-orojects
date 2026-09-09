import Styled from "styled-components";
export const NavStyle = Styled.nav`
display: flex;
justify-content: center;
align-items: center;
padding: 0.8rem;
user-select: none;
box-sahadow: 0 2px 4px rgba(0,0,0,0.2);
a {
  color: inherit;
}
.navbar-items{
  display: flex;
  justify-content: center;
  align-items: center;
 
  &.showNavbar{
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 15px;
    width: 100%;
  }
    & .nav-link{
      margin-right: 1rem;
      opacity: .8;
      padding: .15rem .35rem;
      border: 1px solid transparent;
      border-radius: 3px;
      transition: all .2s ease;

      &:hover{
        border: 1px solid #eee;
      }
      &.active{
        background: #fff;
        color: black;
        transition: all .2s ease;
      }
  }
 &.showNavbar{
   display: flex;
   align-items: flex-start;
   flex-direction: column;
 }
}
`
