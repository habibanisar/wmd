function make_shirt(size: string = "large", message:string = "I love typescript"){
    console.log(`making a ${size} T-shirt with the ${message} printed on it`);
}
make_shirt();
make_shirt("medium");
make_shirt("small","Art is freedom");