

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div className="footer max-w-6xl mx-auto">
                <aside>
                    <h5 className="text-3xl font-medium">CareerHub</h5>
                    <p>There are many variations of passages 
                    <br />of Lorem Ipsum , but the majority have 
                    <br />suffered alteration in some form.</p>
                </aside>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <header className="footer-title">Product</header>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">524 Broadway, NYC</a>
                    <a className="link link-hover">+1777-978-5570</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;