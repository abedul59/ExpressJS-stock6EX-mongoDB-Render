const express = require('express');
const mongoose = require('mongoose');
const app = express();


let connectStatus = false;

async function connectMongoDB () {
  try {
    await mongoose.connect('mongodb+srv://pyfbsdk59:NHd4ZEVmHONPZiYD@mongodb-restful.5xgpkpw.mongodb.net/?retryWrites=true&w=majority&appName=mongodb-restful')
    console.log('Connected to MongoDB...')
    connectStatus = true;
  } catch (error) {
    console.log(error)
  }
}

connectMongoDB()

app.use(express.json());

app.use((req, res, next) => {
  if (connectStatus) {
    next();
  } else {
    res.status(503).send({
      status: false,
      message: 'Server is not ready'
    });
  }
})



const s6r202403Schema = new mongoose.Schema({

  cStockID: String,
  cStockName: String,
  cNewestSeason: String,
  cNewestRev: String,
  
  cSign1: String,
  cSign2: String,
  cSign3: String,
  cSign4: String,
  cSign5: String,
  cSign6: String,
  cAverageScore: String,
  cLossGain: String,
  CreateDate: String,

  cRevN: String,
  cRev: String,
  ca1N: String,
  ca2N: String,
  ca3N: String,
  ca4N: String,
  ca5N: String, 
  ca6N: String,        
  ca7N: String,

  cna1: String,
  cna2: String,
  cna3: String,
  cna4: String,
  cna5: String,
  cna6: String, 
  cna7: String,
  cna9: String,
  cna10: String,
  cnewest_Rev_month: String,
  cluX: String,
  cnluX_MoM: String,

  cProfitN: String,
  cProfit: String,
  cb1N: String,
  cb2N: String,
  cb3N: String,
  cb4N: String,
  cb5N: String,
  cb6N: String,       
  cb7N: String,
  cb8N: String,

  cb1: String,
  cb2: String,
  cb3: String,
  cb4: String,
  cb5: String,
  cb6: String, 
  cb7: String,
  cb8: String,
  cb9: String,  
  cb10: String,
  cb10p: String,
  cInvTON: String,
  cInvTO: String,
  ce1N: String,
  ce2N: String,
  ce3N: String,
  ce4N: String,
  ce5N: String,
  ce6N: String,
  ce7N: String,
  ce8N: String,
  ce1: String,
  ce2: String,
  ce3: String,
  ce4: String,
  ce5: String,
  ce6: String,
  ce7: String,
  ce8: String,
  cnewest_Fin_Q: String,
      
  cNetIncomeN: String,
  cNetIncome: String,
  cc1N: String,
  cc2N: String,
  cc3N: String,
  cc4N: String,
  cc5N: String,
  cc6N: String,      
  cc7N: String,
  cc8N: String,
  cc1: String,
  cc2: String,
  cc3: String,
  cc4: String,
  cc5: String,
  cc6: String,        
  cc7: String, 
  cc8: String, 
  cc9: String,  
  cc10: String,
  cc11: String,
  cpc9: String, 
  cpc10: String,
  cpc11: String,

  cEPSN: String,
  cEPS: String,
  cd1N: String,
  cd2N: String,
  cd3N: String,
  cd4N: String,
  cd5N: String,
  cd6N: String,
  cd7N: String,
  cd8N: String,
  cd1: String,
  cd2: String,
  cd3: String,
  cd4: String,
  cd5: String,
  cd6: String,
  cd7: String,
  cd8: String,
     
  cCashFlowN: String,
  cCashFlow: String,
  cf1N: String,
  cf2N: String,
  cf3N: String,
  cf4N: String,
  cf5N: String,
  cf6N: String,       
  cf7N: String,
  cf8N: String,
  cf1: String,
  cf2: String,
  cf3: String,
  cf4: String,
  cf5: String,
  cf6: String,        
  cf7: String,
  cf8: String, 
  cf9: String,  
  cf10: String,
});


const S6r202403 = mongoose.model('S6r202403', s6r202403Schema);

app.get('/s6r202403', async (req, res) => {
  const s6r202403 = await S6r202403.find();
  res.send({
    status: true,
    data: s6r202403,
  });
});

app.get('/s6r202403/1101', async (req, res) => {
  const documents = await S6r202403.findOne({ cStockID: '1101' }).exec();
  res.send({
    status: true,
    data: documents,
  });
});



app.get('/s6r202403/:cStockID', async (req, res) => {
  const documents = await S6r202403.findOne({ cStockID: req.params.cStockID }).exec();
  res.send({
    status: true,
    data: documents,
  });
});


app.listen(3000)