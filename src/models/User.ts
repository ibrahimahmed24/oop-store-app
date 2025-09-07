abstract class User {
     private static _nextId = 1;
     constructor(
          protected readonly userId: number,
          protected _name: string,
          protected _email: string
     ) { }

     abstract getRole(): string;

     abstract getPermissions(): string;

     public getinfo(): string {
  return `${this._name} (${this._email} ___Role: ${this.getRole()})`;
}


     get Name(): string {
          return this._name;
     }
     get Email(): string {
          return this._email;
     }

     set Name(newName: string) {
          if (!newName || newName.trim().length === 0) {
               throw new Error("Name cannot be empty");
          }
          if (newName.trim().length < 3) {
               throw new Error("Name must be at least 3 characters long");
          }
          this._name = newName.trim();
     }

     set Email(newEmail: string) {
          if (!newEmail || !this.IsEmail(newEmail)) {
               throw new Error("Invalid email address");
          }
          this._email = newEmail.toLowerCase().trim();
     }

     private IsEmail(email: string): boolean {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
     }
}
