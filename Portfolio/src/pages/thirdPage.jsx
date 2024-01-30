import { useState, useEffect } from "react";
import axios from 'axios';


export default function ThirdPage() {

    // const initialValues = { firstName: "", lastName: "", email: "", number: "", message: "" };
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // const handleChange = (event) => {
    //     setFormValues(prevFormValues => {
    //         return {
    //             ...prevFormValues,
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // }

    const clear = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setNumber("");
        setMessage("");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormErrors(validate(firstName));
        setFormErrors(validate(lastName));
        setFormErrors(validate(email));
        setFormErrors(validate(number));
        setFormErrors(validate(message));
        setIsSubmit(true);
        try {
            await axios.post("http://localhost:3001/auth/register", {
                firstName,
                lastName,
                email,
                number,
                message
            });
        } catch (err) {
            console.log(err)
        }
        clear();
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(firstName);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!firstName) {
            errors.firstName = "First Name is required!"
        }
        if (!lastName) {
            errors.lastName = "Last Name is required!"
        }
        if (!email) {
            errors.email = "Email is required!"
        } else if (!regex.test(email)) {
            errors.email = "This is not a valid email format!"
        }
        if (!number) {
            errors.number = "Phone Number is required!"
        }
        if (!message) {
            errors.message = "Please send a message"
        }
        return errors;
    }

    return (
        <div className="third-page-container" id="contact">
            <div className="contact-div">
                <h1 className="contact-header">Contact Me</h1>
            </div>
            <div className="form-container">

                <div className="labels">
                    <label htmlFor="firstName">First Name *</label>
                    <label htmlFor="lastName">Last Name *</label>
                    <label htmlFor="email">Email *</label>
                    <label htmlFor="number">Phone Number *</label>
                    <label htmlFor="message">Message *</label>
                </div>

                <div className="forms">
                    <form className="forms">
                        <input type="text" name="firstName" id="firstName" placeholder="Enter First Name" value={firstName}
                            onChange={(event) => setFirstName(event.target.value)} />
                        <p className="error-message">{formErrors.firstName}</p>
                        <input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" value={lastName}
                            onChange={(event) => setLastName(event.target.value)} />
                        <p className="error-message">{formErrors.lastName}</p>
                        <input type="email" name="email" id="email" placeholder="Enter Email" value={email}
                            onChange={(event) => setEmail(event.target.value)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        <p className="error-message">{formErrors.email}</p>
                        <input type="text" name="number" id="number" placeholder="Enter Phone Number" value={number}
                            onChange={(event) => setNumber(event.target.value)} />
                        <p className="error-message">{formErrors.number}</p>
                        <textarea type="text" name="message" id="message" className="contact-message-box" value={message}
                            onChange={(event) => setMessage(event.target.value)} />
                        <p className="error-message">{formErrors.message}</p>
                    </form>
                </div>

            </div>

            <div className="sign-up-button-container">
                <button className="sign-up-button" onClick={handleSubmit}>Submit</button>
            </div>

        </div>

    )
}