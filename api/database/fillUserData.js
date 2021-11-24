require("dotenv").config({ path: "../.env" });
const sequelize = require("../conexion");
const bcrypt = require("bcrypt");

async function createUsers() {
  const salt = await bcrypt.genSalt();

  const hashUser1 = await bcrypt.hash("abc123", salt);
  const hashUser2 = await bcrypt.hash("def456", salt);
  const hashUser3 = await bcrypt.hash("fgh789", salt);
  const hashUser4 = await bcrypt.hash("abc789", salt);
  const hashUser5 = await bcrypt.hash("def123", salt);
  const hashUser6 = await bcrypt.hash("pob456", salt);
  const hashUser7 = await bcrypt.hash("aeio56", salt);
  const hashUser8 = await bcrypt.hash("sdfw562", salt);
  const hashUser10 = await bcrypt.hash("dfse568", salt);
  const hashUser11 = await bcrypt.hash("dfwef587", salt);
  const hashUser12 = await bcrypt.hash("345abc", salt);
  const hashUser13 = await bcrypt.hash("512abc", salt);

  const users = [
    {
      Username: "pancajo",
      RoleId: 1,
      Password: hashUser1,
      FirstName: "Paola Andrea",
      LastName: "Cadena Joya",
      Email: "pancajo@mail.com",
      Address: "Carrera 1 # 2 - 3",
      Phone: "3124567890",
      Enable: 1,
    },
    {
      Username: "janedoe",
      RoleId: 2,
      Password: hashUser2,
      FirstName: "Jane",
      LastName: "Doe",
      Email: "janedoe@email.com",
      Address: "Calle 2 # 3 - 45",
      Phone: "3101234567",
      Enable: 1,
    },
    {
      Username: "laracroft",
      RoleId: 2,
      Password: hashUser3,
      FirstName: "Lara",
      LastName: "Croft",
      Email: "laracroft@gmail.com",
      Address: "Circunvalar 7 # 8 - 90",
      Phone: "3159876543",
      Enable: 1,
    },
    {
      Username: "sancho",
      RoleId: 2,
      Password: hashUser4,
      FirstName: "Carlos",
      LastName: "Sanchez",
      Email: "sancho@mail.com",
      Address: "Transversal 3 # 4 - 12",
      Phone: "3058956321",
      Enable: 1,
    },
    {
      Username: "jsmith",
      RoleId: 2,
      Password: hashUser5,
      FirstName: "John",
      LastName: "Smith",
      Email: "smithjohn@mail.com",
      Address: "Altos del Parque No. 12",
      Phone: "3019876532",
      Enable: 1,
    },
    {
      Username: "haileymar",
      RoleId: 2,
      Password: hashUser6,
      FirstName: "Hailey",
      LastName: "Marshall",
      Email: "haileymar@mail.com",
      Address: "Rincón del Prado No. 20",
      Phone: "3142356987",
      Enable: 1,
    },
    {
      Username: "davina_c",
      RoleId: 2,
      Password: hashUser7,
      FirstName: "Davina",
      LastName: "Claire",
      Email: "davina_c@mail.com",
      Address: "Carrera 35 # 29 - 13",
      Phone: "3186549876",
      Enable: 0,
    },
    {
      Username: "mrmikaelson",
      RoleId: 2,
      Password: hashUser8,
      FirstName: "Kol",
      LastName: "Mikaelson",
      Email: "mikaelsonkol@mail.com",
      Address: "Luxury Village Casa 10",
      Phone: "3002658975",
      Enable: 1,
    },
    {
      Username: "mercury_fred",
      RoleId: 1,
      Password: hashUser10,
      FirstName: "Freddie",
      LastName: "Mercury",
      Email: "mercury_fred@mail.com",
      Address: "Calle 41 # 46 - 45",
      Phone: "3035689512",
      Enable: 1,
    },
    {
      Username: "shakespeare1",
      RoleId: 2,
      Password: hashUser11,
      FirstName: "William",
      LastName: "Shakespeare",
      Email: "willshake@mail.com",
      Address: "Carrera 45 # 6 - 78",
      Phone: "3145698745",
      Enable: 1,
    },
    {
      Username: "elraton",
      RoleId: 2,
      Password: hashUser12,
      FirstName: "Mickey",
      LastName: "Mouse",
      Email: "mouse@mail.com",
      Address: "Transversal 7 # 13-45 Apto 901",
      Phone: "3059975528",
      Enable: 1,
    },
    {
      Username: "goku",
      RoleId: 2,
      Password: hashUser13,
      FirstName: "Goku",
      LastName: "Kakaroto",
      Email: "sayayin@mail.com",
      Address: "Universo No. 7 - KameHouse",
      Phone: "3019876652",
      Enable: 1,
    },
    {
      Username: "Freya22",
      RoleId: 2,
      Password: hashUser13,
      FirstName: "Freya",
      LastName: "Mickaelson",
      Email: "freya22@mail.com",
      Address: "en un bonito lugar de la cuadra",
      Phone: "301987131",
      Enable: 1,
    },
  ];

  try {
    users.forEach(async (user) => {
      await sequelize.query(
        "INSERT INTO User (Username, RoleId, Password, FirstName, LastName, Email, Address, Phone, Enable) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        {
          replacements: [
            `${user.Username}`,
            user.RoleId,
            `${user.Password}`,
            `${user.FirstName}`,
            `${user.LastName}`,
            `${user.Email}`,
            `${user.Address}`,
            `${user.Phone}`,
            user.Enable,
          ],
          type: sequelize.QueryTypes.INSERT,
        }
      );
    });
  } catch (error) {
    console.log(`there was an error creating the user record: ${error}`);
  }
}

createUsers();
