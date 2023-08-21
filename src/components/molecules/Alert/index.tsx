
import Button from "components/atoms/Button"
import styled from "styled-components"
import themes from "../../../themes"
import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import WarningSign from "components/atoms/Warning"
import Warning from "components/atoms/Warning"

const AlertContainer = styled.div`
position: relative;
width: 50%;
height: 50%;
background-color: ${themes.shadows.backgroundColor};
// border-radius: $radius;
overflow: hidden;

> div{
   margin: 0 ${themes.spaces.medium};
   padding: ${themes.spaces.large};
   background-color: darken(${themes.shadows.backgroundColor}, 3);
}

}
`



type AlertProps = {
    onClose?: (e: any) => void,
}
const Alert = (props: AlertProps) => {


    return(
        <AlertContainer>
            <Flex justifyContent="center" alignItems="center" height="100%" flexDirection="column">
                <Flex justifyContent="center" alignItems="center" width="100%" height="70%" flexDirection="row" >
                    <Warning/>
                </Flex>
                <Button type="button" onClick={props.onClose}>閉じる</Button>
            </Flex>
            <footer>
                
            </footer>
        </AlertContainer>
    )
}

export default Alert