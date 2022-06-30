import mongoose from "mongoose";

 const  dbConnect = (url) => {
    try { 
        mongoose.Promise =  global.Promise
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Consultation database connected')
    }).catch(err => console.log(err.message))
    } catch (error) {
        console.log(`Error with hmo db [${error}]`)
    }
}
export default dbConnect;