import Button from "components/atoms/Button"
import Flex from "components/layout/Flex"
import styled from "styled-components"
import themes from "../../../themes"
import { Bill } from "types/data"
import Box from "components/layout/Box"

const PanelContainer = styled.div`
position: relative;
width: 50%;
background-color: ${themes.shadows.backgroundColor};
// border-radius: $radius;
overflow: hidden;
> header{
//    padding: 0 $screen-padding;
  }
> div{
//   margin: 0 $screen-padding/2;
//   padding: $screen-padding;
//   border-radius: $radius/2;
//   box-shadow: $shadow-inset;
  background-color: darken(${themes.shadows.backgroundColor}, 3);
}
> footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
//   gap: $screen-padding/2;
//   padding: $screen-padding/2;
  button{
    font-weight: 700;
    // padding: $screen-padding/2 $screen-padding/2;
    &[type="button"]{
    //   color: $alert-color;
    //   background-color: ${themes.shadows.backgroundColor};
      &:hover:after{
        content: '';
        // border: 2px solid $alert-color;
      }
    }
  }
}
`


type PanelProps = {
    onClose?: (e: any) => void,
    bill: Bill | null
}
const Panel = (props: PanelProps) => {

    const submit = (e: any) => {
        e.preventDefalut()
        if(props.onClose){
            props.onClose(e)
        }
    }

    return(
        <PanelContainer>
            <header>
                <h3>テーブル : {props.bill!.table}</h3>
            </header>
            <Flex
                flexDirection={{ base: 'row', md: 'row'}}>
                    <Box>
                        dentaku
                    </Box>
                    <Box>
                        cource
                    </Box>
            </Flex>
            <footer>
                <Button type="button" onClick={props.onClose}>閉じる</Button>
                <Button type="submit" onClick={submit}>次へ</Button>
            </footer>
        </PanelContainer>
    )
}

export default Panel