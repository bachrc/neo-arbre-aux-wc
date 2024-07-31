import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { login } from '$lib/auth';

// Define outside the load function so the adapter can be cached
const loginSchema = z.object({
  mail: z.string().email(),
  password: z.string()
});

export const actions = {
  default: async ({ request, locals }) => {
    const form = await superValidate(request, zod(loginSchema));
    console.log(form);

    if (!form.valid) {
      return { form };
    }

    const authData = await login(locals.pb, form.data.mail, form.data.password);

    if (authData.isErr()) {
      return fail(400, { form });
    }
    return message(form, 'Form posted successfully!');
  }
};

export const load = async () => {
  const form = await superValidate(zod(loginSchema));

  // Always return { form } in load functions
  return { form };
};
