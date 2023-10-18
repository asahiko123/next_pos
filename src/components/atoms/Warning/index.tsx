import Image from "next/image"
import styled from "styled-components"
import Flex from "components/layout/Flex"
import Text from "../Text"
import { SvgIcon } from "components/atoms/SvgIcon"

const ImageContainer = styled.div`
text-align: right;
flex: 1;

`

const Warning = () => {
    return(
        <Flex >
            <SvgIcon fileName="AlertIcon" width={50} height={50} stroke="#333" strokeWidth={2.5} />
            <Text variant="large">テーブルを選択していません。<br></br>卓を選択してからもう一度お試しください。</Text>
        </Flex>
    )
}

export default Warning