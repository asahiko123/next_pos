import Box  from "components/layout/Box";
import Flex from "components/layout/Flex";
import Layout from "components/templates/Layout";
import BillCardListContainer from "containers/BillCardListContainer";
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import getAllBills from "services/bills/getAllBills";
import { ApiContext } from "types";



type MainBoardProps = InferGetStaticPropsType<typeof getStaticProps>

const MainBoard: NextPage<MainBoardProps> = () => {

    return(
        <Layout>
            <Flex
                paddingTop={2}
                paddingBottom={2}
                paddingLeft={{ base:2 , md: 0}}
                paddingRight={{ base:2, md: 0}}
                justifyContent = "center">
                    <Box width="1180px">
                        <Box marginBottom={2}>
                            <BillCardListContainer  />
                        </Box>
                    </Box>
                </Flex>
        </Layout>
    )
}


export const getStaticProps  = async({params}: GetStaticPropsContext) => {
    const context :ApiContext = {
        apiRootUrl: process.env.API_BASE_URL || 'http://localhost:3000'
    }


    const [bills] = await getAllBills(context)


    return{
        props: {
            bills: bills ?? []
        },
        revalidate: 10,
    }
}

export default MainBoard

