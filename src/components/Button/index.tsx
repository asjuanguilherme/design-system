import { ReactComponentElement } from 'react'
import * as S from './styles'

interface Props {
   label: string;
   onClick?: VoidFunction;
   variant?: string;
   href?: string;
   target?: string;
   corner?: 'squared' | 'rounded' | 'pill';
   disabled?: boolean;
   icon?: ReactComponentElement<any>;
   prefix?: any;
   sufix?: any;
   loading?: boolean;
   size?: 'small' | 'default' | 'large';
   outlined?: boolean;
   className?: string;
}

const Button = ({label, onClick, variant = 'primary', corner = 'rounded', href, target, disabled, prefix, sufix, loading, size = 'default', outlined = false, className, icon } : Props) => {
   return (
      <S.Wrapper
         onClick={ onClick }
         variant={ variant }
         corner={ corner }
         disabled={disabled}
         size={ size }
         outlined={ outlined }
         className={ className }
         icon={ !!icon }
      >
         <a href={ href } target={ target } >
            { prefix &&
               <div className="mr-2">
                  { prefix }
               </div>
            }
            { icon }
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
