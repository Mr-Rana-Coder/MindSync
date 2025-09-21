import { Contact } from "../Models/contact.model.js";
import { apiError } from "../Utils/apiError.js";
import { apiResponse } from "../Utils/apiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";

const sendMessage = asyncHandler(async (req, res,next) => {
    const { firstName, lastName, email, message } = req.body;
    if ([firstName, lastName, email, message].some((field) => (field?.trim === " "))) {
        return next(new apiError(401, "All fields are required"))
    }

    const contact = await Contact.create({
        firstName, lastName, email, message
    })

    if (!contact) return next(new apiResponse(500, "Unable to store the message in the model"))

    return res
        .status(200)
        .json(new apiResponse(200, {
            contact
        }, "Message Sent successfully"))
})

export {
    sendMessage
}