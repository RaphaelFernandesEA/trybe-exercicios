const newEmployees = (cadastro) => {
    const employees = {
      id1: cadastro('Pedro Guerra'),
      id2: cadastro ('Luiza Drumond'),
      id3: cadastro ('Carla Paiva'),
    }
    return employees;
  };

  const cadastro = (nome) => {
    let email = nome.toLowerCase().split(' ').join('_');
    let usuario = {
        nome,
        email: `${email}@trybe.com`
    }
    return usuario
  }

console.log(newEmployees(cadastro));
