import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { Page } from 'types/layout';
import { LayoutProvider } from 'layout/context/layoutcontext';
import Layout from 'layout/layout';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '/styles/layout/layout.scss';
import '/styles/demo/Demos.scss';

type Props = AppProps & {
    Component: Page;
};

export default function MyApp({ Component, pageProps }: Props) {
    const [hydrated, setHydrated] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return null;
    }

    if (Component.getLayout) {
        return <LayoutProvider>{Component.getLayout(<Component {...pageProps} />)}</LayoutProvider>;
    } else {
        return (
            <LayoutProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </LayoutProvider>
        );
    }
}
