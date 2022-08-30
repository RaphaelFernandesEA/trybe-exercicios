const fs = require('fs').promises;
const readLine = require('readline-sync');

const data = async () => {
  const jsonData = await fs.readFile('./simpsons.json', 'utf-8');
  const result = JSON.parse(jsonData);
  return result;
}

// const AllNames = async () => {
//   const objFiles = await data()
//   objFiles.map((charac) => {
//     console.log(`${charac.id} - ${charac.name}`)
//   })
// }
// AllNames()



// const findById = async (param) => {
//   const objFiles = await data();
//   // console.log(objFiles)
//   const result = objFiles.find(({ id }) => Number(id) === param)
//   if(!result) {
//     throw new Error("id não encontrado")
//   }
//   return console.log(result)
// }

//   const id = readLine.questionInt("Digite um número ID: ")

// try {
//   findById(id)
// } catch {
//   console.log(e.message)
// }



// const removeCharacters = async () => {
//   const result = await data();
//   // console.log(result);
//   const newFile = result.filter(({ id }) => Number(id) !== 6 && Number(id) !== 10);
//   console.log(newFile);
//   return newFile
// }

// const reWriteFile = async () => {
//   const newText = await removeCharacters();

//   await fs.writeFile("./simpsons.json", JSON.stringify(newText))
// }

// reWriteFile()


