class HTTP {
    
    constructor() {
    }

     static GET(url) {
        return new Promise(
            /* executor */
            function(resolve, reject) {
                resolve();
            }
        );
     }
}

export  {HTTP};

