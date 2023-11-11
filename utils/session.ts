import { serialize, parse, CookieSerializeOptions } from 'cookie';
import { NextApiResponse, NextApiRequest } from 'next';

type CookieOptions = CookieSerializeOptions;

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: string,
  options?: CookieOptions
) => {
  const serializedCookie = serialize(name, value, options);
  res.setHeader('Set-Cookie', serializedCookie);
};

export const parseCookies = (req: NextApiRequest) => {
  return parse(req.headers.cookie || '');
};

export const getCookie = (req: NextApiRequest, name: string) => {
  const cookies = parseCookies(req);
  return cookies[name] || null;
};

export const removeCookie = (res: NextApiResponse, name: string, options?: CookieOptions) => {
  setCookie(res, name, '', { ...options, expires: new Date(0) });
};
