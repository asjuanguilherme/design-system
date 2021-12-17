import styled, { css, DefaultTheme, ThemeProps, keyframes } from 'styled-components'
import { darken } from 'polished'
import { FaSpinner } from 'react-icons/fa'
import { ReactComponentElement } from 'react'

const filledStyle = (color: string) => css`
   background-color: ${color};
   border: 2px solid ${color};
   color: white;

   &:hover {
      background-color: ${ props => darken(0.1, color)};
      border-color: ${ props => darken(0.1, color)};
   }
`

const outlinedStyle = (color: string) => css`
   background-color: transparent;
   border: 2px solid ${color};
   color: ${color};

   &:hover {   
      background-color: ${ color };
      border-color: ${ color };
      color: white;
   }
`

const getSize = ( props: ThemeProps<DefaultTheme>, size: string ) => css`
   font-size: ${ props => props.theme.fontSize[size]};
`

const getCorner = ( props: ThemeProps<DefaultTheme>, variant: string ) => css`
   border-radius: ${ props => props.theme.corners[variant]};
`

const getVariant = ( props: any, variant: string, outlined: boolean ) => css`
   text-decoration: none;
   
   ${ outlined? outlinedStyle(props.theme.colors[variant]) : filledStyle(props.theme.colors[variant]) }
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

export const Wrapper = styled.button<{ variant: string, corner: string; size: string, outlined: boolean, icon: boolean }>`
   a {
      user-select: none;
      padding: .5em 1.3em;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .75rem;
      text-transform: uppercase;
      font-family: Montserrat, sans-serif;

      cursor: pointer;
      transition: .2s;
      
      ${ props => props.icon? `padding: .5em;` : `` }
      ${ props => getSize(props, props.size) };
      ${ props => getCorner(props, props.corner)};
      ${ props => getVariant(props, props.variant, props.outlined) };
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