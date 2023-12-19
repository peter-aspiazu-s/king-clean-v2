import { FC, ReactNode, useState } from "react";
import Head from "next/head";

import { TopContactBar } from '../components/topContactBar/TopContactBar';
import { HeaderComponent } from '../components/header/HeaderComponent';
import { FooterComponents } from '../components/footer/FooterComponents';


interface PropsLayout {
    title: string;
    description: string;
    keywords: string;
    children: ReactNode;
}

export const Layout: FC<PropsLayout> = ({title, description, keywords, children}) => {

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}  />
                <meta name="keywords" content={keywords}  />
            </Head>
            <TopContactBar />
            <HeaderComponent isOpen={isOpen} setIsOpen={setIsOpen} />


            {children}

            <FooterComponents />
        </>
    )
}