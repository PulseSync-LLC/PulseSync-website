declare module '*.module.scss' {
    const content: { [key: string]: string };
    export default content;
}

declare module '*.module.css' {
    const content: { [key: string]: string };
    export default content;
}

declare module '*.svg' {
    import { FC, SVGProps } from 'react'
    const content: FC<SVGProps<SVGElement>>
    export default content
}