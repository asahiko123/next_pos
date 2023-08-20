import ReactDOM from "react-dom";

const Portal = ({ children }: any) => {
    const attachElement = document.getElementById('portal')
    return attachElement ? ReactDOM.createPortal(children, attachElement) : null
}

export default Portal