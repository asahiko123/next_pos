// import Invoice from "../../../../public/invoice.svg"
import Alert from "../../../../public/risk-icon.svg"
import { SVGAttributes } from "react";

export type SvgIconProps = SVGAttributes<SVGElement> & {
    fileName: string;
    width: number;
    height: number;
    billTotal: number;
  }
  

export const InvoicePreview = (props: SvgIconProps) => {
    return(
        // <Invoice {...props} />
        <svg width="574" height="284" viewBox="0 0 574 284" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="&#233;&#160;&#152;&#229;&#143;&#142;&#230;&#155;&#184;">
        <rect id="Rectangle 1" x="42.8895" y="114.158" width="515.527" height="37.5549" fill="#D9D9D9" stroke="black" stroke-width="0.426761"/>
        <g id="Rectangle 2">
        <mask id="path-2-inside-1_101_2" fill="white">
        <path d="M43.1028 47.3704H225.756V81.5113H43.1028V47.3704Z"/>
        </mask>
        <path d="M43.1028 47.3704H225.756V81.5113H43.1028V47.3704Z" fill="white"/>
        <path d="M225.756 81.0845H43.1028V81.938H225.756V81.0845Z" fill="black" mask="url(#path-2-inside-1_101_2)"/>
        </g>
        <text id="&#227;&#129;&#138;&#232;&#166;&#139;&#231;&#169;&#141;&#230;&#155;&#184;" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="27.3127" letter-spacing="0em"><tspan x="266.299" y="37.0312">&#x9818;&#x53ce;&#x66f8;</tspan></text>
        <text id="&#229;&#190;&#161;&#228;&#184;&#173;" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="11.0958" letter-spacing="0em"><tspan x="195.67" y="71.8898">&#x5fa1;&#x4e2d;</tspan></text>
        <text id="&#228;&#184;&#139;&#232;&#168;&#152;&#227;&#128;&#129;&#230;&#173;&#163;&#227;&#129;&#171;&#233;&#160;&#152;&#229;&#143;&#142;&#227;&#129;&#132;&#227;&#129;&#159;&#227;&#129;&#151;&#227;&#129;&#190;&#227;&#129;&#151;&#227;&#129;&#159;&#227;&#128;&#130;" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="11.0958" letter-spacing="0em"><tspan x="41.3958" y="108.378">&#x4e0b;&#x8a18;&#x3001;&#x6b63;&#x306b;&#x9818;&#x53ce;&#x3044;&#x305f;&#x3057;&#x307e;&#x3057;&#x305f;&#x3002;</tspan></text>
        <text id="&#239;&#191;&#165;" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="23.0451" letter-spacing="0em"><tspan x="142.538" y="141.316">&#xffe5;</tspan></text>
        <g id="Rectangle 3">
        <mask id="path-8-inside-2_101_2" fill="white">
        <path d="M43.1028 160.462H204.845V180.093H43.1028V160.462Z"/>
        </mask>
        <path d="M43.1028 160.462H204.845V180.093H43.1028V160.462Z" fill="white"/>
        <path d="M204.845 179.666H43.1028V180.52H204.845V179.666Z" fill="black" mask="url(#path-8-inside-2_101_2)"/>
        </g>
        <text id="&#228;&#189;&#134;" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="11.0958" letter-spacing="0em"><tspan x="43.1028" y="173.245">&#x4f46;</tspan></text>
        <g id="Rectangle 4">
        <rect x="40.5422" y="194.603" width="78.5239" height="72.5493" fill="white"/>
        <rect x="40.7556" y="194.816" width="78.0972" height="72.1225" stroke="black" stroke-opacity="0.5" stroke-width="0.426761"/>
        </g>
        <text id="&#227;&#128;&#146;" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="11.0958" letter-spacing="0em"><tspan x="377.683" y="221.469">%&#x4f1a;&#x793e;&#x4f4f;&#x6240;%</tspan></text>
        <text id="%&#228;&#188;&#154;&#231;&#164;&#190;&#229;&#144;&#141;%" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="11.0958" letter-spacing="0em"><tspan x="377.683" y="209.093">%&#x4f1a;&#x793e;&#x540d;%</tspan></text>
        <text id="%&#233;&#161;&#167;&#229;&#174;&#162;&#229;&#144;&#141;%" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="15.3634" letter-spacing="0em"><tspan x="77.7771" y="70.8811">%&#x9867;&#x5ba2;&#x540d;%</tspan></text>
        {/* <text id="&#239;&#188;&#133;&#229;&#144;&#136;&#232;&#168;&#136;&#233;&#135;&#145;&#233;&#161;&#141;%" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="20.4845" letter-spacing="0em"><tspan x="268.432" y="141.452">%&#x5408;&#x8a08;&#x91d1;&#x984d;%</tspan></text> */}
        <text id="&#239;&#188;&#133;&#229;&#144;&#136;&#232;&#168;&#136;&#233;&#135;&#145;&#233;&#161;&#141;%" fill="black" xmlSpace="preserve" style={{ whiteSpace: 'pre'}} font-family="Inter" font-size="20.4845" letter-spacing="0em"><tspan x="268.432" y="141.452">{`${props.billTotal}`}</tspan></text>
        </g>
        </svg>

    )
}

export const AlertIcon = (props: SvgIconProps) => {
    return(
        <Alert {...props} />
    )
}