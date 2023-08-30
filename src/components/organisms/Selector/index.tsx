import Select from 'react-select'
import { courceOptions } from 'utils/data'
import makeAnimated from 'react-select/animated'

const selector = () => {

    const animatedComponents = makeAnimated();

    return(
        <Select 
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[courceOptions[0]]}
            isMulti
            options={courceOptions} />
    )
}

export default selector;