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




// const createNewFile = async () => {
//   const objFiles = await data();
//   result = objFiles.filter(({ id }) => Number(id) <= 4)
//   console.log(result)
//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(result));
// }

// createNewFile();



// const addNelsonMuntz = async () => {
//   const objFiles = await data();
//   const nelsonObj = objFiles.find(({ name }) => name === "Nelson Muntz")
//   // console.log(nelsonObj);

//   const simpsonFamilyContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
//   const simpsonFamily = JSON.parse(simpsonFamilyContent);
//   // console.log(simpsonFamily)
//   const newContent = simpsonFamily.concat(nelsonObj);
//   console.log(newContent);
//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(newContent))

// }

// addNelsonMuntz();



const replaceNelson = async () => {
  const simpsonFamilyContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonFamilyWithNelson = JSON.parse(simpsonFamilyContent);
  const simpsonFamily = simpsonFamilyWithNelson.filter((element) => element.name !== "Nelson Muntz");
  console.log(simpsonFamily)
  const completeSimpsonFamily = simpsonFamily.concat({ id: '5', name: 'Maggie Simpson' });
  console.log(completeSimpsonFamily);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(completeSimpsonFamily));
}

replaceNelson();