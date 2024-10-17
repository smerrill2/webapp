// src/app/api/submitForm/route.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServerClient';

export async function POST(req: NextRequest) {
  const formData = await req.json();

  // Log received form data
  console.log('Received form data:', formData);

  // Validate incoming data
  const { name, email, phone, company, state } = formData;
  if (!name || !email || !phone || !company || !state) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    // Log the data that's about to be inserted
    console.log('Inserting data to Supabase:', formData);

    const { data, error, status } = await supabaseServer
      .from('form_submissions')
      .insert([formData]);

    // Log the response from Supabase
    console.log('Supabase response:', error);

    if (error) {
      console.error('Error inserting data:', error);
      return NextResponse.json({ error: error.message, details: error.details }, { status });
    }

    console.log('Data inserted successfully:', data);
    return NextResponse.json({ message: 'Form submitted successfully', data }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 });
  }
}