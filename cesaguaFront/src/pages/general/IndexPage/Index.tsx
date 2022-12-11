import { useUser } from "../../../contexts/AuthContext";

const IndexPage = () => {

  const { user, logout } = useUser();

  return (
    <div>
      <p>
        {
          JSON.stringify(user)
        }
        <button onClick={logout}>Logout</button>
      </p>
    </div>
  );
};

export default IndexPage;
