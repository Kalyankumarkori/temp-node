//  const nn ="nn"
//  const sayhi =(name) => {
//     console.log(`hello ${name}`);
//  }
// const n =  require('./appn')
// const sayhi =  require('./appu')
// console.log(n);
//  sayhi("dfer")
//  sayhi(n.f)
//  sayhi (n)
// require('./appn')


// const os = require('os')
// const user = os.userInfo()
// console.log(user);
// console.log(`${os.uptime()}`);
//  const cos = {
//     n : os.type(),
//     r : os.release(),
//     t : os.totalmem(),
//     f : os.freemem()
//  }
//  console.log(cos);

// const path = require('path')
// console.log(require('path').sep);

// const fp = path.join('/sample/','test.txt')
// console.log(fp);

// const base = path.basename(fp)
// console.log(base);
// console.log(path.resolve(__dirname,'sample','test.txt'));

// const {readFileSync,writeFileSync}= require('fs')

// const f = readFileSync('./sample/test.txt','utf8')

// writeFileSync('./sample/result-sync.text',`hehdgajsgjgh : ${f}`,{flag:'a'})
// console.log(f);

// const {readFile,writeFile}= require('fs')
// console.log('s');
// readFile('./sample/test.txt','utf8',(err,result) =>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     const f = result
//     readFile('./sample/test2.txt','utf8',(err,result) =>{
//         if (err) {
//             console.log(err);
//             return
//         }
//         const s = result
//         writeFile('./sample/result-async.text',`hehdgajsgjgh : ${f},${s}`,(err,result) => {
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             console.log( 'done')
            
//         })
//     })
// })
// console.log('next');

//  const http = require('http');
//  const server = http.createServer((req,resp)=>{
//     if (req.url === '/') {
//         resp.end('dolly')
//     }
//     if (req.url === '/about') {
//         resp.end('dollyjhihxdfilhihu')
//     }
    // resp.end(`
    //     <h1>oops</h1>
    //     <p>we cant</p>
    //     <a href = "/">back home</a>
    // `)
//     console.log(req);
// resp.write('dolly')
// resp.end()
//  })
//  server.listen(5000)
const p = require('lodash')

const items = [1,[2,[3,[4]]]]
const ni = p.flattenDeep(items)
console.log(ni);