import ContactForm from "./footerComponents/contactForm";
import Services from "./footerComponents/services";

export default function Footer() {
    return (
        <div className="footer">
            <Services />
            <ContactForm />
        </div>
    )
}