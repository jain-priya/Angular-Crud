app.controller("myctrl", (myfactory, $scope) => {
    console.log("Inside Controller");
    $scope.addProduct = () => {
        console.log("Inside controller Add");
        myfactory.productAdd($scope.prodname, $scope.price, $scope.desc, $scope.qty);
        console.log("ProductAdded");
        $scope.products = myfactory.itemArr;
        updateCount();
        clearFields();
    }
    $scope.delProduct = () => {
        var obj = myfactory.productDel();
        $scope.products = obj;
        updateCount();
    }
    $scope.update = () => {
        myfactory.updating($scope.prodname, $scope.price, $scope.desc, $scope.qty);
        $scope.products = myfactory.itemArr;
        clearFields();
        updateCount();
    }
    $scope.search = (name) => {
        var obj = myfactory.searchProd(name);
        $scope.products = obj;
    }
    $scope.list = () => {
        $scope.products = myfactory.itemArr;
    }
    $scope.markDelete = (obj) => {
        obj.Toggle();
        updateCount();
    }
    $scope.markEdit = (obj) => {
        obj.Edit();
        var prod = myfactory.toBeEditted();
        $scope.prodname = prod.prodname;
        $scope.price = prod.price;
        $scope.desc = prod.desc;
        $scope.qty = prod.qty;
        updateCount();
    }
    updateCount = () => {
        console.log("Inside Count");
        $scope.totRecord = myfactory.itemArr.length;
        $scope.selected = myfactory.select();
    }
    clearFields = () => {
        $scope.prodname = " ";
        $scope.price = 0;
        $scope.desc = " ";
        $scope.qty = 0;
    }
})
