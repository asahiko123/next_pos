import Link from 'next/link'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Button from 'components/atoms/Button'
import { useEffect, useState } from 'react'
import Panel from 'components/molecules/Panel'
import Modal from 'components/molecules/Modal'
import { useSelectedBill } from 'contexts/SelectedBillContext'
import Alert from 'components/molecules/Alert'
import { footerMenu } from 'utils/data'
import { useAuthContext } from 'contexts/AuthContext'



/**
 * フッター
 */
const Footer = () => {


  const [ isOpenModal , setIsOpenModal ] = useState(false)
  const [ componentType , setComponentType ] = useState('')
  const { authUser } = useAuthContext()
 

  const toggleModal = (e:React.MouseEvent) => {
    console.log("toggle called")
    if(e.target === e.currentTarget){
      setIsOpenModal(!isOpenModal)
    }
  }

  const getComponentType = (type: string ) => {
      setComponentType(type)
  }

  useEffect(() => {
    console.log(isOpenModal)
  },[isOpenModal])

  const { selectedBill } = useSelectedBill()

  
  
  return (
    <footer>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        
        <Box minWidth={{ base: '100%', md: '120px' }}>
          <nav>
           

          {authUser && footerMenu &&
            footerMenu.map((menu,index) => {
              return(
                <Button onClick={(e) =>{toggleModal(e); getComponentType(menu.value)}} key={`${menu.value}-${index}`} marginRight={'10px'}>{ menu.value }</Button>
              )
            })
          }

            
          </nav>
        </Box>
      </Flex>
      <Box paddingTop={3} paddingBottom={2}>
        <Text>© 2021 Gijutsuhyoronsha Co., Ltd.. All rights reserved.</Text>
      </Box>
      {isOpenModal && selectedBill && (
        <Modal onClose={toggleModal}>
          <Panel onClose={toggleModal} bill={selectedBill} componentType={componentType} />
        </Modal>
      )}
      {
        isOpenModal && !selectedBill && (
          <Modal onClose={toggleModal}>
            <Alert onClose={toggleModal}/>
          </Modal>
        )
      }
      
    </footer>
  )
}

export default Footer
