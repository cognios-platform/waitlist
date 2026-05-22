import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import Learner from "@/lib/models/Learner";
import { sendWelcomeEmail } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    console.log("Learner signup request received");
    const body = await request.json();
    const { email, consent, category } = body;

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    if (consent !== true) {
      return NextResponse.json(
        {
          message: "You must agree to receive updates and the Privacy Policy.",
        },
        { status: 400 }
      );
    }

    await connectDb();

    const consent_timestamp = new Date();

    const existing = await Learner.findOne({ email: trimmedEmail });
    if (existing) {
      return NextResponse.json(
        { message: "This email is already on the waitlist." },
        { status: 409 }
      );
    }

    await Learner.create({
      email: trimmedEmail,
      category,
      consent: true,
      consent_timestamp,
      created_at: new Date(),
    });

    await sendWelcomeEmail(trimmedEmail);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Learner signup error:", err);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
