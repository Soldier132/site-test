const store = new Map<string, { count: number; expires: number }>();

export function checkRateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const current = store.get(key);

  if (!current || current.expires < now) {
    store.set(key, { count: 1, expires: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (current.count >= limit) {
    return { ok: false, remaining: 0 };
  }

  current.count += 1;
  store.set(key, current);
  return { ok: true, remaining: limit - current.count };
}
