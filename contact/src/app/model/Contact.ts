export  class Contact {
  
    firstname: String;
    lastname: String;
    email: String;
    phone: String;

    constructor(fname:String,  lname: String,ph: String,mail:String ) {
        this.firstname = fname;
        this.lastname = lname;
        this.phone = ph;
        this.email = mail;
    } 
}