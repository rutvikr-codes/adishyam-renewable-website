import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      companyName,
      email,
      phone,
      projectLocation,
      serviceOfInterest,
      projectDescription,
      preferredContactMethod,
      honeypot, // Anti-spam hidden field
    } = body;

    // Honeypot check: If filled, silently drop or reject as bot
    if (honeypot) {
      return NextResponse.json(
        { success: false, message: "Spam submission detected." },
        { status: 400 }
      );
    }

    // Validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter your full name.";
    }

    if (!companyName || typeof companyName !== "string" || companyName.trim().length < 2) {
      errors.companyName = "Please provide your company or organization name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid business email address.";
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      errors.phone = "Please enter a valid contact phone number.";
    }

    if (!projectLocation || typeof projectLocation !== "string" || projectLocation.trim().length < 2) {
      errors.projectLocation = "Please specify the anticipated project or site location.";
    }

    if (!serviceOfInterest || typeof serviceOfInterest !== "string") {
      errors.serviceOfInterest = "Please select a service of interest.";
    }

    if (!projectDescription || typeof projectDescription !== "string" || projectDescription.trim().length < 10) {
      errors.projectDescription = "Please provide at least 10 characters describing your project requirements.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted form errors.",
          errors,
        },
        { status: 422 }
      );
    }

    // Sanitize data
    const submissionRecord = {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      companyName: companyName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      projectLocation: projectLocation.trim(),
      serviceOfInterest,
      projectDescription: projectDescription.trim(),
      preferredContactMethod: preferredContactMethod || "Email",
    };

    // Log the structured submission to server logs
    console.log(
      "[ADISHYAM CONTACT FORM SUBMISSION RECEIVED]:",
      JSON.stringify(submissionRecord, null, 2)
    );

    /**
     * NOTE FOR PRODUCTION DEPLOYMENT:
     * When official SMTP or email API credentials (e.g., Resend, AWS SES, Nodemailer)
     * are supplied via environment variables (.env.local), attach the email dispatcher here.
     * Example:
     * if (process.env.SMTP_HOST && process.env.SMTP_USER) {
     *   await sendEmailNotification(submissionRecord);
     * }
     */

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out to Adishyam Renewable Private Limited. Your project inquiry has been received. Our site engineering and project coordination team will review your specifications and contact you within 1 business day.",
        inquiryId: `AR-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT API ERROR]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
