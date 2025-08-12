import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const name = form.get('name');
  const email = form.get('email');
  const asunto = form.get('asunto');
  const message = form.get('message');
  const cel = form.get('cel'); 
  const countryCode = form.get('countryCode');

  console.log({ name, email, message, asunto, cel, countryCode, });

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
