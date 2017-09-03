class Product {
    constructor(pid, prodname, price, desc, qty) {
        this.pid = pid;
        this.prodname = prodname;
        this.price = price;
        this.desc = desc;
        this.qty = qty;
        this.markForDeletion = false;
        this.markForEdit = false;
        console.log("Inside Cons..");
    }
    Toggle() {
        console.log("Inside Toggle");
        this.markForDeletion = !this.markForDeletion;
        console.log(this.markForDeletion);
    }
    Edit() {
        console.log("Edit...");
        this.markForEdit = !this.markForEdit;
    }
}
