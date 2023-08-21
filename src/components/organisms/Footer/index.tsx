import Link from 'next/link'
import styled from 'styled-components'
import { GitHubIcon } from 'components/atoms/IconButton'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Button from 'components/atoms/Button'
import { useEffect, useState } from 'react'
import Panel from 'components/molecules/Panel'
import Modal from 'components/molecules/Modal'
import { useSelectedBill } from 'contexts/SelectedBillContext'
import Alert from 'components/molecules/Alert'

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`


/**
 * フッター
 */
const Footer = () => {

  const [ isOpenModal , setIsOpenModal ] = useState(false)

  const toggleModal = (e:React.MouseEvent) => {
    console.log("toggle called")
    if(e.target === e.currentTarget){
      setIsOpenModal(!isOpenModal)
    }
  }

  useEffect(() => {
    console.log(isOpenModal)
  },[isOpenModal])

  const { selectedBill } = useSelectedBill()
  
  return (
    <footer>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <Box
          minWidth={{ base: '100%', md: '120px' }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                {/* <Anchor as="a">トップ</Anchor> */}
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                {/* <Anchor as="a">採用</Anchor> */}
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                {/* <Anchor as="a">お知らせ</Anchor> */}
              </Link>
            </Box>
          </nav>
        </Box>
        <Box
          minWidth={{ base: '100%', md: '120px' }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                {/* <Anchor as="a">利用規約</Anchor> */}
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                {/* <Anchor as="a">プライバシーポリシー</Anchor> */}
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                {/* <Anchor as="a">配送と返品</Anchor> */}
              </Link>
            </Box>
          </nav>
        </Box>
        <Box minWidth={{ base: '100%', md: '120px' }}>
          <nav>
            {/* <Anchor
              as="a"
              href="https://github.com/gihyo-book/ts-nextbook-app"
              target="_blank"
            >
              <GitHubIcon size={22} />
            </Anchor> */}

            <Button onClick={(e) => toggleModal(e)}>基本コース選択</Button>
            
          </nav>
        </Box>
      </Flex>
      <Box paddingTop={3} paddingBottom={2}>
        <Text>© 2021 Gijutsuhyoronsha Co., Ltd.. All rights reserved.</Text>
      </Box>
      {isOpenModal && selectedBill && (
        <Modal onClose={toggleModal}>
          <Panel onClose={toggleModal} bill={selectedBill}/>
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
