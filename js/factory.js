app.factory("myfactory", function () {
    console.log("Inside Factory");
    var object = {
        pid: 0,
        itemArr: [],
        productAdd(prodname, price, desc, qty) {
            this.pid++;
            var obj = new Product(this.pid, prodname, price, desc, qty);
            this.itemArr.push(obj);
            console.log(obj);
        },
        productDel() {
            this.itemArr = this.itemArr.filter((obj) => {
                return !obj.markForDeletion;
            });
            return this.itemArr;

        },
        toBeEditted() {
            console.log("toBe editted.....");
            return this.itemArr.filter((obj) => {
                return obj.markForEdit;
            })[0];
        },
        updating(prodname, price, desc, qty) {
            var obj = this.toBeEditted();
            obj.prodname = prodname;
            obj.price = price;
            obj.desc = desc;
            obj.qty = qty;
            this.itemArr.filter((x) => {
                if (obj.pid = x.pid)
                    x = obj;
            });
            obj.markForEdit = false;
        },
        searchProd(name) {
            return this.itemArr.filter((obj) => {
                if (name == obj.prodname)
                    return obj;
            })
        },
        select() {
            console.log("Inside Select..");
            var obj = this.itemArr.filter((obj) => {
                return obj.markForDeletion || obj.markForEdit;
            });
            return obj.length;
        }
    }
    return object;
})
