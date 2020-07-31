import React from 'react';
import './page.styles.scss';

function Page({ children }) {
    return <section className="page">{children}</section>
}

export default Page;