import { randomUUID } from "crypto";

export default class User {
  _uid: string;
  get uid(): string {
    return this._uid;
  }

  _name: string;
  get name(): string {
    return this._name;
  }

  _email: string;
  get email() {
    return this._email;
  }

  _username: string;
  get username(): string {
    return this._username;
  }

  _profile: string;
  get profile(): string {
    return this._profile;
  }

  _company: string;
  get company(): string {
    return this._company;
  }

  constructor(
    name: string,
    username: string,
    email: string,
    profile: string,
    uid?: string,
    company?: string
  ) {
    this._uid = uid ?? randomUUID();
    this._name = name;
    this._email = email;
    this._username = username;
    this._profile = profile;
    this._company = company || "";
  }

  toJson() {
    return {
      uid: this._uid,
      name: this._name,
      username: this._username,
      profile: this.profile,
      company: this._company,
      email: this._email,
    };
  }
}
