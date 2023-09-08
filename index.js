import express from "express";
import bodyParser  from 'body-parser';
const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/',(req,res)=>{
    res.send("Working Fine")
})
app.post('/bfhl', (req, res) => {
    
    const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid input data. Please provide an array of numbers and alphabets.' });
  }

    let highestAlphabet = null;
  const numbers = [];
  const alphabets = new Set();

  data.forEach(item => {
    if (typeof item === 'number') {
      numbers.push(item);
    } else if (typeof item === 'string' && item.match(/[a-zA-Z]/)) {
      alphabets.add(item); // Add the alphabet to the Set without converting the case
      if (!highestAlphabet || item > highestAlphabet) {
        highestAlphabet = item;
      }
    }
  });

  return res.json({ is_success : true,user_id: "john_doe_17091999",email : "john@xyz.com",roll_number:"ABCD123",  numbers: numbers,alphabets: Array.from(alphabets),highest_alphabet: highestAlphabet });

})

app.get('/bfhl',(req,res)=>{
    res.json({operation_code:1})
})

app.listen(3000,()=>{
    console.log("Server is started.")
})