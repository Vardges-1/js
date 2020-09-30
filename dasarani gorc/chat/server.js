const e = require('express')
const a = e()
const p = require('body-parser')
const list = [];

a.use(e.static('.'));
a.use(p());

a.post("/message",(req,res)=>{
  if (req.body.msg)
    list.push(req.body.name + ': ' + req.body.msg);
  res.json({msgs:list});
});

a.listen(9922);
