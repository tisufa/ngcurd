import { AppConstant } from '../constant';
import { User } from './user';

export class Session {
  public user: User;
  public sessionId: string | null;
  private constructor() {}

  public setSessionId(sessionId: string): void {
    this.sessionId = sessionId;
    localStorage.setItem(AppConstant.create().SESSION_ID, sessionId);
  }

  public get isLoggedIn(): boolean {
    return !!this.sessionId;
  }

  public destroy(): void {
    this.sessionId = null;
    this.user = User.createEmpty();
    localStorage.removeItem(AppConstant.create().SESSION_ID);
  }

  public static create(): Session {
    const session = new Session();
    session.user = User.createEmpty();
    return session;
  }
}
