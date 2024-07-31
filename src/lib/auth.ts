import { Err, Ok, type Result } from 'ts-results-es';
import type PocketBase from 'pocketbase';
import type { RecordAuthResponse, RecordModel } from 'pocketbase';

export async function login(
  pb: PocketBase,
  mail: string,
  password: string
): Promise<Result<RecordAuthResponse<RecordModel>, string>> {
  try {
    const authData = await pb.collection('users').authWithPassword(mail, password);
    return Ok(authData);
  } catch (e: unknown) {
    return Err('identifiants invalides');
  }
}
