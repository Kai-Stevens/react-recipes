const Header = ({headerNum, headerText}) => {
    return (
        <section className={"header-container-" + headerNum}>
            <div className={"header-" + headerNum}>{headerText}</div>
        </section>
    )
}

export default Header;