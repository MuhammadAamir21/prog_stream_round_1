var express = require("express");

var app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    next();
  });

function calculate ( requiredBottles , prices , pieces )
{
    var b=0;
    var arr=[0,0,0,0];
    var q=requiredBottles;
        
    for (let i = pieces.length-1; i >= 0; i--) {
            
        if(q===0){
            break;
        }
        if (q>=pieces[i]) {
              
            b=Math.floor(q/pieces[i]);
            arr[i]=b
            arr[3]+=b*prices[i];
            q=q-b*pieces[i];

        }
            
    }
    return arr;
}


app.post("/Task1", (req, res, next) => {

    var arr=calculate(req.body.requiredBottles,req.body.prices,req.body.pieces);

    res.json({
        "bottles" : arr[0],
        "packs": arr[1],
        "Box": arr[2],
        "price" : arr[3]
        });
});

app.post("/Task2", (req, res, next) => {
    
    var pieces=[];
    var prices=[];

    if(req.piece.quantity!=null)
    {
        pieces.append(req.piece.quantity)
    }
    if(req.pack.quantity!=null)
    {
        pieces.append(req.pack.quantity)
    }
    if(req.box.quantity!=null)
    {
        pieces.append(req.box.quantity)
    }

    if(req.piece.price!=null)
    {
        prices.append(req.piece.price)
    }
    if(req.pack.price!=null)
    {
        prices.append(req.pack.price)
    }
    if(req.box.price!=null)
    {
        prices.append(req.box.price)
    }



   console.log(req.body)
   console.log(prices)
   console.log(pieces)

    res.json(req.body);
});
app.post("/Task3", (req, res, next) => {

    

    res.json(req.body);
});

app.get("/Task2", (req, res, next) => {
    
   
    res.json({
        "pricelist": [
            {
                "piece": {
                    "name": "Bottle",
                    "quantity": 1,
                    "price": 410
                },
                "pack": {
                    "name": "11-pack",
                    "quantity": 11,
                    "price": 4000
                },
                "box": {
                    "name": "Big box",
                    "quantity": 264,
                    "price": 950
                }
            },
            {
                "piece": {
                    "name": "Chocolade bar",
                    "quantity": 1,
                    "price": 300
                },
                "pack": {
                    "name": "Chocolade pack",
                    "quantity": 5,
                    "price": 1450
                }
            },
            {
                "piece": {
                    "name": "Biscuit",
                    "quantity": 3,
                    "price": 450
                }
            }
        ]
    });
});



app.listen(4000, () => {
 console.log("Server running on port 4000");
});