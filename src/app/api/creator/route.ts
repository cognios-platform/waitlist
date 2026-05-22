import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import Creator from "@/lib/models/Creator";
import { sendWelcomeEmail } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, category, link, consent } = body;

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 },
      );
    }

    await connectDb();

    await Creator.create({
      email: email.trim().toLowerCase(),
      category,
      link: link?.trim() || "",
      consent: consent,
      consent_timestamp: new Date(),
    });

    await sendWelcomeEmail(email.trim().toLowerCase());

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Founding creator application error:", err);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
