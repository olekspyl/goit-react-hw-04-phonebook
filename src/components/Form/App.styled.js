import styled from 'styled-components';

export const FormEl = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const Label = styled.label`
margin-top: 15px;
margin-left: 20px;
font-size: 20px;
font-weight: 700;
`
export const Input = styled.input`
margin-left: 5px; 
`


export const Button = styled.button`
margin-top: 15px;
margin-left: 20px;

 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            width: 150px;
            height: 35px;
            border-color: transparent;
            font-weight: 700;
            font-size: 20px;
            line-height: 1.88px;
            
            letter-spacing: 0.06em;
            justify-content: center;
            cursor: pointer;
            transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
                        color 250ms cubic-bezier(0.4, 0, 0.2, 1),
                        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0px;
            &:hover, &:focus {
                    color: blue;
                    box-shadow:
                        0px 3px 1px rgba(0, 0, 0, 0.1),
                        0px 1px 2px rgba(0, 0, 0, 0.08),
                        0px 2px 2px rgba(0, 0, 0, 0.12);
                }

`

export const Title = styled.h1`
display: flex;
margin: 0 0 0 50px;
`

export const TitleContacts = styled.h2`
display: flex;
margin: 20px 0 0 50px;
`
export const TitleFind = styled.h2`
margin: 10px 10px 10px 20px;
font-size: 14px;
color: grey;
`

export const WrapToFind = styled.div`
display: flex;
align-items: center;
`

export const ListItem = styled.li`
list-style: none;
margin-bottom: 20px;
`

export const DeleteButton = styled.button`
margin-left: 30px;

 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            width: 150px;
            height: 35px;
            border-color: transparent;
            font-weight: 700;
            font-size: 20px;
            line-height: 1.88px;
            
            letter-spacing: 0.06em;
            justify-content: center;
            cursor: pointer;
            transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
                        color 250ms cubic-bezier(0.4, 0, 0.2, 1),
                        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0px;
            &:hover, &:focus {
                    color: blue;
                    box-shadow:
                        0px 3px 1px rgba(0, 0, 0, 0.1),
                        0px 1px 2px rgba(0, 0, 0, 0.08),
                        0px 2px 2px rgba(0, 0, 0, 0.12);
                }
`
