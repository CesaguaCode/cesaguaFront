import { useUser } from "../../../contexts/AuthContext";

const IndexPage = () => {

  const { user } = useUser();

  return (
    <div>
      <p>
        {
          JSON.stringify(user)
        }
      </p>
    </div>
  );
};

export default IndexPage;
