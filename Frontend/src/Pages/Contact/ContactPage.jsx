import SendMessage from "../../Components/SendMessage/SendMessage"

const ContactPage = () => {
    return (
        <div>
            <div className='bg-gray-100 w-full h-80 flex flex-col justify-center items-center text-center'>
                <p className='font-sans text-gray-800 text-5xl font-medium'>Get In Touch <span className='text-gray-600'>MindSync</span></p>
                <p className='pt-5 font-sans text-gray-500 text-xl font-medium'>Have a questions or want to know more? we'd love to hear from you. </p>
            </div>

            <div className='w-full h-70 bg-white flex justify-center items-center'>
                <div className='w-1/3 flex flex-col items-center'>
                    <div className='w-12 h-12 rounded-full bg-gray-900 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                    </div>
                    <p className='font-sans font-medium text-xl text-gray-800 pt-3'>Email</p>
                    <p className='font-sans font-medium text-md text-gray-800 pt-2'>SahilDev123@gmail.com</p>
                    <p className='font-sans font-medium text-md text-gray-800'>SupportMindsync@gmail.com</p>
                </div>
                <div className='w-1/3 flex flex-col items-center'>
                    <div className='w-12 h-12 rounded-full bg-gray-900 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                    </div>
                    <p className='font-sans font-medium text-xl text-gray-800 pt-3'>Phone</p>
                    <p className='font-sans font-medium text-md text-gray-800 pt-2'>+91 9999 999 999</p>
                    <p className='font-sans font-medium text-md text-gray-800'>+91 9119 9919 999</p>
                </div>
                <div className='w-1/3 flex flex-col items-center'>
                    <div className='w-12 h-12 rounded-full bg-gray-900 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <p className='font-sans font-medium text-xl text-gray-800 pt-3'>Office</p>
                    <p className='font-sans font-medium text-md text-gray-800 pt-2'>Banarsidas Chandiwala Institue of Information Technology</p>
                    <p className='font-sans font-medium text-md text-gray-800'>Kalkaji, New Delhi - 110019</p>
                </div>
            </div>

            <div className='w-full h-160 bg-gray-100 pt-5'>
                <SendMessage/>
            </div>

            <div className="w-full h-145 bg-white flex flex-col items-center">
                <p className="text-center font-sans font-medium text-gray-800 text-4xl pt-10 pb-10">Find Us</p>
                <div className="w-4/5 h-100 bg-gray-200  flex items-center justify-center shadow-sm rounded-xl">
                <div>
                    <iframe className="h-100 w-338 rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.85231006652!2d77.26552877495347!3d28.5441585880894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e6f3387459%3A0x8d7393c84adeda8e!2sBanarsidas%20Chandiwala%20Institute%20of%20Hotel%20Management%20and%20Catering%20Technology.!5e0!3m2!1sen!2sin!4v1755587661145!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage