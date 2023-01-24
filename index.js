// var ex=require("express");
// var app=ex()

// const bodyParser =require("body-parser")
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())

// const cors=require("cors")
// app.use(cors());

// const path =require('path')

// const multer = require("multer");


// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"./profilePic");
//     },
//     filename:function(req,file,cb){
//         cb(null,Date.now()+path.extname(file.originalname));
//     },
// });

// var upload = multer({
//     storage:storage
// }).single('file');

// app.use('/profilePic',ex.static('profilePic'))



//  mongoose=require("mongoose");

// uri="mongodb+srv://anujkesharwani:pSShbNWYa96Bfnby@cluster0.1mfxwat.mongodb.net/careerbase?retryWrites=true&w=majority"
// async function run(){
//  await mongoose.connect(uri);
// }



// profileSchema=mongoose.Schema({Firstname:{type:String},Surname:{type:String},date:{type:String},month:{type:String},year:{type:String},email:{type:String},password:{type:String},gender:{type:String}});
// var profile=mongoose.model("pros",profileSchema);
// profileSchema2=mongoose.Schema({email:{type:String},post:{type:String},comment:{type:String}});
// var posts=mongoose.model("posts",profileSchema2);


// app.post("/signUp", async function (req,res) {
//         const obj = new profile({
//             Firstname:req.body.Firstname,
//             Surname:req.body.Surname,
//             date:req.body.date,
//             month:req.body.month,
//             year:req.body.year,
//             email:req.body.email,
//             password:req.body.password,
//             gender:req.body.gender
//         });
        
//         await obj.save()
//         console.log(req.body)
//     // })
    
// });


// app.post("/userlogin",function(req,res){
   
//     profile.findOne({email:req.body.email,password:req.body.password},function(err,resData){
//         if(err){
//             console.log(err)
//             res.json(err)
//         }
//         else{
//             console.log(resData)
//             res.json(resData)
//         }
       
//     });
    
// });



// app.post("/addPost",function(req,res){

//     upload(req,res,(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//         console.log(req.file)
//         }
//         d={
           
//             comment:req.body.comment,
//             post:req.file.filename
//         }
        
//         let k = new posts(d);
//         res.json(k)
//         k.save().then(console.log("justtets"));
//     })
// });

// app.get("/feed",function(req,res){
//     posts.find(function(req,data){
//         res.json(data)
//         console.log(data)
//     });
// });

// // app.post("/send",function(req,res){
// //     d={
// //         email:req.body.email,
// //         msg:req.body.msg
// //     }
// //     res.json(d)
// //     let k=new msg(d)
// //     k.save()
// // })
// // app.get("/chat",function(req,res){
// //     msg.find(function(req,data){
// //         res.json(data)
// //         console.log(data)
// //     });
// // })
// // app.post("/forget",function(req,res){
   
// //     var myquery = {email:req.body.email} && {password:req.body.oldpassword};
// //     var newvalues = { $set: {password:req.body.newpassword} };
// //     profile.updateOne(myquery,newvalues, function(err, res) {
// //         if (err) throw err;
// //         console.log("1 document updated");
// //       });
// //     })
    

// // app.post("/changepic",function(req,res){
// //     upload(req,res,(err)=>{
// //         if(err){
// //             console.log(err);
// //         }
// //         else{
// //         console.log(req.file)
// //         }
// //         res.json(req.file.filename)
        
// //     })
// // })
// run()
// app.listen(7000,function(){
//     console.log("server is running");});
//===============================




const { createClient } = require('@supabase/supabase-js')
var ex=require("express");
var app=ex()

const bodyParser =require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const cors=require("cors")
app.use(cors());

const path =require('path')

const multer = require("multer");
var upload = multer({
}).single('file');


// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"./profilePic");
//     },
//     filename:function(req,file,cb){
//         cb(null,Date.now()+path.extname(file.originalname));
//     },
// });

// var upload = multer({
//     storage:storage
// }).single('file');

app.use('/profilePic',ex.static('profilePic'))



 mongoose=require("mongoose");
 const supabase = createClient(
  "https://oealfnepepsbsdmsnqkq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lYWxmbmVwZXBzYnNkbXNucWtxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDExMzAxNSwiZXhwIjoxOTg5Njg5MDE1fQ.z0WBLNt1hrWgrAuANfZ9Ck8jqNICuQ7ptB5IVsDzMO8"
);

uri="mongodb+srv://anujkesharwani:pSShbNWYa96Bfnby@cluster0.1mfxwat.mongodb.net/careerbase?retryWrites=true&w=majority"
async function run(){
 await mongoose.connect(uri);
}



profileSchema=mongoose.Schema({Firstname:{type:String},Surname:{type:String},date:{type:String},month:{type:String},year:{type:String},email:{type:String},password:{type:String},gender:{type:String}});
var profile=mongoose.model("pros",profileSchema);
profileSchema2=mongoose.Schema({email:{type:String},post:{type:String},comment:{type:String}});
var posts=mongoose.model("posts",profileSchema2);


app.post("/signUp", async function (req,res) {

    // upload(req,res,(err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //     }
        const obj = new profile({
            Firstname:req.body.Firstname,
            Surname:req.body.Surname,
            date:req.body.date,
            month:req.body.month,
            year:req.body.year,
            email:req.body.email,
            password:req.body.password,
            gender:req.body.gender
        });
        
        await obj.save()
        console.log(req.body)
    // })
    
});


app.post("/userlogin",function(req,res){
   
    profile.findOne({email:req.body.email,password:req.body.password},function(err,resData){
        if(err){
            console.log(err)
            res.json(err)
        }
        else{
            console.log(resData)
            res.json(resData)
        }
       
    });
    
});



app.post("/addPost",upload,async function(req,res){

    // upload(req,res,(err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //     console.log(req.file)
    //     }
        
    // })
    filename=Date.now()+path.extname(req.file.originalname)
  await supabase.storage.from('files').upload(filename, req.file.buffer,{
    headers: {
      'Content-Type': req.file.mimetype,
      'Content-Length': req.file.buffer
    }})  
    const  url =  await supabase

    .storage
    .from('files')
    .getPublicUrl(filename, 60)
    d={
           
            comment:req.body.comment,
            post:filename
        }
        
        let k = new posts(d);
        res.json(k)
        k.save().then(console.log("justtets"));

});

app.get("/feed",function(req,res){
    posts.find(function(req,data){
        res.json(data)
        console.log(data)
    });
});

// app.post("/send",function(req,res){
//     d={
//         email:req.body.email,
//         msg:req.body.msg
//     }
//     res.json(d)
//     let k=new msg(d)
//     k.save()
// })
// app.get("/chat",function(req,res){
//     msg.find(function(req,data){
//         res.json(data)
//         console.log(data)
//     });
// })
// app.post("/forget",function(req,res){
   
//     var myquery = {email:req.body.email} && {password:req.body.oldpassword};
//     var newvalues = { $set: {password:req.body.newpassword} };
//     profile.updateOne(myquery,newvalues, function(err, res) {
//         if (err) throw err;
//         console.log("1 document updated");
//       });
//     })
    

// app.post("/changepic",function(req,res){
//     upload(req,res,(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//         console.log(req.file)
//         }
//         res.json(req.file.filename)
        
//     })
// })
run()
app.listen(7000,function(){
    console.log("server is running");});