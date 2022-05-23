// const product ={
    //     brand:'Nike',
    //     logo:'right',
    //     seller:'AWS'
    // }

    // let p1=Object.create(product);
    // console.log(p1);


    // function Product(type){
    //     this.type=type;
    //     this.brand="nike";
    //     this.logo="URL";
    //     this.seller="flipkart";
    // }

    // Product.prototype.discount=function(){
    //     console.log("50% Discount");
    // }
    
    // let p1 =new Product("shoe");
    // let p2 =new Product("sneaker");
    // console.log(p1);
    // console.log(p2);

    // let arr=[1,2,3];

    // let arr2=new Array(1,2,3);
    // console.log(arr2);

    function myArray(){

        Object.defineProperty(this,"length",{
            value:0,
            writable:true,
            enumerable:false
        });

        this.length=arguments.length;

        for(let i=0;i<arguments.length;i++)
        {
            this[i]=arguments[i];
        }
    }

    let arr3=new myArray(1,2,3,4,5);

    console.log(Object.values(arr3));

