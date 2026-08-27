import ErrorBoundary from "./ErrorBoundary";
import { UserProfile } from "./UserProfile";

export const Profiles = () => {
  const user = {
    name: "Haris",
    age: "22",
  };
  let user1 = null;
  return (
    <>
      <ErrorBoundary>
        <UserProfile {...user} />
      </ErrorBoundary>
      <ErrorBoundary>
        <UserProfile {...user1} />
      </ErrorBoundary>
    </>
  );
};
