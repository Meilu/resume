import { Request } from 'express';
import admin from 'firebase-admin';

declare global {
  namespace Express {
    export interface Request {
      user?: admin.auth.DecodedIdToken;
    }
  }
}
