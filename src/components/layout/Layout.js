const { default: Footer } = require("./Footer");
const { default: Header } = require("./Header");

function Layout({children}) {
    const style = {minHeight: "700px"}
    return (
        <>
            <Header/>
            <div style={style}>{children}</div>
            <Footer/>
        </>
    )
}

export default Layout
