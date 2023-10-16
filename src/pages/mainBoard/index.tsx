
import Box  from "components/layout/Box";
import Flex from "components/layout/Flex";
import Layout from "components/templates/Layout";
import BillCardListContainer from "containers/BillCardListContainer";
import PaymentDetailContainer from "containers/PaymentDetailContainer";
import { SelectedBillContextProvider, useSelectedBill } from "contexts/SelectedBillContext";
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import getAllBills from "services/bills/getAllBills";
import { ApiContext } from "types";
import { useAuthGuard } from "utils/hooks";


type MainBoardProps = InferGetStaticPropsType<typeof getStaticProps>

const MainBoard: NextPage<MainBoardProps> = ({ bills }) => {

   useAuthGuard()


    return(
        <SelectedBillContextProvider>
        <Layout>
            <Flex
                paddingTop={2}
                paddingBottom={2}
                paddingLeft={{ base:2 , md: 0}}
                paddingRight={{ base:2, md: 0}}
                justifyContent = "space-between"
                id="portal">
                    <Box marginBottom={2}
                         width={{ base: '100%', md: '100%'}}>
                            <BillCardListContainer bills={bills}/>
                    </Box>
                    <Box width={{ base: '50%', md: '50%'}}>
                            <PaymentDetailContainer />
                    </Box>
                    
            </Flex>
        </Layout>
        </SelectedBillContextProvider>
    )
}


export const getStaticProps  = async({params}: GetStaticPropsContext) => {
    const context :ApiContext = {
        apiRootUrl: process.env.API_BASE_URL || 'http://localhost:8000'
    }


    const bills = await getAllBills(context)


    return{
        props: {
            bills: bills ?? []
        },
        revalidate: 10,
    }
}

export default MainBoard

