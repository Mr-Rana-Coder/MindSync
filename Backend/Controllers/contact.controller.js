import { Contact } from "../Models/contact.model";
import { apiError } from "../Utils/apiError";
import { apiResponse } from "../Utils/apiResponse";
import { asyncHandler } from "../Utils/asyncHandler";

const sendMessage = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    if ([firstName, lastName, email, message].some((field) => (field?.trim === " "))) {
        throw new apiError(401, "All fields are required")
    }

    const contact = await Contact.create({
        firstName, lastName, email, message
    })

    if (!contact) throw new apiResponse(500, "Unable to store the message in the model")

    return res
        .status(200)
        .json(new apiResponse(200, {
            contact
        }, "Message Sent successfully"))
})

export {
    sendMessage
}