import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, description, keywords, author }) => {//we can take props but then we have to use props.children but here we have destructure the props 
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "75.5vh" }}>
            <Toaster/>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title:"Ecommerce App - shop now",
    description:"MERN Stack App",
    keywords:"mern,react,node,mongoDB",
    author:"Sujal Mandalia"

}

export default Layout