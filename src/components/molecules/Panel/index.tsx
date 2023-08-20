import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import Button from "components/atoms/Button"
import Flex from "components/layout/Flex"
import styled from "styled-components"
import themes from "../../../themes"
import { Bill } from "types/data"
import Box from "components/layout/Box"
import { courceOptions } from 'utils/data'
import Calculator from 'components/organisms/Calculator'

const PanelContainer = styled.div`
position: relative;
width: 50%;
height: 50%;
background-color: ${themes.shadows.backgroundColor};
// border-radius: $radius;
overflow: hidden;
> header{
//    padding: 0 $screen-padding;
  }
> div{
   margin: 0 ${themes.spaces.medium};
   padding: ${themes.spaces.large};
//   border-radius: $radius/2;
//   box-shadow: $shadow-inset;
  background-color: darken(${themes.shadows.backgroundColor}, 3);
}
> footer {
  display: grid;
  grid-template-columns: 1fr 1fr;

   gap: ${themes.spaces.medium};
   padding: ${themes.spaces.medium};
  button{
    font-weight: 700;
     width: 200px;
     padding: ${themes.spaces.small} ${themes.spaces.small};
    &[type="button"]{
    //   color: $alert-color;
       background-color: darken(${themes.shadows.backgroundColor},3);
      &:hover:after{
        content: '';
        // border: 2px solid $alert-color;
      }
    }
  }
}
`
const FlexElement = styled.div`
    flex: 1 ;
`


type PanelProps = {
    onClose?: (e: any) => void,
    bill: Bill | null
}
const Panel = (props: PanelProps) => {

    const submit = (e: any) => {
        e.preventDefault()
        if(props.onClose){
            props.onClose(e)
        }
    }

    const animatedComponents = makeAnimated();

    return(
        <PanelContainer>
            <header>
                <h3>テーブル : {props.bill?.table}</h3>
            </header>
            <Flex
                flexDirection={{ base: 'row', md: 'row'}}
                height="70%">
                        <FlexElement>
                            <Calculator />
                        </FlexElement>
                        <FlexElement>
                            <Select 
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={[courceOptions[0]]}
                                isMulti
                                options={courceOptions}/>
                        </FlexElement>
            </Flex>
            <footer>
                <Button type="button" onClick={props.onClose}>閉じる</Button>
                <Button type="submit" onClick={submit}>次へ</Button>
            </footer>
        </PanelContainer>
    )
}

export default Panel