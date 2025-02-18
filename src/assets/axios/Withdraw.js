import axios from "axios";
import { URL } from "./Base";

class Withdraw {
  headers = {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  async withdraw(network, amount, address, symbol, setDone, setloading) {
    try {
      let { data } = await axios.post(
        `${URL}/withdrawals`,
        {
          network,
          amount,
          address,
          symbol,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      if (data.error) {
        setDone([false, data.error]);
        return;
      }
      setDone([true, "Success"]);

      setTimeout(() => {
        setDone([null]);
      }, 2000);
      setloading(false);
    } catch (err) {
      setDone([false, err.response.data.error]);
      setTimeout(() => {
        setDone([null]);
      }, 2000);

      setloading(false);
    }
  }
}

const withdrawObj = new Withdraw();
export { withdrawObj };
