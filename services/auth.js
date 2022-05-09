const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./users");
const { jwtSecret } = require("../config");
class Auth {
  async signup(data) {
    if (data.password) {
      data.password = await this.#encrypt(data.password);
    }
    const userService = new User();
    const newUser = await userService.create(data);
    if (newUser.error) {
      return newUser;
    }
    return this.#getUserData(newUser);
  }
  async login(data) {
    const { email, password } = data;
    const userService = new User();
    const user = await userService.getByEmail(email);
    // compare both passwords
    if (user && (await this.#compare(password, user.password))) {
      return this.#getUserData(user);
    }
    return {
      error: true,
      message: "Credenciales incorrectas",
    };
  }
  #getUserData(user) {
    const { password, ...userData } = user;
    const token = this.#createToken(userData);
    return {
      user: userData,
      token,
    };
  }
  #createToken(payload) {
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: 60,
    });
    return token;
  }
  async #compare(string, hash) {
    return await bcrypt.compare(string, hash);
  }
  async #encrypt(string) {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(string, salt);
      return hash;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Auth;
