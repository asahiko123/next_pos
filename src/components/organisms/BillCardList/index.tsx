import Grid from 'components/layout/Grid'

interface BillCardListProps {
  numberPerRow?: number
}

const BillCardList = ({
  numberPerRow = 6,
  children,
}: React.PropsWithChildren<BillCardListProps>) => {
  return (
    <Grid
      gridGap={'16px'}
      gridTemplateColumns={{
        base: `repeat(${numberPerRow}, 1fr)`,
      }}
    >
      {children}
    </Grid>
  )
}

export default BillCardList
