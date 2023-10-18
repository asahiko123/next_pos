import Invoice from "../../../../public/invoice.svg"
import Alert from "../../../../public/risk-icon.svg"
import { SVGAttributes } from "react";

export type SvgIconProps = SVGAttributes<SVGElement> & {
    fileName: string;
    width: number;
    height: number;
  }
  

export const InvoicePreview = (props: SvgIconProps) => {
    return(
        <Invoice {...props} />
    )
}

export const AlertIcon = (props: SvgIconProps) => {
    return(
        <Alert {...props} />
    )
}