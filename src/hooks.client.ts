/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event }) {
  event.locals;
}

pb.authStore.loadFromCookie(document.cookie);
pb.authStore.onChange(() => {
  currentUser.set(pb.authStore.model);
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
}, true);
