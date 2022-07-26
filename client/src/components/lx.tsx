import React from "react";

export function Lx(props: any) {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState("");
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) return <div>Loading</div>;
  if (user === "") return <div>to Login</div>;
  return <div>User</div>;
}
