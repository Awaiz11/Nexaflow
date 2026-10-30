import { NextResponse } from "next/server";
import { db } from "@/db";
import { previewRequests } from "@/db/schema";

export const runtime = "nodejs";

const cleanString = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Please send a valid request." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const businessName = cleanString(fields.businessName, 160);
  const industry = cleanString(fields.industry, 80);
  const discoveryUrl = cleanString(fields.discoveryUrl, 2048);
  const whatsappNumber = cleanString(fields.whatsappNumber, 40);

  if (businessName.length < 2 || !industry || whatsappNumber.replace(/\D/g, "").length < 7) {
    return NextResponse.json(
      { error: "Add your business name, industry and a valid WhatsApp number." },
      { status: 422 },
    );
  }

  if (discoveryUrl) {
    try {
      const url = new URL(discoveryUrl);
      if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("Invalid protocol");
    } catch {
      return NextResponse.json({ error: "Please enter a valid Google Maps or social profile URL." }, { status: 422 });
    }
  }

  try {
    const [record] = await db
      .insert(previewRequests)
      .values({ businessName, industry, discoveryUrl: discoveryUrl || null, whatsappNumber })
      .returning({ id: previewRequests.id });

    return NextResponse.json({ ok: true, id: record.id }, { status: 201 });
  } catch (error) {
    console.error("Failed to save preview request", error);
    return NextResponse.json({ error: "We couldn’t save your request just now. Please try again." }, { status: 500 });
  }
}
