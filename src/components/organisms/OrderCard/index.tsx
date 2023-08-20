import styled from 'styled-components'
import ScaleImage from 'components/atoms/ScaleImage'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import { table } from 'console'

interface OrderCardProps {
  raitenId: number
  dayId: number
  table: string
  price: number
  imageUrl?: string
  blurDataUrl?: string
  variant?: 'listing' | 'small' | 'detail' | 'nomal'
}

const OrderCardContainer = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  
`

const OrderCardImageContainer = styled.div`
  z-index: 99;
`

const OrderCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`

const OrderCard = ({
  raitenId,
  dayId,
  table,
  price,
  imageUrl,
  blurDataUrl,
  variant = 'nomal',

}: OrderCardProps) => {
  const { size, imgSize } = (() => {
    switch (variant) {
      case 'detail':
        return { size: { base: '320px', md: '540px' }, imgSize: 540 }
      case 'listing':
        return { size: { base: '160px', md: '240px' }, imgSize: 240 }
      case 'nomal':
        return { size: { base: '150px', md: '150px'}, imgSize: 150}
      default:
        return { size: { base: '160px' }, imgSize: 160 }
    }
  })()

  return (
    <OrderCardContainer>
      {variant !== 'small' && (
        <OrderCardInfo>
          <Box>
            <Text
              as="h2"
              fontSize={{ base: 'small', md: 'mediumLarge' }}
              letterSpacing={{ base: 2, md: 3 }}
              lineHeight={{ base: '32px', md: '48px' }}
              backgroundColor="white"
              margin={0}
              paddingRight={2}
              paddingLeft={2}
              paddingTop={0}
              paddingBottom={0}
            >
              {table}
            </Text>
            <Text
              as="span"
              fontWeight="bold"
              display="inline-block"
              backgroundColor="white"
              fontSize={{ base: 'extraSmall', md: 'medium' }}
              lineHeight={{ base: '8px', md: '12px' }}
              letterSpacing={{ base: 2, md: 4 }}
              margin={0}
              padding={{ base: 1, md: 2 }}
            >
              {price}円
            </Text>
          </Box>
        </OrderCardInfo>
      )}
      <OrderCardImageContainer>
        {blurDataUrl && imageUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
            alt={''}
          />
        )}
        {!blurDataUrl && imageUrl &&(
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
            alt={''}
          />
        )}
      </OrderCardImageContainer>
      {variant === 'small' && (
        <Box marginTop={1}>
          <Text as="h1" variant="medium" margin={0} padding={0}>
            {raitenId}
          </Text>
          <Text as="span" variant="medium">
            {price}円
          </Text>
        </Box>
      )}
    </OrderCardContainer>
  )
}

export default OrderCard
