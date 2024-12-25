import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(new URL("/", requestUrl.origin));
    }
  }

  // If there's no code or an error occurred, redirect to sign-in
  return NextResponse.redirect(new URL("/sign-in", requestUrl.origin));
}
