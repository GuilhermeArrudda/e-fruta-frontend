import { useContext, useState } from "react/cjs/react.development";
import UserContext from "../../context/UserContext";

export default function Orders() {
    const { userData } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

   
}