import React from "react";
import { useState } from "react";
import '../styles/Contact.css';

const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);


        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),

            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Form Sending Failed');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error('Form Sending Error:', error);
            setStatus('error');
        } finally {

            setLoading(false);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name and Surname"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <p className="success-msg">✅ Message sent successfully!</p>}
                {status === 'error' && <p className="error-msg">❌ Something went wrong. Try again.</p>}
            </form>
        </section>
    );

};

export default Contact;
