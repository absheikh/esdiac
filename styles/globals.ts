import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
    box-sizing: border-box;
    margin: 0;
}

body{
    font-family: 'Lexend', sans-serif;
    font-size: 16px;
    background-color: #F6F6F6;;
    color:  #FFFFFF;;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 900px) {
    padding-bottom: 10px;
    overflow: auto;
    }


}
.textDesktop{
  
    @media screen and (max-width: 600px) {
      display: none;
}
}
.textDesktop2{
  
    @media screen and (max-width: 900px) {
      display: none;
}
}
.textMobile{
    display: none;
    @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
}
}
    
 .invalid {
    border-color:#8b0000;
    color: #8b0000 !important;
    background-color: #f2dede !important;
}
    

.scroll{
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
img {
    max-width: 100%;
}
button {
    cursor: pointer;
    border: none;
}
input, textarea {
    outline: none;
    border: none;
}
.input{
      background: #eaf0f7;
  border-radius: 5px;
  padding: 17px 29px;
  font-weight: 400;
  font-size: 20px;
  height: 60px;
  line-height: 30px;
  color: #000000;
  width: 100%;
}
 .PhoneInputInput{
      background: #eaf0f7;
  border-radius: 5px;
  
  font-weight: 400;
  font-size: 20px;
  height: 60px;
  line-height: 30px;
  color: #000000;
  width: 100%;
}
`;
export default GlobalStyle;
