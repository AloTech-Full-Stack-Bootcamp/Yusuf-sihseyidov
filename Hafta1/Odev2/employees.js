const fs = require('fs');

// Dosya olusturmak

// fs.writeFile('employees.json', '{"name": "James", "salary": 2000}', 'utf8', (err)=>{
//     if(err) console.log(err);
//     console.log('Dosya olusturuldu');
// });


// Dosyayi Okumak

// fs.readFile('employees.json', 'utf8', (err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
//     console.log('Dosya okundu');
// });

// Dosyaya veri eklemek(ama kullanilmadi burda)

// fs.appendFile('employees.json', '\n{"name": "Ahmet", "salary": 2500}', 'utf8', (err)=>{
//     if(err) console.log(err);
//     console.log('Veri dosyaya eklendi');
// });

// Dosyadaki verinin guncellenmesi

// fs.readFile('employees.json', 'utf8', (err,jsonString)=>{
//     if(err) console.log(err);

//     try{
//         const data=JSON.parse(jsonString);
//         data.name="Ahmet";
//         data.salary= 3000;
//         jsonString=JSON.stringify(data);
//         fs.writeFile('employees.json', jsonString, (err)=>{
//             if(err) console.log(err);
//         })
//         console.log(jsonString);
//     } catch(err) {
//         console.log('Error parsing JSON string:', err)
//     }
//     // console.log(data);
//     // console.log('Dosya okundu');
// });

// Dosyanin silinmesi

// fs.unlink('employees.json', (err)=>{
//     if(err) console.log(err);
//     console.log('Dosya silindi');
// });