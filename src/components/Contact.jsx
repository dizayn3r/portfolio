import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Download, ExternalLink } from "lucide-react";

const fadeLeft  = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeRight = { hidden: { opacity: 0, x:  24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } } };

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent]  = useState(false);

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = `${form.message}\n\nFrom: ${form.name} <${form.email}>`;
        window.open(`mailto:skantin@sknt.in?subject=Portfolio Contact&body=${encodeURIComponent(body)}`);
        setSent(true);
        setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 4000);
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#13131f]">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">Contact</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Let's Work Together</h2>
                    <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
                        Ready to bring your ideas to life? I'm always excited to work on interesting projects. Let's create something extraordinary together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={fadeLeft}
                        className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl p-8 space-y-5"
                    >
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Name *</label>
                            <input
                                name="name" type="text" value={form.name}
                                onChange={handleChange} required placeholder="Your name"
                                className="w-full bg-gray-50 dark:bg-white/4 border border-gray-200 dark:border-white/8 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 transition-all duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Email *</label>
                            <input
                                name="email" type="email" value={form.email}
                                onChange={handleChange} required placeholder="your@email.com"
                                className="w-full bg-gray-50 dark:bg-white/4 border border-gray-200 dark:border-white/8 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 transition-all duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Message *</label>
                            <textarea
                                name="message" value={form.message} onChange={handleChange}
                                required rows={5} placeholder="Tell me about your project or opportunity..."
                                className="w-full bg-gray-50 dark:bg-white/4 border border-gray-200 dark:border-white/8 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 transition-all duration-200 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20"
                        >
                            {sent ? "Message sent! ✓" : (<>Send Message <span className="text-lg">→</span></>)}
                        </button>
                    </motion.form>

                    {/* Info */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={fadeRight}
                        className="flex flex-col gap-6"
                    >
                        <div className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl p-6">
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5">Or reach out directly</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: <Mail size={15} />,   label: "Email",    value: "skantin@sknt.in",                  href: "mailto:skantin@sknt.in"      },
                                    { icon: <Phone size={15} />,  label: "Phone",    value: "+91 783 899 8914",                  href: "tel:+917838998914"            },
                                    { icon: <MapPin size={15} />, label: "Location", value: "Ghaziabad, Uttar Pradesh, India",   href: null                          },
                                ].map(({ icon, label, value, href }) => (
                                    <div key={label} className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                                            {icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">{label}</p>
                                            {href ? (
                                                <a href={href} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-6">
                                <a
                                    href="mailto:skantin@sknt.in"
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                                >
                                    <Mail size={13} /> Send Email
                                </a>
                                <a
                                    href="/CV.pdf"
                                    download
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white dark:bg-[#0f0f17] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-semibold transition-colors"
                                >
                                    <Download size={13} /> Download CV
                                </a>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/8 rounded-2xl p-6">
                            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Find me on</p>
                            <div className="flex flex-col gap-3">
                                {[
                                    { icon: <Github size={15} />,   href: "https://github.com/dizayn3r",           label: "GitHub",   sub: "github.com/dizayn3r"          },
                                    { icon: <Linkedin size={15} />, href: "https://www.linkedin.com/in/skantin/",  label: "LinkedIn", sub: "linkedin.com/in/skantin"       },
                                    { icon: <ExternalLink size={15}/>, href: "https://sknt.in",                    label: "Website",  sub: "sknt.in"                       },
                                ].map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-white/6 hover:border-blue-200 dark:hover:border-blue-500/20 hover:bg-blue-50 dark:hover:bg-blue-500/5 transition-all duration-200 group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {s.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{s.label}</p>
                                            <p className="text-xs text-gray-400">{s.sub}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
