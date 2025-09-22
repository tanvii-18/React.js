import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../slices/userSlice";

function Auth() {
  const dispatch = useDispatch(fetchUsers);
  const { users, currentUsers, isLoading, error } = useSelector(
    (state) => state.users
  );
  return <div></div>;
}

export default Auth;
