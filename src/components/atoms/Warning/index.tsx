import Image from "next/image"
import warningSignImage from "../../../../public/alert-icon.png"
import styled from "styled-components"
import Flex from "components/layout/Flex"
import Text from "../Text"

const ImageContainer = styled.div`
text-align: right;
flex: 1;

`

const Warning = () => {
    return(
        <Flex >
            <Image src={warningSignImage} alt={"警告"} width={50} height={50} />
            <Text variant="large">テーブルを選択していません。<br></br>卓を選択してからもう一度お試しください。</Text>
        </Flex>
    )
}

export default Warning