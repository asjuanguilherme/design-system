import { ReactComponentElement } from 'react'
import * as S from './styles'

interface Props {
   label: string;
   onClick?: VoidFunction;
   icon?: ReactComponentElement<any>;
   variant?: string;
   href?: string;
   target?: string;
   corner?: 'squared' | 'rounded' | 'pill';
   disabled?: boolean;
   prefix?: any;
   sufix?: any;
   loading?: boolean;
}

const Button = ({label, onClick, variant = 'primary', corner = 'rounded', href, target, disabled, prefix, sufix, loading} : Props) => {
   return (
      <S.Wrapper onClick={ onClick } variant={ variant } corner={ corner } disabled={disabled} >
         <a href={ href } target={ target } >
            { prefix &&
               <div className="mr-2">
                  { prefix }
               </div>
            }
            { label }
            { (sufix && !loading) &&
               <div className="ml-2">
                  { sufix }
               </div>
            }
            { loading &&
               <S.Loading className="ml-2" />
            }
         </a>
      </S.Wrapper>
   )
}

export default Button
