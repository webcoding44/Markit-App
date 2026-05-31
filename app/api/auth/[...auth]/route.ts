import { getAuthInstance } from '@/lib/better-auth/auth';

export const GET = async (request: Request) => {
  const auth = await getAuthInstance();
  return auth.handler(request as any);
};

export const POST = GET;
export const PUT = GET;
export const DELETE = GET;
export const PATCH = GET;
export const OPTIONS = GET;
