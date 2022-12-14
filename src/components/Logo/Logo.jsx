/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import BentoImage from 'src/assets/images/Logo_BENTO.png';
import SwapImage from 'src/assets/images/Logo_SWAP.png';
import Vector15Image from 'src/assets/images/Logo_Vector_15.png';
import Vector16Image from 'src/assets/images/Logo_Vector_16.png';
import { styled } from '@mui/material/styles';
import Token from 'src/components/Token/Token';

 
const Logo1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: `54.41px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Group1117 = styled("div")({  
  display: `flex`,  
  position: `absolute`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `171.61px`,  
  height: `54.41px`,  
  left: `0px`,  
  top: `0px`,  
});
  
const Group1113 = styled("div")({  
  display: `flex`,  
  position: `absolute`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `171.61px`,  
  height: `54.41px`,  
  left: `0px`,  
  top: `0px`,  
});
  
const Group1112 = styled(Token)(({ theme }) =>({  
  width: `54.41px`,  
  height: `54.41px`,  
  position: `absolute`,  
  left: `0px`,  
  top: `0px`,  
}));
  
const Group1111 = styled("div")({  
  display: `flex`,  
  position: `absolute`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `101.86px`,  
  height: `48.35px`,  
  left: `70px`,  
  top: `2px`,  
});
  
const Bento = styled("img")({  
  height: `20.59px`,  
  width: `101.86px`,  
  position: `absolute`,  
  left: `0px`,  
  top: `0px`,  
});
  
const Swap = styled("img")({  
  height: `24.75px`,  
  width: `100.67px`,  
  position: `absolute`,  
  left: `1px`,  
  top: `24px`,  
});
  
const Vector15 = styled("img")({  
  height: `7.99px`,  
  width: `12.14px`,  
  position: `absolute`,  
  left: `97px`,  
  top: `34px`,  
});
  
const Vector16 = styled("img")({  
  height: `7.99px`,  
  width: `12.14px`,  
  position: `absolute`,  
  left: `77px`,  
  top: `50px`,  
});
 
function Logo(props) {
  return (
    <Logo1 className={props.className} >
      <Group1117 >
        <Group1113 >
          <Group1112   />
          <Group1111 >
            <Bento  src={BentoImage} alt={"BENTO"}/>
            <Swap  src={SwapImage} alt={"SWAP"}/>
          </Group1111>
        </Group1113>
      </Group1117>
      <Vector15  src={Vector15Image} alt={"Vector 15"}/>
      <Vector16  src={Vector16Image} alt={"Vector 16"}/>
    </Logo1>
  );
}

export default Logo;
