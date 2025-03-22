export default function Contact() {
    return (
        <section id="contact" className="bg-white dark:bg-gray-800 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-black dark:text-white">Contact Me</h2>
                <p className="mt-4 text-black dark:text-white">Feel free to reach out for collaborations or just a friendly hello.</p>
                <div className="mt-8 space-y-4">
                    <p className="text-black dark:text-white">Email: <a href="mailto:skantin21@gmail.com" className="underline text-black dark:text-white">skantin21@gmail.com</a></p>
                    <p className="text-black dark:text-white">Phone: <a href="tel:7838998914" className="underline text-black dark:text-white">7838998914</a></p>
                </div>
            </div>
        </section>
    );
}