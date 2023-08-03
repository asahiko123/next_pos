import Flex from "components/layout/Flex"


type PanelProps = {
    children: React.ReactNode,
    onClose?: (e: any) => void
}
const Panel = (props: PanelProps) => {

    const submit = (e: any) => {
        e.preventDefalut()
        if(props.onClose){
            props.onClose(e)
        }
    }

    return(
        <Flex>
            
        </Flex>
    )
}