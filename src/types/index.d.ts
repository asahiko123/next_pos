export * from './data'
export * from './styles'

declare module '*.svg' {

    const content: React.FC<React.SVGProps<SVGAElement>>;
    export default content;
}
