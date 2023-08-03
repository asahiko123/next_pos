import Box from "components/layout/Box"
import Flex from "components/layout/Flex"
import { useState } from "react"
import styled from "styled-components"
import { Bill } from "types"
import Portal from "../Portal"


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $screen-padding;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    animation: fadeon 0.3s ease 0s;
    > * {
    width: 100%;
    max-width: 480px;
    margin: auto;
    animation: scaleon 0.25s ease-out 0s;
`


export interface ModalProps {
    onClose: (e: any) => void
    children: React.ReactNode
}

const Modal = (props: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const onMouseDown = (e: any) => {
        if(e.target === e.currentTarget){
            setIsOpen(true)
        }
    }

    const onMouseUp = (e: any) => {
        if(isOpen){
            props.onClose(e) 
        }
        setIsOpen(false)
    }



    return(
        <Portal>
            <ModalContainer
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}>
                    { props.children }
            </ModalContainer>
        </Portal>
    )
}


export default Modal