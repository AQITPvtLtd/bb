import Form from '@/app/contact-us/Form'
import React from 'react'

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Map Section */}
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                        Location Map
                    </h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.88259577845!2d77.30471724732683!3d28.633280613108198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfba32e6d9de1%3A0xc08f969098a283ba!2sDr.%20Bhupendra%20Pratap%20Bharti!5e0!3m2!1sen!2sin!4v1728040420595!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg shadow-md"
                    ></iframe>
                </div>

                {/* Contact Form Section */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                    {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
                        Get in Touch
                    </h2> */}
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact
