import styled, { css, DefaultTheme, ThemeProps, keyframes } from 'styled-components'
import { darken } from 'polished'
import { FaSpinner } from 'react-icons/fa'

const getCorner = ( props: ThemeProps<DefaultTheme>, variant: string ) => css`
   border-radius: ${ props => props.theme.corners[variant]};
`

const getVariant = ( props: ThemeProps<DefaultTheme>, variant: string ) => css`
   background-color: ${ props => props.theme.colors[variant] };
   border: 2px solid ${ props => props.theme.colors[variant] };
   color: white;
   text-decoration: none; 
   
   //OUTLINED HOVER STYLE
   /* &:hover {
      color: ${ props => props.theme.colors[variant] };
      background-color: white;
   } */
   
   //DARKEN HOVER STYLE
   &:hover {
      background-color: ${ props => darken(0.1, props.theme.colors[variant]) };
      border-color: ${ props => darken(0.1, props.theme.colors[variant]) };
   }
`

const DisabledVariant = css`
   color: white;
   background-color: ${ props => props.theme.colors.disabled };
   border-color: ${ props => props.theme.colors.disabled };
   
   &:hover {
      border-color: ${ props => props.theme.colors.disabled };
      background-color: ${ props => props.theme.colors.disabled };
      cursor: default;
   }
`

export const Wrapper = styled.button<{ variant: string, corner: string; }>`
   a {
      user-select: none;
      padding: 0 1rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .75rem;
      text-transform: uppercase;
      font-family: Montserrat, sans-serif;

      cursor: pointer;
      transition: .2s;

      ${ props => getCorner(props, props.corner)}
      ${ props => getVariant(props, props.variant) };
      ${ props => props.disabled === true && DisabledVariant };
   }
`

const spin = keyframes`
   to {
      transform: rotate(360deg);
   }
`

export const Loading = styled(FaSpinner)`
   animation: ${spin} .8s linear infinite;
`