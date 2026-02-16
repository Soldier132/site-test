import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const rate = checkRateLimit(ip, 5, 60_000);

    if (!rate.ok) {
      return NextResponse.json(
        { message: "Слишком много запросов, попробуйте через минуту." },
        { status: 429 }
      );
    }

    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: parsed.error.issues[0]?.message ?? "Проверьте корректность данных."
        },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ message: "Спасибо!" }, { status: 200 });
    }

    console.info("[contact] lead", {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      message: parsed.data.message
    });

    return NextResponse.json({ message: "Заявка отправлена. Свяжемся с вами в течение 24 часов." });
  } catch {
    return NextResponse.json({ message: "Ошибка сервера. Попробуйте позже." }, { status: 500 });
  }
}
