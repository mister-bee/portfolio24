import React, { useState } from 'react';
import './ContactForm.css'; // Ensure you import the CSS file

// https://www.cognaitiv.ai/

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement what you want to do with the form data here
        console.log(formData);
    };

    return (
        <div className="contact-form-container">
            <h2 className="heading-secondary">Automate Your Business.</h2>
            <h1 className="heading-primary">Reduce Costs. Increase Profit. Simple!</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>
                <div className="input-group">
                    <textarea
                        name="message"
                        placeholder="Tell us about your automation requirements.."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="input-field input-textarea"
                    />
                </div>
                <button type="submit" className="submit-button">SEND</button>
            </form>
        </div>
    );
};

export default ContactForm;
