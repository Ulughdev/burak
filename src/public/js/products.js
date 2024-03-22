console.log("Products frontend javascript file");
function validateForm() {
    const productName = $(".product-name").val();
    const productStatus = $(".product-status").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    const productVolume = $(".product-volume").val();
    const productDescription = $(".product-description").val();

    if(
        productName === "" || 
        productPrice === "" || 
        productLeftCount === "" || 
        productCollection === "" ||
        productVolume === "" ||
        productDescription === "" ||
        productStatus === ""
    ){
        alert("Please insert all details!");
        return false;
    }else return true;

    
    //console.log("memberNick: ", memberNick);
}

function previewFileHandler(input, order) {
    const imgClassName = input.ClassName;
    console.log("imgClassName: ",imgClassName);
}