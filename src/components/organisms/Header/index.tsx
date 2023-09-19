  import Link from 'next/link'
  import styled from 'styled-components'
  import AppLogo from 'components/atoms/AppLogo'
  import Button from 'components/atoms/Button'
  import { SearchIcon, PersonIcon } from 'components/atoms/IconButton'
  import ShapeImage from 'components/atoms/ShapeImage'
  import Spinner from 'components/atoms/Spinner'
  import Text from 'components/atoms/Text'
  import Box from 'components/layout/Box'
  import Flex from 'components/layout/Flex'
  import { useAuthContext } from 'contexts/AuthContext'
import SignOutButtonContainer from 'containers/SignOutButtonContainer'

  const HeaderRoot = styled.header`
    height: 88px;
    padding: ${({ theme }) => theme.small} 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  `

  const Nav = styled(Flex)`
    & > span:not(:first-child) {
      margin-left: ${({ theme }) => theme.small};
    }
  `

  const NavLink = styled.span`
    display: inline;
  `

  const Anchor = styled(Text)`
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `

  /**
   * ヘッダー
   */
  const Header = () => {
    const { authUser, isLoading } = useAuthContext()

    return (
      <HeaderRoot>
        <Flex paddingLeft={3} paddingRight={3} justifyContent="space-between">
          <Nav as="nav" height="56px" alignItems="center">


            <NavLink>
              {(() => {
                if (authUser) {
                  return (
                    <Flex flexDirection="row">
                      <ShapeImage
                            shape="circle"
                            src={'https://placehold.jp/50x50.png'}
                            width={50}
                            height={50}
                            data-testid="profile-shape-image"
                            alt={''}
                          />
                      <Flex flexDirection="column">
                        <Text>{`${authUser.username}`}</Text>
                        <Text>{`${authUser.description}`}</Text>
                      </Flex>            
                    </Flex>
                  )
                } else{

                }
              })()}

            
            </NavLink>     
          </Nav>
          {
            (()=> {
              if(authUser){
                return(
                   <SignOutButtonContainer />
                  )
              }
              else{
                
              }

            })()
          }
         
        </Flex>
      </HeaderRoot>
    )
  }

  export default Header
