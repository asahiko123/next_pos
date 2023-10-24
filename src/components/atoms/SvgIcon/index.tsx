import Box from "components/layout/Box"
import dynamic, { Loader } from "next/dynamic"
import { FC, SVGProps } from "react"
import { SvgIconProps } from "types"


export const SvgIcon = ({ fileName, width, height, ...props}: SvgIconProps) => {

    const Icon = dynamic(() => 
        import("../SvgIconList").then(
            (module) => module[fileName as keyof Loader<SVGProps<SVGElement>>]
        )
    ) as FC<SVGProps<SVGElement>>

    return(
        <Box>
            <span className="icon">
                <Icon width={width} height={height} {...props} />
            </span>

            <style jsx>{`
                .icon {
                    display: block;
                    width: ${width}px;
                    height: ${height}px;
                  }
                  @media (max-width: 768px) {
                    .icon {
                      width: ${width}px;
                      height: ${height}px;
                    }
                  }
            
            `}
            </style>
        </Box>    
    )
}